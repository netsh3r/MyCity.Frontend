<script setup lang="ts">
import {ref} from "vue";
import { useRoute, useRouter } from 'vue-router';
const navRoute = useRoute();
const router = useRouter();
import axios from "axios";
const model = ref<{
  "id": 0 | null,
  "name": string,
  "description": string,
  "workTimeStart": string,
  "workTimeEnd": string,
  "locationType": number,
  point: {
    "id": number | null,
    "x": string,
    "y": string
  }
}>({
    id: 0,
    name: "",
    description: "",
    workTimeStart: "",
    workTimeEnd: "",
    locationType: 0,
    point: {
        id: 0,
        x: "",
        y: ""
    }    
});

const doSave = () => {
    axios.put("api/Location/CreateLocation", model.value)
}

const loadData = async () => {
    if (navRoute.query.id)
    {
        model.value = (await axios.get(`/api/Location/GetLocation/${navRoute.query.id}`)).data;
    }
    router.replace({ query: {} })
}

loadData();
</script>

<template>
    <div>
        <!-- <v-img cover height="25rem" width="100%" style="background-color: black;"></v-img> -->
        <div>
            <div class="container mt-3">
                <v-text-field placeholder="название" v-model="model.name" />
                <v-textarea placeholder="описание" v-model="model.description"/>
                <div class="row">
                    <v-text-field placeholder="x" class="col" v-model="model.point.x"/>
                    <v-text-field placeholder="y" class="col" v-model="model.point.y"/>
                </div>
                <div class="row pr-3">
                    <v-text-field placeholder="ссылка" class="col-11"></v-text-field>
                    <v-btn height="55" class="col-1">Перейти</v-btn>
                </div>
                <v-btn @click="doSave">Сохранить</v-btn>
            </div>
        </div>
    </div>
</template>