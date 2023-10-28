<template>
    <div style="height: 100vh; height: 100%; overflow-y: hidden;">
        <iframe :src="cardValue" class="ya-frame" frameborder="1" allowfullscreen="true"
            style="position: absolute"></iframe>
        <div class="route-block">
            <div class="d-flex align-left flex-column m-3 mb-4 mt-5 test">
                <v-btn-toggle v-model="toggle" divided theme="dark">
                    <v-btn value="1">Маршруты</v-btn>
                    <v-btn value="2">Локации</v-btn>
                </v-btn-toggle>
            </div>
            <component :is="cmp" @showCard="showCard" />
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, computed, watch } from "vue";
import LocationCard from "../components/Navigation/LocationCard.vue";
import RoutePointCard from "../components/Navigation/RoutePointCard.vue";
const cmp = computed(() => {
    return toggle.value != 2 ? RoutePointCard : LocationCard;
})
const showCard = (val: string) => {
    console.log('💃', val)
    href.value = val;
}
const cardValue = computed(() => {
    return href.value != '' ? href.value : "https://yandex.ru/map-widget/v1";
});
const href = ref("");
const toggle = ref(0)
watch(() => toggle.value, (val, prevVal) => {
    href.value = '';
})
</script>

<style lang="scss">
.ya-frame {
    width: 100%;
    height: 100vh;
    z-index: 10;
}

.route-block {
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: 99;
    backdrop-filter: blur(2px);
    background: radial-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2));
    border-radius: 1em 1em 0 0;
}
</style>
