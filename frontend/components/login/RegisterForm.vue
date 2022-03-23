<template>
  <div>
    <v-row justify="center">
      <v-col dense cols="12">
        <v-card
          class="mx-auto pt-5 pb-5"
          rouded="lg"
          elevation="5"
          @keyup.enter="submit"
        >
          <v-card-title>
            <v-row justify="center">
              REGISTRO
            </v-row>
          </v-card-title>

          <v-form
            ref="registerForm"
            lazy-validation
          >
            <v-card-text>
              <v-row>
                <v-col cols="12" class="mt-0 py-0">
                  <h4 class="mb-3">
                    Nombre
                  </h4>
                  <v-text-field
                    v-model="firstName"
                    type="text"
                    outlined
                    dense
                    :rules="emptyRules"
                  />
                </v-col>
                <v-col cols="12" class="mt-0 py-0">
                  <h4 class="mb-3">
                    Apellido
                  </h4>
                  <v-text-field
                    v-model="lastName"
                    type="text"
                    outlined
                    dense
                    :rules="emptyRules"
                  />
                </v-col>
                <v-col cols="12" class="mt-0 my-0">
                  <h4 class="mb-3">
                    Usuario
                  </h4>
                  <v-text-field
                    v-model="username"
                    type="text"
                    outlined
                    dense
                    :rules="emptyRules"
                  />
                </v-col>
                <v-col cols="12" class="mt-0 my-0">
                  <h4 class="mb-3">
                    Contraseña
                  </h4>
                  <v-text-field
                    v-model="password"
                    :type="showPassword ? 'text' : 'password'"
                    outlined
                    dense
                    :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :rules="emptyRules"
                    @click:append="() => (showPassword = !showPassword)"
                  />
                </v-col>
                <v-col cols="12" class="mt-0 my-0">
                  <h4 class="mb-3">
                    Confirmar contraseña
                  </h4>
                  <v-text-field
                    v-model="confirmPassword"
                    :type="showConfirmPassword ? 'text' : 'password'"
                    outlined
                    dense
                    :append-icon="showConfirmPassword ? 'mdi-eye-off' : 'mdi-eye'"
                    :rules="passwordRules"
                    @click:append="() => (showConfirmPassword = !showConfirmPassword)"
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
                  Registrarse
                </v-btn>
              </v-row>
            </v-card-actions>
          </v-form>
          <span class="ml-2">¿Ya tienes cuenta? <NuxtLink to="/login">Ingresa aquí</NuxtLink></span>
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
  name: 'RegisterForm',
  data () {
    return {
      // Variables de campos
      firstName: '',
      lastName: '',
      username: '',
      password: '',
      confirmPassword: '',
      // Togglers de contraseña
      showPassword: false,
      showConfirmPassword: false,
      emptyRules: [
        v => !!v || 'Este campo es requerido'
      ],
      passwordRules: [
        v => !!v || 'Este campo es requerido',
        v => (!!v && v) === this.password || 'Las contraseñas deben ser iguales'
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
      register: 'register'
    }),
    submit () {
      if (this.$refs.registerForm.validate() === true) {
        this.register({
          first_name: this.firstName,
          last_name: this.lastName,
          username: this.username,
          password: this.password,
          profile: null
        })
      }
    }
  }
}
</script>
