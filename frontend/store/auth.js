export const state = () => ({
  loader: false,
  me: {}
})

export const mutations = {
  SET_LOADER (state, value) {
    state.loader = value
  },
  SET_ME (state, me) {
    state.me = me
  }
}

export const getters = {
  getLoader (state) {
    return state.loader
  },
  getMe (state) {
    return state.me
  }
}

export const actions = {
  setLoader ({ commit }, value) {
    commit('SET_LOADER', value)
  },
  getPokemon ({ commit }) {
    commit('SET_LOADER', true)
    this.$axios.get('/pokemon/ditto')
      .then((response) => {
        console.log('RESPUESTA:', response)
      })
      .finally(() => commit('SET_LOADER', false))
  },
  login ({ commit }, formData) {
    commit('SET_LOADER', true)
    this.$axios.post('/user/token/', formData)
      .then((response) => {
        const data = response.data
        localStorage.setItem('token', data.token)
        commit('SET_ME', data.user)
        this.app.router.push('/')
      })
      .finally(() => commit('SET_LOADER', false))
  }
}
