import axios from '@/axios.js'
import share_a from '@/assets/img/share_a.png';
import img from '@/assets/img/Carousel/01.jpg';
import bus from '@/bus.js'
export default {
    data() {
        return { //分享icon
            share_a: share_a,
            data: [],
            imge: ''
        }
    },
    components: {

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
                dbObject.select(2); //为你自己添加的k
            }, 1000)
            bus.$on('search', function(data) {
                that.data = data.data
            })
        }
        if (sessionStorage.getItem('exploreImg') !== null) {
            this.imge = sessionStorage.getItem('exploreImg')
        } else {
            this.imge = img
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISO";
            dbParams.db_store_name = "explore";
            dbObject.init(dbParams);
        },
        ajaxData() {
            axios.get('/article/getDataByPage?type=2').then(res => {
                this.data = res.data.data;
                dbObject.put({ data: this.data }, 2); //eg
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
            });
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
                "title": '病情判读',
                "content": item.remark,
                "url": 'http://suneee.dcp.weilian.cn/health/index.html#/detail?id=' + item.id + "&callback=" + false,
                "imageurl": item.imge ? 'http://suneee.dcp.weilian.cn/health' + item.imge : ""
            };
            let url = null;
            let className = null;
            this.SharePlugins(className, url, opts);
        },
    }
}