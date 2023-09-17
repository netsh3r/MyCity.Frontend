<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { reactive, ref } from "vue"
import dragable from "vuedraggable"
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
var route = useRoute();
const router = useRouter()
var dataVal = ref({routePoints:[]})
const locationList = ref([]);
const getLocations = () => {
    axios.post('api/Location/List').then(x => {
        locationList.value = x.data;
    })
}
const dragging = ref(true);
getLocations();
const newPoint = ref({});
const addPoint = () => {
    newPoint.value.generatedId = uuidv4();
    dataVal.value.routePoints.push(newPoint.value);
    newPoint.value = {};
}

const createRoutePoints = () => {
    axios.put("Route/CreateOrUpdateRoute", dataVal.value)
}
const getData = () => {
    axios.get(`RoutePoints/Get?routeId=${route.query.id}`).then(x => {
        dataVal.value = x.data;
    })
}
getData()
router.replace({ query: {}})
</script>

<template>
    <div>
        {{ dataVal }}
        <v-btn color="green" @click="createRoutePoints">Сохранить</v-btn>
        <v-text-field v-model="dataVal.name" label="Название"></v-text-field>
        <v-text-field v-model="dataVal.description" label="Описание"></v-text-field>
        <v-card class="mx-auto" max-width="344" variant="outlined">
            <v-text-field label="описание" v-model="newPoint.description"></v-text-field>
            <v-combobox label="Локации" v-model="newPoint.location"
                :items="locationList" item-title="description"></v-combobox>
            <v-btn color="red" @click="addPoint">Добавить точку</v-btn>
        </v-card>
        <dragable :list="dataVal.routePoints" item-key="name" class="list-group" ghost-class="ghost" @start="dragging = true"
            @end="dragging = false">
            <template #item="{ element }">
                <div>
                    <v-card class="mx-auto" max-width="344" variant="outlined">
                        <template v-slot:title>{{ element.description }}</template>
                        <template v-slot:append>
                            <div class="justify-self-end">
                                <v-btn @click="() => list = list.filter(x => x.generatedId != element.generatedId)">Удалить</v-btn>
                            </div>
                        </template>
                    </v-card>
                </div>
            </template>
        </dragable>
    </div>
</template>

<style scoped>
.buttons {
    margin-top: 35px;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.not-draggable {
    cursor: no-drop;
}
</style>