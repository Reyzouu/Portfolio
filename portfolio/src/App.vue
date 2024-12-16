<template>
  <div>
      <app-header v-if="showHeader"></app-header>
      <router-view/>
      <app-footer v-if="showFooter"></app-footer>
  </div>
</template>

<script>
import AppHeader from './components/Header.vue';
import AppFooter from './components/Footer.vue';
export default {
  name: 'App',
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      showHeader: true,
      showFooter: true
    };
  },
  created() {
    this.$router.beforeEach((to, from, next) => {
      this.showHeader = to.meta.showHeader !== false; // Afficher le header sauf si explicitement dit de ne pas le faire
      this.showFooter = to.meta.showFooter !== false; // Afficher le footer sauf si explicitement dit de ne pas le faire
      next();
    });
  }
}
</script>