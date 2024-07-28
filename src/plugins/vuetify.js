// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'
import 'material-design-icons-iconfont/dist/material-design-icons.css' 
import '@fortawesome/fontawesome-free/css/all.css'

// Vuetify
import { createVuetify } from 'vuetify'
//import { aliases, md } from 'vuetify/iconsets/md'
import { aliases, fa } from 'vuetify/iconsets/fa'
export default createVuetify({
  icons: {
    defaultSet: 'fa',
    aliases,
    
    sets: {
      fa,
    },
    rtl:true,
  }
})