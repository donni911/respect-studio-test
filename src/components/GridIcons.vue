<template>
  <div>
    <div ref="line" class="h-[0.052vw] w-0" :class="`bg-${color}`"></div>
    <div class="grid grid-cols-5">
      <div class="relative min-h-[12.604vw]" v-for="item in items">
        <div
          :ref="`subline${item.id}`"
          class="w-[0.052vw] h-0 absolute left-0"
          :class="`bg-${color}`"
        ></div>
        <div class="h-full flex items-center justify-center">
          <img
            :ref="`image${item.id}`"
            class="w-auto h-auto object-contain max-w-[8.333vw] opacity-0"
            :src="item.img"
            :alt="item.img"
          />
        </div>
        <div
          v-if="item.id === 5"
          :ref="`subline${item.id}`"
          :class="`bg-${color}`"
          class="w-[0.052vw] h-0 absolute right-0 top-0"
        ></div>
      </div>
    </div>
    <div ref="line2" class="h-[0.052vw] w-0" :class="`bg-${color}`"></div>
  </div>
</template>
<script>
import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default {
  props: ["color", "items"],

  data() {
    return {
      sublines: Array.from({ length: 6 }, (_, index) => `subline${index + 1}`),
      images: Array.from({ length: 6 }, (_, index) => `image${index + 1}`),
    };
  },
  mounted() {
    ScrollTrigger.create({
      trigger: this.$el,
      start: "top 80% bottom 80%",
      onEnter: () => {
        const timeline = gsap.timeline({
          paused: true,
          defaults: { ease: "power1.inOut" },
        });

        timeline
          .to(this.$refs.line, { width: "100%", duration: 1 })
          .to(this.$refs.line2, { width: "100%", duration: 1 }, 0.1);

        this.sublines.forEach((subline, index) => {
          timeline.to(
            this.$refs[subline],
            { height: "100%", duration: 1 },
            index * 0.1
          );
        });

        this.images.forEach((image) => {
          timeline.to(this.$refs[image], { opacity: "1", duration: 1 }, 0);
        });

        timeline.play();
      },
    });
  },
};
</script>
