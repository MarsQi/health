import share_a from '@/assets/img/share_a.png';
import axios from '@/axios.js';
import bus from '@/bus.js'
export default {
    data() {
        return {
            //分享icon
            share_a: share_a,
            data: "",
            flag: false
        }
    },
    beforeMount() {
        this.indexDBinit();
        this.flag = this.$route.query.callback === true ? true : false;
    },
    mounted() {
        if (navigator.onLine) {
            //执行在线状态时的任务
            this.ajaxData();
        } else {
            //执行离线状态时的任务
            let that = this;
            setTimeout(function() {
                dbObject.select(Number(that.$route.query.id)); //1为你自己添加的k
            }, 1000)
            bus.$on('search', function(data) {
                that.data = data.content
            })
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISO";
            dbParams.db_store_name = "healthDetails";
            dbObject.init(dbParams);
        },
        //获取URL中的参数
        getUrlParam(name) {
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$|#)");
            var r = window.location.search.substr(1).match(reg);
            if (r != null) return decodeURIComponent(r[2].split("#")[0]);
            return null;
        },
        //返回按钮
        callBack() {
            this.$router.back(-1)
        },
        //分享
        share() {
            // alert('分享' + this.$route.query.id)
        },
        ajaxData() {
            axios.get('/article/details?id=' + this.$route.query.id)
                .then(res => {
                    this.data = res.data.data.content;
                    dbObject.put({ content: this.data }, Number(this.$route.query.id)); //eg
                })
                .catch(erro => {
                    console.log(erro)
                })
        }
    }
}