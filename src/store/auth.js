//import axios from 'axios'

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
                    name: 'william',
                    email: 'Moela'
                }
            }
            state.user = user
        }

    },
    actions: {
        async signIn({ dispatch }, credentials) {
            //let response = await axios.post('login', credentials)
            //return dispatch('attempt', response.data.access_token)
            credentials = "sometoken"
            return dispatch('attempt', credentials)
        },
        async attempt({ commit, state }, token ){
            if (token){
                console.log("setting token "+ token)
                commit('SET_TOKEN', token)
            }
            console.log("checking state")
            if (state.token == null) {
                console.log("logging in failed")
                return false;
            }

            try{
                //let response = await axios.get('profile')
                let response = {
                    data : {
                        name: 'william',
                        email: 'Moela'
                    }
                }
                commit('SET_USER', response.data)
            }catch (e){
                commit('SET_TOKEN', null)
                commit('SET_USER', null)
            }
        },
        signOut ( { commit }) {
            commit('SET_TOKEN', null)
            commit('SET_USER', null)            
            // return axios.post('logout').then(() => {
            //     commit('SET_TOKEN', null)
            //     commit('SET_USER', null)
            // })
        }
    }
}
