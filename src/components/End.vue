<template>
  <div>
    <div id="end">
      <div class="warp-end">
        <div><span>RSS</span> | <span>源码地址</span></div>
        <div>
          <p>
            CNode 社区为国内最专业的 Node.js 开源技术社区，致力于 Node.js
            的技术研究。
          </p>
          <p>
            服务器赞助商为
            <a href=""
            ><img src="../../src/assets/img/end1.jpg" style="width: 92px"/></a
            >,存储赞助商为
            <a href=""
            ><img src="../../src/assets/img/Fg.jpg" style="width: 115px"/></a
            >，由
            <a href=""
            ><img
                src="../../src/assets/img/Fp.jpg"
                style="width: 166px ;height: 54px"/></a
            >，提供应用性能服务。
          </p>
          <p>
            新手搭建 Node.js 服务器，推荐使用无需备案的<a
              href=""
              style="text-decoration: none"
          >DigitalOcean(https://www.digitalocean.com/)</a
          >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "end",
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
/*底部样式*/
#end {
  padding: 0;
  background-color: #f6f6f6;
}
#end .warp-end {
  height: 190px;
}
#end .warp-end div {
  font-size: 14px;
  line-height: 20px;
  color: #ababab;
  margin-left: 4%;
}
</style>
