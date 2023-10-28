<template>
  <div class="header-block">
    <header class="d-flex flex-wrap justify-content-center py-3 header-width">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32">
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

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5"
            to="/route">маршруты</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5"
            to="/locationCard">cоздать локацию</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5"
            to="/routePoint">cоздать маршрут</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5" to="/routePoint">о
            нас</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5"
            to="/routePoint">контакты</router-link></li>
      </ul>
    </header>
  </div>
</template>

<style lang="scss">
.header-block {
  width: 100%;
  height: 70px;
  background-color: rgba(256, 256, 256, 0.3);
  background-color: rgba(120,120,120, 0.4);
  position: absolute;
  backdrop-filter: blur(3px);
  z-index: 99;
}

.header-width {
  height: 100%;
  width: 100%;
  position: relative;
}
</style>