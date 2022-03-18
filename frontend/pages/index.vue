<template>
  <v-row justify="center" align="center">
    <h1>{{ loader }}</h1>
    <v-btn primary @click="getPokemon">
      obtener pokemon
    </v-btn>
  </v-row>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'IndexPage',
  computed: {
    ...mapGetters('auth', {
      loader: 'getLoader'
    })
  },
  methods: {
    ...mapActions('auth', {
      getPokemon: 'getPokemon'
    })
  }
}
</script>
