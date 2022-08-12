<template>
  <v-row>
    <v-col cols="12">
      <h4>File input</h4>
      <v-file-input
        label="File Input"
        accept="*/*"
        show-size
      />
      <h4>Multi File input with chips</h4>
      <v-file-input
        label="Multi File Input"
        multiple
        small-chips
        show-size
      />
      <h4>Multi File input with counter</h4>
      <client-only>
        <v-file-input
          label="Multi File Input"
          show-size
          counter
          multiple
        />
      </client-only>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'FileFieldsComponent'
}
</script>

<style>

</style>
