<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import router from "@/router";
const routes = ref<{id: number}[]>([]);

const loadData = async () => {
    routes.value = (await axios.get('Route/List'))?.data ?? [];
}

const openRoute = (routeId: number) => {
    router.push({
        path:'routePoint',
        query: {
            id: routeId
        }
    });
}

loadData();
</script>

<template>
    <div class="d-flex flex-wrap mx-2">
        <v-card title="2" class="m-2 route-card" text="element.description" v-for="t in routes" :key="t.id">
            <template #actions>
                <v-btn variant="tonal">удалить</v-btn>
                <v-btn variant="tonal" @click="openRoute(t.id)">открыть маршрут</v-btn>
            </template>
        </v-card>
    </div>
</template>

<!-- <style>
.route-card {
    background-image: url("~/assets/imgs/test.png") !important;
    background-size: cover;
}
</style> -->