// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
vue.use(VueRouter)
let router = new VueRouter({
	mode:'history',
	routers:[
		{
			path:'/',
			components:IndexPage
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
