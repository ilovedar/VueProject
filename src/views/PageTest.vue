<!-- PageHome.vue -->
<template>
    <div class="test">
        <!-- <img alt="Vue logo" src="../assets/logo.png">
        <HelloWorld msg="Welcome to Your Vue.js App"/> -->
        <PageProject />
    </div>
  </template>
  
  <script>
  import PageProject from '@/components/PageProject.vue'
  
  export default {
    // name: 'PageHome',
    components: {
        PageProject,
    }
  }
  </script>