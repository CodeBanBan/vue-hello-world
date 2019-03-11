<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/sub1">Sub #1</router-link> |
    <router-link to="/about/sub2">Sub #2</router-link>
    <hr>
    <slot></slot>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'about-layout',
  components: {}
}
</script>
