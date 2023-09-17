<script setup lang="ts">
import {ref} from "vue";
import axios from 'axios';
var data = ref<{
    description: string,
    LocationType: number,
    Point: {
        x: number,
        y: number
    }
}>({
    description: "",
    LocationType: 1,
    Point: {
        x: 1,
        y: 2
    }
});

const doSave = () => {
    axios.put("api/Location/CreateLocation", data.value);
}
</script>

<template>
    <div>
        <v-text-field v-model="data.description"></v-text-field>
        <v-text-field v-model="data.LocationType"></v-text-field>
        <v-text-field v-model="data.Point.x"></v-text-field>
        <v-text-field v-model="data.Point.y"></v-text-field>
    </div>
    <div>
        <v-btn color="green" @click="doSave">Сохранить</v-btn>
    </div>
</template>