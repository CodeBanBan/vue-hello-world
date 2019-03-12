<template>
    <div class="about">
      <h1>This is Sub #2 :: {{ title || '-' }}</h1>
    </div>
</template>

<script>

export default {
  name: 'sub2',
  props: ['title'],
  components: {}
}
</script>
