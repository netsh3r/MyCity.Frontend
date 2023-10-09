<script setup lang="ts">
import { ref } from "vue";
import draggable from "vuedraggable"
const list = ref([
    { id: 1, name: 1, description: "123" },
    { id: 1, name: 1, description: "123" },
])
</script>

<template>
    <div class="test">
        <div class="route-points">
            <div class="container my-5">
            <v-text-field placeholder="название" bg-color="white"></v-text-field>
            <v-textarea placeholder="описание" bg-color="white"></v-textarea>
            <div class="mx-auto new-point-select row">
                <div class="row">
                    <v-combobox class="col-10" placeholder="локация" bg-color="white"></v-combobox>
                    <v-btn height="55" class="col-2">добавить</v-btn>
                </div>
                <draggable v-model="list" item-key="id" class="list-group"
                    ghost-class="ghost">
                    <template #item="{ element }">
                        <v-card :title="element.name" class="mt-3" :text="element.description">
                            <template #actions>
                                <v-btn variant="tonal">удалить</v-btn>
                                <v-btn variant="tonal">открыть локацию</v-btn>
                            </template>
                        </v-card>
                    </template>
                </draggable>
            </div>
        </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.test {
    background: url("../assets/imgs/test.png");
    overflow-y: hidden;
    height: calc(100vh - 75px);
}
.route-points{
    width: 100%;
    overflow-y: auto;
    max-height: 100vh;
}

.new-point-select {
    width: 40rem;
}

.ghost {
    opacity: 0.5;
    background: #c8ebfb;
}

.not-draggable {
    cursor: no-drop;
}
</style>