<template>
<v-container fluid>
    <v-container>
        <v-row no-gutters>
            <v-col cols="12">
              <v-card class="pa-0 bg" outlined elevation="2">
                <v-row no-gutters class>
                  <v-col cols="4">
                    <div class="text-h4 font-weight-bold pt-6 pl-8">Работа на дому</div>
                  </v-col>
                  <v-col cols="8"> 
                    <calendar />
                  </v-col>
                </v-row>
              </v-card>
            </v-col>
          </v-row>
    </v-container>
</v-container>
</template>

<script>
import Calendar from './Calendar.vue'

export default {
  components: {
    Calendar,
  }
}
</script>

<style scoped>
  .bg {
    background-image: url(../assets/inhome.png);
    background-size: 42%;
  }
  .bgl {
    background-image: linear-gradient(#FAFAFA, #616161);
  }
</style>