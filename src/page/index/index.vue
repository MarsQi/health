<template>
  <div class="index_content">
      <div class="nav_box">
        <!-- <div class="title_box">
        <div class="icon_left">
          <i class="iconfont icon-fanhui"></i>
        </div>
        <div class="title">
          数理医疗
        </div>
        <div class="icon_right">
          <i class="iconfont icon-tubiao111"></i>
        </div>
      </div> -->
      <div class="tab_box">
        <ul class="tab_ul">
          <router-link to="/" tag="li">影像</router-link>
          <router-link to="/explore" tag="li">判读</router-link>
          <router-link to="/discern" tag="li">诊断</router-link>
          <router-link to="/relevance" tag="li">治疗</router-link>
          <router-link to="/gather" tag="li">知识</router-link>
        </ul>
        <div class="kong"></div>
      </div>
      </div>
      <div class="content_box">
        <router-view></router-view>
      </div>
  </div>
</template>
<script src="./index.js"></script>
<style src="./index.css" scoped></style>

