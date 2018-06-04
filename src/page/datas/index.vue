<template>
  <div class="datas">
    <div class="item" v-for="(item,index) in data" :key="index">
      <div class="tit">
        <div class="left">
          <div class="title">
            {{item.times}}
          </div>
        </div>
      </div>
      <!--轮播 -->
      <!-- Swiper -->
      <div class="swiper-container swiper-containerOne">
        <div class="swiper-wrapper">
          <div class="swiper-slide" v-for="(itemImg, indexs) in item.itemImg" :key="indexs" @click="showImg(itemImg)">
            <img class="lunboimg" :src="itemImg.imgURL" alt="图片轮播">
            <p>图片编码：{{itemImg.id}}</p>
          </div>
        </div>
        <!--滚动轴-->
        <div class="swiper-scrollbar"></div>
      </div>
    </div>
    <!--描述-->
    <!--<div class='data_detail'>本次扫描图片共20张，以下是选择判读的影像</div>-->
    <!--轮播结束 -->
    <!--<div class="charttop">
      <div class="main">
        <div class="itembox" v-for="(item,index) in itemdata" :key="index" @click="showdetail">
          <div class="imgbox">
            <img :src="item.img" alt="" />
          </div>
        </div>
      </div>
    </div>-->
    <div class="chooseExploreImg" v-if="chooseFlag" @click="closeChoose">
      <div class="img">
        <p class="title">图片编码：{{code}}</p>
        <img :src="chooseImg" alt="img">
        <button @click.stop="addExplore">判读</button>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped="scoped" src="./index.less" lang="less"></style>
