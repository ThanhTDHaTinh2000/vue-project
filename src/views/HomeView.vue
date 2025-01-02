<script setup>

  import { onMounted, ref, computed } from "vue";
  import { useRouter } from "vue-router";
  const todos = ref([]);
  const showModal = ref(false);
  const txtSearch = ref("");
  const name = ref(null);

  onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => todos.value = json)
  });

  const closeModal = () => {
    showModal.value = false;
  };

  const filterUsers = computed(() => {
    return todos.value.filter(item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1)
  });

  const deleteUser = (user) => {
    showModal.value = true;
    name.value = user.name;
  }

  const deleteRecord = (user) => {
    alert(`Người dùng có tên ${name.value} đã được xóa khỏi danh sách`)
    closeModal();
  };

  const router = useRouter();

</script>

<template>
  <main style="color: #000; padding: 2rem;">
    <input type="text" placeholder="Enter search..." v-model="txtSearch">
    <div class="above-table">
      <h5>Danh sách người dùng</h5>
      <RouterLink class="no-underline" to="/create">
        <div class="btn-add">
          <i class="fas fa-add"></i> Add
        </div>
      </RouterLink>
    </div>
    <table class="table">
      <thead class="table-light">
        <tr>
          <th>Row</th>
          <th>Name</th>
          <th>Email</th>
          <th>Username</th>
          <th>Address</th>
          <th style="text-align: center;">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(todo, index) in filterUsers" :key="todo.id">
          <th>{{ index + 1 }}</th>
          <th>{{ todo?.name }}</th>
          <th>{{ todo?.email }}</th>
          <th>{{ todo?.username }}</th>
          <th>{{ todo?.address.street + "-" + todo?.address.suite + "-" + todo?.address.city }}</th>
          <th>
            <button @click="router.push({path: `/update/${todo?.id}`})" class="btn btn-sm btn-primary">
              <i class="fas fa-edit"></i> Update
            </button>
            <button @click="deleteUser(todo)" class="btn btn-sm btn-danger">
              <i class="fas fa-trash-alt"></i> Delete
            </button>
          </th>
        </tr>
      </tbody>
    </table>

    <!-- Popup xác nhận xóa -->
    <div v-if="showModal" class="modal-overlay">
      <div class="modal-content">
        <h3>Are you sure you want to delete this user?</h3>
        <div>
          <button class="btn btn-secondary" @click="closeModal">Cancel</button>
          <button class="btn btn-danger" @click="deleteRecord">Delete</button>
        </div>
      </div>
    </div>

  </main>
</template>

<style scoped>
.above-table{
  display: flex;  /* Chuyển container thành flexbox */
  justify-content: space-between;  /* Đẩy các phần tử ra hai bên */
  align-items: center;
  margin-bottom: 5px;
  margin-right: 18px; /* Căn giữa các phần tử theo chiều dọc */
}

.no-underline {
  text-decoration: none;
}

.btn-add{
  background: rgb(50, 73, 50);
  color: white;
  border-radius: 4px;
  cursor: pointer;
  padding: 0.4rem 1.6rem;
  text-decoration: none;
  width: 100%;
  text-align: center;
}

h5 {
  margin: 0px;      /* Tùy chỉnh khoảng cách giữa h3 và div */
}

.btn-add:hover{
  background: #6cc489;
}

button{
  margin-left: 10px;
}

input{
  margin-top: 100px;
  width: 500px;
  padding: .6rem 1.2rem;
  border-radius: 50px;
  border: none;
  outline: none;
  background: rgb(230, 228, 228);
  margin-bottom: 48px;
}

.table {
  width: 1200px; /* Chiếm toàn bộ chiều rộng của container */
  border-collapse: collapse; /* Loại bỏ khoảng cách giữa các ô */
}

thead th, tbody td {
  padding: 10px; /* Thêm khoảng cách bên trong các ô */
  text-align: left; /* Canh trái nội dung */
}

.table th, .table td {
  white-space: nowrap; /* Đảm bảo nội dung không bị xuống dòng */
  overflow: hidden; /* Cắt bớt nội dung nếu quá dài */
  text-overflow: ellipsis; /* Thêm dấu "..." nếu nội dung bị cắt */
}

.table-wrapper {
  width: 100%; /* Đảm bảo bao phủ toàn màn hình */
  overflow-x: auto; /* Kích hoạt cuộn ngang nếu bảng quá rộng */
  margin-top: 1rem; /* Khoảng cách trên bảng */
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.modal-content {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 300px;
}

button {
  padding: 10px 20px;
  margin: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-danger {
  background-color: #dc3545;
  color: white;
}

.btn-danger:hover {
  background-color: #c82333;
}

.btn-secondary {
  background-color: #6c757d;
  color: white;
}

.btn-secondary:hover {
  background-color: #5a6268;
}
</style>