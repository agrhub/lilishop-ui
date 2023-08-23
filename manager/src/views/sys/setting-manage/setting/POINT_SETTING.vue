<template>
  <div class="layout">
    <Form ref="formValidate" :label-width="250" label-position="right" :model="formValidate" :rules="ruleValidate">
      <FormItem label="Spend 1 yuan to get bonus points" prop="money">
        <Input type="number" v-model="formValidate.money">
          <span slot="append">Points</span>
          <!--          <span slot="append">人民币</span>-->
        </Input>

      </FormItem>
      <FormItem label="Points deductible payment" prop="money">
        <Input type="number" v-model="formValidate.money">
          <span slot="append">Points</span>
          <span slot="prepend">1 RMB = </span>
        </Input>

      </FormItem>

      <FormItem label="Register an account" prop="register">
        <Input type="number" v-model="formValidate.register">
          <span slot="append">Points</span>
        </Input>
      </FormItem>
      <!-- <FormItem label="登录" class="label-item" prop="login">
        <Input type="number" v-model="formValidate.login">

        <span slot="append">Points</span>
        </Input>

      </FormItem> -->

      <FormItem label="Daily check-in points" prop="signIn">
        <Input type="number" v-model="formValidate.signIn">
          <span slot="append">Points</span>
        </Input>

      </FormItem>
      

      <FormItem class="label-item" v-for="(point,index) in  formValidate.pointSettingItems" :key="index"
                :label="'Check-in settings '+(index+1)">
        <div class="label-item">

          <InputNumber :min="1" v-model="point.day"></InputNumber>

          <InputNumber :min="0" v-model="point.point"></InputNumber>

          <Button ghost type="error" @click="delSign(point,index)">Delete</Button>
          <span class="ml_10">Sign In <span class="theme_color">{{ point.day }}</span> day, gift <span
            class="theme_color">{{ point.point }}</span> Points</span>
        </div>

      </FormItem>
      
      <FormItem label="Operate:">
        <Button @click="addSign">Add</Button>
      </FormItem>

      <FormItem label="Order evaluation bonus points" prop="comment">
        <Input type="number" v-model="formValidate.comment">
          <span slot="append">Points</span>
        </Input>

      </FormItem>
      <div class="label-btns">
        <Button type="primary" @click="submit('formValidate')">Submit</Button>
      </div>
    </Form>
  </div>
</template>

<script>
import {setSetting} from "@/api/index";
import {handleSubmit} from "./validate";

export default {
  data() {
    return {
      ruleValidate: {}, // 验证规则
      formValidate: {}, // 表单数据
    };
  },
  props: ["res", "type"],
  created() {
    this.init();
  },
  methods: {
    // 保存
    submit(name) {
      let that = this;
      if (handleSubmit(that, name)) {
        this.setupSetting();
      }
    },
    // 保存设置
    setupSetting() {
      setSetting(this.type, this.formValidate).then((res) => {
        if (res.success) {
          this.$Message.success("保存成功!");
        } else {
          this.$Message.error("保存失败!");
        }
      });
    },
    delSign(item, index) {
      this.formValidate.pointSettingItems.splice(index, 1);
    },
    addSign() {
      if (this.formValidate.pointSettingItems.length >= 4) {
        this.$Message.error({
          content: "最多设置4项签到设置",
        });
        return false;
      }
      this.formValidate.pointSettingItems.push({
        point: "0",
        day: this.formValidate.pointSettingItems.length,
      });
    },
    // 实例化数据
    init() {
      this.res = JSON.parse(this.res);
      Object.keys(this.res).map((item) => {
        if (item == "pointSettingItems") {
          return false;
        }
        this.res[item] += "";
      });

      this.$set(this, "formValidate", {...this.res});

      Object.keys(this.formValidate).forEach((item) => {
        this.ruleValidate[item] = [
          {
            required: true,
            message: "请填写必填项",
            trigger: "blur",
          },
          {
            validator: (rule, value, callback) => {
              if (value < 0) {
                callback(new Error("不能输入负数！"));
              } else {
                callback();
              }
            },
            trigger: "change",
          },
        ];
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import "./style.scss";

.label-item {
  display: flex;

  > .ivu-input-number {
    width: 100px;
    margin-right: 5px;
  }

  > .ivu-input-number:nth-last-of-type(1) {
    width: 150px;
    margin-right: 5px;
  }

  > .ivu-input {
    width: 100px;
    margin: 0 10px;
  }
}

/deep/ .ivu-input {
  width: 70px !important;
}

.ivu-input-wrapper {
  width: 70px;
  margin-right: 10px;
}

.label-btns {
  /deep/ .ivu-btn {
    margin-right: 10px;
  }
}
</style>
