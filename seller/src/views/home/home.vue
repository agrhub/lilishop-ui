<template>
  <div>

    <Modal v-model="noticeFlage" :title="noticesDetail.title">
      <div v-if="noticesDetail" v-html="noticesDetail.content">

      </div>
    </Modal>
    <div class="box flex">
      <div class="box-left">
        <div class="card shop flex">
          <div>
            <h4>Hi,<span style="margin-left:5px;">{{userData.nickName}}</span></h4>
            <img class="shop-logo" :src="userData.storeLogo || require('@/assets/logo1.png')" alt="">
          </div>
          <div class="shop-box">
            <div class="box-item">
              <div>Store Name：{{userData.storeName || 'Undefined'}}</div>
            </div>
            <div class="box-item">
              <div>Store Status：{{userData.storeDisable=='OPEN' ? 'Open' : 'Close'}}</div>
            </div>
            <div class="box-item" @click="im()">
              <Button type="info">Click to log in to customer service</Button>
            </div>
          </div>

          <div class="rate-box">
            <div>
              <i-circle :size="120" stroke-color="#fecb89" :trail-width="4" :stroke-width="5" :percent="(userData.serviceScore  *  20)" stroke-linecap="square">
                <div class="demo-Circle-custom">

                  <p class="bold">{{userData.serviceScore}} points</p>
                </div>
              </i-circle>
              <h5>Service Score</h5>
            </div>
            <div>
              <i-circle :size="120" stroke-color="#a7c5eb" :trail-width="4" :stroke-width="5" :percent="(userData.deliveryScore  *  20)" stroke-linecap="square">
                <div>

                  <p class="bold">{{userData.deliveryScore}} points</p>
                </div>
              </i-circle>
              <h5>Delivery score</h5>
            </div>
            <div>
              <i-circle :size="120" stroke-color="#848ccf" :trail-width="4" :stroke-width="5" :percent="(userData.descriptionScore  *  20)" stroke-linecap="square">
                <div>
                  <p class="bold">{{userData.descriptionScore}} points</p>
                </div>
              </i-circle>
              <h5>Description Score</h5>
            </div>
          </div>
        </div>
        <div class="card">
          <h4>Todo</h4>

          <div class="detail-list">
            <div class="detail-item" @click="navigateTo('orderList')">
              <div>
                <span>{{homeData.unPaidOrder || 0}}</span>
                <div>Pending payment</div>
              </div>
              <div class="detail-title">
                Before the transaction
              </div>
            </div>

            <div class="detail-item" @click="navigateTo('orderList')">
              <div>
                <span>{{homeData.unDeliveredOrder || 0}}</span>
                <div>Pending delivery</div>
              </div>
              <div>
                <span>{{homeData.deliveredOrder || 0}}</span>
                <div>Pending receipt</div>
              </div>
              <div class="detail-title">
                In transaction
              </div>
            </div>
            <div class="detail-item">
              <div @click="navigateTo('returnMoneyOrder')">
                <span>{{homeData.returnMoney || 0}}</span>
                <div>Refund</div>
              </div>
              <div @click="navigateTo('returnGoodsOrder')">
                <span>{{homeData.returnGoods || 0}}</span>
                <div>Return the goods</div>
              </div>
              <div @click="navigateTo('memberComment')">
                <span>{{homeData.memberEvaluation || 0}}</span>
                <div>Be evaluated</div>
              </div>
              <div class="detail-title">
                After sale
              </div>
            </div>
            <div class="detail-item" @click="navigateTo('orderComplaint')">
              <div>
                <span>{{homeData.complaint || 0}}</span>
                <div>Pending</div>
              </div>

              <div class="detail-title">
                Complaint
              </div>
            </div>
            <div class="detail-item" @click="navigateTo('goods')">
              <div>
                <span>{{homeData.waitUpper || 0}}</span>
                <div>To be released</div>
              </div>
              <div>
                <span>{{homeData.waitAuth || 0}}</span>
                <div>Under review</div>
              </div>
              <div class="detail-title">
                Merchandise
              </div>
            </div>

            <div class="detail-item">
              <div @click="navigateTo('seckill')">
                <span>{{homeData.seckillNum || 0}}</span>
                <div>Spike activity</div>
              </div>
              <div @click="navigateTo('accountStatementBill')">
                <span>{{homeData.waitPayBill || 0}}</span>
                <div>Awaiting reconciliation</div>
              </div>
              <div class="detail-title">
                Other
              </div>
            </div>

          </div>
        </div>
      </div>
      <!-- 公告 -->
      <div class="card box-right">
        <h4>Platform announcement</h4>
        <div>
          <div class="notice-title" v-for="(item,index) in notices" :key="index">
            <a @click="clickLinkNotices(item)">{{item.title}}</a>
          </div>
        </div>
      </div>
    </div>

    <div class="card ">
      <h4>Summary</h4>
      <div class="count-list flex">
        <div class="count-item" @click="navigateTo('goods')">
          <div>
            <Icon class="icon" size="31" type="md-photos" />
          </div>
          <div>
            <div class="counts">{{homeData.goodsNum ||0}}</div>
            <div>Products</div>
          </div>

        </div>
        <div class="count-item" @click="navigateTo('orderStatistics')">
          <div>
            <Icon class="icon" size="31" type="ios-card" />
          </div>
          <div>
            <div class="counts">{{homeData.orderPrice || 0 | unitPrice('￥')}}</div>
            <div>Amount</div>
          </div>

        </div>
        <div class="count-item" @click="navigateTo('orderList')">
          <div>

            <Icon class="icon" size="31" type="md-list" />
          </div>
          <div>
            <div class="counts">{{homeData.orderNum ||0}}</div>
            <div>Orders</div>
          </div>

        </div>
        <div class="count-item" @click="navigateTo('trafficStatistics')">
          <div>
            <Icon class="icon" size="31" type="md-person" />
          </div>
          <div>
            <div class="counts">{{homeData.storeUV ||0}}</div>
            <div>Visitors</div>
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSellerHomeData, getHomeNotice } from "@/api/index";
import { getIMDetail } from "@/api/common"
import { seeArticle } from "@/api/pages";
import Cookies from "js-cookie";

