import Vue from "vue";
import Vuex from 'vuex';
import createPersistedState from 'vuex-persistedstate'

Vue.use(Vuex);


const store = new Vuex.Store({
    state: {
        password: ""
    },
    getters: {
        isAuth: (state) => {
            return state.password == "23196c9c0be87f9e134d64732d7c291943acfd16d1778d5d0226658387759ef7"
        }
    },
    mutations: {
        changepass(state,ps) {
            state.password = ps
        },
        clearpass(state){
            state.password = ""
        }
    },
    plugins: [createPersistedState(
        {
            key: 'githubiotrpg',
            paths: ['password'],
            storage: window.localStorage,
        }
    )]
});

export default store;