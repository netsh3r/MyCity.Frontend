<template>
    <div style="height: 100vh; height: 100%; overflow-y: hidden;">
        <div class="container">
            <div class="d-flex align-left flex-column m-3 mb-4 mt-5">
                <v-btn-toggle v-model="toggle" divided variant="outlined">
                    <v-btn value="1">Маршруты</v-btn>
                    <v-btn value="2">Локации</v-btn>
                </v-btn-toggle>
            </div>
            <div class="d-flex flex-wrap mx-2" v-if="toggle != 2">
                <v-card title="2" class="m-2 route-card" text="element.description" v-for="t in test" :key="t.id">
                    <template #actions>
                        <v-btn variant="tonal">удалить</v-btn>
                        <v-btn variant="tonal">открыть локацию</v-btn>
                    </template>
                </v-card>
            </div>
            <div class="d-flex flex-wrap mx-2" v-if="toggle == 2">
                <v-card class="m-2" v-for="t in test" :key="t.id">
                    <v-img cover height="500" width="300" src="src/assets/imgs/building.png"></v-img>
                    <v-card-item>
                        <v-card-title>Cafe Badilico</v-card-title>

                        <v-card-subtitle>
                            <span class="me-1">Local Favorite</span>

                            <v-icon color="error" icon="mdi-fire-circle" size="small"></v-icon>
                        </v-card-subtitle>
                    </v-card-item>
                    <template #actions>
                        <v-btn variant="tonal">открыть локацию</v-btn>
                    </template>
                </v-card>
            </div>
            
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const toggle = ref(0)
const test = [{
    id: 1
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}, {
    id: 2
}]
</script>

<style>
.route-card {
    background-image: url("../assets/imgs/test.png") !important;
    background-size: cover;
}
</style>