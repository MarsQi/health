import share_a from '@/assets/img/share_a.png';
import timgOne from '@/assets/img/timg-1.jpg';
import timgTwo from '@/assets/img/timg-2.jpg';
import axios from '@/axios.js';
import bus from '@/bus.js';
export default {
    data() {
        return {
            resdata: [],
            share_a: share_a,
            timgOne,
            timgTwo
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
                dbObject.select(5); //1为你自己添加的k
            }, 1000)
            bus.$on('search', function(data) {
                that.resdata = data.data
            })
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISO";
            dbParams.db_store_name = "gather";
            dbObject.init(dbParams);
        },
        ajaxData() {
            axios.get('/article/getDataByPage?type=5')
                .then(res => {
                    if (res.status === 200) {
                        this.resdata = res.data.data;
                        dbObject.put({ data: this.resdata }, 5); //eg
                    }
                })
                .catch(err => {
                    console.log(err)
                })
        },
        enteritem(item) {
            this.$router.push({
                path: '/detail',
                query: {
                    id: item.id,
                    callback: true
                }
            })
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
    },
    watch: { //监听
        $route(to, from) { //检测路由变化

        },
    }
}