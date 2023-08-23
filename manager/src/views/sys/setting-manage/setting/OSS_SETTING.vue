<template>
  <div class="layout">
    <Form ref="formValidate" :label-width="250" label-position="right" :model="formValidate" :rules="ruleValidate">
      <FormItem label="Provider" prop="ossType">
        <RadioGroup v-model="formValidate.ossType" type="button" button-style="solid" style="margin-left: 10px;">
          <Radio :label="0">MinIO</Radio>
          <Radio :label="1">Alibaba Cloud</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="End Point" prop="endPoint">
        <Input v-model="formValidate.endPoint" />
      </FormItem>
      <FormItem label="Bucket Name" class="label-item" prop="bucketName">
        <Input v-model="formValidate.bucketName" />
      </FormItem>
      <FormItem label="Path" prop="bucketName">
        <Input v-model="formValidate.picLocation" />
      </FormItem>
      <FormItem label="Access Key" prop="accessKeyId">
        <Input v-model="formValidate.accessKeyId" />
      </FormItem>
      <FormItem label="Secret Key" prop="accessKeySecret">
        <Input v-model="formValidate.accessKeySecret" />
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
        ossType: 0,
        accessKeyId: "",
        accessKeySecret: "",
        bucketName: "",
        picLocation: "",
        endPoint: "",
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
      console.log(this.formValidate)
      if( handleSubmit(that, name )){
        this.setupSetting()
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

      this.$set(this, "formValidate", { ...this.res });
      Object.keys(this.formValidate).forEach((item) => {
        if(item != "ossType"){
          this.ruleValidate[item] = [
            {
              required: true,
              message: "Please fill in the required fields",
              trigger: "blur",
            },
          ];
        }
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
/deep/ .ivu-input {
  width: 300px !important;
  margin: 0 10px;
}
.ivu-input-wrapper {
  width: 300px;
  margin-right: 10px;
}
</style>
