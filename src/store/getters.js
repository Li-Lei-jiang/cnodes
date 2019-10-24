export default {
  addNum (state) {
    return state.num +1
  }
}//对state中的值 进行过滤或者操作 这是一个方法


// 使用;conputed:{
//     num(){
// //         readable this.$store.getters.addAll()
//     }
// }