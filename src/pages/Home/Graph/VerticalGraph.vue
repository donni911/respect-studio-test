<template>
  <div class="h-[35.521vw] pt-[2.865vw]" ref="graphContainer">
    <p class="absolute max-w-[30.208vw]">
      We combine disruptive marketing techniques with proven tech solutions to
      provide maximum business value.
    </p>
    <div class="h-full flex items-end gap-[0.052vw]">
      <div
        v-for="(item, index) in verticalGraphData"
        :key="item"
        class="flex flex-col justify-end h-full w-full"
      >
        <p class="text-primary text-sm mb-[0.521vw] text-center">{{ item }}</p>
        <div class="bg-primary" :ref="`item${index}`"></div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default {
  props: ["verticalGraphData"],
  methods: {
    animateGraph() {
      this.verticalGraphData.forEach((item, index) => {
        gsap.fromTo(
          this.$refs[`item${index}`],
          {
            height: 0,
          },
          {
            scrollTrigger: {
              trigger: this.$el,
              start: "top 65%",
              end: "bottom bottom",
              markers: true,
            },
            height: `${item}%`,
            duration: 0.5,
            ease: "power1.inOut",
            delay: 0.01 * index,
          }
        );
      });
    },
  },
  mounted() {
    this.animateGraph();
  },
};
</script>
