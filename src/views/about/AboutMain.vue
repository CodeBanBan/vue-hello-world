<template>
  <div class="about">
    <h1>This is an about page</h1>
    <router-link to="/about/sub1">Sub #1</router-link> |
    <router-link to="/about/sub2">Sub #2</router-link> |
    <router-link to="/about/sub1/SampleTitle">Sub #1 with Title</router-link> |
    <hr>
    <router-view></router-view>
    <hr>
    <router-view name="view2"></router-view>
  </div>
</template>

<script>
// @ is an alias to /src
export default {
  name: 'about',
  components: {}
}
</script>
