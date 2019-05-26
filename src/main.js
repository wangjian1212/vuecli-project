import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)


//引入MintUI组件
import {Header} from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.component(Header.name, Header)

//引入MUI
import './lib/mui/css/mui.min.css'
import './lib/mui/css/icons-extra.css'

import router from './router/router.js'

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
