<script setup>

  import { onMounted, ref, computed } from "vue";
  import { useRouter } from "vue-router";
  const todos = ref([]);
  const txtSearch = ref("");

  onMounted(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(json => todos.value = json)
  });

  const filterUsers = computed(() => {
    return todos.value.filter(item => item.name.toUpperCase().indexOf(txtSearch.value.toUpperCase()) !== -1)
  });

  const router = useRouter();

</script>

<template>
  <main style="color: #000; padding: 2rem;">
    <input type="text" placeholder="Enter search..." v-model="txtSearch">
    <div class="group-card">
      <div class="card-item" v-for="todo in filterUsers">
        <div @click="router.push({ path: `/todo/${todo?.id}`})">
          <h2>{{ todo?.name }}</h2>
          <i>{{ todo?.email }}</i>
        </div>
      </div>
    </div>
  </main>
</template>

<style>
input{
  width: 400px;
  padding: .6rem 1.2rem;
  border-radius: 50px;
  border: none;
  outline: none;
  background: rgb(182, 181, 181);
}

.group-card{
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
}

.card-item{
  border-radius: 10px;
  background: #324558;
  color: #fff;
  cursor: pointer;
  padding: .8rem 1rem;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

</style>