<template>
	<div class="detail">
		<!--<header>
		<div class="left">
		  <span class="span1" @click="back"><i class="iconfont icon-fanhui"></i></span>
			<span>详情</span>
		</div>
		<div class="rig" @click="shareitem">
		<img :src="shareimg" alt="" />
		</div>
		</header>-->
		<!-- 详情返回 -->
    <button class="callbacks" @click="back">返回</button>
		<div class="mainc">
			<div class="topimg">
				<img :src="imgurl" alt="" />
			</div>
			<div class="bot">
				<div class="tit">
					{{name}}
				</div>
				<div class="desc">
					<div class="inner">
						<div class="title">
							产品介绍：
						</div>
						<div class="textdes">
							<div class="itemsb" v-for="(item,index) in introduce">
								<div class="title1">
									{{item.title}}
								</div>
								<li v-for="item1 in item.lidata">
									<span>·</span>{{item1}}
								</li>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import ylfx from '@/assets/img/ylfx_03.png';
	import share_b1 from '@/assets/img/share_a.png';
	export default {
		data() {
			return {
				shareimg:share_b1,
        imgurl:ylfx,
        name:'ScintCare CT64/128',
        introduce:[{
        	title:'高性能成像系统',
        lidata:['64/128层的Z轴飞焦点技术，保证高空间分辨率','256通道A/D ASIC技术，降噪声模式的心脏采集','集成在探测器模块内的高精准防散射栅格']
        },
        {
        	title:'高性能成像系统',
        lidata:['40mm覆盖，64或128层的模式','高稳定性，更长的校正周期','简洁明了的用户界面']
        }
        ]
			}
		},
		methods: {
     back(){
     	this.$router.push({
     		path:'/'
     	})
     },
     shareCordova(params) {
			let that = this;
			cordova.require('cordova/channel').onCordovaReady
				.subscribe(function() {
					// 在安卓 进入后 在注册这个方法的时候 和安坐那边就已经调用这个方法了；
					cordova.exec(null, null, 'SharePlugin',
						'start', [params]
					);
					that.SharePlugin('start', '');
				});
		},
		shareitem(){
			alert('我是分享链接')
			//   this.shareCordova(JSON.stringify({
			//     content: "\U6b63\U6cf0\U5546\U57ce\U5206\U4eab\U6709\U793c\U6d3b\U52a8",
			//     imageurl: "",
			//     title: "\U6b63\U6cf0\U5546\U57ce\U5206\U4eab\U6709\U793c\U6d3b\U52a8",
			//     url: "http://ep.mall.weilian.cn?addcodovar=1"
			// }))
		}
		}
	}
</script>

<style lang="less" scoped>
	.detail {
		width: 750/75rem;
		height: 100%;
		background-color: rgb(246,246,246);
		header{
			height: 85/75rem;
			background: white;
			.left{
				float: left;
				line-height: 85/75rem;
				color: rgb(112,112,112);
				span{
					font-size: 0.42666667rem;
				}
				.span1{
					display: block;
					float: left;
					text-align: center;					
					width: 78/75rem;									
					margin-right: 35/75rem;					
				}
			}
			.rig{
				float: right;
				line-height: 85/75rem;
				width: 73/75rem;
				height: 100%;
				img{
					display: block;
					width: 9/75rem;
					height: 36/75rem;
					margin: auto;
					position: relative;
					top: 50%;
					margin-top: -18/75rem;
				}
			}
		}
		.callbacks{
			position: fixed;
			top: 30/75rem;
			right: 30/75rem;
			z-index: 999;
			padding: 10/75rem 22/75rem;
			margin: 0;
			height: 54/75rem;
			border: none;
			border-radius: 25/75rem;
			font-size: 26/75rem;
			color: #fff;
			background-color:rgb( 121, 121, 121);
			text-align: center;
			cursor: pointer;
		}
		.callbacks:focus {
			outline: none;
		}
		.mainc{
			/*height: 400px;*/
			background-color: rgb(246,246,246);
			.topimg{
				width: 604/75rem;
				height: 431/75rem;
				/*background: red;*/
				margin: 0 auto;
				img{
					width: 100%;
					height: 100%;
				}
			}
			.bot{				
				.tit{
					height: 96/75rem;
					/*background: yellow;*/
					line-height: 96/75rem;
					font-size: 30/75rem;
					font-weight: 600;	
					padding-left: 75/75rem;
				  padding-right: 75/75rem;				
				}
				.desc{
					.inner{
						font-family: "微软雅黑";
						min-height: 449/75rem;
						padding-top: 60/75rem;
						/*background: red;*/
						width: 604/75rem;
						margin: 0 auto;
						border-top: 1px dashed #ccc;
						.title{
							font-size: 30/75rem;
							color: rgb(5,165,236);
							font-weight: 500;
							margin-bottom: 11/75rem;
						}
						.textdes{
							.itemsb{
								margin-top: 27/75rem;
								li{
									list-style: none;
									color: rgb(144,109,97);
									margin-top: 20/75rem;
									span{
										margin-right: 11/75rem;
										font-size: 10/75rem;
									}
								}
								.title1{
									height: 22/75rem;
									font-size: 22/75rem;
									line-height: 22/75rem;
									color: rgb(102,93,143);
									font-weight: bold;
								}
							}
						}
					}
				}
			}
		}
	}
</style>