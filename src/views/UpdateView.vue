<script setup>
import {useRoute} from 'vue-router';
import { reactive, onMounted } from 'vue';

    const router = useRoute();
    const user = reactive({
    name: '',
    username: '',
    email: '',
    address: ''
    })
    
    onMounted(() => {
    const userId = router.params.id;
    if (userId) {
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then((response) => {
            if (!response.ok) {
            throw new Error('Failed to fetch user');
            }
            return response.json();
        })
        .then((json) => {
            user.name = json.name;
            user.username = json.username;
            user.email = json.email;
            user.address = json.address?.street + '-' + json.address.suite +'-'+ json.address.city;
        })
        .catch((error) => {
            console.error('Error fetching user:', error);
        });
        }
    });
    const save = () =>{
        alert("Thông tin người dùng đã được cập nhật!");
        window.location.href = "/"; 
    }

</script>

<template>
  <main>
    <div class="form-container">
        <h3 style="text-align: center; color: black;">Update User</h3>
        <form @submit.prevent="save()">
        <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Enter name" v-model="user.name" required>
        </div>
        <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Enter email" v-model="user.email" required>
        </div>
        <div class="form-group">
            <label for="username">Username</label>
            <input type="username" id="username" name="username" placeholder="Enter username" v-model="user.username" required>
        </div>
        <div class="form-group">
            <label for="address">Address</label>
            <textarea id="address" name="address" placeholder="Enter address" v-model="user.address"></textarea>
        </div>
        <div class="form-actions">
            <button type="submit">Submit</button>
        </div>
        </form>
    </div>
  </main>
</template>

<style scoped>
    .form-container {
      width: 500px;
      margin-top: 120px;
      margin-left: 380px;
      background: #f7f6f6;
      padding: 20px;
      border-radius: 5px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .form-container h2 {
      text-align: center;
      margin-bottom: 20px;
    }

    .form-group {
      margin-bottom: 15px;
    }

    .form-group label {
      display: block;
      margin-bottom: 5px;
      font-weight: bold;
      color: #000;
    }

    .form-group input, .form-group textarea, .form-group select {
      width: 100%;
      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    .form-group textarea {
      resize: vertical;
      min-height: 100px;
    }

    .form-actions {
      text-align: center;
    }

    .form-actions button {
      padding: 10px 20px;
      border: none;
      border-radius: 4px;
      background-color: #007bff;
      color: #fff;
      font-size: 16px;
      cursor: pointer;
    }

    .form-actions button:hover {
      background-color: #0056b3;
    }
</style>