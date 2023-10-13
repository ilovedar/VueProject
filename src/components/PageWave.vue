  <template>
    <div class="page">
      <header>
        <div class="swoosh position-fixed"></div>
        <div class="sticky-nav difference d-flex justify-content-between">
          <div class="logo"></div>
          <div id="nav-btn" class="menu box" @click="toggleMenu">
            <svg id="i1" class="icon" viewBox="20 30 60 40">
              <path id="top-line-1" :d="topLinePath"></path>
              <path id="middle-line-1" :d="middleLinePath"></path>
              <path id="bottom-line-1" :d="bottomLinePath"></path>
            </svg>
          </div>
        </div>
      </header>
      <div id="takeover-nav">
        <div class="container-fluid">
          <div class="row">
            <div class="nav-col nav-contact col-12 col-md-7 bg-black d-flex align-items-center justify-content-center position-relative py-5 px-3 order-1 order-md-0">
              <div class="position-absolute w-100 h-100 bg-topographic"></div>
              <div class="content position-relative">
                <h2 class="nav-title white mb-5">
                  build your digital success with us<span class="d-inline green">.</span>
                </h2>
                <ul class="contact-items white list-unstyled mb-5">
                  <li class="pb-4">
                    <a class="text-decoration-none" href="#">+1 386-235-4062</a>
                  </li>
                  <li class="pb-4">
                    <a class="text-decoration-none" href="#">morgan@tactusmarketing.com</a>
                  </li>
                  <li>
                    <a class="text-decoration-none" href="#">Aguadilla, PR 00603</a>
                  </li>
                </ul>
                <div class="social">
                  <a class="text-decoration-none green" href="#">linkedin</a>
                  <span class="mx-2 white">|</span>
                  <a class="text-decoration-none green" href="#">facebook</a>
                  <span class="mx-2 white">|</span>
                  <a class="text-decoration-none green" href="#">instagram</a>
                </div>
              </div>
            </div>
            <div class="nav-col nav-menu col-12 col-md-5 bg-green d-flex align-items-center pt-5 pb-3 pb-md-5 px-3 px-md-5 order-0 order-md-1">
              <ul class="nav-items list-unstyled">
                <li class="pb-3">
                  <a class="text-decoration-none" href="#">services</a>
                </li>
                <li class="pb-3">
                  <a class="text-decoration-none" href="#">portfolio</a>
                </li>
                <li class="pb-3">
                  <a class="text-decoration-none" href="#">contact</a>
                </li>
                <li>
                  <a class="text-decoration-none" href="#">about</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <section class="hero d-flex align-items-center justify-content-center">
        <div class="video-wrap">
          <video autoplay playsinline loop muted id="video-bg">
            <source
              src="https://tactus.marketing/wp-content/uploads/tactus-waves-hero.mp4"
              type="video/mp4"
            />
            <source
              src="https://tactus.marketing/wp-content/uploads/tactus-waves-hero.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div class="position-absolute w-100 gradient-overlay"></div>
        <div class="content position-relative text-center mb-5">
          <h1 class="hero-title blend">
            Where Creativity
            <br />
            &amp; Strategy Meet
          </h1>
        </div>
      </section>
      <section class="two"></section>
      <section class="three"></section>
      <section class="four"></section>
      <section class="five"></section>
      <div class="custom-cursor"></div>
    </div>
</template>
  
<script>
import AJS from 'ajs';
import path from 'path';

