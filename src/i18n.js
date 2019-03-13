import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    message: {
      hello: 'Hello world :: <b>{lang}</b>'
    },
    car: 'car | cars'
  },
  th: {
    message: {
      hello: 'สวัสดีชาวโลก :: <b>{lang}</b>'
    }
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en',
  messages // set locale messages
})

export default i18n
