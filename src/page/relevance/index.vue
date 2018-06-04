<template>
  <div class="relation">
        <div class="item" v-for="(item,index) in resdata" :key="index" @click="enteritem(index,item)">
            <h3>治疗方案详情</h3>
            <div class='con'>
                <div class='con_head'>
                     <img :src="relavanceImg">
                </div>
                <div class="con_center">
                    <p class="con_center_tit">饮食原则:</p>
                    <p>食物多样，谷类为主；多吃桃、橙、香蕉、菠菜、毛豆、甜薯、马铃薯等富含钾的食物，可降低血压，预防中风；缺钙可促使小动脉痉挛，血压升高，每天 摄入 1 克以上的钙，可使血压降低；镁与钙的作用相似，应多吃粗粮、坚果、 海藻等富含镁的食物；多吃蔬菜、香蕉、薯类和纤维素多的食物；每天吃奶类、 豆类或其制品；常吃适量鱼禽蛋、瘦肉，少吃肥肉、皮、蹄和荤菜；食量与体 力活动要平衡，保持适宜体重；吃清淡少盐、少糖膳食，应把食盐量降至每天6 克左右。</p>
                    <p class="con_center_tit">食疗方剂:</p>
                    <p>1、黑木耳6 克，用水泡发，加入菜肴或蒸食。可降血脂、抗血栓和抗血小板聚集。</p>
                    <p>2、芹菜根5 个，红枣10 个，水煎服，食枣饮汤，可起到降低血胆固醇作用。</p>
                    <p>3、吃鲜山楂或用山楂泡开水，加适量蜂蜜，冷却后当茶饮。若脑梗塞并发糖尿病，不宜加蜂蜜。</p>
                    <p>4、生食大蒜或洋葱10－15 克可降血脂，并有增强纤维蛋白活性和抗血管 硬化的作用。</p>
                    <p>5、病人饭后饮食醋5－10 毫升，有软化血管的作用。</p>
                </div>
               <!-- <div class='con_foot'>
                    <p class="con_foot_detail">{{item.remark}}</p>
                    <img :src="share_a" alt="分享" @click.stop="share">
                </div>-->
            </div>
        </div>
  </div>
</template>
<style src="./index.css" scoped="scoped"></style>
<script src="./index.js"></script>

