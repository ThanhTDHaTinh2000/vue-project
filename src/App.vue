<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img class="logo" src="@/assets/logo.svg" width="60" height="60">
  </header>
  <router-view></router-view>
</template>

<style scoped>

header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  z-index: 1000;
}

nav {
  display: flex;
  gap: 1rem;
}

.nav-item {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.nav-item:hover {
  background-color: #f0f0f0;
}

.logo {
  cursor: pointer;
}
</style>