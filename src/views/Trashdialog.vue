<template>
  <v-dialog v-model="model"  class="v-dialog">
    <v-card class="v-card" 
    style="font-family: 'IranSansWeb', sans-serif">
        <h1>ایا از حذف این ردیف مطمئن هستید؟</h1>
        <v-btn v-if="trash" @click="save">
            <v-icon>fas fa-trash</v-icon>
            yes
        </v-btn>
        <v-btn @click="model = false">
            <v-icon>fa fa-cross</v-icon>
            no
        </v-btn>
    </v-card>
  </v-dialog>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';

interface DataType {
    [key: string]: any; 
}

export default defineComponent({
    props: {
        data: {
            type: Object as PropType<DataType>,
            default: () => ({})
        },
        trash: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue','trash'],

    computed: {
        model: {
            get() :boolean {
                return this.modelValue;
            },
            set(value: boolean) {
                this.$emit('update:modelValue', value);
            }
        }
    },
    data() {
        return {
            loading: false 
        };
    },
    methods: {
        save(data: any) {
            console.log("save clicked");
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$emit('trash', this.data);
                this.model = false;
            }, 3000);
        },
    }
});
</script>


<style>

</style>