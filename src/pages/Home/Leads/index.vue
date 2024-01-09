<template>
  <section class="px-[1.041vw] pb-[4.844vw]">
    <div class="mb-[5.208vw]">
      <!-- TODO: inherit span -->
      <h2 class="leading-baseLg text-sxl mb-[3.438vw] inline-flex flex-wrap" ref="title">
        Let's fight cold <span class="text-primary">together</span>
      </h2>
      <p ref="description">
        We generated leads from <br />
        top-performing companies
      </p>
    </div>
    <GridIcons :color="'primary'" :items="items" />
  </section>
</template>

<script>
import GridIcons from "../../../components/GridIcons.vue";
import { fadeIn, revealByWords } from "@/animations/textReveal.js";

export default {
  components: {
    GridIcons,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          img: "/images/leads/sap.svg",
        },
        {
          id: 2,
          img: "/images/leads/bayer.svg",
        },
        {
          id: 3,
          img: "/images/leads/office365.svg",
        },
        {
          id: 4,
          img: "/images/leads/salesforce.svg",
        },
        {
          id: 5,
          img: "/images/leads/hp.svg",
        },
      ],
    };
  },

  mounted() {
    revealByWords(this.$refs.title);
    fadeIn(this.$refs.description);
  },
};
</script>
