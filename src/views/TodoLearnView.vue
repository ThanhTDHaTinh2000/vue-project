<script setup>
import { useRoute } from 'vue-router';
    
const router = useRoute();
</script>

<template>
    <main style="color: red;">
        Todo learn view {{ router.params.id }}
    </main>
</template>