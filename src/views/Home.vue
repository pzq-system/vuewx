<template>
  <div class="home">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image" />
      </van-swipe-item>
    </van-swipe>
    <div class="content">
      <van-row>
        <van-col span="8">
          <div class="cell">
            <div class="cell-img"><img src="../assets/image/cllr.png" /></div>
            <div><span>车辆录入</span></div>
          </div>
        </van-col>
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/scsq.png" /></div>
            <span>删除申请</span>
          </div></van-col
        >
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/xgsq.png" /></div>
            <span>修改申请</span>
          </div></van-col
        >
      </van-row>
      <van-row>
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/tclr.png" /></div>
            <span>拖车录入</span>
          </div></van-col
        >
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/sqbf.png" /></div>
            <span>报废处置</span>
          </div></van-col
        >
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/sqcc.png" /></div>
            <span>出场申请</span>
          </div></van-col
        >
      </van-row>
      <van-row>
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/wdlr.png" /></div>
            <span>我的录入</span>
          </div></van-col
        >
        <van-col span="8"
          ><div class="cell">
            <div class="cell-img"><img src="../assets/image/wdsz.png" /></div>
            <span>系统设置</span>
          </div></van-col
        >
      </van-row>
    </div>
    <p>1234</p>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  data () {
    return {
      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg'
      ]
    }
  }
}
</script>
<style lang="scss">
.van-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 80px;
  text-align: center;
  img {
    display: block;
    box-sizing: border-box;
    width: 100%;
    height: 240px;
    padding: 30px 60px;
    background-color: #fff;
    pointer-events: none;
  }
}
.content {
  padding-top: 14px;
}
.van-row {
  background-color: #fff;
  .van-col {
    height: 90px;
    border-right: 1px solid rgb(216, 213, 213);
    border-bottom: 1px solid rgb(216, 213, 213);
    img {
      width: 32px;
      height: 32px;
    }
    .cell {
      display: flex;
      flex-direction: column;
      justify-content: center;
      text-align: center;
      height: 100%;
      align-items: center;
    }
  }
}
</style>
