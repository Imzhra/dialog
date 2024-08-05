<template>
  <v-dialog v-model="model" max-width="90%" width="800px" class="v-dialog">
      <v-card class="v-card" max-width="800px"
          style="height: 750px;border-radius: 70px; font-family: 'IranSansWeb', sans-serif"
          title="اطلاعات خود را وارد کنید" prepend-icon="fas fa-user" dir="rtl">
          <v-form dir="rtl">
              <v-row>
                  <v-col cols="6">
                      <v-text-field v-model="data.id" label="id" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field v-model="data.name" label="نام" type="text"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field v-model="data.lastname" label="نام خانوادگی" type="text"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field v-model="data.age" label="سن" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field v-model="data.job" label="شغل" type="text"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      <v-select v-model="data.education" label="تحصیلات"
                          :items="['دیپلم', 'لیسانس', 'فوق لیسانس', 'دکتری']">
                      </v-select>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field v-model="data.phonenumber" label="تلفن" type="number"></v-text-field>
                  </v-col>
                  <v-col cols="6">
                      <v-text-field v-model="data.address" label="آدرس" type="text"></v-text-field>
                  </v-col>
                  <v-col cols="2">
                      <v-radio-group v-model="data.gender">جنسیت
                          <v-radio label="زن" value="زن" class="v-radio"></v-radio>
                          <v-radio label="مرد" value="مرد" class="v-radio"></v-radio>
                      </v-radio-group>
                  </v-col>
                  <v-col cols="6"></v-col>
                  <v-col cols="5"></v-col>
                  <v-col cols="4">
                      <v-btn @click="model = false">
                          <v-icon>fa fa-cross</v-icon>
                          close
                      </v-btn>
                      <v-btn :loading="loading" v-if="isEditable" @click="save">
                          <v-icon>fa fa-save</v-icon>
                          save
                      </v-btn>
                      <v-btn :loading="loading" v-if="isNew" @click="saveNew">
                          <v-icon>fa fa-save</v-icon>
                          save
                      </v-btn>
                  </v-col>
              </v-row>
          </v-form>
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
        isEditable: {
            type: Boolean,
            default: false
        },
        isNew: {
            type: Boolean,
            default: false
        },
        modelValue: {
            type: Boolean,
            default: false
        }
    },
    emits: ['update:modelValue', 'save','SaveNew'],

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
                this.$emit('save', this.data);
                this.model = false;
            }, 3000);
        },
        saveNew(data: any) {
            console.log("save clicked");
            this.loading = true;
            setTimeout(() => {
                this.loading = false;
                this.$emit('SaveNew', this.data);
                this.model = false;
            }, 3000);
        }
    }
});
</script>


<style>

</style>