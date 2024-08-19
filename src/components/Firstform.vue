<template>
    <v-container>
        <v-row>
            <v-col cols="7">
                <form-slot v-slot:first style="width: 600%; height: 100%; border: 2px solid orangered;font-family: 'IranSansWeb', sans-serif;
    padding-top: auto; background-color: white;">
    <div style="border: 2px solid blue; border-radius: 15pt;width: 100%; height: 3%;">
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="listSub.Title" variant="none"  dir="rtl"></v-text-field>
        </v-col>
        <v-col cols="2">
          <h4 dir="rtl" style="text-align: right; color: blue;">عنوان طرح:</h4>
        </v-col>
      </v-row>
    </div>
  
    <div style="border: 2px solid blue; border-radius: 15pt;width: 100%; height: 3%; margin-top: 2pt;">
      <v-row>
        <v-col cols="10">
          <v-text-field v-model="listSub.ProjectTitle" variant="none"  dir="rtl"></v-text-field>
        </v-col>
        <v-col cols="2">
          <h4 dir="rtl" style="text-align: right; color: blue;">عنوان پروژه:</h4>
        </v-col>
      </v-row>
    </div>
    
    <div style="border: 2px solid orangered; margin-top: 5%; width: auto;height: 85%;">
      <v-row>
        <v-col cols="8">
          <v-text-field v-model="contract.ContractorName" variant="none"  dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
        </v-col>
          <v-col cols="4">
            <h4 dir="rtl" style="text-align: right; color: black;">نام پیمانکار/مشاور/آزمایشگاه:</h4>
        </v-col>
      </v-row>
      
      
      <div style="border: solid gainsboro; height: 15%;">
        <v-row >
          <v-col cols="3">
            <v-text-field v-model="contract.contractFcost" variant="none" type="number" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
          </v-col>
          <v-col cols="3">
            <h4 dir="rtl" style="text-align: right; color: black;">مبلغ اولیه قرارداد:</h4>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="contract.contractNo" variant="none" type="number" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
          </v-col>
          <v-col cols="3">
            <h4 dir="rtl" style="text-align: right; color: black;">شماره قرارداد:</h4>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="contract.initialContractPRD" variant="none" type="number" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
          </v-col>
          <v-col cols="3">
            <h4 dir="rtl" style="text-align: right; color: black;">مدت اولیه قرارداد:</h4>
          </v-col>
          <v-col cols="3">
            <v-text-field v-model="contract.contractDate" variant="none" type="date" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
          </v-col>
          <v-col cols="3">
            <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ قرارداد:</h4>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6">
            <div style="height: 100%; border: solid gainsboro; margin-top: 10%; border-radius: 15pt;">
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="Base.contractorBase" variant="none" type="text" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <h4 dir="rtl" style="text-align: right; color: black;"> شاخص مبنای پیمان:</h4>
                </v-col>
                <v-col cols="7">
                  <v-select v-model="Base.PRD3Month" label="یک سه ماه را انتخاب کنید" :items="['اول','دوم','سوم','چهارم']"></v-select>
                </v-col>
                <v-col cols="7">
                  <v-select v-model="Base.year" label="سال را انتخاب کنید" :items="[1400,1401,1402,1403]"></v-select>
                </v-col>
              </v-row>
            </div>
          </v-col>
          <v-col cols="6">
            <div style="height: 100%; border: solid gainsboro; margin-top: 10%; border-radius: 15pt;">
              <v-row>
                <v-col cols="7">
                  <v-text-field v-model="Coefficient.upperHead" variant="none"  dir="rtl" type="number" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> ضریب بالاسری</h4>
                </v-col>
                <v-col cols="7">
                  <v-text-field v-model="Coefficient.regional" variant="none" type="number" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> ضریب منطقه ای</h4>
                </v-col>
                <v-col cols="7">
                  <v-text-field v-model="Coefficient.WorkshopEquipment" variant="none" type="number"  dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> ضریب تجهیز کارگاه</h4>
                </v-col>
                <v-col cols="7">
                  <v-text-field v-model="Coefficient.ContractorSuggestion" variant="none" type="number"  dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> ضریب پیشنهادی پیمانکار</h4>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col cols="6"></v-col>
          <v-col cols="6">
            <div style="height: 80%; border: solid gainsboro; margin-top: 10%; border-radius: 15pt;">
              <v-row>
                <v-col cols="7">
                  <v-text-field v-model="Dates.Cnotification" variant="none"  dir="rtl" type="date" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ ابلاغ قرارداد</h4>
                </v-col>
                <v-col cols="7">
                  <v-text-field v-model="Dates.CfinishDate" variant="none"  dir="rtl" type="date" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ پایان قرارداد</h4>
                </v-col>
                <v-col cols="7">
                  <v-text-field v-model="Dates.firstDeliveryDate" variant="none" type="date" dir="rtl" style="border: 2px solid gainsboro; border-radius: 10pt; height: 50%;"></v-text-field>
                </v-col>
                <v-col cols="5">
                  <h4 dir="rtl" style="text-align: right; color: black;"> تاریخ اولین تحویل زمین</h4>
                </v-col>
              </v-row>
            </div>
          </v-col>
        </v-row>
      </div>
    </div>
        
      
      
    </form-slot>
            </v-col>

            <v-col cols="5">
                <form-slot dir="rtl" v-slot:first style="height: 50%; width: 100%;  font-family: 'IranSansWeb', sans-serif;">
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
            </v-col>
            
        </v-row>
    </v-container>
</template>
  <script setup lang='ts'>
  import { defineComponent } from 'vue'
  import { ref } from 'vue';
  interface Item{
      Title : String;
      ProjectTitle : String;

      ContractorName : String;
      contractNo : number;
      contractFcost :number;
      contractDate : Date | null;
      initialContractPRD : number;

      contractorBase :string ;
      PRD3Month : string ;
      year : number ;

      upperHead : number;
      regional : number ;
      WorkshopEquipment :number;
      ContractorSuggestion : number ;

      Cnotification : Date |null;
      CfinishDate : Date |null ;
      firstDeliveryDate : Date |null;
  }
    const listSub = ref<Partial<Item>>({Title: '' , ProjectTitle: ''});
    const contract = ref<Partial<Item>>({ ContractorName:'', contractNo: 0 ,contractFcost :0,contractDate :null ,initialContractPRD: 0});
    const Base = ref<Partial<Item>>({contractorBase: '' , PRD3Month : '', year : 1400});
    const Coefficient = ref<Partial<Item>>({upperHead: 0 ,regional: 0 ,WorkshopEquipment: 0,ContractorSuggestion: 0});
    const Dates = ref<Partial<Item>>({Cnotification : null, CfinishDate: null , firstDeliveryDate : null})



  
  </script>
  
  <style>
  
  #app {
    width: 300px;
  }
  </style>