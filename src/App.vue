<template>
  <v-app>
    <v-main>
      <layout />     
    </v-main>
  </v-app>
</template>

<script>
import Layout from './components/Layout.vue'

export default {
  name: 'App',
  components: {
    Layout,
  },  
};
</script>
