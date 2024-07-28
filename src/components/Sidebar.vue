<template >
        <v-window v-model="step">
    

            <v-window-item :value="1">

                <v-app-bar  color="yellow">
                  <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" style="color: black;"></v-app-bar-nav-icon>
                  <v-toolbar-title style="color: black;">Welcome To Daily Shop</v-toolbar-title>
                  <v-spacer></v-spacer>
                </v-app-bar>
  
                <v-navigation-drawer v-model="drawer" temporary style="background-color:yellow;">
                  <v-list>
                    <v-list-item-group>
                      <v-list-item v-for="item in items" :key="item.id" link :to="item.path">
                        
                          <v-list-item-action>
                          <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                          <v-list-item-title>{{ item.text }}</v-list-item-title>
                          
                        </v-list-item-content>
                      
                        
                      </v-list-item>
                    </v-list-item-group>
                  </v-list>
                </v-navigation-drawer>

                <div>
                  <v-row>
                    <v-col :cols="10"></v-col>
                    <v-col :cols="2">
                        <v-form @submit.prevent="submitForm" >
                            <h1 style="display: flex; align-items: center;justify-content: center; ">Login</h1>
                            <v-text-field v-model="text" label="Username"></v-text-field>
                            <v-text-field v-model="email" label="Email"></v-text-field>
                            <v-btn type="submit" style="margin-left: 100px;">Submit</v-btn> <br>                          
                            <h5 style="margin-left: 70px; margin-top: 5px;">  Dont Have An Account?</h5>
                            <v-btn style="margin-left: 100px ; margin-top: 10px;" @click="step++">Sign Up</v-btn>
                        </v-form>
                    </v-col>
                </v-row>
                </div>
            </v-window-item>
            <v-window-item :value="2">      
                        
                 
                <div>
                  <v-row style="display:flex; text-align: center; justify-content: center; margin-top: auto;">
                    <v-col cols="40" md="30">
                      <v-btn @click="step--">
                        <v-icon style="color: blue;">fas fa-arrow-left</v-icon>
                      </v-btn>
                      <v-form @submit.prevent="submitForm" >
                        <h1 style="display: flex; align-items: center;justify-content: center; ">SignUp</h1>
                        <v-text-field v-model="text" label="Username"></v-text-field>
                        <v-text-field v-model="password" label="Password"></v-text-field>
                        <v-text-field v-model="email" label="Email"></v-text-field>
                        <v-text-field v-model="text" label="Gender"></v-text-field>
                        <div style="text-align: center;">
                            <v-btn type="submit" style="margin-left: auto; margin-right: auto;">Submit</v-btn> <br>
                            <div style="text-align: center;">
                                <h4 style="display: inline-block; margin-top: 20px;">Remember Me</h4>
                                <v-checkbox style="display: inline-block; vertical-align: middle; margin-top: 10px;"></v-checkbox>
                            </div>
                        </div>                                                       
                        <h5 style="margin-left: 10px; margin-top: 15px;"> Or Continue With</h5><br>
                        <div class="d-flex justify-space-between align-center mx-10 mb-16">
                            <v-btn>
                            <v-icon color="red">fa-brands fa-google</v-icon>
                        </v-btn>
                        <v-btn >
                            <v-icon color="blue-lighten-3">fa-brands fa-twitter</v-icon>
                        </v-btn>
                        <v-btn>
                            <v-icon color="blue">fa-brands fa-facebook</v-icon>
                        </v-btn>
                        </div>
                        </v-form>
                        </v-col>
                    </v-row>
                </div>
                
            </v-window-item>
        </v-window>   

  </template>
  
  <script>
  export default {
    data: () => ({
      drawer: false,
      step : 1,
      items: [
        { icon: 'fas fa-user', text: 'User', path:'/user' },
        { icon: 'fas fa-store', text: 'Store', path:'/store' },
        { icon: 'fas fa-question', text: 'About Us', path:'/about' },
      ],

    
    }),
    methods: {
    submitForm() {
      // Handle form submission logic here
      console.log('Form submitted with data:', this.text);
  },
}
  }
</script>

  