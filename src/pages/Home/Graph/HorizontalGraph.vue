<template>
  <div class="flex flex-col gap-[0.052vw] mt-[0.052vw] overflow-hidden">
    <div
      v-for="(item, index) in horizontalGraphData"
      :key="index"
      :ref="`item${index}`"
      class="p-[0.625vw_2.083vw] bg-black h-[4.844vw]"
    >
      <div
        class="text-primary h-full flex gap-[1.042vw]"
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
        gsap
          .fromTo(
            this.$refs[`item${index}`],
            {
              width: 0,
            },
            {
              scrollTrigger: {
                trigger: this.$el,
                start: "top 65%",
                end: "bottom bottom",
              },
              width: `${item.width}%`,
              duration: 0.5,
              ease: "power1.inOut",
              delay: 0.01 * index,
            }
          )
          gsap.fromTo(
            this.$refs[`item-decription${index}`],
            {
              opacity: 0,
            },
            {
              duration: 2,
              delay: 0.01 * index,
              opacity: 1,
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
