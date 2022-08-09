<template>
  <v-row>
    <v-col>
      <h4>Circular loader</h4>
      <div class="d-flex justify-space-between">
        <v-progress-circular
          indeterminate
          color="primary"
        />
        <v-progress-circular
          indeterminate
          color="danger"
        />
        <v-progress-circular
          color="secondary"
          value="50"
        >
          50
        </v-progress-circular>
        <v-progress-circular
          indeterminate
          color="custom"
          size="50"
        />
      </div>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'CircularLoaderComponent'
}
</script>

<style>

</style>
