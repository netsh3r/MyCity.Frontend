<script setup lang="ts">
import { ref } from "vue";
import axios from 'axios';
import router from "@/router";
const routes = ref<{ id: number }[]>([]);

const loadData = async () => {
    routes.value = (await axios.get('Route/List'))?.data ?? [];
}

const openRoute = (routeId: number) => {
    router.push({
        path: 'routePoint',
        query: {
            id: routeId
        }
    });
}

loadData();
</script>

<template>
    <div class="d-flex flex-wrap mx-2">
        <!-- <v-card class="m-2" v-for="t in routes" :key="t.id" width="25em" theme="dark">
            <div class="route-card" style="width: 100%; height: 100%;"></div>
            <v-card-item style="position:relative;">
                <v-card-title>This is a title</v-card-title>

                <v-card-subtitle>This is a subtitle</v-card-subtitle>
            </v-card-item>

            <v-card-text>
                This is content
            </v-card-text>
        </v-card> -->
        <v-card :title="t.name" class="m-2 route-card" v-for="t in routes" :key="t.id" width="25em" theme="dark">
            <v-card-text class="route-card-text">{{ t.description }}</v-card-text>
            <template #actions>
                <v-btn variant="tonal">удалить</v-btn>
                <v-btn variant="tonal" @click="openRoute(t.id)">открыть маршрут</v-btn>
            </template>
        </v-card>
    </div>
</template>

<style>
.route-card {
    background:
        linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
        url("../../assets/imgs/test.png") !important;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: top;
}

.route-card-text {
    height: 62px;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
}
</style>