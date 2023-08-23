import Main from "@/views/Main.vue";

const config = require('@/config/index')
// 不作为Main组件的子页面展示的页面单独写，如下
export const loginRouter = {
  path: "/login",
  name: "login",
  meta: {
    title: `登录 - ${config.title}运营后台`
  },
  component: () => import("@/views/login.vue")
};

// 作为Main组件的子页面展示但是不在左侧菜单显示的路由写在otherRouter里
export const otherRouter = {
  path: "/",
  name: "otherRouter",
  redirect: "/home",
  component: Main,
  children: [
    {
      path: "home",
      title: 'Home',
      name: "home_index",
      component: () => import("@/views/home/home.vue")
    },
    {
      path: "personal-center",
      title: "Profile",
      name: "personal-center",
      meta: { title: "Profile" },
      component: () => import("@/views/personal-center/personal-center.vue")
    },
    {
      path: "change-password",
      title: "Change password",
      name: "change_password",
      component: () => import("@/views/change-password/change-password.vue")
    },
    {
      path: "category",
      title: "Category",
      name: "category",
      component: () => import("@/views/goods/goods-manage/category.vue")
    },
    {
      path: "parameter",
      title: "Parameter",
      name: "parameter",
      component: () => import("@/views/goods/goods-manage/parameter.vue")
    },
    {
      path: "shop",
      title: "Shop",
      name: "shop",
      component: () => import("@/views/seller/shop/shopList.vue")
    },
    {
      path: "shop-operation",
      title: "Shop Operation",
      name: "shop-operation",
      component: () => import("@/views/seller/shop/shopOperation.vue")
    },
    {
      path: "shop-detail",
      title: "Shop Detail",
      name: "shop-detail",
      component: () => import("@/views/seller/shop/shopDetail.vue")
    },
    {
      path: "bill-detail",
      title: "Bill Detail",
      name: "bill-detail",
      component: () => import("@/views/seller/bill/bill-detail.vue")
    },
    {
      path: "apply-goods",
      title: "商品审核列表",
      name: "apply-goods",
      component: () => import("@/views/goods/goods-info/goodsApply.vue")
    },
    {
      path: "manager-goods",
      title: "Product List",
      name: "manager-goods",
      component: () => import("@/views/goods/goods-info/goods.vue")
    },
    {
      path: "goods-brand",
      title: "Product Brand",
      name: "goods-brand",
      component: () => import("@/views/goods/goods-manage/brand.vue")
    },
    {
      path: "goods-category",
      title: "Product Category",
      name: "goods-category",
      component: () => import("@/views/goods/goods-manage/category.vue")
    },
    {
      path: "goods-parameter",
      title: "Product Parameters",
      name: "goods-parameter",
      component: () => import("@/views/goods/goods-manage/parameter.vue")
    },
    {
      path: "goods-spec",
      title: "Product Specification",
      name: "goods-spec",
      component: () => import("@/views/goods/goods-manage/spec.vue")
    },
    {
      path: "order-complaint-detail",
      title: "Order Complaint",
      name: "order-complaint-detail",
      component: () =>
        import("@/views/order/after-order/orderComplaintDetail.vue")
    },
    {
      path: "order-list",
      title: "Order List",
      name: "order-list",
      component: () => import("@/views/order/order/orderList.vue")
    },
    {
      path: "order-detail",
      title: "Order Detail",
      name: "order-detail",
      component: () => import("@/views/order/order/orderDetail.vue")
    },
    {
      path: "after-order-detail",
      title: "After Order",
      name: "after-order-detail",
      component: () =>
        import("@/views/order/after-order/afterSaleOrderDetail.vue")
    },
    {
      path: "member-detail",
      title: "Member detail",
      name: "member-detail",
      component: () => import("@/views/member/list/memberDetail.vue")
    },

    {
      path: "goods/goods-info/goodsDetail",
      title: "Product Detail",
      name: "goods-detail",
      component: () => import("@/views/goods/goods-info/goodsDetail.vue")
    },
    {
      path: "promotions/add-points-goods",
      title: "Add Product Points",
      name: "add-points-goods",
      component: () =>
        import("@/views/promotions/points-goods/points-goods-add.vue")
    },
    {
      path: "promotions/edit-points-goods",
      title: "Edit Product Points",
      name: "edit-points-goods",
      component: () =>
        import("@/views/promotions/points-goods/points-goods-edit.vue")
    },
    {
      path: "promotions/manager-points-goods-category",
      title: "Product Points Category",
      name: "manager-points-goods-category",
      component: () =>
        import("@/views/promotions/points-goods-category/points-goods-category.vue")
    },
    {
      path: "promotions/add-kanJia-activity-goods",
      title: "Add bargain activity",
      name: "add-kanJia-activity-goods",
      component: () => import("@/views/promotions/kanjia/kanjia-activity-add-goods.vue")
    },
    {
      path: "promotions/edit-kanJia-activity-goods",
      title: "Edit bargain activity",
      name: "edit-kanJia-activity-goods",
      component: () => import("@/views/promotions/kanjia/kanjia-activity-edit-goods.vue")
    },
    {
      path: "promotions/manager-coupon",
      title: "Coupons",
      name: "manager-coupon",
      component: () => import("@/views/promotions/coupon/coupon.vue")
    },
    {
      path: "promotions/add-platform-coupon",
      title: "Add Coupon",
      name: "add-platform-coupon",
      component: () => import("@/views/promotions/coupon/coupon-publish.vue")
    },
    {
      path: "promotions/edit-platform-coupon",
      title: "Edit Coupon",
      name: "edit-platform-coupon",
      component: () => import("@/views/promotions/coupon/coupon-publish.vue")
    },
    {
      path: "promotions/add-coupon-activity",
      title: "Add Coupon History",
      name: "add-coupon-activity",
      component: () => import("@/views/promotions/coupon-activity/coupon-publish.vue")
    },
    {
      path: "promotions/edit-coupon-activity",
      title: "Edit Coupon History",
      name: "edit-coupon-activity",
      component: () => import("@/views/promotions/coupon-activity/coupon-publish.vue")
    },
    {
      path: "promotions/coupon-activity-info",
      title: "Coupon Detail",
      name: "coupon-activity-info",
      component: () => import("@/views/promotions/coupon-activity/coupon-info.vue")
    },
    {
      path: "promotions/manager-pintuan",
      title: "Bulk Buying",
      name: "manager-pintuan",
      component: () => import("@/views/promotions/pintuan/pintuan.vue")
    },
    {
      path: "promotions/pintuan/pintuan-goods",
      title: "Manage Bulk Buying",
      name: "pintuan-goods",
      component: () => import("@/views/promotions/pintuan/pintuan-goods.vue")
    },
    {
      path: "promotions/full-discount-detail",
      title: "Full Discount Detail",
      name: "full-discount-detail",
      component: () => import("@/views/promotions/full-discount/full-discount-detail.vue")
    },
    {
      path: "promotions/seckill/manager-seckill-add",
      title: "Add Lightning Deals",
      name: "manager-seckill-add",
      component: () => import("@/views/promotions/seckill/seckill-add.vue")
    },
    {
      path: "promotions/seckill/seckill-goods",
      title: "Lightning Deals",
      name: "seckill-goods",
      component: () => import("@/views/promotions/seckill/seckill-goods.vue")
    },
    {
      path: "/floorList/renovation",
      title: "Edit Template",
      name: "renovation",
      component: () => import("@/views/lili-floor-renovation/renovation.vue")
    },
    {
      path: "/floorList/main",
      title: "Edit Template",
      name: "main",
      component: () => import("@/views/lili-floor-renovation/wap/main.vue")
    },
    {
      path: "add-sms-sign",
      title: "SMS Signature",
      name: "add-sms-sign",
      component: () => import("@/views/sys/message/smsSign.vue")
    },
    {
      path: "live-detail",
      title: "Live streaming",
      name: "live-detail",
      component: () => import("@/views/promotions/live/live-detail.vue")
    }
  ]
};

export const page404 = {
  path: "/*",
  name: "error-404",
  meta: {
    title: "404-页面不存在"
  },
  component: () => import("@/views/error-page/404.vue")
};

export const page403 = {
  path: "/403",
  meta: {
    title: "403-权限不足"
  },
  name: "error-403",
  component: () => import("@/views/error-page/403.vue")
};

export const page500 = {
  path: "/500",
  meta: {
    title: "500-服务端错误"
  },
  name: "error-500",
  component: () => import("@/views/error-page/500.vue")
};

// 所有上面定义的路由都要写在下面的routers里
export const routers = [loginRouter, otherRouter, page500, page403];
