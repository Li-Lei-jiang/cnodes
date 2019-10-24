<template>
  <div id="case">
    <!--  头部-->
    <div class="warp">
      <div class="top">
        <div class="log">
          <a href=""
            ><img
              src="http:////static2.cnodejs.org/public/images/cnodejs_light.svg"
              alt="图片"
          /></a>
          <div><input type="text" /></div>
        </div>
        <div class="text">
          <span>首页</span> <span>未读消息</span> <span>新手入门</span>
          <span>API </span> <span>关于</span> <span>设置</span>
          <span> 退出</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top",
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
/*手搓导航栏*/
#case {
  background: #888888;
}
.warp {
  margin: 0;
  padding: 0;
  height: 50px;
}
#case .top {
  display: flex;
  justify-content: space-between;
  background: #444444;
  height: 50px;
  line-height: 50px;
}
#case .log {
  display: flex;
  padding-left: 6%;
  flex-direction: row;
  width: 30%;
}
#case .log img {
  width: 120px;
  height: 44px;
}
#case .log div {
  margin-left: 4%;
  border: 0;
}
#case .log input {
  height: 15px;
  line-height: 50px;
  border-radius: 25px;
  outline: none;
  padding-left: 10px;
  background: #888888;
}
#case .text {
  padding-right: 5%;
  max-width: 500px;
  font-size: 13px;
  width: 400px;
}
#case .text span {
  margin-left: 4%;
  color: #c3c3c3;
}
#case .text span:hover {
  color: white;
}
</style>
