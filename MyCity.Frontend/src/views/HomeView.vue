<template>
    <div>
        <v-list lines="one">
            <v-list-item v-for="n in navs" :key="n" :title="n.name" @click="router.push(n.path)"></v-list-item>
        </v-list>
    </div>
</template>

<script setup lang="ts">
import {ref} from "vue";
import { useRouter } from 'vue-router';
const router = useRouter();
const navs = ref([
    {
        name: 'локации',
        path: 'location'
    },
    {
        name: 'маршруты',
        path: 'route'
    }
]);
</script>