<template>
<!-- 知识模块 -->
  <div class="gather-control">
  <!-- 渲染dom后台返回数据 -->
    <div v-for="(item,index) in resdata" :key="index" class="gather-control-con" @click="enteritem(item)">
      <p class="gather-title" v-cloak>{{item.title}}</p>
      <div class="item ">
        <div class="item-img">
          <img :src="index === 0 ? timgOne : timgTwo" alt="img">
        </div>
        <div class="item-detail">
          <p class="item-detail-con" v-cloak>{{item.remark}}</p>
          <div class="shares" @click.stop="share(item)"><img :src="share_a" alt="分享"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.css" scoped></style>