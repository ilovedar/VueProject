<!-- PageHome.vue -->
<template>
  <div class="home">
    <div class="blurry-container">
      <!-- <img alt="Vue logo" src="../assets/logo.png">
      <HelloWorld msg="Welcome to Your Vue.js App"/> -->
      <PageSea />
      <PageProject />
    </div>
  </div>
</template>

<script>
import PageSea from '@/components/PageSea.vue'
import PageProject from '@/components/PageProject.vue'

export default {
  // name: 'PageHome',
  components: {
    PageSea,
    PageProject
  }
}
</script>

<style>
  .blurry-container {
    backdrop-filter: blur(5px); /* 블러 효과 적용 */
    background-color: rgba(255, 255, 255, 0.8);
  }
</style>