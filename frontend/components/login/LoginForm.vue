<template>
  <div>
    <v-row justify="center">
      <v-col cols="12">
        <v-card
          class="mx-auto my-12 pt-5 pb-5"
          rounded="lg"
          elevation="5"
          @keyup.enter="submit"
        >
          <v-card-title>
            <v-row justify="center">
              INGRESAR
            </v-row>
          </v-card-title>

          <v-form
            ref="loginForm"
            lazy-validation
          >
            <v-card-text>
              <v-row>
                <v-col cols="12" class="mt-0 py-0">
                  <h4 class="mb-3">
                    Usuario
                  </h4>
                  <v-text-field
                    v-model="username"
                    type="text"
                    outlined
                    dense
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
                    :type="showPassword ? 'text': 'password'"
                    outlined
                    dense
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
          <span class="ml-2">¿No tienes una cuenta? <NuxtLink to="/register">Regístrate aquí</NuxtLink></span>
          <v-overlay class="load-mask-content" absolute :value="loader">
            <v-progress-circular indeterminate size="64" />
          </v-overlay>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'LoginForm',
  data () {
    return {
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
  computed: {
    ...mapGetters('auth', {
      loader: 'getLoader'
    })
  },
  methods: {
    ...mapActions('auth', {
      login: 'login'
    }),
    submit () {
      if (this.$refs.loginForm.validate() === true) {
        this.login({
          username: this.username,
          password: this.password
        })
      }
    }
  }
}
</script>
