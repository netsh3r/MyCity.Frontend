<template>
    <div style="height: 100vh; height: 100%; overflow-y: hidden;">
        <div class="container">
            <div class="d-flex align-left flex-column m-3 mb-4 mt-5">
                <v-btn-toggle v-model="toggle" divided variant="outlined" theme="dark">
                    <v-btn value="1">Маршруты</v-btn>
                    <v-btn value="2">Локации</v-btn>
                </v-btn-toggle>
            </div>
            <RoutePointCard v-if="toggle != 2"/>
            <LocationCard v-if="toggle == 2"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import LocationCard from "../components/Navigation/LocationCard.vue";
import RoutePointCard from "../components/Navigation/RoutePointCard.vue";
const toggle = ref(0)
</script>

