<template>
  <v-row>
    <v-col>
      <h4>Checkboxes</h4>
      <v-checkbox
        value
        label="Default"
      />
      <v-checkbox
        value
        label="Disabled"
        disabled
        style="margin: -1rem 0;"
      />
    </v-col>
    <v-col>
      <h4>Radio Buttons</h4>
      <v-radio-group>
        <v-radio
          key="1"
          label="Default"
          value="1"
        />
        <v-radio
          key="2"
          label="Default 2"
          value="2"
        />
        <v-radio
          key="3"
          label="Disabled"
          disabled
          value="3"
        />
      </v-radio-group>
    </v-col>
    <v-col class="d-flex flex-column">
      <h4>Toggle Switches</h4>
      <v-switch
        label="Default"
      />
      <v-switch
        label="Inset"
        inset
        style="margin-top: -1rem;"
      />
      <v-switch
        label="Disabled"
        disabled
        style="margin-top: -1rem;"
      />
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: 'StateComponents'
}
</script>

<style>

</style>
