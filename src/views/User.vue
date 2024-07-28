<template>
  <v-container>
    <v-table dir="rtl" class="v-table" >
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
    </v-table>

    <!-- detail dialog-->
    <v-dialog v-model="dialog2" max-width="500px" class="v-dialog">
      <v-card  class="v-card">
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
          <div><strong>جنسیت:</strong> {{ selectedItem.gender }}</div>
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
          <v-card  class="v-card" max-width="800px" style="height: 400px;" title="اطلاعات خود را وارد کنید" prepend-icon="fas fa-user" dir="rtl">
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
                  <v-text-field v-model="newItem.gender" label="جنسیت"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.address" label="آدرس"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="newItem.phonenumber" label="تلفن"></v-text-field>
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
          
          <v-card max-width="800px" title="ویرایش اطلاعات" prepend-icon="fas fa-edit" dir="rtl" class="v-card">
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
                  <v-text-field v-model="editItem.gender" label="جنسیت"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.address" label="آدرس"></v-text-field>
                </v-col>
                <v-col cols="6">
                  <v-text-field v-model="editItem.phonenumber" label="تلفن"></v-text-field>
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
  </v-container>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    dialog2: false,
    editDialogVisible: false, 
    newItem: { id:'',name: '', lastname: '', age: '', job: '', gender: '', address: '', phonenumber: '' },
    editItem: {}, 
    items: [],
    selectedItem: {},
    
  }),
  created() {
    this.loadItems(); 
  },
  methods: {
  deleteItems(item) {
    const index = this.items.indexOf(item);
    if (index > -1) {
      this.items.splice(index, 1);
    }

  // سایر متدها
},


    saveItem() {
      if (!this.newItem.name || !this.newItem.lastname || !this.newItem.age || !this.newItem.job || !this.newItem.gender || !this.newItem.address || !this.newItem.phonenumber || !this.newItem.id ) {
      alert('لطفاً تمامی فیلدها را پر کنید.'); 
      return; 
    }
      this.items.push({ ...this.newItem });
      this.saveItems(); 
      this.newItem = { id:'',name: '', lastname: '', age: '', job: '', gender: '', address: '', phonenumber: '' };
      this.dialog = false;
    },
    saveItems() {
      localStorage.setItem('items', JSON.stringify(this.items)); 
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
      }
    }
  }
}
</script>

<style>
.v-th {
  font-size: 30px;
}
.v-dialog{
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}
.v-card{
  background-image: url(@/assets/dialog.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 50vh; 
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


.v-container {
  background-image: url(@/assets/user.jpg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100vh; 
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

</style>

