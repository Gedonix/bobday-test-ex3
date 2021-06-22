<template>
  <v-sheet>

    <v-row no-gutters>
                  
      <v-col cols="3">
        <v-card outlined tile class="d-flex flex-column align-center justify-center">
          <v-icon class="" color="green accent-1" size="60">mdi-square-rounded</v-icon>
          <div class="caption text-center">Иванов<br>Иван Петрович</div>
        </v-card>                      
      </v-col>
                  
      <v-col>
        <v-card outlined tile class="d-flex flex-column align-center justify-center fill-height">
          <div class="fill bg pa-4"></div>
        </v-card>                     
      </v-col>

      <v-col v-for="v in 4" :key="v">
        <v-card outlined tile class="d-flex flex-column align-center justify-center fill-height" />
      </v-col>

    </v-row>
                  
    <v-row no-gutters>
                    
      <v-col cols="3" >
        <v-card outlined tile class="d-flex flex-column align-center justify-center">
          <v-icon class="" color="green accent-1" size="60">mdi-square-rounded</v-icon>
          <div class="caption text-center">Петров<br>Петр Иванович</div>
        </v-card>  
      </v-col>
      
      <v-col>
        <v-card outlined tile class="d-flex flex-column align-center justify-center fill-height" /> 
      </v-col>     
      <v-col>
        <v-card outlined tile class="d-flex flex-column align-center justify-center fill-height">                        
          <div class="fill bg pa-4"></div>
        </v-card>
      </v-col>
      <v-col v-for="v in 3" :key="v">
        <v-card outlined tile class="d-flex flex-column align-center justify-center fill-height" />
      </v-col>

    </v-row>  

  </v-sheet>
</template>

<script>
export default {

}
</script>

<style scoped>
.bg {
  background-image: linear-gradient(#81C784, #B9F6CA);
}
.fill {
  margin: 10px;
  width: 80%;
  height: 80%;
}
</style>