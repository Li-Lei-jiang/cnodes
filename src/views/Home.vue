<template>
  <!--  主页-->
  <div id="case">
    <div id="centers">
      <!--左边-->
      <div class="middle">
        <div class="list">
          <span>全部</span>
          <span>精华</span>
          <span>分享</span>
          <span>问答</span>
          <span>招聘</span>
          <span>客户端测试</span>
        </div>
        <div class="branch" v-for="(item, index) in data_arr" :key="index">
          <div class="branch-if">
            <div>
              <span
                ><img
                  :src="item.author.avatar_url"
                  alt=""
                  width="30"
                  style="border-radius: 3px"
              /></span>
              <span>{{ item.reply_count }}</span
              >/<span>{{ item.visit_count }}</span
              >&nbsp;
              <span>置顶</span>
              <span @click="gopptv(item)">{{ item.title }}</span>
              <span>{{ item.create_at }}</span>
              <!--              <span><img :src="item.author.avatar_url" alt="" width="30" style="border-radius: 3px"></span>-->
            </div>
            <div>
              <span>{{ item.last_reply_at }}</span>
            </div>
          </div>
        </div>
        <!--分页代码-->
        <div class="paging">
          <el-pagination background layout="prev, pager, next" :total="1000">
          </el-pagination>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {
    // PptvSvip,
  },
  props: {},
  data() {
    return {
      data_arr: []
      // time:''
    };
  },
  methods: {
    getData_arr() {
      this.$axios
        .req("api/topics")
        .then(res => {
          this.data_arr = res.data;
          // this.$store.state.data_arr=res.data 设置共享的值
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    gopptv(item) {
      //路由传参吧 参数传过去
      // this.$router.push({name:'pptvSvip',params:{Id:item.id}})
      this.$router.push({ name: "pptvsvip", query: { id: item.id } }); //跳转页面时的传输请求
      console.log(1); //传过去了
    }
    // 时间过滤------------
  },
  mounted() {
    this.getData_arr();
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped>
/*import PptvSvip from '../pptvsvip/PptvSvip'*/
#case{
  background: #f6f6f6;
  /*max-width: 1100px;*/
  padding:0 2% ;

}
/*中间样式*/
#centers {
  display: flex;
  justify-content: space-between;
}
/*左边*/
.middle {
  margin:0 23px 10px 3%;
  /*background: green;*/
  max-width: 1100px;
  width: 100%;
  background: white;
}

#centers .list {
  line-height: 50px;
  background: #f6f6f6;
}
.list span {
  line-height: 20px;
  margin-left: 2%;
  color: #80bd01;
  font-size: 14px;
}
.list span:hover {
  background: #80bd01;
  color: white;
}
#centers .branch-if {
  font-size: 14px;
  line-height: 40px;

  padding-left: 1%;
  display: flex;
  justify-content: space-between;
}
#centers .branch {
  border-bottom: 1px solid #cccccc;
}
/*#centers .branch-if div{*/
/*  */
/*}*/
#centers .branch-if:hover {
  background: #cccccc;
}
</style>
