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
                </div>
                <div>
                    <router-link class="btn active btn-dark rounded-pill" to="/locationCard">Создать локацию</router-link>
                </div>
                <div>
                    <router-link class="btn active btn-dark rounded-pill" to="/routePoint">Создать маршрут</router-link>
                </div>
            </div>
        </div>
        <div class="build line-animation build-line"><img src="@/assets/imgs/Build1.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 1s;"><img src="@/assets/imgs/build2.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 2s;"><img src="@/assets/imgs/build3.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 3s;"><img src="@/assets/imgs/build4.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 4s;"><img src="@/assets/imgs/build5.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 5s;"><img src="@/assets/imgs/build6.png" /></div>
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
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.home-text {
    color: black;
    font-size: 40px;
    font-weight: 600;
}

.build {
    width: 200px;
    height: 200px;
    justify-content: center;
    display: flex;
    align-items: center;
}

.build img {
    max-width: 100%;
    max-height: 100%;
}

.build-line {
    bottom: 0;
    right: 0;
    position: absolute;
}

@keyframes slide {
    from {
        transform: translateX(20em);
    }

    to {
        transform: translate(-100vw);
    }
}
</style>