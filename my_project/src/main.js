import Vue from 'vue'
import Layout from './components/Layout'
import VueRouter from 'vue-router'
import IndexPage from './pages/index'
import DetailPage from './pages/detail'
import DetailAnaPage from './pages/detail/analysis'
import DetailCouPage from './pages/detail/count'
import DetailForPage from './pages/detail/forecast'
import DetailPubPage from './pages/detail/publish'
Vue.use(VueRouter)
let router = new VueRouter({
	mode:'history',
	routes:[
		{
			path:'/',
			component:IndexPage
		},
		{
			path: '/detail',
			component: DetailPage,
			children:[
				{
					path: 'analysis',
					component: DetailAnaPage
				},
				{
					path: 'count',
					component: DetailCouPage
				},
				{
					path: 'forecast',
					component: DetailForPage
				},
				{
					path: 'publish',
					component: DetailPubPage
				}
			]
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
