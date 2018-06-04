<template>
  <div class='explore'>
  <div class='titTop'>
    <span class='span1'>病情判读</span>
  </div>
    <div class='topEcharts'>
      <div class="echart1" v-for="(item,index) in data" :key="index">
        <!--标题-->
        <div class='title'>
          <!--图片-->
          <div class='box'><img class='picture' :src="imge" alt="img"></div>
          <p class='titBot'>
            病情标记分析
          </p>
          <div class='bbbbbbbbbbbbbbbbbbbbbbbbbbbbbb'>
            <div class='content'>
              <p>
                <span>患者姓名：杨伟</span><span>性别：女</span><span>年龄：37</span><span>科别：口腔颌面外科</span><span>放射学检查号码：1644161</span>
              </p>
              <p>
                <span>门诊号：Y0789305</span><span>住院号：</span><span>病室：</span><span>病床：</span>
              </p>
              <p>
                <span>临床诊断：待查</span><span>送检医师的要求：颌面部CT增强</span>
              </p>
              <p>
                <span>检查部位和名称：颌面部CT增强</span>
              </p>
              <p>
                <span>检查方法：横断平扫+加强（iv：300造影剂100ml，v：2.5ml/s），层厚5mm，冠状重建</span>
              </p>
              <p>
                <span>放射学表现：<b>口底癌术后，术区部分正常组织缺失，术区软组织增厚，C-：40HU，C+：65HU，增强扫描可见不均匀强化。下颌骨残端骨质未见明显破坏，双侧颈部未见明显肿大淋巴结。</b></span>
              </p>
              <p>
                <span>书写医生：周文静</span><span>审核医生：石慧敏</span>
              </p>
              <p>
                <span>检查时间：2017-09-14 09:49:10</span>
                <span>报告书写时间：2017-09-14 10:08:04</span>
                <span>报告审核时间：2017-09-14 13:04:01</span>
              </p>
            </div>
          </div>
          <!--<img class='picture2' :src="item.imge.split(',')[1]" alt="img">-->
        </div>
        <!--简介分享-->
        <div class='share'>
            <!--<p class='span1' @click="goRouter(item.id)">{{item.remark}}</p>
            <span class='span2'><img src="../../assets/img/share_a.png" alt="分享"  height='16px' @click='share'></span>-->
            <div class="shares" @click.stop="share(item)"><img :src="share_a" alt="分享"></div>
            <p class="engine-state-content-con" v-cloak>{{item.remark}}</p>
          </div>
      </div>
    </div>
  </div>
</template>
<script src="./index.js"></script>
<style scoped src="./index.css"></style>

