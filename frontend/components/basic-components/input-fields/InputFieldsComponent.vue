<template>
  <v-row>
    <v-col>
      <h4>Normal Field</h4>
      <v-text-field
        label="Normal Field"
      />
      <h4>Number Field</h4>
      <v-text-field
        label="Number Field"
        type="number"
      />
      <h4>Number Field with Suffix</h4>
      <v-text-field
        label="Field with Suffix"
        suffix="@gmail.com"
      />
    </v-col>
    <v-col>
      <h4>Password Field</h4>
      <v-text-field
        label="Password Field"
        :type="showPassword ? 'text' : 'password'"
        :append-icon="showPassword ? 'mdi-eye-off' : 'mdi-eye'"
        @click:append="togglePassword"
      />
      <h4>Number Field Decimal Scale</h4>
      <v-text-field
        label="Number Field decimal scale"
        type="number"
      />
      <h4>Field with prefix</h4>
      <v-text-field
        label="Field with prefix"
        type="number"
        prefix="Q."
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'InputFieldsComponent',
  data () {
    return {
      showPassword: false
    }
  },
  methods: {
    togglePassword () {
      this.showPassword = !this.showPassword
    }
  }
}
</script>

<style>

</style>
