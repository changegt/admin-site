import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

const _import = require('./_import_dev.js');
Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', component: _import('login/index')},
    { path: '/login', component: _import('login/index')},
    { path: '/backstage', component: _import('backstage/index')}
  ]
})
