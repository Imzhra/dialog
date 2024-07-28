<template>
  <v-app>
    <v-main>
      <div>
        <router-link to="/"></router-link><br>
      </div>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
import Sidebar from './components/Sidebar.vue';



export default {
  name: 'App',
  components:{
  },

  data: () => ({
    //
  }),
}
</script>