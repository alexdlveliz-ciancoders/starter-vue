<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-card
          class="mx-auto my-12 pt-5 pb-5"
          rounded="lg"
          elevation="5"
        >
          <v-card-title>
            <v-row justify="center">
              INGRESAR
            </v-row>
          </v-card-title>

          <v-form v-model="loginValid">
            <v-card-text>
              <v-row>
                <v-col cols="12" class="mt-0 py-0">
                  <h4
                    class="mb-3"
                  >
                    Usuario
                  </h4>
                  <v-text-field
                    v-model="username"
                    type="text"
                    outlined
                    :rules="usernameRules"
                  />
                </v-col>
                <v-col cols="12" class="my-0 py-0">
                  <h4
                    class="mb-3"
                  >
                    Contraseña
                  </h4>
                  <v-text-field
                    v-model="password"
                    :type="showPassword ? 'type': 'password'"
                    outlined
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :rules="passwordRules"
                    @click:append="() => (showPassword = !showPassword)"
                  />
                </v-col>
              </v-row>
            </v-card-text>

            <v-card-actions class="mb-5">
              <v-row justify="center">
                <v-btn
                  color="primary"
                  @click="submit"
                >
                  Login
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-form>
          <span>¿No tienes una cuenta? <NuxtLink to="/register">Regístrate aquí</NuxtLink></span>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'LoginForm',
  data () {
    return {
      loginValid: false,
      username: '',
      password: '',
      showPassword: false,
      usernameRules: [
        v => !!v || 'EL usuario es requerido'
      ],
      passwordRules: [
        v => !!v || 'La contraseña es requerida'
      ]
    }
  },
  methods: {
    ...mapActions('auth', {
      login: 'login'
    }),
    submit () {
      this.login({
        username: this.username,
        password: this.password
      })
    }
  }
}
</script>
