# vuetify-nested-list-router

基于 Vuetify 组件库的`<v-list>`组件套件，通过组件递归，适应动态无限嵌套路由的侧标导航栏

## `<v-nested-list />`

使用Vuetify的`<v-list>`,`<v-list-item>`,`<v-list-group>`组件实现的嵌套列表，通过在`<v-list-group>`中调用自身（组件递归），完成对无限嵌套的路由表生成导航栏，从而适应动态路由表的需求

#### prop

```javascript
props: {
    propsRoutes: {		//list数组
        type: Array,
        required: true,
        default: []
    },
    activeColor: {		//列表项active状态时的背景颜色
        type: String,
        default: "success"
    }
},
```

## router规则

- `hideInMenu: boolean`,过滤路由中不渲染在导航栏的路径
- `meta: {title: "",icon: ""}`定义导航栏中的图标及文字
- 基于命名路由的路由跳转，故要求路径对象的name属性必须唯一
- 嵌套路由渲染需要父组件中含有`<router-view/>`保证组件的渲染，通过`component：{ render: h => h("router-view") }`使用render函数渲染`<router-view/>`，不必在使用.vue单文件组件