import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#275D38',
        secondary: '#48A23F',
        accent: '#696158',
        error: '#823B34'
      }
    }
  }
})
