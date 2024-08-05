<template>
  <Datatable />
</template>

<script lang="ts">
import { defineComponent } from 'vue';

// Components
import HelloWorld from '@/components/HelloWorld.vue';
import Datatable from '@/components/Datatable.vue';

// در صورتی که نیاز به تعریف نوع برای props داشته باشید، می‌توانید اینجا اضافه کنید
export default defineComponent({
  name: 'HomeView',

  components: {
    HelloWorld,
    Datatable,
  },

  setup() {
    // می‌توانید منطق کامپوننت را در اینجا اضافه کنید

    return {
      // داده‌ها و متدها را اینجا برمی‌گردانید
    };
  },
});
</script>
