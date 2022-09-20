import { createStore } from 'vuex'

export default createStore({
  state: {
    //银行名称
    yinhan:"",
    //男声 女声
    voice:"",
    //速度
    speed:"",
  },
  getters: {
  },
  mutations: {
    Voice:(state,params)=> {
        state.voice = params.lang
        state.speed = params.sudu
    },
  },
  actions: {
  },
  modules: {
  }
})
