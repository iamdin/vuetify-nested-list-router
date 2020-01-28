import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/1",
    name: "menu1",
    meta: {
      title: "menu1",
      icon: "mdi-home"
    }
  },
  {
    path: "/2",
    name: "menu2",
    meta: {
      title: "menu2",
      icon: "mdi-folder"
    },
    children: [
      {
        path: "/2-1",
        name: "menu2-1",
        meta: {
          title: "menu2-1",
          icon: "mdi-folder"
        },
        children: [
          {
            path: "/2-1-1",
            name: "menu2-1-1",
            meta: {
              title: "menu2-1-1",
              icon: "mdi-folder"
            },
            children: [
              {
                path: "/2-1-1-1",
                name: "menu2-1-1-1",
                meta: {
                  title: "menu2-1-1-1",
                  icon: "mdi-folder"
                },
                children: [
                  {
                    path: "/2-1-1-1-1",
                    name: "menu2-1-1-1-1",
                    meta: {
                      title: "menu2-1-1-1-1",
                      icon: "mdi-folder"
                    }
                  }
                ]
              }
            ]
          },
          {
            path: "/2-1-2",
            name: "menu2-1-2",
            meta: {
              title: "menu2-1-2",
              icon: "mdi-folder"
            }
          }
        ]
      },
      {
        path: "/2-2",
        name: "menu2-2",
        meta: {
          title: "menu2-2",
          icon: "mdi-folder"
        }
      }
    ]
  },
  {
    path: "/3",
    name: "menu3",
    meta: { title: "menu3", icon: "mdi-account" }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
