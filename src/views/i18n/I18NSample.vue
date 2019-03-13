<template>
  <div class="home">
    <h2>Hello i18n</h2>
    <button v-on:click="$i18n.locale = 'en'">EN</button> |
    <button v-on:click="$i18n.locale = 'th'">TH</button>
    <br><br>
    <div>
      <p>{{ $t('message.hello', { lang: $i18n.locale }) }}</p>
      <p v-html="$t('message.hello', { lang: $i18n.locale })"></p>
    </div>
    <div>
      <h3>Pluralization</h3>
      <p>1 {{ $tc('car', 1) }}</p>
      <p>2 {{ $tc('car', 2) }}</p>
    </div>
  </div>
</template>

<script>

export default {
  name: 'i18n-sample',
  components: {}
}
</script>
