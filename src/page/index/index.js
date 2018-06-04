import initcordova from '@/plugins/initCordova'
export default {
    data() {
        return {
            index: ''
        }
    },
    mounted() {
        let liWidth = $('.tab_ul li').width();
        let kongWidth = $('.kong').width();
        $('.tab_ul li').click(function() {
            let index = $(this).index()
            $('.kong').animate({
                left: index * liWidth + (liWidth - kongWidth) / 2
            }, 100);
        });
        let index = $('.tab_ul li.router-link-exact-active').prevAll().length;
        $('.kong').animate({
            left: index * liWidth + (liWidth - kongWidth) / 2
        }, 100);
        this.getCid();
    },
    methods: {
        getCid() {
            let that = this;
            cordova.exec((function(data) {
                    that.axios.get(`user/saveCid?cid=${data}`)
                        .then(res => {
                            console.log(res)
                        })
                        .catch(err => {
                            console.log(err)
                        })
                    return data;
                }), (function(err) {
                    console.log(err);
                }),
                'CommonPlugin', 'getClientId', ['', '', '']
            );
        }
    },
    watch: {
        $route(to, from) {
            setTimeout(() => {
                let liWidth = $('.tab_ul li').width();
                let kongWidth = $('.kong').width();
                let index = $('.tab_ul li.router-link-exact-active').prevAll().length;
                $('.kong').animate({
                    left: index * liWidth + (liWidth - kongWidth) / 2
                }, 100);
            }, 0);
        }
    },
}