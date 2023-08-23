<template>
  <div class="message-con">
    <Dropdown trigger="click">

      <a href="javascript:void(0)">
        <Badge :dot="value > 0">
          <Icon type="ios-notifications-outline" size="26"></Icon>
        </Badge>
      </a>
      <DropdownMenu v-if="value!=0" slot="list">
        <DropdownItem v-if="res.balanceCash" @click.native="navigateTo('deposit')">
          <Badge :count="res.balanceCash">Pending pre-deposit withdrawal application </Badge>
        </DropdownItem>
        <DropdownItem v-if="res.complain" @click.native="navigateTo('orderComplaint')">
          <Badge :count="res.complain">Pending Complaint Review </Badge>
        </DropdownItem>
        <DropdownItem v-if="res.distributionCash" @click.native="navigateTo('distributionCash')">
          <Badge :count="res.distributionCash">Pending Distributor Withdrawal Application </Badge>
        </DropdownItem>
        <DropdownItem v-if="res.goods" @click.native="navigateTo('applyGoods')">
          <Badge :count="res.goods">Pending item review </Badge>
        </DropdownItem>
        <DropdownItem v-if="res.refund" @click.native="navigateTo('afterSaleOrder')">
          <Badge :count="res.refund">After-sales application pending </Badge>
        </DropdownItem>
        <DropdownItem v-if="res.store" @click.native="navigateTo('shopAuth')">
          <Badge :count="res.store">Pending store check-in review </Badge>
        </DropdownItem>
        <DropdownItem v-if="res.waitPayBill" @click.native="navigateTo('accountStatementBill')">
          <Badge :count="res.waitPayBill">To be reconciled with the merchant</Badge>
        </DropdownItem>
        <div></div>
      </DropdownMenu>
    </Dropdown>
  </div>
</template>

<script>
export default {
  name: "messageTip",
  data() {
    return {
      value: 0,
      empty: false,
    };
  },
  props: {
    res: {
      type: null,
    },
  },
  mounted() {
    this.init();
  },
  methods: {
    navigateTo(name) {
      this.$router.push({
        name,
      });
    },
    init() {
      Object.keys(this.res).forEach((item) => {
        this.value = parseInt(this.value) + parseInt(this.res[item]);
      });
    },
  },
};
</script>
<style scoped lang="scss">
/deep/ .ivu-select-dropdown {
  text-align: left;
}
.message-con {
  margin-right: 10px;
}
/deep/ .ivu-dropdown-item{
  padding: 7px 20px  !important;
}
/deep/ .ivu-badge-count{
  right: -10px !important;
}
</style>
