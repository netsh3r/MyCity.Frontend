<template>
    <header class="d-flex flex-wrap justify-content-center py-3 border-bottom header-width bg-light-subtle">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
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
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5" to="/route">маршруты</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5" to="/locationCard">cоздать локацию</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5" to="/routePoint">cоздать маршрут</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5" to="/routePoint">о нас</router-link></li>
        <li class="nav-item"><router-link class="link-body-emphasis text-decoration-none fs-4 mr-5" to="/routePoint">контакты</router-link></li>
      </ul>
    </header>
</template>

<style>
.header-width {
  height: 70px;
}
</style>