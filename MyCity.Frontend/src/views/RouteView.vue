<template>
    <div>
        <v-btn color="red" @click="routeTo">Добавить маршрут</v-btn>
        <v-list lines="one">
            <v-list-item v-for="n in res" :key="n" :title="n.name"
                :subtitle="n.description" @click="routeTo(n)"></v-list-item>
        </v-list>
    </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref } from "vue";
import { useRouter } from 'vue-router';

var router = useRouter();

const res = ref();
const get = () => {
    axios.get("Route/List").then(r => {
        res.value = r.data
    })
}
get();
const routeTo = (route: any) => {
    router.push(
        {
            path: "routePoint",
            query: route
        }
    )
}
</script>

<style></style>