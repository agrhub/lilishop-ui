
<template>
  <Card v-if="show">
    <Tabs v-model="selected" @on-click="clickTab">
      <TabPane :label="tabItem.name" :name="tabItem.type" v-for="(tabItem, tabIndex) in tabWay" :key="tabIndex">
        <component v-if="settingData" :res="settingData" :type="selected"
                   :is="templateSetting[tabItem.type]"></component>
      </TabPane>
    </Tabs>
  </Card>
</template>
<script>
import {getSetting} from "@/api/index.js";
import templateSetting from "./template";

export default {
  data() {
    return {
      templateSetting, // 设置模板
      selected: "", // 已选
      settingData: "", // 模板数据
      show: true, // 是否显示
      setting: [
        // 基础配置
        {
          type: "BASE_SETTING",
          name: "General Settings",
        },
        // 商品设置
        {
          type: "GOODS_SETTING",
          name: "Product settings",
        },
        //订单配置
        {
          type: "ORDER_SETTING",
          name: "Order settings",
        },
        //积分设置
        {type: "POINT_SETTING", name: "Points settings"},
        {
          type: "WITHDRAWAL_SETTING",
          name: "Withdrawal settings",
        },
        //  快递鸟设置
        {
          type: "KUAIDI_SETTING",
          name: "Kuaidi settings",
        },
        //阿里OSS配置
        {
          type: "OSS_SETTING",
          name: "OSS settings",
        },
        //阿里短信配置
        {
          type: "SMS_SETTING",
          name: "SMS settings",
        },
        //阿里短信配置
        {
          type: "IM_SETTING",
          name: "Chat settings",
        },
      ],
      authLogin: [
        // 微信设置
        {type: "WECHAT_CONNECT", name: "Wechat"},
        // QQ设置
        {type: "QQ_CONNECT", name: "QQ"},
        //微博联合登陆
        // {type: "WEIBO_CONNECT", name: "微博联合登陆"},
        // //支付宝配置
        // {type: "ALIPAY_CONNECT", name: "支付宝配置"},
      ],
      pay: [
        //支付宝支付设置
        {type: "PAYMENT_SUPPORT", name: "Payment support"},
        //支付宝支付设置
        {type: "ALIPAY_PAYMENT", name: "Alipay"},
        //微信支付设置
        {type: "WECHAT_PAYMENT", name: "Wechat Pay"},
      ],
      tabWay: [], // tab数据
    };
  },

  watch: {
    $route(to, from) {
      this.selected = "";
      this.show = false;
      this.getSettingData(this.selected);
      this.$nextTick(() => {
        this.show = true;
      });
    },
  },
  mounted() {
    this.clickTab(this.selected);
  },
  methods: {
    // tab切换
    clickTab(name) {
      this.selected = name;
      this.getSettingData(name);
    },
    /**
     * 进入页面请求第一个配置
     */
    getSettingData(name) {
      this.settingData = "";
      Object.keys(this).forEach((item) => {
        if (this.$route.name == item) {
          this.tabWay = this[item];
        }
      });
      // 点击页面给每项第一个数据赋值
      if (!name) {
        name = this.tabWay[0].type;
        this.selected = name;
      }

      getSetting(name).then((res) => {
        if (res.result) {
          this.settingData = JSON.stringify(res.result);
        }
      });
    },
  },
};
</script>
