<template>
  <div class="layout">
    <Form ref="formValidate" :label-width="250" label-position="right" :model="formValidate" :rules="ruleValidate">

      <FormItem label="Order automatically canceled" prop="autoCancel">
        <Input type='number' v-model="formValidate.autoCancel">
        <span slot="append">Minutes</span>
        </Input>
        <span class="desc">After the order is placed, how many minutes does it take to cancel the order</span>
      </FormItem>

      <FormItem label="Automatic receipt of orders" prop="autoReceive">
        <Input type='number' v-model="formValidate.autoReceive">
        <span slot="append">Days</span>
        </Input>
        <span class="desc">How many days after delivery to complete the delivery automatically</span>
      </FormItem>

      <FormItem label="Automatic praise" prop="autoEvaluation">
        <Input type='number' v-model="formValidate.autoEvaluation">
        <span slot="append">Days</span>
        </Input>
        <span class="desc">After the order is shipped, how many days after the automatic praise</span>
      </FormItem>
      <FormItem label="Completed orders allow refunds" prop="closeAfterSale">
        <Input type='number' v-model="formValidate.closeAfterSale">
        <span slot="append">Days</span>
        </Input>
        <span class="desc">After the order is completed, how many days are allowed to refund the order, if the number of days is 0, the refund is not allowed</span>
      </FormItem>
      <FormItem label="Complaints allowed for completed orders" prop="closeComplaint">
        <Input type='number' v-model="formValidate.closeComplaint">
        <span slot="append">Days</span>
        </Input>
        <span class="desc">After the order is completed, how many days to allow complaints, if the number of days is 0, no complaints are allowed</span>
      </FormItem>

      <div class="label-btns">
        <Button type="primary" @click="submit('formValidate')">Submit</Button>

      </div>
    </Form>
  </div>
</template>
<script>
import { setSetting } from "@/api/index";
import { handleSubmit } from "./validate";
export default {
  data() {
    return {
      ruleValidate: {}, // 验证规则
      formValidate: { // 表单数据
        autoCancel: "",
        autoEvaluation: "",
        autoReceive: "",
        closeAfterSale: "",
        closeComplaint:""
      },
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
    // 实例化数据
    init() {
      this.res = JSON.parse(this.res);
      Object.keys(this.res).map((item) => {
        this.res[item] += "";
      });
      this.$set(this, "formValidate", { ...this.res });
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
}
.ivu-input-wrapper {
  width: 100px;
  margin-right: 10px;
}
/deep/ .ivu-input {
  width: 100px !important;
}
.desc {
  font-size: 12px;
  color: #999;
}
</style>
