<template>
<!-- 详情 -->
  <div class="discern-details-control">
  <!-- 详情标题
    <div class="discern-details-control-tip">
      <div class="icon_left">
          <i class="iconfont icon-fanhui" @click="callBack"></i>
        </div>
        <div class="title">{{title}}</div>
        <div class="icon_right">
          <img :src="share_a" alt="分享" @click="share">
        </div>
    </div> -->
    <!-- 详情返回 -->
    <button class="callbacks" v-if="flag" @click="callBack">返回</button>
    <!-- 详情具体内容 -->
    <div class="discern-details-control-content" v-html="data"></div>
  </div>
</template>

<script src="./index.js"></script>

<style src="./index.css" scoped></style>