<template>
  <div>
    <div id="right">
      <div class="back">
        <div class="enter">
          <div>
            <p>CNode：Node.js专业中文社区</p>
            <div class="right1">
              你可以 <a href=""> 登录 </a> 或 <a href="">注册</a> 也可以
              <br /><a href=""><span>通过 GitHub 登录</span></a>
            </div>
          </div>
        </div>
        <div class="reply">
          <div>无人回复的话题</div>
          <div></div>
        </div>
        <div class="Integral">
          <div>
            <span>积分榜</span>&nbsp;
            <a href="" style="text-decoration: none">TOP &nbsp;100</a>
          </div>
          <div></div>
        </div>
        <div class="community">
          <div><span>友情社区</span></div>
          <div class="backg">
            <div>
              <img src="../assets/img/ruby-china-20150529.png" />
            </div>
            <div><img src="../assets/img/golangtc-logo.png" /></div>
            <div><img src="../assets/img/phphub-logo.png" /></div>
            <div><img src="../assets/img/FjL.jpg" /></div>
          </div>
        </div>
        <div class="QR">
          <div class="head"><span>客户端二维码</span></div>
          <div class="end">
            <img src="../assets/img/FtG.jpg" width="200" />
            <!--                  <br>-->
            <a href="" style="text-decoration: none">客户端源码地址</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "sidebar",
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
  mounted() {},
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped>
/*右边样式*/
#right {
  display: flex;
  /*flex-flow: column wrap-reverse;*/
  margin: 15px 35px 5px 0;
  background: #f6f6f6;
}
#right .back {
  max-width: 300px;
  width: 70%;
  /*background: cornflowerblue;*/
}
#right .enter {
  width: 290px;
  height: 116px;
  /*background: #888888;*/
  margin-bottom: 7%;
}
.enter p {
  padding: 10px 0 0 10px;
  font-size: 14px;
}
.enter a {
  text-decoration: none;
  color: #444444;
}
.enter .right1 {
  font-size: 13px;
  line-height: 2em;
  padding-left: 10px;
}
.enter .right1 span {
  color: #fff;
  background-color: #5bc0de;
  padding: 3px 10px;
  border: none;
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
  line-height: 3em;
  border-radius: 5px;
}
#right .reply {
  width: 290px;
  height: 220px;
  background: white;
  margin-bottom: 7%;
}
#right .Integral {
  width: 290px;
  height: 116px;
  background: white;
  margin-bottom: 7%;
}
#right .community {
  width: 290px;
  height: 243px;
  background: white;
  margin-bottom: 7%;
}
.community div {
  background-color: #f6f6f6;
  border-radius: 3px 3px 0 0;
}
.community div span {
  font-size: 13px;
  line-height: 40px;
  padding-left: 10px;
}
.community .backg {
  padding-left: 3%;
}
.community .backg img {
  width: 150px;
}
#right .QR {
  width: 290px;
  height: 286px;
  background: white;
  margin-bottom: 7%;
}
#right .QR .head {
  background-color: #f6f6f6;
}
#right .QR span {
  font-size: 13px;
  padding-left: 3%;
  line-height: 40px;
}
#right .QR .end img {
  display: table-cell;
  text-align: center;
  vertical-align: middle;
  margin: 5px auto;
}
#right .QR .end a {
  font-size: 13px;
  padding-left: 34%;
  color: #888888;
}
</style>
