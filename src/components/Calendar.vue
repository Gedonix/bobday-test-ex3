<template>
  <v-card elevation="2" outlined>

      <v-row no-gutters>
        <v-col offset="11">
          <v-icon class="pa-2">mdi-close</v-icon>
        </v-col>        
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-toolbar flat class="d-flex justify-center">                        
            <v-btn fab text small color="grey darken-2"  @click="prev">
              <v-icon>mdi-chevron-double-left</v-icon>
            </v-btn>
            <v-toolbar-title class="tex-body-2 text-center font-weight-light" >
              НЕДЕЛЯ {{ weekObj.week }} <br> {{ weekObj.mon }}-{{ weekObj.fri }}
            </v-toolbar-title>
            <v-btn fab text small color="grey darken-2" @click="next">
              <v-icon>mdi-chevron-double-right</v-icon>
            </v-btn>                       
          </v-toolbar>
        </v-col>
      </v-row>

      <v-row>
        <v-col class="pl-8 pr-8">
          <v-sheet height="350">

            <v-row>
              <v-col>
                <table-header :choise="choise" :cweek="weekObj" @cday="date = weekObj.work[$event]" />
              </v-col>
            </v-row>

            <v-row no-gutters class="mt-6">
              <v-col cols="8"/>
              <v-col v-if="choise" offset="1" cols="3" >
                <v-btn text class="text-body-2 text-center font-weight-medium"
                >Выбрать</v-btn>
              </v-col>
              <v-col v-else cols="4">
                <v-btn depressed color="error" class="text-body-2 text-center font-weight-medium"
                @click="showTable" width="150" dense>Выбрать {{date}}</v-btn>                
              </v-col>
            </v-row>                            

          </v-sheet>
        </v-col>
      </v-row>

  </v-card>
</template>

<script>
import TableHeader from './TableHeader.vue'
import weeks from '../lib/weeks.js'

export default {
  data() {
    return {
      choise: false,
      date: '',
      weekObj:{},
      currentWeek: 1,
    }
  },
  methods: {
    showTable() {
      this.choise = true
    },
    showWeek(wn) {
      this.weekObj = weeks.find(e => e.week === wn)
    },
    prev() {
      if(this.currentWeek > 1){
        this.currentWeek--
        this.showWeek(this.currentWeek)
      }
    },
    next() {
      if(this.currentWeek < 52){
        this.currentWeek++
        this.showWeek(this.currentWeek)
      }
    },
  },
  components: {
    TableHeader
  },
  beforeMount(){
    this.showWeek(this.currentWeek)
  }
}
</script>

<style scoped>
.v-btn  {
  text-transform: none;
}
.active {
  color: red
}
</style>