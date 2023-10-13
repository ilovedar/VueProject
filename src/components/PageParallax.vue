<template>
    <div id="scroll-animate">
      <div
        id="scroll-animate-main"
        :style="{
          top: `-${scroll}px`,
          height: `${heightDocument}px`,
        }"
      >
        <div class="wrapper-parallax" ref="wrapperParallax">
          <header :style="headerStyle">
            <h1>Header</h1>
          </header>
  
          <section class="content" ref="content">
            <h1>Content</h1>
          </section>
  
          <footer ref="footer" :style="footerStyle">
            <h1>Footer</h1>
          </footer>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        windowHeight: 0,
        footerHeight: 0,
        heightDocument: 0,
        scroll: 0,
      };
    },
    computed: {
      headerStyle() {
        return {
          height: `${this.windowHeight}px`,
          lineHeight: `${this.windowHeight}px`,
        };
      },
      footerStyle() {
        return {
          bottom: this.scroll >= this.footerHeight ? '0px' : `-${this.footerHeight}px`,
        };
      },
    },
    methods: {
      setupParallaxEffect() {
        this.windowHeight = window.innerHeight;
  
        // 비동기 작업이라면, 비동기 작업이 완료된 후에 처리하도록 async/await 또는 .then()을 사용합니다.
        // 예를 들어 비동기 함수 fetchSomeData()를 호출하여 데이터를 가져오는 경우:
        // fetchSomeData().then(() => this.calculateHeightDocument());
  
        this.calculateHeightDocument();
  
        window.addEventListener('scroll', this.onScroll);
      },
      calculateHeightDocument() {
        this.$nextTick(() => {
          // 요소의 높이를 가져오기 위해 $refs를 사용하기 전에 요소가 마운트되었는지 확인합니다.
          if (this.$refs.content && this.$refs.footer && this.$refs.wrapperParallax) {
            const contentHeight = this.$refs.content.offsetHeight;
            this.footerHeight = this.$refs.footer.offsetHeight;
            this.heightDocument = this.windowHeight + contentHeight + this.footerHeight - 20;
  
            this.$refs.scrollAnimate.style.height = `${this.heightDocument}px`;
            this.$refs.wrapperParallax.style.marginTop = `${this.windowHeight}px`;
  
            this.scrollFooter();
          }
        });
      },
      scrollFooter() {
        this.footerStyle = {
          bottom: this.scroll >= this.footerHeight ? '0px' : `-${this.footerHeight}px`,
        };
      },
      onScroll() {
        this.scroll = window.scrollY;
      },
    },
    mounted() {
      this.setupParallaxEffect();
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.onScroll);
    },
  };
  </script>
  