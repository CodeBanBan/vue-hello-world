<template>
    <div class="container">
      <h1>This is Sub ###1 : {{title || '[No Title]'}}</h1>
    </div>
</template>

<script>

export default {
  name: 'sub1',
  props: ['title'],
  components: {}
}
</script>
