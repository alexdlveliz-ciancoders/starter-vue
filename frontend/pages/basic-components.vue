<template>
  <div>
    <h1>Componentes básicos</h1>
    <v-row class="mt-1">
      <v-col cols="7">
        <v-card>
          <v-card-title>
            Form Inputs
          </v-card-title>
          <v-divider />
          <v-card-text>
            <state-components />
          </v-card-text>
          <v-divider />
          <v-card-text>
            <x-small-buttons />
            <small-buttons />
            <normal-buttons />
            <normal-outline-buttons />
            <text-buttons />
            <floating-action-buttons />
            <icon-buttons />
          </v-card-text>
          <v-divider />
          <v-card-text>
            <v-row>
              <h3>Inputs</h3>
            </v-row>
            <input-fields-component />
            <file-fields-component />
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="7">
        <v-card>
          <v-card-title>
            Loaders
          </v-card-title>
          <v-divider />
          <v-card-text>
            <skeleton-loader-component />
          </v-card-text>
          <v-divider />
          <v-card-text>
            <circular-loader-component />
          </v-card-text>
          <v-divider />
          <h4>Linear</h4>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
// Components
import StateComponents from '@/components/basic-components/StateComponents'
import XSmallButtons from '@/components/basic-components/button-components/XSmallButtons'
import SmallButtons from '@/components/basic-components/button-components/SmallButtons'
import NormalButtons from '@/components/basic-components/button-components/NormalButtons'
import NormalOutlineButtons from '@/components/basic-components/button-components/NormalOutlineButtons'
import TextButtons from '@/components/basic-components/button-components/TextButtons'
import FloatingActionButtons from '@/components/basic-components/button-components/FloatingActionButtons'
import IconButtons from '@/components/basic-components/button-components/IconButtons'
import InputFieldsComponent from '@/components/basic-components/input-fields/InputFieldsComponent'
import FileFieldsComponent from '@/components/basic-components/input-fields/FileFieldsComponent'
import SkeletonLoaderComponent from '@/components/basic-components/loaders/SkeletonLoaderComponent'
import CircularLoaderComponent from '@/components/basic-components/loaders/CircularLoaderComponent.vue'

export default {
  name: 'BasicComponents',
  components: {
    StateComponents,
    XSmallButtons,
    SmallButtons,
    NormalButtons,
    NormalOutlineButtons,
    TextButtons,
    FloatingActionButtons,
    IconButtons,
    InputFieldsComponent,
    FileFieldsComponent,
    SkeletonLoaderComponent,
    CircularLoaderComponent
  }
}
</script>

<style scoped>

</style>
