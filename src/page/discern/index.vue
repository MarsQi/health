<template>
  <div class="discern clearfix">
  <!-- 诊断 -->
    <div class="discern-control">
    <!-- 渲染dom后台返回数据 -->
      <div v-for="(item,index) in dataList" :key="index" class="row engine-state" @click="goRouter(item)">
        <p class="discern-title" v-cloak>{{item.title}}</p>
        <div class="item">
          <div class="item-img">
            <img :src="discernImg" alt="img">
          </div>
          <div class="item-form">
            <p class="form-title">诊断书</p>
            <div>
              <p><span>患者姓名：杨伟</span><span>性别：女</span><span>年龄：37</span><span>科别：口腔颌面外科</span><span>放射学检查号码：1644161</span></p>
              <p><span>门诊号：Y0789305</span><span>住院号：</span><span>病室：</span><span>病床：</span><span>病史：</span><span>有</span></p>
              <p><span>病情：乳腺癌晚期</span></p>
              <p><span>症状：1. 肿块：（恶性）</span></p>
              <p><span>2. 疼痛：确认为晚期癌症</span></p>
              <p><span>3. 溃疡：乳房多处出现口样溃疡，分泌血性分泌物</span></p>
              <p><span>治疗方法：中医疗程加上放射疗程</span></p>
              <p><span>注意：</span></p>
              <p><span>1. 饮食清淡，营养均衡，经常运动，不吸烟，不喝酒，不熬夜，注意养成良好的生活习惯。</span></p>
              <p><span>2. 多吃新鲜黄绿色蔬菜和水果（每日300~500克），低盐（每日5~10克），不吃或少吃腌制或发霉食品。</span></p>
              <p class="discern-time">2017-9-15<br/>主治医生：石慧敏</p>
            </div>
          </div>
          <div class="item-detail">
            <div class="shares" @click.stop="share(item)"><img :src="share_a" alt="分享"></div>
            <p class="engine-state-content-con" v-cloak>{{item.remark}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./index.js"></script>

<style scoped src="./index.css"></style>