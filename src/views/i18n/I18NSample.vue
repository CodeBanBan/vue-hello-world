
<template>
  <div class="home">
    <h2>Hello i18n</h2>
    <button v-on:click="$i18n.locale = 'en'">EN</button> |
    <button v-on:click="$i18n.locale = 'th'">TH</button>
    <br><br>

    <div>
      <h3>Basic Usage</h3>
      <p>
        {{ $t('message.hello', { lang: $i18n.locale }) }} /
        {{ $t('greet') }} /
        {{ $t('localMessage.localHello') }}
      </p>
      <p v-html="$t('message.hello', { lang: $i18n.locale })"></p>
    </div>

    <div>
      <h3>Use Directive instead of $t</h3>
      <p v-t="'greet'"></p>
      <p v-t="'message.hello'"></p>
      <p v-t="{
        path: 'message.hello',
        args: { lang: $i18n.locale }
      }"></p>
    </div>

    <div>
      <h3>Pluralization</h3>
      <p>1 {{ $tc('car', 1) }}</p>
      <p>2 {{ $tc('car', 2) }}</p>
    </div>

  </div>
</template>

<script>
import i18n from './I18NSample.i18n'

export default {
  name: 'i18n-sample',
  components: {},
  i18n: {
    messages: i18n
  }
}
</script>
