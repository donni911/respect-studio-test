<template>
  <section class="px-[1.041vw]">
    <div class="h-[0.052vw] bg-primary w-full" ref="line1"></div>
    <div class="pt-[0.521vw] pb-[2.083vw] text-primary">
      <h2
        class="text-xxl leading-baseLg text-right mb-[1.667vw] inline-flex"
        ref="title"
      >
        Trusted long-term partner
      </h2>
      <p class="text-md w-[22.917vw] ml-[auto] text-right" ref="subtitle">
        For leading B2B tech and service companies
      </p>
    </div>
    <div class="h-[0.052vw] bg-primary w-full" ref="line2"></div>
    <p class="text-primary pt-[3.125vw] pb-[1.042vw]" ref="description">
      We combine disruptive marketing techniques with proven tech solutions to
      provide maximum business value.
    </p>
    <SwipeCards />
  </section>
</template>

<script>
import { revealByWords, fadeIn } from "@/animations/textReveal.js";
import gsap from "gsap";

import SwipeCards from "./SwipeCards.vue";
export default {
  components: {
    SwipeCards,
  },

  methods: {
    animateLines() {
      Array.from([1, 2]).forEach((el) => {
        console.log(this.$refs[`line${el}`]);
        gsap.fromTo(
          this.$refs[`line${el}`],
          {
            width: 0,
          },
          {
            width: "100%",
            duration: 1,
            delay: 0.2 * el,
            scrollTrigger: {
              trigger: this.$el,
              start: "top 90%",
              end: "bottom bottom",
            },
          }
        );
      });
    },
  },

  mounted() {
    revealByWords(this.$refs.title);
    fadeIn(this.$refs.subtitle, 1.4);
    fadeIn(this.$refs.description, 1.4);
    this.animateLines();
  },
};
</script>
