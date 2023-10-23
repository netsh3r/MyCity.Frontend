<script setup lang="ts">
import {ref} from "vue"
import axios from "axios";
import router from "@/router";

const locations = ref<{
    id: number
}[]>()
const loadData = async () => {
    locations.value = (await axios.post("api/Location/List")).data;
}

const openLocation = (locationId: number) => {
    router.push({
        path:'locationCard',
        query: {
            id: locationId
        }
    });
}

loadData();
</script>

<template>
    <div class="d-flex flex-wrap mx-2">
        <v-card class="m-2" v-for="t in locations" :key="t.id">
            <v-img cover height="500" width="300" src="src/assets/imgs/building.png"></v-img>
            <v-card-item>
                <v-card-title>Cafe Badilico</v-card-title>
                <v-card-subtitle>
                    <span class="me-1">Local Favorite</span>
                    <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                </v-card-subtitle>
            </v-card-item>
            <template #actions>
                <v-btn variant="tonal" @click="openLocation(t.id)">открыть локацию</v-btn>
            </template>
        </v-card>
    </div>
</template>

<style></style>