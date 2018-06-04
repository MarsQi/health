class VideoCall {
    constructor(selfId){
        this.selfId = selfId;
        this.active = false;
        this.to = null;
        this.media = null;
        this.room = null;
        return this;
    }
    setVue($vue){
        console.log($vue)
        this.$vue = $vue
    }
    startCall(param){
        if(this.active){
            this.$vue('您当前已经在进行通话');return;
        }
        if(param.to == this.selfId){
            this.$vue('无法与自己进行通话');return;
        }
        this.active = true;
        this.to = param.to;
        // this.to = '10000000050451';
        this.toname = param.toUsername;
        this.toavator = param.toAvator;
        this.media = param.media;
        this.room = this.selfId +''+ this.to;
        this.$webSocket.send(this.to, {'from':this.selfId,'fromname':this.username,'fromavator':this.avatarurl,'to':this.to, 'vcType':this.media, 'roomid':this.room },'remoteCall');
        this.WebRtcPlugin('webRtc'+this.GetSWVideoParam(this.room,3))
    }
    JoinCall(msg){
        this.$webSocket.send(this.to, {'from':this.selfId,'to':this.to, 'vcType':this.media, 'roomid':this.room, 'rejectmsg':msg },'remoteJoin');
    }
    remoteJoin(data){
        if(!!this.active){
            if(data.rejectmsg!=''){
                console.info('收到的否定消息为',data.rejectmsg)
                console.log('被通知挂断的时间',new Date())
                this.$vue(data.rejectmsg);
                this.active = false
                console.log('当前挂断时间')
                this.WebRtcPlugin('webRtc'+this.GetSWVideoParam(this.room,2))

            }else{
                console.log("对方接受您的邀请")
                this.WebRtcPlugin('webRtc'+this.GetSWVideoParam(this.room,this.media))
            }
        }
    }
    remoteCall(data){
        if(!this.active){
            this.to = data.from
            this.media = data.vcType
            this.room = data.roomid
            this.active = true
            this.toname = data.fromname
            this.toavator = data.fromavator
            this.WebRtcPlugin('webRtc'+this.GetSWVideoParam(this.room,4))
        }else if(this.active==false){
            this.JoinCall('您拨打的用户忙')
            return
        }
    }
    registSocketFun(type){
        if(typeof this[type]=='function'){
            this.$webSocket.on(type, this[type].bind(this));
        }
    }
    destorySocketFun(type){
        if(typeof this[type]=='function'){
            this.$webSocket.off(type, this[type].bind(this));
        }
    }
    GetSWVideoParam(room_id,vc_type){
        let vc_num;
        if(typeof vc_type == 'number'){
            vc_num = vc_type
        }else{
            if(vc_type.video== true){
                vc_num = 1
            }else{
                if(vc_type.audio == true){
                    vc_num = 0
                }
            }
        }
        let param_string = '{"created_roomid":"' + room_id + '","av_type": "' + vc_num + '","room_name":"'+this.toname+'","userlist":[{"avatar":"'+this.toavator+'","name":"'+this.toname+'"}]}'
        console.log(param_string)
        return param_string
    }
    WebRtcPlugin(url,opts, className){
        var paramobj = JSON.parse(url.replace('webRtc',''))
		var that = this;
        cordova.exec((()=>{
            if(paramobj["av_type"] == "4"){
                that.JoinCall('')
                that.active = true;
                that.WebRtcPlugin('webRtc'+this.GetSWVideoParam(this.room,this.media))
            }else if(paramobj["av_type"] == "3"){
                console.log("等待接听中")
            }else if(paramobj["av_type"] == "2"){
                console.log('已经挂断')
                that.active = false
            }
        }),((e)=>{
            console.log('Error: ' + e)
            if(e=='JSON error'){return}
            if(paramobj["av_type"] == "4"){
                console.log("对方拒绝您的邀请")
                that.JoinCall('对方拒绝您的邀请')
                that.active = false
            }else if(paramobj["av_type"] == "3"){
                that.JoinCall('对方取消邀请')
                that.active = false
            }else if(paramobj["av_type"] == "2"){
                that.active = false
            }else if(paramobj["av_type"] == "0" || paramobj["av_type"] == "1"){
                that.JoinCall('对方已挂断')
                console.log('自己挂断的')
                that.active = false
            }
        }), 'WebRtcPlugin', 'start', [className, url, opts || {}])
    }
    setws(ws){
        this.$webSocket = ws
    }
    setName(name){
        this.username = name
    }
    setAvator(avatarurl){
        this.avatarurl = avatarurl
    }
}

class getUser{
    constructor(){
        this.callMap={};
    }
    get(userid){
       if(!this.callMap[userid]){
          this.callMap[userid] = new VideoCall(userid)
       }
       return this.callMap[userid]
    }
}

var getUserCall = new getUser()
export default getUserCall