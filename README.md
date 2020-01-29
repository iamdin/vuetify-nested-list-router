# vuetify-nested-list-router

基于 Vuetify 组件库实现侧边导航栏，使用`<v-list>`组件通过组件递归，适应嵌套路由

## `<v-nested-list> </v-nested-list>`

使用Vuetify的`<v-list>`,`<v-list-item>`,`<v-list-group>`组件实现的嵌套列表，并在`<v-list-group>`中调用自身，实现组件递归

### prop

```javascript
props: {
  propsRoutes: {	//向组件传递参数，数组
    type: Array,
    required: true,
    default: () => {
      return [];
    }
  }
}
```

## Todo

一下两个问题需要解决

- [ ] 未解决嵌套路由的子路由问题，目前路由的 path 属性必须全写路径，
- [ ] 每个拥有嵌套子路由（即含有 children 属性）的对象都需要有一个单文件组件，并添加`<router-view>`

> 虽然基于Vuetify的`v-list`套件实现了递归List，从而能够更好的用于根据路由表生成侧边导航栏，解决了基于路由表嵌套逐个配置侧边栏组件的繁琐，但是上述两个问题仍存在一些繁琐路由配置。
>
> 在路由表相当庞大且存在嵌套的情况下，此种方法还是能省去不少麻烦