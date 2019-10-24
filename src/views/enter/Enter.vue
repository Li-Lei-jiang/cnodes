<template>
  <div id="case">
    <div class="enters">
      <form action=" " method="get">
        <el-form
          :model="ruleForm"
          status-icon
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="账号" prop="id">
            <el-input v-model.number="ruleForm.id"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="pass">
            <el-input
              type="password"
              v-model="ruleForm.pass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item label="确认密码" prop="checkPass">
            <el-input
              type="password"
              v-model="ruleForm.checkPass"
              autocomplete="off"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm('ruleForm')"
              >提交</el-button
            >
            <el-button @click="resetForm('ruleForm')" type="warning"
              >放弃</el-button
            >
          </el-form-item>
        </el-form>
      </form>
    </div>

  </div>
</template>

<script>
export default {
  name: "index",
  components: {},
  props: {},
  data() {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("账号不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入正确的账号"));
        } else {
          if (value < 6) {
            callback(new Error("密码必须大于6位数"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        id: "",


      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        id: [{ validator: checkAge, trigger: "blur" }]
      }
    };
  },
  methods: {
    getCity() {
      this.$axios
        .req("api/topics")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        });
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          this.$message({
            message: "登录成功",
            type: "success"
          })
          this.$router.push({ path:'/index'});
        } else {
          this.$message({
            message: "我已使出洪荒之力但是，登录失败！！！",
            type: "warning"
          });
          return false;
        }

      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  mounted() {
    this.getCity();

  },
  created() {},
  filters: {},
  computed: {},
  watch: {},
  directives: {}
};
</script>

<style scoped>
#case {
  height: 600px;
  max-height: 800px;
  background: honeydew;
  display: flex;
  justify-content: center; /*水平居中*/
  align-items: center; /*垂直居中*/
  padding: 0;
  margin: 0 auto;
}
.enters {
}
</style>
