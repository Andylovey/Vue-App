//入口文件

//导入Vue框架
import Vue from 'vue'
//导入App组件
import app from './App.vue'
//导入Mint-UI 组件
import { Header } from 'mint-ui'
Vue.component(Header.name , Header)

//导入MUI框架
import './lib/mui/css/mui.min.css'

var vm = new Vue({
    el : '#app',
    render : c => c(app)
})