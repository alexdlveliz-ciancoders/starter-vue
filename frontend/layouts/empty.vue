<template>
  <v-app>
    <notifications group="emptyNotifications" position="top left">
      <template slot="body" slot-scope="props">
        <div :class="getNotificationType(props.item.type)">
          <p class="title">
            {{ props.item.title }}
          </p>
          <div>
            {{ props.item.text }}
          </div>
        </div>
      </template>
    </notifications>
    <Nuxt />
  </v-app>
</template>

<script>
export default {
  name: 'EmptyLayout',
  methods: {
    getNotificationType (type) {
      switch (type) {
        case 'success':
          return 'notification success'
        case 'warning':
          return 'notification warning'
        case 'error':
          return 'notification error'
        default:
          return 'notification'
      }
    }
  }
}
</script>\
