import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";

Vue.use(VueRouter);

/*
 * 基于递归组件的路由表的编写遵循以下原则：

 * · hideInMenu为true时，该路由将不会添加在侧边导航栏中
 * · meta：{ 
 *     title //  导航栏列表文本
 *     icon  // 导航栏列表图标，没有则不会渲染
 *   }
 * · 每个含有children属性的对象都要有自己的component，且其中包含 <router-view />，保证子组件能够渲染
 *   使用render函数只渲染<router-view>标签，不需要单独写一个.vue单文件组件
 *
 * · 使用命名路由导航，每个路由的name属性要唯一
 */

const renderRouterView = { render: h => h("router-view") };

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    hideInMenu: true
  },
  {
    path: "/404",
    name: "NotFound",
    hideInMenu: true,
    component: () =>
      import(/* webpackChunkName: "Github" */ "../views/NotFound")
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    meta: {
      title: "Dashboard",
      icon: "mdi-view-dashboard"
    },
    component: Dashboard
  },
  {
    path: "/nested",
    name: "Nested",
    redirect: { name: "Menu1" },
    meta: {
      title: "Nested",
      icon: "mdi-xbox-controller-menu"
    },
    component: renderRouterView,
    children: [
      {
        path: "menu1",
        name: "Menu1",
        meta: {
          title: "Menu1"
        },
        component: () =>
          import(/* webpackChunkName: "Menu1" */ "../views/nested/Menu1")
      },
      {
        path: "menu2",
        name: "menu2",
        meta: {
          title: "Menu2",
          icon: "mdi-menu"
        },
        component: renderRouterView,
        children: [
          {
            path: "menu2_1",
            name: "Menu2_1",
            meta: {
              title: "Menu2-1"
            },
            component: () =>
              import(
                /* webpackChunkName: "Menu2_1" */ "../views/nested/menu2/Menu2_1"
              )
          },
          {
            path: "menu2_2",
            name: "Menu2_2",
            meta: {
              title: "Menu2-2",
              icon: "mdi-menu"
            },
            component: renderRouterView,
            children: [
              {
                path: "menu2_2_1",
                name: "Menu2_2_1",
                meta: {
                  title: "Menu2-2-1"
                },
                component: () =>
                  import(
                    /* webpackChunkName: "Menu2_2_1" */ "../views/nested/menu2/menu2-2/Menu2_2_1"
                  )
              },
              {
                path: "menu2_2_2",
                name: "Menu2_2_2",
                meta: {
                  title: "Menu2-2-2"
                },
                component: () =>
                  import(
                    /* webpackChunkName: "Menu2_2_2" */ "../views/nested/menu2/menu2-2/Menu2_2_2"
                  )
              }
            ]
          },
          {
            path: "/nested/menu2/menu2_3",
            name: "Menu2_3",
            meta: {
              title: "Menu2-3"
            },
            component: () =>
              import(
                /* webpackChunkName: "Menu2_3" */ "../views/nested/menu2/Menu2_3"
              )
          }
        ]
      },
      {
        path: "/nested/menu3",
        name: "Menu3",
        meta: { title: "Menu3" },
        component: () =>
          import(/* webpackChunkName: "Menu3" */ "../views/nested/Menu3")
      }
    ]
  },
  {
    path: "/github",
    name: "Github",
    meta: {
      title: "Github",
      icon: "mdi-github-circle"
    },
    component: () => import(/* webpackChunkName: "Github" */ "../views/Github")
  },
  {
    path: "*",
    redirect: "/404",
    hideInMenu: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
