<template>
  <v-row>
    <v-col>
      <h4>select inputs</h4>
      <v-autocomplete
        v-model="value"
        clearable
        :items="items"
      />
      <h4>Multi select</h4>
      <v-autocomplete
        v-model="values"
        clearable
        multiple
        :items="items"
      />
      <h4>Async Select</h4>
      <v-autocomplete
        v-model="character"
        clearable
        :items="characters"
        :loading="loading"
        :search-input.sync="searchCharacter"
        item-text="name"
        item-value="id"
      />
      <span>{{character}}</span>
    </v-col>
  </v-row>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import debounce from 'lodash/debounce'

export default {
  name: 'SelectFormInputsComponent',
  data () {
    return {
      // Normal selects
      items: ['primary', 'secondary', 'warning', 'error'],
      value: null,
      values: [],
      // Async select
      searchCharacter: null,
      character: null
    }
  },
  computed: {
    ...mapGetters('inputs', {
      characters: 'getCharacters',
      loading: 'getLoader'
    })
  },
  watch: {
    searchCharacter: 'fetchCharacters'
  },
  async mounted () {
    await this.$store.dispatch('inputs/getCharacters', 'rick')
  },
  methods: {
    ...mapActions('inputs', {
      getCharacters: 'getCharacters'
    }),
    fetchCharacters: debounce(async function (name) {
      await this.getCharacters(name)
    })
  }
}
</script>

<style>

</style>
