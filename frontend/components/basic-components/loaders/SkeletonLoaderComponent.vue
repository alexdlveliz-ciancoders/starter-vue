<template>
  <v-row>
    <v-col>
      <h4>Skeleton loader</h4>
      <v-skeleton-loader
        class="mx-auto"
        type="card"
      />
      <h4>Skeleton loader personalizado</h4>
      <v-skeleton-loader
        class="mx-auto"
        type="list-item-avatar, divider, card-heading, table"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'SkeletonLoaderComponent'
}
</script>

<style>

</style>