export default {
  mounted() {
    this.setupAnimations();
  },
  methods: {
    setupAnimations() {
      const icon_1 = document.getElementById("nav-btn");
      const topLine_1 = document.getElementById("top-line-1");
      const middleLine_1 = document.getElementById("middle-line-1");
      const bottomLine_1 = document.getElementById("bottom-line-1");
      let state_1 = "menu"; // can be "menu" or "arrow"
      let topLeftY_1;
      let topRightY_1;
      let bottomLeftY_1;
      let bottomRightY_1;
      let topLeftX_1;
      let topRightX_1;
      let bottomLeftX_1;
      let bottomRightX_1;
      const segmentDuration_1 = 15;
      const arrowAppearDurationInFrames_1 = segmentDuration_1;
      const arrowDisappearDurationInFrames_1 = segmentDuration_1;
      let currentFrame_1 = 1;

      // 에러 발생하지 않도록 path 모듈 설정 추가
      AJS.configure({
        fallbacks: {
          path: path,
        },
      });

      ///Cross Appear
      // function arrowAppearAnimation_1() {
      //   currentFrame_1++;
      //   if (currentFrame_1 <= arrowAppearDurationInFrames_1) {
      //     window.requestAnimationFrame(() => {
      //       //top line
      //       topLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      //       topLeftY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      //       bottomRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      //       bottomRightY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      //       topLine_1.setAttribute(
      //         "d",
      //         "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1
      //       );
      //       //bottom line
      //       bottomLeftX_1 = AJS.easeOutBack(30, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      //       bottomLeftY_1 = AJS.easeOutBack(50, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      //       topRightX_1 = AJS.easeOutBack(70, 65, arrowAppearDurationInFrames_1, currentFrame_1);
      //       topRightY_1 = AJS.easeOutBack(50, 35, arrowAppearDurationInFrames_1, currentFrame_1);
      //       bottomLine_1.setAttribute(
      //         "d",
      //         "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1
      //       );
      //       //recursion
      //       arrowAppearAnimation_1();
      //     });
      //   } else {
      //     currentFrame_1 = 1;
      //     arrowAppearComplete_1 = true;
      //     openMenuAnimation_1();
      //   }
      // }

      ///Cross Disappear
      // function arrowDisappearAnimation_1() {
      //   currentFrame_1++;
      //   if (currentFrame_1 <= arrowDisappearDurationInFrames_1) {
      //     window.requestAnimationFrame(() => {
      //       //top line
      //       topLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       topLeftY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       bottomRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       bottomRightY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       topLine_1.setAttribute(
      //         "d",
      //         "M" + topLeftX_1 + "," + topLeftY_1 + " L" + bottomRightX_1 + "," + bottomRightY_1
      //       );
      //       //bottom line
      //       bottomLeftX_1 = AJS.easeInBack(35, 30, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       bottomLeftY_1 = AJS.easeInBack(65, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       topRightX_1 = AJS.easeInBack(65, 70, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       topRightY_1 = AJS.easeInBack(35, 50, arrowDisappearDurationInFrames_1, currentFrame_1);
      //       bottomLine_1.setAttribute(
      //         "d",
      //         "M" + bottomLeftX_1 + "," + bottomLeftY_1 + " L" + topRightX_1 + "," + topRightY_1
      //       );
      //       //recursion
      //       arrowDisappearAnimation_1();
      //     });
      //   } else {
      //     middleLine_1.style.opacity = "1";
      //     currentFrame_1 = 1;
      //     arrowDisappearComplete_1 = true;
      //     closeMenuAnimation_1();
      //   }
      // }

      ///Events
      icon_1.addEventListener("click", () => {
        if (state_1 === "menu") {
          openMenuAnimation_1();
          state_1 = "arrow";
          arrowDisappearComplete_1 = false;
        } else if (state_1 === "arrow") {
          closeMenuAnimation_1();
          state_1 = "menu";
          arrowAppearComplete_1 = false;
        }
      });

      function openMenuAnimation_1() {
        this.arrowAppearAnimation_1();
      }

      function closeMenuAnimation_1() {
        this.arrowDisappearAnimation_1();
      }

      // Cursor
      const cursor = document.querySelector(".custom-cursor");
      const links = document.querySelectorAll("a, button, #nav-btn, input.btn");

      let initCursor = false;

      for (let i = 0; i < links.length; i++) {
        const selfLink = links[i];

        selfLink.addEventListener("mouseover", function () {
          cursor.classList.add("custom-cursor--link");
        });
        selfLink.addEventListener("mouseout", function () {
          cursor.classList.remove("custom-cursor--link");
        });
      }

      window.onmousemove = function (e) {
        const mouseX = e.clientX;
        const mouseY = e.clientY;

        if (!initCursor) {
          TweenLite.to(cursor, 0.5, {
            opacity: 1,
          });
          initCursor = true;
        }

        TweenLite.to(cursor, 0, {
          top: mouseY + "px",
          left: mouseX + "px",
        });
      };

      window.ontouchmove = function (e) {
        const mouseX = e.touches[0].clientX;
        const mouseY = e.touches[0].clientY;
        if (!initCursor) {
          TweenLite.to(cursor, 0.3, {
            opacity: 1,
          });
          initCursor = true;
        }

        TweenLite.to(cursor, 0, {
          top: mouseY + "px",
          left: mouseX + "px",
        });
      };

      window.onmouseout = function (e) {
        TweenLite.to(cursor, 0.3, {
          opacity: 0,
        });
        initCursor = false;
      };

      window.ontouchstart = function (e) {
        TweenLite.to(cursor, 0.3, {
          opacity: 1,
        });
      };

      window.ontouchend = function (e) {
        setTimeout(function () {
          TweenLite.to(cursor, 0.3, {
            opacity: 0,
          });
        }, 200);
      };
    },
  },
};

</script>