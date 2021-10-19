import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        nomRestaurantRecherche:'',
        pageSize:'',
    },
    getters:{

    },
    mutations:{
        setNomRestaurantRecherche(nvNomRestaurant){
            state.nomRestaurantRecherche = nvNomRestaurant
        },
        setPageSize(nvPage){
            state.pageSize = nvPage
        }
    }
})