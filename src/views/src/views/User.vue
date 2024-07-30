<template>
  <v-container style="font-family: 'IranSansWeb', sans-serif">
    <v-data-table dir="rtl" class="v-table" >
      <thead>
        <tr>
          <th class="text-right v-th">نام</th>
          <th class="text-right v-th">نام خانوادگی</th>
          <th class="text-right v-th">سن</th>
          <th class="text-right v-th">شغل</th>
          <th class="text-right v-th">توضیحات بیشتر</th>
          <th class="text-right v-th">ویرایش اطلاعات</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in items" :key="item.name">
          <td>{{ item.name }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.job }}</td>
          <td>
            <v-btn @click="openDetailDialog(item)">
              جزئیات
            </v-btn>
          </td>
          <td>
            <v-btn @click="editDialog(item)">
              ویرایش اطلاعات
            </v-btn>
          </td>
          <td>
            <v-btn @click="deleteItems(item)">
              <v-icon>fas fa-trash</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-data-table>

    <!-- detail dialog-->
    <v-dialog v-model="dialog2" max-width="500px" class="v-dialog">
      <v-card  class="v-card" style="font-family: 'IranSansWeb', sans-serif">
        <v-col cols=2>
          <v-btn @click="dialog2 = false">
            <v-icon>fas fa-close بستن</v-icon>
          </v-btn>
        </v-col>
        
        <v-card-title dir="rtl"> اطلاعات بیشتر</v-card-title>
        <v-card-text dir="rtl">
          <div><strong>id:</strong> {{ selectedItem.id }}</div>
          <div><strong>نام:</strong> {{ selectedItem.name }}</div>
          <div><strong>نام خانوادگی:</strong> {{ selectedItem.lastname }}</div>
          <div><strong>سن:</strong> {{ selectedItem.age }}</div>
          <div><strong>شغل:</strong> {{ selectedItem.job }}</div>
          <div><strong>تحصیلات:</strong> {{ selectedItem.education }}</div>
          <div><strong>جنسیت:</strong>{{ selectedItem.gender }}</div>
          <div><strong>آدرس:</strong> {{ selectedItem.address }}</div>
          <div><strong>تلفن:</strong> {{ selectedItem.phonenumber }}</div>
        </v-card-text>
        <v-card-actions>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <v-row>
      <v-col cols="10"></v-col>
      <v-col cols="2">
        <v-btn @click="dialog = true" style="margin-top: 5px; margin-left: 50px;">
          اضافه کردن
          <v-icon>fas fa-plus</v-icon>
        </v-btn></v-col>

        <!-- form dialog-->
        <v-dialog v-model="dialog" max-width="90%" width="800px" class="v-dialog">
          <v-card  class="v-card" max-width="800px" 
          style="height: 750px;border-radius: 70px; font-family: 'IranSansWeb', sans-serif" 
          title="اطلاعات خود را وارد کنید" prepend-icon="fas fa-user" dir="rtl">
            <v-form dir="rtl">
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="newItem.id" label="id"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.name" label="نام"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.lastname" label="نام خانوادگی"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.age" label="سن"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.job" label="شغل"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select v-model="newItem.education"
                  label="تحصیلات"
                  :items="['دیپلم','لیسانس','فوق لیسانس','دکتری']">
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.phonenumber" label="تلفن"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.address" label="آدرس"></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-radio-group v-model="newItem.gender">جنسیت
                    <v-radio label="زن" value="زن" class="v-radio"></v-radio>
                    <v-radio label="مرد" value="مرد" class="v-radio"></v-radio>
                  </v-radio-group>
                </v-col>
                <v-col cols="6"></v-col>
                <v-col cols="5"></v-col>
                <v-col cols="4">
                  <v-btn @click="saveItem">
                    <v-icon>fa-solid fa-circle-check</v-icon>
                    ذخیره
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-dialog>

        <!-- edit dialog-->
        <v-dialog v-model="editDialogVisible" max-width="90%" width="800px" class="v-dialog">
          
          <v-card max-width="800px" title="ویرایش اطلاعات"
           prepend-icon="fas fa-edit" dir="rtl" class="v-card" 
           style="height: 750px;border-radius: 70px;font-family: 'IranSansWeb', sans-serif">
            <v-form dir="rtl" >
              <v-row>
                <v-col cols="6">
                  <v-text-field v-model="editItem.id" label="id" ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.name" label="نام" ></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.lastname" label="نام خانوادگی"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.age" label="سن"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.job" label="شغل"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-select v-model="editItem.education"
                  label="تحصیلات"
                  :items="['دیپلم','لیسانس','فوق لیسانس','دکتری']">
                  </v-select>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.phonenumber" label="تلفن"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.address" label="آدرس"></v-text-field>
                </v-col>
                <v-col cols="2">
                  <v-radio-group v-model="editItem.gender">جنسیت
                    <v-radio label="زن" value="زن" class="v-radio"></v-radio>
                    <v-radio label="مرد" value="مرد" class="v-radio"></v-radio>
                  </v-radio-group>
                  
                </v-col>
                <v-col cols="6"></v-col>
                <v-col cols="5"></v-col>
                <v-col cols="4">
                  <v-btn @click="updateItem">
                    <v-icon>fa-solid fa-circle-check</v-icon>
                    به‌روزرسانی
                  </v-btn>
                </v-col>
              </v-row>
            </v-form>
          </v-card>
        </v-dialog>

      
    </v-row>
    <v-snackbar v-model="showToastMessage" 
    :timeout="2000" :color="toastColor" rounded="pill">
    {{ toastMessage }}
  </v-snackbar>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    showToastMessage: false , 
    toastMessage : '',
    toastColor :'success',

    dialog: false,
    dialog2: false,
    editDialogVisible: false, 
    newItem: { id:'',name: '', lastname: '', age: '', job: '', gender: '', address: '', phonenumber: '',education:'' },
    editItem: {}, 
    items: [],
    selectedItem: {},
    
  }),
  created() {
    this.loadItems(); 
  },
  methods: {
      showSuccessToast()  {
        this.showToastMessage= true;
        this.toastMessage= 'انجام شد';
        this.toastColor= 'success'
  },
      showErrorToast(){
        this.showToastMessage= true;
        this.toastMessage= 'اطلاعات را کامل وارد کنید';
        this.toastColor= 'error'
  },
  deleteItems(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }
  },
    saveItem() {
      if (!this.newItem.name || !this.newItem.lastname || !this.newItem.age || !this.newItem.job || !this.newItem.gender || !this.newItem.address || !this.newItem.phonenumber || !this.newItem.id ||!this.newItem.education) {
      this.showErrorToast(); 
      return; 
    }
      this.items.push({ ...this.newItem });
      this.saveItems(); 
      this.newItem = { id:'',name: '', lastname: '', age: '', job: '', gender: '', address: '', phonenumber: '' ,education:''};
      this.dialog = false;
    },
    saveItems() {
      localStorage.setItem('items', JSON.stringify(this.items)); 
      this.showSuccessToast();
    },
    loadItems() {
      const data = localStorage.getItem('items'); 
      if (data) {
        this.items = JSON.parse(data);
      }
    },
    openDetailDialog(item) {
      this.selectedItem = item; 
      this.dialog2 = true; 
    },
    editDialog(item) {
      this.editItem = { ...item }; 
      this.editDialogVisible = true; 
    },

    updateItem() {
      const index = this.items.findIndex(i => i.id === this.editItem.id); // پیدا کردن ایندکس آیتم برای ویرایش
      if (index !== -1) {
        this.items.splice(index, 1, this.editItem); 
        this.saveItems(); 
        this.editDialogVisible = false; 
        this.showSuccessToast();
      }
    }
  }
}
</script>

<style scoped>
.v-th {
  font-size: 30px;
}
.v-dialog{
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}
.v-card{ 
  color: black;
}
.v-table {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
 
  border-radius: 50px; 
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); 
  text-align: center; 
}
.v-btn{
  border-radius: 50px;
}
.v-text-field{
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 50px;
}
.v-card-text{
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 50px;
}
.v-radio{
  display: inline-block;
  margin-right: 10px;

}
@font-face {
       font-family: 'IRANSansWeb';
       src: url('@/assets/IRANSansWeb.ttf') format('truetype');
       font-weight: normal;
       font-style: normal;
   }
   


</style>

