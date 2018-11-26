import vue from 'vue'
import app from './app.vue'
import paginate from 'vue-paginate'
import router from './config/router'

// plugins
vue.use(paginate)

new vue({
  el: '#app',
  router,
  render: h => h(app)
})
