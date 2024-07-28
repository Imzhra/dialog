<template>
    <v-container class="v-container">
        <v-footer>
            <v-row align="center" justify="center">
                <v-btn v-for="item in items" :key="item.id" class="v-footer-btn mx-2">{{ item.text }}</v-btn>
                <v-btn class="mx-6">
                    <v-icon color="yellow">fas fa-cart-shopping</v-icon>
                </v-btn>
            </v-row>
            
        </v-footer>

        <v-row>
            <v-sheet
    class="mx-auto"
    elevation="8"
    max-width="800"
  >
    <v-slide-group
      v-model="model"
      class="pa-4"
      selected-class="bg-success"
      show-arrows
    >
      <v-slide-group-item
        v-for="n in 15"
        :key="n"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          :class="['ma-4', selectedClass]"
          color="grey-lighten-1"
          height="200"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center">
            <v-scale-transition>
              <v-icon
                v-if="isSelected"
                color="white"
                icon="mdi-close-circle-outline"
                size="48"
              ></v-icon>
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
        </v-row>
            
    </v-container>
</template>

<script>
export default {
    data: () => ({
        drawer: false,
        items: [
            {text: 'fruits', id: 1},
            {text: 'drinks', id: 2},
            {text: 'protein', id: 3},
            {text: 'snacks', id: 4},
        ],
        photos:[
            {id:1 ,path:'@/assets/shop2.jpg'},
            {id:2 , path:'@/assets/shop2.jpg'},
            {id:3 , path:'@/assets/shop2.jpg'},
            {id:4 , path:'@/assets/shop2.jpg'},
            {id:5 , path:'@/assets/shop2.jpg'},
            {id:6 , path:'@/assets/shop2.jpg'},
        ]
    }),
}
</script>

<style>
.v-footer-btn {
   background-color: yellow;
   border-radius: 20px;
   color: white;
   outline: none;
}

.v-container {
    background-image: url('@/assets/shop2.jpg');
    background-size: cover;
    background-position: center;
    height: 100vh; 
}

.v-sheet{
    max-width:800 ;
    height:30vh ;
    margin-top: 150px;
}
</style>
