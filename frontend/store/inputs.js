const SET_LOADER = 'SET_LOADER'
const SET_CHARACTERS = 'SET_CHARACTERS'
const SET_ERROR = 'SET_ERROR'

export const state = () => ({
  loader: false,
  characters: [],
  error: ''
})

export const mutations = {
  SET_LOADER (state, value) {
    state.loader = value
  },
  SET_CHARACTERS (state, characters) {
    state.characters = characters
  },
  SET_ERROR (state, error) {
    state.error = error
  }
}

export const getters = {
  getLoader (state) {
    return state.loader
  },
  getCharacters (state) {
    return state.characters
  },
  getError (state) {
    return state.error
  }
}

export const actions = {
  setLoader ({ commit }, value) {
    commit(SET_LOADER, value)
  },
  getCharacters ({ commit }, name) {
    commit(SET_LOADER, true)
    this.$axios.get(`https://rickandmortyapi.com/api/character/?name=${name}&status=alive`)
      .then(response => {
        const { results } = response.data
        commit(SET_CHARACTERS, results)
      })
      .catch(error => {
        commit(SET_ERROR, error)
        commit(SET_CHARACTERS, [])
      })
      .finally(() => commit(SET_LOADER, false))
  }
}
