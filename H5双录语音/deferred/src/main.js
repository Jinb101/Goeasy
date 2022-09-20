import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './assets/icon/iconfont.css' // 引入字体图标样式
import store from './store'
import axios from 'axios'


createApp(App).use(store).use(router).mount('#app')

