<template>
  <v-container style="font-family: 'IranSansWeb', sans-serif">
    <v-data-table dir="rtl" class="v-table">
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
        <tr v-for="item in items" :key="item.id">
          <td>{{ item.name }}</td>
          <td>{{ item.lastname }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.job }}</td>
          <td>
            <v-btn @click="openDetailDialog(item)">جزئیات</v-btn>
          </td>
          <td>
            <v-btn @click="editDialog(item)">ویرایش اطلاعات</v-btn>
          </td>
          <td>
            <v-btn @click="deleteItems(item)">
              <v-icon>fas fa-trash</v-icon>
            </v-btn>
          </td>
        </tr>
      </tbody>
    </v-data-table>

    <user-dialog :data="newItem" :isEditable="canEdit" :isNew="canAddNew" v-model="dialog" @save="updateItem" @saveNew="saveItem"></user-dialog>
    <trash-dialog :data="newItem" :trash="canDelete" v-model="trash" @trash="deleteItems"></trash-dialog>
    <v-row>
      <v-col cols="10"></v-col>
      <v-col cols="2">
        <v-btn @click="addNew" style="margin-top: 5px; margin-left: 50px;">
          اضافه کردن
          <v-icon>fas fa-plus</v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-snackbar v-model="showToastMessage" :timeout="2000" :color="toastColor" rounded="pill">
      {{ toastMessage }}
    </v-snackbar>
  </v-container>
</template>

<script lang="ts">
import { defineComponent,ref } from 'vue';
import Userdialog from '../views/Userdialog.vue';
import Trashdialog from '@/views/Trashdialog.vue';

interface Item {
  id: number | string;
  name: string;
  lastname: string;
  age: string;
  job: string;
  gender: string;
  address: string;
  phonenumber: string;
  education: string;
}

export default defineComponent({
  components: {
    'user-dialog': Userdialog,
    'trash-dialog': Trashdialog
  },
  data() {
    return {
      canAddNew: false ,
      canEdit: false,
      showToastMessage: false,
      toastMessage: '',
      toastColor: 'success',
      dialog: false,
      trash:false,
      newItem: {} as Item,
      items: [] as Item[],
      canDelete:false
    };
  },
  created() {
    this.loadItems();
  },
  methods: {
    showSuccessToast(): void {
      this.showToastMessage = true;
      this.toastMessage = 'انجام شد';
      this.toastColor = 'success';
    },
    showErrorToast(): void {
      this.showToastMessage = true;
      this.toastMessage = 'اطلاعات را کامل وارد کنید';
      this.toastColor = 'error';
    },
    saveItem(): void {
      if (!this.newItem.name || !this.newItem.lastname || !this.newItem.age || !this.newItem.job || !this.newItem.gender || !this.newItem.address || !this.newItem.phonenumber || !this.newItem.id || !this.newItem.education) {
        this.showErrorToast();
        return;
      }
      this.items.push({ ...this.newItem });
      this.saveItems();
      this.newItem = { id: '', name: '', lastname: '', age: '', job: '', gender: '', address: '', phonenumber: '', education: '' };
      this.dialog = false;
    },
    afterSaved(item: Item): void {
      
        this.items.push({ ...this.newItem });
      
      this.saveItems();
    },
    saveItems(): void {
      localStorage.setItem('items', JSON.stringify(this.items));
      this.showSuccessToast();
    },
    loadItems(): void {
      const data = localStorage.getItem('items')
      if (data) {
        this.items = JSON.parse(data);
        
      }
    },

    
    openDetailDialog(item: Item): void {
      this.canEdit = false;
      this.newItem = item;
      this.dialog = true;
    },
    editDialog(item: Item): void {
      this.newItem = { ...item };
      this.canEdit = true;
      this.dialog = true;
    },
    addNew(): void {
      this.newItem = { id: '', name: '', lastname: '', age: '', job: '', gender: '', address: '', phonenumber: '', education: '' };
      this.canEdit = false,
      this.canAddNew =true ,
      this.dialog = true;
    },
    updateItem() :void {
    const index = this.items.findIndex(i => i.id === this.newItem.id);
    if (index !== -1) {
        this.items.splice(index, 1, this.newItem); 
        this.saveItems(); 
        this.dialog = false; 
        this.showSuccessToast();
    } else {
        console.error("آیتم مورد نظر پیدا نشد");
    }
}

  },
  setup() {
    const showDialog = ref(false);
    const canDelete = ref(false);
    const trash = ref(false);
    
    const deleteItems = async (item: Item): Promise<void> => {
      try {
        const response = await fetch('http://localhost:8080/items/${item.id}' ,{
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json'}
        })
        
        if (response.status === 200) {
          console.log('آیتم با موفقیت حذف شد:', item);
          canDelete.value = true;
          trash.value = true;
        }
      } catch (error) {
        console.error('خطا در حذف آیتم:', error);
      }
    };

    return {
      showDialog,
      canDelete,
      trash,
      deleteItems,
    };
  },
  
});
</script>



<style scoped>
.v-th {
  font-size: 30px;
}

.v-dialog {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);
}

.v-card {
  color: black;
}

.v-table {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(2px);

  border-radius: 50px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.v-btn {
  border-radius: 50px;
}

.v-text-field {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(20px);
  border-radius: 50px;
}

.v-card-text {
  background-color: rgba(255, 255, 255, 0.5);
  backdrop-filter: blur(10px);
  border-radius: 50px;
}

.v-radio {
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
