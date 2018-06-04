import share_a from '@/assets/img/share_a.png';
import discernImg from '@/assets/img/discern.png';
import axios from '@/axios.js';
import bus from '@/bus.js';
export default {
    data() {
        return {
            //分享icon
            share_a: share_a,
            dataList: [],
            discernImg
        }
    },
    beforeMount() {
        this.indexDBinit();
    },
    mounted() {
        if (navigator.onLine) {
            //执行在线状态时的任务
            this.ajaxData();
        } else {
            //执行离线状态时的任务
            let that = this;
            setTimeout(function() {
                dbObject.select(3); //1为你自己添加的k
            }, 1000)
            bus.$on('search', function(data) {
                that.dataList = data.data;
            })
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISO";
            dbParams.db_store_name = "discern";
            dbObject.init(dbParams);
        },
        /*分享调取*/
        SharePlugins(className, url, opts) {
            cordova.exec(
                function(request) {},
                function(e) {
                    // alert(e);
                },
                "SharePlugin", "start", [className, url, opts]
            );
        },
        //分享
        share(item) {
            let opts = {
                "title": item.title,
                "content": item.remark,
                "url": 'http://suneee.dcp.weilian.cn/health/index.html#/detail?id=' + item.id + "&callback=" + false,
                "imageurl": item.imge ? 'http://suneee.dcp.weilian.cn/health' + item.imge : ""
            };
            let url = null;
            let className = null;
            this.SharePlugins(className, url, opts);
        },
        //跳入详情
        goRouter(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: item.id,
                    callback: true
                }
            })
        },
        //获取数据
        ajaxData() {
            axios.get('/article/getDataByPage?type=3').then(res => {
                // let dataList = res.data.data;
                // let that = this;
                // for (var i in dataList) {
                //     console.log(dataList[i].imge.split(",")[i])
                //     dataList[i].imge = that.img2base64(dataList[i].imge.split(",")[i]);
                //     console.log(dataList[i].imge)
                // }
                // this.dataList = dataList;
                this.dataList = res.data.data;
                dbObject.put({ data: this.dataList }, 3); //eg
                this.$nextTick(function() {
                    //dom已更新

                    var con = document.getElementsByClassName('engine-state-content-con');
                    for (var i = 0; i < con.length; i++) {
                        $clamp(con[i], {
                            clamp: 2,
                            useNativeClamp: false
                        });
                    }
                })
            })
        },
    }
}