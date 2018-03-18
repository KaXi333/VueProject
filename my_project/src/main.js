import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
Vue.use(VueRouter)
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		}
	]
})
Vue.config.productionTip = false

new Vue({
  el: '#app',
  router,
  components: { Layout },
  template: '<Layout/>'
})