export default {
  name: "home",
  data() {
    return {
      noticeFlage: false, // 控制平台公告显隐

      homeData: {}, // 首页数据
      userData: "", // 店铺信息
      notices: "", // 平台公告列表
      noticesDetail: { // 平台公告详情
        title: "",
      },
      IMLink:"",
    };
  },
  methods: {
    // 跳转页面
    navigateTo(name) {
      this.$router.push({
        name,
      });
    },
    // 初始化数据
    async init() {
      let userInfo = JSON.parse(Cookies.get("userInfoSeller"));

      this.userData = userInfo;

      let res = await getHomeNotice();
      if (res.success) {
        this.notices = res.result.records;
      }
    },
    // 跳转文章页
    async clickLinkNotices(val) {
      let res = await seeArticle(val.id);
      if (res.success) {
        this.noticesDetail = res.result;
        this.noticeFlage = true;
      }
    },
    async im() {
      // 获取访问Token
      let accessToken = this.getStore("accessToken");
      await this.getIMDetailMethods();
      if (!accessToken) {
        this.$Message.error("Please log in to contact customer service");
        return;
      }
      window.open(this.IMLink + "?token=" + accessToken);
    },

    // 获取im信息
    async getIMDetailMethods() {
      let res = await getIMDetail();
      if (res.success) {
        this.IMLink = res.result;
      }
    },
    // 获取首页数据
    async getHomeData() {
      let res = await getSellerHomeData();
      if (res.success) {
        this.homeData = res.result;
      }
    },
  },
  mounted() {
    this.init();
    this.getHomeData();
  },
};
</script>
<style lang="scss" scoped>
@import "./home.scss";
</style>
