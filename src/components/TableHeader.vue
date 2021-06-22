<template>
  <v-sheet >
                  
    <v-row no-gutters>

      <v-col cols="3">
        <v-card class="fill-height bg" outlined tile />
      </v-col>

      <v-col v-for="(d, i) in weekdays" :key="i">
        <v-card outlined tile>
          <div class="text-body-2 text-center bg wh" @click="$emit('cday', i)">{{d}} {{cweek.work[i].slice(0, 2)}}</div> 
        </v-card>
      </v-col>                    

    </v-row>

    <table-content  v-if="choise"/>
    
  </v-sheet>
</template>

<script>
import TableContent from './TableContent.vue'

export default {
  props: ['choise', 'cweek'],
  data() {
    return {
      weekdays: ['пн', 'вт', 'ср', 'чт', 'пт'],
    }
  },
  components: {
    TableContent
  }
}
</script>

<style scoped>
.bg {
  background-color:  #ECEFF1;
  cursor: pointer;
}
.wh {
  height: 2rem;
  width: 100%;
  line-height: 2rem;
}
</style>