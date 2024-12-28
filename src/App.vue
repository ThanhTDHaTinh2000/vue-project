<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <header>
    <img class="logo" src="@/assets/logo.svg" width="60" height="60">
    <nav>
      <RouterLink to="/">
        <div class="btn-main">
          Home learn
        </div>
      </RouterLink>

      <div>..</div>
      
      <RouterLink to="/create">
        <div class="btn-learn">
          Todo learn
        </div>
      </RouterLink>

    </nav>
  </header>

  <router-view></router-view>
</template>

<style scoped>
header{
  display: flex;
  justify-content: space-between;
  padding: 4rem 2rem;
  align-items: center;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.15);
}

nav{
  display: flex;
  column-span: 10px;
}

</style>
