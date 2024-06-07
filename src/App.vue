<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/layout/components/Header.vue'
</script>

<template>
  <el-container>
    <el-header>
        <Header />
    </el-header>
    <el-main>
      <RouterView />
    </el-main>
  </el-container>
</template>

<style scoped>
</style>
