
<template >
    <form-slot dir="rtl" v-slot:first style="height: 50%; width: 70%; font-family: 'IranSansWeb', sans-serif;">
    <h2>طرح ها</h2>
            <h3>-طرح1</h3>
            <h5>  *پروژه1</h5>
            <h5>  *پروژه2</h5>
            <h3>-طرح2</h3>

            <h2>مجریان طرح</h2>
            <h3>مجری طرح 1</h3>
            <h5>  *پروژه1</h5>
            <h5>  *پروژه2</h5>
            <h3>مجری طرح 2</h3>
  </form-slot>

  <form-slot v-slot:first style="border: solid lightgreen; border-radius: 15pt; font-family: 'IranSansWeb', sans-serif;
   width: 300%; height: 80%;margin-left: 350pt; background-color: white;">
    <div style="border: 2px solid blue; border-radius: 15pt;width: 100%; height: 5%;">
    <v-row>
      <v-col cols="10">
        <v-text-field v-model="listSub.Title" variant="none"  dir="rtl"></v-text-field>
      </v-col>
      <v-col cols="2">
        <h4 dir="rtl" style="text-align: right; color: blue;">عنوان طرح:</h4>
      </v-col>
    </v-row>
  </div>

  <div style="border: 2px solid blue; border-radius: 15pt;width: 100%; height: 5%; margin-top: 2pt;">
    <v-row>
      <v-col cols="10">
        <v-text-field v-model="listSub.ProjectTitle" variant="none"  dir="rtl"></v-text-field>
      </v-col>
      <v-col cols="2">
        <h4 dir="rtl" style="text-align: right; color: blue;">عنوان پروژه:</h4>
      </v-col>
    </v-row>
  </div>
  <v-row>
    <v-col cols="6">
        <div style="border: solid black; text-align: center; margin-top: 10pt;background-color:lightskyblue;">
            <h4>ليست فهارس بهاي منضم به پيمان</h4>
        </div>
    </v-col>
    <v-col cols="6">
        <div style="border: solid black; text-align: center; margin-top: 10pt;background-color:lightskyblue;">
            <h4>ليست كليه ي فهارس بها</h4>
        </div>
    </v-col>
  </v-row>
  <v-row>
    <v-col cols="6">
        <div style="border: solid black;height: 120%; margin-top:-20pt; text-align: right;">
            <v-list>
                <v-list-item v-for="item in listitem.slice(0,3)" :key="item" :title="item">

                </v-list-item>
            </v-list>
        </div>
    </v-col>
    <v-col cols="6">
        <div style="border: solid black;height: 120%; margin-top:-20pt; text-align: right;">
            <v-list>
                <v-list-item v-for="item in listitem" :key="item" :title="item">

                </v-list-item>
            </v-list>
        </div>
    </v-col>
  </v-row>
  </form-slot>
</template>

<script setup lang="ts">

import { ref } from 'vue';
interface Item{
    Title : String;
    ProjectTitle : String;
}

const listitem = ref(['رشته كارهاي دريايي و ساحلي ','رشته توزيع نيروي برق','رشته تجهيزات آب و فاضلاب',
    'رشته سدسازي','رشته بهره‌برداري و نگهداري تاسيسات آب شرب','رشته مرمت بناهاي تاريخي','رشته شبكه جمع‌آوري و انتقال فاضلاب',
    'رشته انتقال و توزيع آب روستايي','رشته چاه','رشته ساخت و ترميم قنات','رشته خطوط انتقال آب','رشته شبكه توزيع آب',
    'رشته آبياري و زهكشي','رشته آبياري تحت فشار'
])

const listSub = ref<Item>({Title: '' , ProjectTitle: ''})

</script>
