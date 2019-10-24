import {GET_CITY} from './mutation-types'
import axios from '../http'

export default {
  // 把commit从store解构出来
  async getCity ({commit}) {//传整个store
    let res = await axios.req("api/topics")
    console.log(res)
    commit(GET_CITY, res)//定义actions
  }
}

//作用 异步提交mutationde 定义后在 mouted 中 this.$store.dispach(法方名)  发送 action