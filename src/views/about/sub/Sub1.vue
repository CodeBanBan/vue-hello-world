<template>
  <about-layout>
    <div class="container">
      <h1>This is Sub ###1 : {{$route.params.title || '[No Title]'}}</h1>
    </div>
  </about-layout>
</template>

<script>
import AboutLayout from '../AboutLayout.vue'

export default {
  name: 'sub1',
  components: {
    AboutLayout
  }
}
</script>
