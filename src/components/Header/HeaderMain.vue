<template>
    <header class="d-flex flex-wrap justify-content-center py-3 border-bottom header-width">
      <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
        <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
        <span class="fs-4">My City</span>
      </a>

      <ul class="nav nav-pills">
        <li class="nav-item"><router-link class="nav-link active mr-2" to="/route">маршруты</router-link></li>
        <li class="nav-item"><router-link class="nav-link active mr-2" to="/locationCard">локация</router-link></li>
        <li class="nav-item"><router-link class="nav-link active mr-5" to="/routePoint">маршрут</router-link></li>
      </ul>
    </header>
</template>

<style>
.header-width {
  height: 75px;
}
</style>