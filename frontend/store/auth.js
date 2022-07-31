const SET_LOADER = 'SET_LOADER'
const SET_ME = 'SET_ME'
const SET_ERROR = 'SET_ERROR'

export const state = () => ({
  loader: false,
  me: {},
  error: ''
})

export const mutations = {
  SET_LOADER (state, value) {
    state.loader = value
  },
  SET_ME (state, me) {
    state.me = me
  },
  SET_ERROR (state, error) {
    state.error = error
  }
}

export const getters = {
  getLoader (state) {
    return state.loader
  },
  getMe (state) {
    return state.me
  },
  getError (state) {
    return state.error
  }
}

export const actions = {
  setLoader ({ commit }, value) {
    commit(SET_LOADER, value)
  },
  login ({ commit }, formData) {
    commit(SET_LOADER, true)
    this.$axios.post('/user/token/', formData)
      .then(response => {
        const data = response.data
        localStorage.setItem('token', data.token)
        commit(SET_ME, data.user)
        this.$router.push('/')
      })
      .finally(() => {
        commit(SET_LOADER, false)
      })
  },
  register ({ commit }, formData) {
    commit(SET_LOADER, true)
    this.$axios.post('/user/', formData)
      .then(() => {
        this.$notify({
          group: 'emptyNotifications',
          type: 'success',
          title: 'ÉXITO',
          text: 'Tu cuenta se ha creado, por favor inicia sesión'
        })
        this.$router.push('/login')
      })
      .catch(error => {
        commit(SET_ERROR, error)
      })
      .finally(() => commit(SET_LOADER, false))
  },
  getMe ({ commit }, token) {
    commit(SET_LOADER, true)
    this.$axios.get('/user/me/', {
      headers: {
        Authorization: `Token ${token}`
      }
    })
      .then(response => {
        commit(SET_ME, response.data)
      })
      .finally(() => commit(SET_LOADER, false))
  }
}
