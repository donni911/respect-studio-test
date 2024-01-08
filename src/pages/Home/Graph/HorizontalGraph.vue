<template>
  <div class="flex flex-col gap-[0.052vw] mt-[0.052vw] overflow-hidden">
    <div
      v-for="(item, index) in horizontalGraphData"
      :key="index"
      :ref="`item${index}`"
      class="bg-black h-[4.844vw]"
      :style="`margin-left:${item.marginLeft}%;`"
    >
      <div
        class="p-[0.625vw_2.083vw] text-primary h-full flex gap-[1.042vw] opacity-0"
        :ref="`item-decription${index}`"
      >
        <p
          class="text-right max-w-[10.417vw]"
          :style="`margin-left:${calculateMargin(index)}`"
        >
          {{ item.title }}
        </p>
        <p class="text-xl leading-[100%] -mt-[0.260vw]">{{ item.amount }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  props: ["horizontalGraphData"],

  methods: {
    calculateMargin(id) {
      switch (id) {
        case 0:
          return "auto";
        case 1:
          return "5.208vw";
        case 2:
          return "3.646vw";
        case 3:
          return "6.250vw";
      }
    },

    animateGraph() {
      this.horizontalGraphData.forEach((item, index) => {
        gsap.fromTo(
          this.$refs[`item${index}`],
          {
            width: 0,
            visibility: "hidden",
          },
          {
            visibility: "visible",
            scrollTrigger: {
              trigger: this.$el,
              start: "top 90%",
              end: "bottom bottom",
            },
            width: `${item.width}%`,
            duration: 0.7,
            ease: "power1.inOut",
            delay: 0.2 * index,

            onComplete: () => {
              gsap.fromTo(
                this.$refs[`item-decription${index}`],
                {
                  opacity: 0,
                  xPercent: -10,
                },
                {
                  duration: 0.7,
                  xPercent: 0,
                  opacity: 1,
                }
              );
            },
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
