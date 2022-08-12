<template>
  <v-row>
    <v-col>
      <v-container>
        <h4>Linear Loader</h4>
        <v-progress-linear
          indeterminate
          color="primary"
        />
        <h4>Reversed linear loader</h4>
        <v-progress-linear
          indeterminate
          reverse
          color="secondary"
        />
        <h4>Stream</h4>
        <v-progress-linear
          buffer-value="60"
          value="40"
          stream
          color="custom"
        />
        <h4>Number</h4>
        <v-progress-linear
          value="50"
          height="25"
          rounded
        >
          50%
        </v-progress-linear>
      </v-container>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'LinearLoaderComponent'
}
</script>

<style>

</style>
