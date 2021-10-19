import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import Vuex from 'vuex'


Vue.use(Vuex)
// ------ STORE -------- //
const store = new Vuex.Store({
  state: {
    nomRestaurantRecherche: '',
    pageSize: '',
  },
  getters: {

  },
  mutations: {
    setNomRestaurantRecherche(nvNomRestaurant) {
      this.state.nomRestaurantRecherche = nvNomRestaurant
    },
    setPageSize(nvPage) {
      this.state.pageSize = nvPage
    }
  }
})

Vue.config.productionTip = false
new Vue({
  vuetify,
  store: store,
  render: h => h(App),
}).$mount('#app')




