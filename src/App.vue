<script setup lang="ts">
import { RouterView } from 'vue-router'
import HeaderMain from './components/Header/HeaderMain.vue';
</script>

<template>
  <HeaderMain v-if="$route.name != ''"/>
  <RouterView />
</template>

<style>
html {
  overflow-y: auto !important;
}
</style>