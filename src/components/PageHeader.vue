<template>
  <div class="fire_container">
    <div class="wrapper">
      <div class="sq">
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/board/list">게시판</router-link>|
        <router-link to="/Test">Test</router-link> | 
        <router-link to="/hello">Hello</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // methods: {
  //   getLink(index) {
  //     if (index === 1) return "/";
  //     else if (index === 2) return "/about";
  //     else if (index === 3) return "/board/list";
  //     else if (index === 4) return "/Test";
  //     else if (index === 5) return "/Hello";
  //     else return "/";
  //   },
  //   getLinkText(index) {
  //     if (index === 1) return "Home";
  //     else if (index === 2) return "About";
  //     else if (index === 3) return "게시판";
  //     else if (index === 4) return "Test";
  //     else if (index === 5) return "Hello";
  //     else return "Link";
  //   },
  // },
};
</script>

<style scoped>
/* 스타일 설정 */
</style>
