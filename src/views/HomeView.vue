<template>
    <div style="height: 100%;">
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
        <div class="float-left home-text-block">
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
                    <router-link class="btn active btn-xlg btn-light rounded-pill" to="/route">Посмотреть локации и
                        маршруты</router-link>
                </div>
                <div>
                    <router-link class="btn active btn-light rounded-pill" to="/locationCard">Создать локацию</router-link>
                </div>
                <div>
                    <router-link class="btn active btn-light rounded-pill" to="/routePoint">Создать маршрут</router-link>
                </div>
            </div>
            <!-- <div class="home">
            </div> -->
        </div>
        <div class=" float-right">
            
        </div>
        <div class="build line-animation build-line"><img src="@/assets/imgs/Build1.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 1s;"><img src="@/assets/imgs/build2.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 2s;"><img src="@/assets/imgs/build3.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 3s;"><img src="@/assets/imgs/build4.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 4s;"><img src="@/assets/imgs/build5.png" /></div>
        <div class="build line-animation build-line" style="animation-delay: 5s;"><img src="@/assets/imgs/build6.png" /></div>
    </div>
    <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A201128395c549bfeae0fb88c6aa15f978092b011f3b48562a015ff2b8f9d4278&amp;source=constructor" frameborder="1" allowfullscreen="true" class="ya-block"></iframe>
</template>

<script setup lang="ts">
</script>

<style lang="scss">
.home-block {
    width: 50%;
}

.ya-block {
    position: absolute; width: 50vw; height: 100vh;
    right: 0;
    z-index: 80;
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
    background: url("../assets/imgs/homeImage.png") no-repeat;
    background-size: cover;
    width: 50%;
    height: 100vh;
    // background-color: white;
    padding-left: 5em;
    padding-top: 2em;
    z-index: 80;
    position: relative;
}

.line-animation {
    animation-name: slide;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
}

.line-animation:hover {
    cursor: pointer;
}
.home-text {
    color: white;
    font-size: 40px;
    font-weight: 600;
}

.build {
    margin-right: calc(50vw - 15em);
    width: 150px;
    height: 150px;
    justify-content: center;
    display: flex;
    align-items: center;
    z-index: 80;
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
        transform: translateX(50vw);
    }

    to {
        transform: translate(-100vw);
    }
}
</style>