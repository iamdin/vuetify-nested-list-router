import Vue from "vue";
import VueRouter from "vue-router";
import Dashboard from "../views/Dashboard";
import Nested from "../views/nested/Nested";

Vue.use(VueRouter);

/*
 * 基于递归组件的路由表的编写遵循以下原则：

 * · hideInMenu为true时，该路由将不会添加在侧边导航栏中
 * · meta：{ 
 *     title //  导航栏列表文本
 *     icon  // 导航栏列表图标，没有则不会渲染
 *   }
 * · 每个含有children属性的对象都要有自己的component，且其中包含 <router-view />，保证子组件能够渲染
 * · 嵌套路由的path必须填写全部路径，例：/nested/menu2/menu2_2/menu2_2_1
 *  （ 递归List组件设计之初未考虑到嵌套路由的渲染问题，导致使用这种解决方案 ）
 * 
 */

const routes = [
  {
    path: "/",
    redirect: "/dashboard",
    hideInMenu: true
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
    meta: {
      title: "Nested",
      icon: "mdi-xbox-controller-menu"
    },
    component: () =>
      import(/* webpackChunkName: "Nested" */ "../views/nested/Nested"),
    children: [
      {
        path: "/nested/menu1",
        name: "Menu1",
        meta: {
          title: "Menu1"
        },
        component: () =>
          import(/* webpackChunkName: "Menu1" */ "../views/nested/Menu1")
      },
      {
        path: "/nested/menu2",
        name: "menu2",
        meta: {
          title: "Menu2",
          icon: "mdi-menu"
        },
        component: () =>
          import(/* webpackChunkName: "Menu2" */ "../views/nested/menu2/Menu2"),
        children: [
          {
            path: "/nested/menu2/menu2_1",
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
            path: "/nested/menu2/menu2_2",
            name: "Menu2_2",
            meta: {
              title: "Menu2-2",
              icon: "mdi-menu"
            },
            component: () =>
              import(
                /* webpackChunkName: "Menu2_2" */ "../views/nested/menu2/menu2-2/Menu2_2"
              ),
            children: [
              {
                path: "/nested/menu2/menu2_2/menu2_2_1",
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
                path: "/nested/menu2/menu2_2/menu2_2_2",
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
    name: "NotFound",
    hideInMenu: true
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
