<template>
    <div class="" style="height: 100%;">
        <a href="/" class="link-body-emphasis text-decoration-none"
            style="position: absolute; z-index: 99; margin-left: 3em;">
            <svg class="bi" width="40" height="32">
                <use xlink:href="#bootstrap"></use>
            </svg>
            <div class="fs-4 text-light">
                <div class="pl-2">
                    Моя
                </div>
                <div style="margin-top: -24px;">
                    Россия
                </div>
            </div>
        </a>
        <div class="float-left home-block">
            <div class="home">
            </div>
        </div>
        <div class="home-text-block float-right">
            <ul class="nav nav-pills" style="margin-bottom: 7em;">
                <li class="nav-item"><router-link class="link-dark text-decoration-none fs-4 mr-5" to="/route">О
                        НАС</router-link></li>
                <li class="nav-item"><router-link class="link-dark text-decoration-none fs-4"
                        to="/locationCard">КОНТАКТЫ</router-link>
                </li>
            </ul>
            <div class="home-text">Создайте</div>
            <div class="home-text">уникальный маршрут</div>
            <div class="home-text">по своему городу</div>
            <div class="row gap-4 mt-5">
                <div>
                    <router-link class="btn active btn-xlg btn-dark rounded-pill" to="/route">Посмотреть локации и
                        маршруты</router-link>
                    <!-- <v-btn theme="dark" rounded="xl" class="w-auto px-4">Посмотреть локации и маршруты</v-btn> -->
                </div>
                <div>
                    <router-link class="btn active btn-dark rounded-pill" to="/locationCard">Создать локацию</router-link>
                    <!-- <v-btn theme="dark" rounded="xl" class="w-auto px-4">Создать локацию</v-btn> -->
                </div>
                <div>
                    <router-link class="btn active btn-dark rounded-pill" to="/routePoint">Создать маршрут</router-link>
                    <!-- <v-btn theme="dark" rounded="xl" class="w-auto px-4">Создать маршрут</v-btn> -->
                </div>
            </div>
        </div>
        <div class="d-flex flex-row d-inline-flex line-animation">
            <div class="build1 mr-2"></div>
            <div class="build2 mr-2"></div>
            <div class="build3 mr-2"></div>
        </div>
    </div>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.home-block {
    width: 50%;
}

.home {
    background: url("../assets/imgs/homeImage.png") no-repeat;
    background-size: cover;
    width: 100%;
    height: 100vh;
    position: relative;
    z-index: 90;
}

.home-text-block {
    width: 50%;
    height: 100vh;
    background-color: white;
    padding-left: 5em;
    padding-top: 2em;
}

.line-animation {
    animation-name: slide;
    animation-duration: 5s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
    animation-timing-function: linear;
    bottom: 0;
    right: 0;
    position: absolute;
}

.home-text {
    color: black;
    font-size: 40px;
    font-weight: 600;
}

.build1 {
    background: url("../assets/imgs/Build1.png") no-repeat;
    background-size: contain;
    width: 200px;
    height: 200px;
}

.build2 {
    background: url("../assets/imgs/build2.png") no-repeat;
    background-size: contain;
    width: 200px;
    height: 200px;
}

.build3 {
    background: url("../assets/imgs/build3.png") no-repeat;
    background-size: contain;
    width: 200px;
    height: 200px;
}


@keyframes slide {
    from {
        transform: translateX(0);
    }

    to {
        transform: translateX(-100%);
    }
}
</style>