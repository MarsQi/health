import share_a from '@/assets/img/share_a.png';
import relavanceImg from '@/assets/img/yiliao-2.png';
import axios from '@/axios.js';
import bus from '@/bus.js';
export default {
    data() {
        return {
            resdata: [],
            share_a: share_a,
            relavanceImg
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
                dbObject.select(4); //1为你自己添加的k
            }, 1000)
            bus.$on('search', function(data) {
                that.resdata = data.data
            })
        }
        //超出文本隐藏
        var con = document.getElementsByClassName('con_foot_detail');
        for (var i = 0; i < con.length; i++) {
            $clamp(con[i], { clamp: 2, useNativeClamp: false });
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISO";
            dbParams.db_store_name = "relevance";
            dbObject.init(dbParams);
        },
        ajaxData() {
            axios.get('/article/getDataByPage?type=4')
                .then(res => {
                    if (res.status === 200) {
                        this.resdata = res.data.data;
                        dbObject.put({ data: this.resdata }, 4); //eg
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        enteritem(index, item) {
            this.$router.push({ path: '/detail', query: { id: item.id, callback: true } })
        },
        share() {
            // alert("分享")
        }
    },
    watch: { //监听
        $route(to, from) { //检测路由变化

        },
    }
}