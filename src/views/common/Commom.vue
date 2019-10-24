<template>
<!--  //公共页-->
  <div>
    <div>
      <Top></Top>
      <!--中间部分-->
      <div id="center">
        <router-view ></router-view>
        <!--侧边栏-->
        <Sidebar></Sidebar>
      </div>
      <!--底部-->
      <End></End>
    </div>
  </div>
</template>

<script>
import Top from "../../components/Top";
import End from "../../components/End";
import Sidebar from  '../../components/Sidebar'
export default {
  name: "new",
  components: {
    Top,
    End,
      Sidebar
  },
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
#center{
  display: flex;
  justify-content: space-between;
}
</style>
