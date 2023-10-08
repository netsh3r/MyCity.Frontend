<script setup lang="ts">
</script>

<template>
    <div>
        <v-img cover  height="25rem" width="100%" src="src/assets/imgs/building.png"></v-img>
        <div>
            <div class="container mt-3">
                <v-text-field placeholder="название"></v-text-field>
                <v-textarea placeholder="описание"></v-textarea>
                <div class="row">
                    <v-text-field placeholder="x" class="col"></v-text-field>
                    <v-text-field placeholder="y" class="col"></v-text-field>
                </div>
                <div class="row pr-3">
                    <v-text-field placeholder="ссылка" class="col-11"></v-text-field>
                    <v-btn height="55" class="col-1">Перейти</v-btn>
                </div>
            </div>
        </div>
    </div>
</template>