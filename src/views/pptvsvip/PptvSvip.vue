<template>
  <div id="details">
    <div class="warp">
      <div class="warp-details">
        <div class="tit">
          <div><span>置顶</span>{{ pptv.title }}</div>
          <div></div>
        </div>
        <div v-html="pptv.content" class="styl"></div>
        <div class="observer">
          <div class="reply">回复</div>
          <div v-for="(item, index) in pptv.replies" :key="item.id">
            <div class="reply-user">
              <span
                ><img :src="item.author.avatar_url" alt="" width="30"
              /></span>
              <span class="txt">{{ item.author.loginname }}</span>
              <span class="txt">{{ pptv.last_reply_at }}</span
              >&nbsp;&nbsp;&nbsp;
              <span>{{ index + 1 }} 楼`个月前</span>
            </div>
            <div v-html="item.content" class="reply-warp"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PptvSvip",
  components: {},
  props: {},
  data() {
    return {
      pptv: {},
      id: "",
      replies: []
    };
  },
  methods: {
    getpptv() {
      this.$axios
        .req(`/api/topic/${this.id}`) //拿到传来的数据 ${this.id} 原本为：id
        .then(res => {
          this.pptv = res.data;
          console.log(res); //返回成数据
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    },
    getreplies() {
      this.$axios
        .req(`/api/topic/${this.id}`) //拿到传来的数据 ${this.id} 原本为：id
        .then(res => {
          this.replies = res.data.replies;
          console.log(res); //返回成数据
        })
        .catch(err => {
          console.log(err); //返回失败数据
        });
    }
  },
  mounted() {
    this.id = this.$route.query.id; //当前id 等于传过来的id
    this.getpptv();
    this.getreplies();
    // console.log(this.$store.state.pptv);
    console.log(this.id);
    // console.log(111);
  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped>
#details {
  background: #cccccc;
  margin: 0;
  padding: 0;
  max-width: 1100px;
  width: 100%;
}
.warp {
  padding: 10px 3% 1% 5%;
}
.warp-details {
  background: white;
}
.tit {
  padding-left: 1%;
}
.styl {
  padding-left: 3%;
}
.reply {
  padding-left: 10px;
  font-size: 14px;
  margin-bottom: 15px;
}
.reply-user {
  padding:2% 0 2% 2%;
  /*line-height: 25px;*/
  margin: 0 10px;
  height:40px;
}
.reply-user .txt {
  line-height: 25px;
}
.reply-warp {
  line-height: 25px;
  padding-left: 5%;
  font-size: 15px;
  background: #f6f6f6;
  margin-bottom: 1em;
}
</style>
