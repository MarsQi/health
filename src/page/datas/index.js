//引入第三方插件及其css
import '../../../static/swiper.min.css'
import '../../../static/swiper.min.js'
//图片：轮播图片
import imgZero from '@/assets/img/Carousel/01.jpg';
import imgOne from '@/assets/img/Carousel/02.jpg';
import imgTwo from '@/assets/img/Carousel/03.jpg';
import imgThree from '@/assets/img/Carousel/04.jpg';
import imgFour from '@/assets/img/Carousel/05.jpg';

import bgimg from '@/assets/img/yximg_03.png'
import share_b1 from '@/assets/img/share_a.png'
export default {
    data() {
        return {
            Carousel: '',
            CarouselImg: [{
                url: imgZero
            }, {
                url: imgOne
            }, {
                url: imgTwo
            }, {
                url: imgThree
            }, {
                url: imgFour
            }],
            //分页页码器长度及其当前下标
            activeindex: 1,
            indextotal: 0,
            imgurl: bgimg,
            shareimg: share_b1,
            flag: false,
            itemdata: [{
                img: bgimg
            }],
            data: [{
                times: "2017年09月14日",
                itemImg: [{
                    id: '01',
                    imgURL: imgZero
                }, {
                    id: '02',
                    imgURL: imgOne
                }, {
                    id: '03',
                    imgURL: imgTwo
                }, {
                    id: '04',
                    imgURL: imgThree
                }, {
                    id: '05',
                    imgURL: imgFour
                }, {
                    id: '07',
                    imgURL: imgZero
                }, {
                    id: '08',
                    imgURL: imgOne
                }, {
                    id: '09',
                    imgURL: imgTwo
                }, {
                    id: '10',
                    imgURL: imgThree
                }, {
                    id: '11',
                    imgURL: imgFour
                }, {
                    id: '12',
                    imgURL: imgOne
                }, {
                    id: '13',
                    imgURL: imgTwo
                }, {
                    id: '14',
                    imgURL: imgThree
                }, {
                    id: '15',
                    imgURL: imgFour
                }]
            }, {
                times: "2017年09月13日",
                itemImg: [{
                    id: '16',
                    imgURL: imgZero
                }, {
                    id: '17',
                    imgURL: imgOne
                }, {
                    id: '18',
                    imgURL: imgTwo
                }, {
                    id: '19',
                    imgURL: imgThree
                }, {
                    id: '20',
                    imgURL: imgFour
                }, {
                    id: '21',
                    imgURL: imgZero
                }, {
                    id: '22',
                    imgURL: imgOne
                }, {
                    id: '23',
                    imgURL: imgTwo
                }, {
                    id: '24',
                    imgURL: imgThree
                }, {
                    id: '25',
                    imgURL: imgFour
                }, {
                    id: '26',
                    imgURL: imgOne
                }, {
                    id: '27',
                    imgURL: imgTwo
                }, {
                    id: '28',
                    imgURL: imgThree
                }, {
                    id: '29',
                    imgURL: imgFour
                }]
            }, {
                times: "2017年09月12日",
                itemImg: [{
                    id: '30',
                    imgURL: imgZero
                }, {
                    id: '31',
                    imgURL: imgOne
                }, {
                    id: '32',
                    imgURL: imgTwo
                }, {
                    id: '33',
                    imgURL: imgThree
                }, {
                    id: '34',
                    imgURL: imgFour
                }, {
                    id: '35',
                    imgURL: imgZero
                }, {
                    id: '36',
                    imgURL: imgOne
                }, {
                    id: '37',
                    imgURL: imgTwo
                }, {
                    id: '38',
                    imgURL: imgThree
                }, {
                    id: '39',
                    imgURL: imgFour
                }, {
                    id: '40',
                    imgURL: imgOne
                }, {
                    id: '41',
                    imgURL: imgTwo
                }, {
                    id: '42',
                    imgURL: imgThree
                }, {
                    id: '43',
                    imgURL: imgFour
                }]
            }],
            chooseImg: imgFour,
            code: '',
            chooseFlag: false,
            chooseItem: {}
        }
    },
    methods: {
        indexDBinit() {
            var dbParams = new Object();
            dbParams.db_name = "SISO";
            dbParams.db_version = 1;
            dbObject.init(dbParams);
        },
        //轮播配置
        setswiper() {
            let that = this;
            var swiper = new Swiper('.swiper-containerOne', {
                direction: 'horizontal',
                // loop: true,
                // autoplay: 3000,
                speed: 200,
                autoplayDisableOnInteraction: false,
                touchRatio: 1,
                slidesPerView: 3,
            });
            // swiper.slideTo(0, 1000, false);
        },
        showImg(itemImg) {
            this.chooseItem = itemImg;
            this.chooseFlag = !this.chooseFlag;
            this.code = itemImg.id;
            this.chooseImg = itemImg.imgURL;
        },
        closeChoose() {
            this.chooseFlag = false;
        },
        addExplore() {
            this.chooseFlag = false;
            sessionStorage.setItem('exploreImg', this.chooseItem.imgURL)
        },
        showdetail() {
            this.$router.push({
                path: '/data_detail'
            })
        },
        getNowFormatDate() {
            var date = new Date();
            var seperator1 = "-";
            var seperator2 = ":";
            var month = date.getMonth() + 1;
            var strDate = date.getDate();
            if (month >= 1 && month <= 9) {
                month = "0" + month;
            }
            if (strDate >= 0 && strDate <= 9) {
                strDate = "0" + strDate;
            }
            var currentdate = date.getFullYear() + '年' + month + '月' + strDate + '日';
            return currentdate;
        }

    },
    mounted() {
        this.setswiper();
        this.indexDBinit();
    }
}