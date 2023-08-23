/**
 * 商家端左侧菜单栏静态数据
 */

export const result = [{
    name: "lili",
    level: 0,
    type: -1,
    title: "Products",
    path: "",
    component: "",
    children: [{
      name: "goods-list",
      level: 1,
      type: 0,
      title: "Manage",
      path: "",
      component: "Main",
      children: [{
          name: "goods-operation",
          level: 2,
          type: 0,
          title: "Add product",
          path: "goods-operation",
          component: "goods-operation",
          children: null,
        },
        {
          name: "goods",
          level: 2,
          type: 0,
          title: "All products",
          path: "goods",
          component: "goods/goods-seller/goods",
          children: null,
        },
        {
          path: "template-goods",
          props: {
            type: "TEMPLATE"
          },
          level: 2,
          type: 0,
          title: "Product template",
          component: "goods/goods-seller/draftGoods",
          name: "template-goods",
          children: null,
        },
        {
          name: "category",
          level: 2,
          type: 0,
          title: "Category",
          path: "category",
          component: "goods/goods-manage/category",
          children: null,
        }
      ]
    }]
  },
  {
    name: "order",
    level: 0,
    type: -1,
    title: "Orders",
    path: "",
    component: "",
    description: "",
    children: [{
        name: "order",
        level: 1,
        type: 0,
        title: "Manage",
        path: "/order",
        component: "Main",
        children: [{
            name: "orderList",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "All orders",
            path: "orderList",
            component: "order/order/orderList",
            children: null,
          },
          {
            name: "virtualOrderList",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Virtual orders",
            path: "virtualOrderList",
            component: "order/order/virtualOrderList",
            children: null
          }
        ]
      },
      {
        name: "memberComment",
        level: 1,
        type: 0,
        title: "Comments",
        path: "/order",
        component: "Main",
        children: [{
          name: "memberComment",
          level: 2,
          type: 0,
          title: "All comments",
          path: "memberComment",
          component: "member/memberComment",
          children: null,
        }]
      },
      {
        name: "order",
        level: 1,
        type: 0,
        title: "After-sale",
        path: "/order",
        component: "Main",
        children: [{
            name: "returnGoodsOrder",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Return orders",
            path: "returnGoodsOrder",
            component: "order/after-order/returnGoodsOrder",
            children: null
          },
          {
            name: "returnMoneyOrder",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Refund",
            path: "returnMoneyOrder",
            component: "order/after-order/returnMoneyOrder",
            children: null
          },
          {
            name: "orderComplaint",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Complaint",
            path: "orderComplaint",
            component: "order/after-order/orderComplaint",
            children: null
          }
        ]
      }
    ]
  },
  {
    name: "bill",
    level: 0,
    type: -1,
    title: "Finance",
    path: "",
    component: "",
    children: [{
        name: "bill",
        level: 1,
        type: 0,
        title: "Manage",
        path: "/bill",
        component: "Main",
        children: [{
            name: "accountStatementBill",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Withdraw",
            path: "accountStatementBill",
            component: "shop/bill/accountStatementBill",
            children: null
          },
          {
            name: "storeBill",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Income",
            path: "storeBill",
            component: "shop/bill/storeBill",
            children: null
          }
        ]
      },
      {
        name: "receiptManager",
        level: 1,
        type: 0,
        title: "Invoice",
        path: "/bill",
        component: "Main",
        children: [{
          name: "receipt",
          level: 2,
          type: 0,
          title: "Manage",
          path: "receipt",
          component: "order/receiptManager/receipt",
          children: null
        }]
      }
    ]
  },
  {
    name: "promotion",
    level: 0,
    type: -1,
    title: "Promotions",
    path: "",
    component: "",
    children: [{
        name: "promotion",
        level: 1,
        type: 0,
        title: "Manage",
        path: "/promotion",
        component: "Main",
        children: [{
            name: "pintuan",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Group buying",
            path: "pintuan",
            component: "promotion/pintuan/pintuan",
            children: null
          },
          {
            name: "seckill",
            level: 2,
            type: 0,
            keepAlive: true,
            title: "Flash sale",
            path: "seckill",
            component: "promotion/seckill/seckill",
            children: null
          }
        ]
      },
      {
        name: "lives",
        level: 1,
        type: 0,
        title: "Live stream",
        path: "/promotion",
        component: "Main",
        children: [{
            name: "live",
            level: 2,
            type: 0,
            title: "Manage",
            path: "live",
            component: "promotion/live/live",
            children: null
          },
          {
            name: "liveGoods",
            level: 2,
            type: 0,
            title: "Live products",
            path: "liveGoods",
            component: "promotion/live/liveGoods",
            children: null
          }
        ]
      },
      {
        name: "storePromotion",
        level: 1,
        type: 0,
        title: "Discounts",
        path: "/storePromotion",
        component: "Main",
        children: [{
            name: "full-cut",
            level: 2,
            type: 0,
            title: "Discount",
            path: "full-discount",
            component: "promotion/full-discount/full-discount",
            children: null
          },
          {
            name: "coupon",
            level: 2,
            type: 0,
            title: "Coupon",
            path: "coupon",
            component: "promotion/coupon/coupon",
            children: null
          },
        ]
      },
      {
        name: "distribution",
        level: 1,
        type: 0,
        title: "Distributions",
        path: "/distribution",
        component: "Main",
        children: [{
            name: "distributionGoods",
            level: 2,
            type: 0,
            title: "Products",
            path: "distributionGoods",
            component: "distribution/distributionGoods",
            children: null
          },
          {
            name: "distributionOrder",
            level: 2,
            type: 0,
            title: "Orders",
            path: "distributionOrder",
            component: "distribution/distributionOrder",
            children: null
          }
        ]
      }
    ]
  },
  {
    name: "statistics",
    level: 0,
    type: -1,
    title: "Statistics",
    path: "",
    component: "",
    children: [{
      name: "statistics",
      level: 1,
      type: 0,
      title: "Manage",
      path: "/statistics",
      component: "Main",
      children: [{
          name: "goodsStatistics",
          level: 2,
          type: 0,
          title: "Products",
          path: "goodsStatistics",
          component: "statistics/goods",
          children: null
        },
        {
          name: "orderStatistics",
          level: 2,
          type: 0,
          title: "Orders",
          path: "orderStatistics",
          component: "statistics/order",
          children: null
        },
        {
          name: "trafficStatistics",
          level: 2,
          type: 0,
          title: "Traffic",
          path: "trafficStatistics",
          component: "statistics/traffic",
          children: null
        },
      ]
    }]
  },
  {
    name: "settings",
    level: 0,
    type: -1,
    title: "Settings",
    path: "",
    component: "",
    description: "",
    children: [{
        name: "user-manage",
        level: 1,
        type: 0,
        title: "Customers",
        path: "user-manage",
        component: "sys/user-manage/userManage",
        children: []
      },
      {
        name: "ship",
        level: 1,
        type: 0,
        title: "Shipping settings",
        path: "",
        component: "Main",
        children: [{
            name: "shipTemplate",
            level: 2,
            type: 0,
            title: "Shipping Template",
            path: "shipTemplate",
            component: "shop/ship/shipTemplate",
            children: null
          },
          {
            name: "logistics",
            level: 2,
            type: 0,
            title: "Logistics company",
            path: "logistics",
            component: "shop/ship/logistics",
            children: null
          }
        ]
      },
      {
        name: "shop",
        level: 1,
        type: 0,
        title: "Store settings",
        path: "/shop",
        component: "Main",
        description: "",
        children: [{
            name: "shopSetting",
            level: 2,
            type: 0,
            title: "Store information",
            path: "shopSetting",
            component: "shop/shopSetting",
            children: null,
          },
          {
            name: "shopAddress",
            level: 2,
            type: 0,
            title: "Store address",
            path: "shopAddress",
            component: "shop/shopAddress",
            children: null,
          }
        ]
      }
    ]
  },
  {
    name: "messages",
    level: 0,
    type: -1,
    title: "Information",
    path: "",
    component: "",
    children: [{
      name: "user-manage",
      level: 1,
      type: 0,
      title: "System",
      path: "user-manage",
      component: "sys/user-manage/userManage",
      children: [{
        name: "message_index",
        level: 2,
        type: 0,
        title: "Manage",
        path: "message",
        component: "message",
        children: null
      }]
    }]
  }
];
