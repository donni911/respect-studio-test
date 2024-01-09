<template>
  <section
    class="px-[1.041vw] pt-[2.083vw] pb-[3.125vw] flex justify-between flex-col gap-[5.208vw]"
  >
    <div class="flex justify-between gap-[1vw]">
      <div class="relative max-w-[22.917vw] flex flex-col gap-[6.333vw]">
        <div class="flex items-center gap-[0.677vw]" ref="icons">
          <div class="w-[5.208vw]">
            <img src="/images/common/goodfirms.svg" alt="" />
          </div>
          <div class="w-[5.208vw]">
            <img src="/images/common/upwork.svg" alt="" />
          </div>
        </div>
        <p ref="description">
          Only a truly sophisticated strategy can help your company succeed.
          Perfect balance is in utilizing marketing channels without creating
          informational noise.
        </p>
      </div>
      <div class="w-[25.521vw] relative text-sxl leading-baseLg inline-flex flex-wrap justify-end" ref="title">
        Quality approach to
        <span class="text-primary">growing your business </span>
      </div>
    </div>
    <GridIcons :color="'black'" :items="items" />
  </section>
</template>
<script>
import GridIcons from "../../../components/GridIcons.vue";
import { fadeIn, revealByLetters } from "@/animations/textReveal.js";

export default {
  components: {
    GridIcons,
  },
  data() {
    return {
      items: [
        { id: 1, img: "/images/common/clutch.png" },
        {
          id: 2,
          img: "/images/common/clutch.png",
        },
        {
          id: 3,
          img: "/images/common/clutch.png",
        },
        {
          id: 4,
          img: "/images/common/clutch.png",
        },
        {
          id: 5,
          img: "/images/common/clutch.png",
        },
      ],
    };
  },

  mounted() {
    revealByLetters(this.$refs.title);
    fadeIn(this.$refs.icons);
    fadeIn(this.$refs.description);
  },
};
</script>
<style></style>
