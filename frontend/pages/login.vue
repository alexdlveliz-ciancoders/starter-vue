<template>
  <div class="blue-gradient-bg">
    <v-container>
      <v-row justify="center" align="center">
        <h1 class="text-center">
          Bienvenido a CianStarter
        </h1>
      </v-row>
      <v-row justify="center" align="center">
        <h3>
          Página de login
        </h3>
      </v-row>
    </v-container>
    <br>
    <v-container>
      <v-row justify="center" align="center">
        <v-col cols="12" md="3">
          <LoginForm />
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
import LoginForm from '@/components/login/LoginForm'

export default {
  name: 'LoginPage',
  components: {
    LoginForm
  },
  layout: 'empty'
}
</script>

<style lang="scss" scoped>
  body {
    width: 100vw !important;
  }

  .blue-gradient-bg {
    height: 100vh;
    background: #007bff !important;
    background: linear-gradient(to right, #0062E6, #3ac1ff) !important;
  }

  h1, h2, h3, h4, h5, h6 {
    color: white;
  }
</style>
