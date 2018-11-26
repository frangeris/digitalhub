<template>
  <div>
    <links />
    <hero />
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import 'picasso.css/dist/build.min.css'
import hero from './components/hero.vue'
import projects from './components/projects.vue'
import links from './components/links.vue'
export default {
  components: {
    links,
    hero,
    projects
  },
}
</script>

