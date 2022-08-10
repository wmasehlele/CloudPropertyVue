import axios from 'axios'

export default {
    namespaced: true,
    state: {
        token: null,
        user: null
    },
    getters: {
        authenticated (state) {
            return state.token && Object.keys(state.user).length > 0
        },

        user (state) {
            return state.user
        }
    },
    mutations: {
        SET_TOKEN (state, token){
            state.token = token
        },
        SET_USER (state, user){
            if (user == null){
                user = {
                    name: null,
                    email: null
                }
            }
            state.user = user
        }

    },
    actions: {
        async signIn({ dispatch }, credentials) {
            let response = await axios.post('login', credentials)
            return dispatch('attempt', response.data.access_token)
        },
        async attempt({ commit, state }, token ){
            if (token){
                commit('SET_TOKEN', token)
            }

            if (state.token == null) {
                return false;
            }

            try{
                let response = await axios.get('profile')
                commit('SET_USER', response.data)
            }catch (e){
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        signOut ( { commit }) {
            return axios.post('logout').then(() => {
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            })
        }
    }
}
