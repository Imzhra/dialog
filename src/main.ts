import { createApp } from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import Formslot from './components/Formslot.vue'

loadFonts()

const app = createApp(App)
app.use(vuetify)
app.mount('#app')
app.component('form-slot',Formslot)
