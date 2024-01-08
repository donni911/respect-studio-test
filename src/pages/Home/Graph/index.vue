<template>
  <section class="relative py-[5.469vw] px-[1.041vw] min-h-[37.500vw]">
    <div class="max-w-[66.406vw]">
      <h2 class="text-xl leading-baseLg inline-flex flex-wrap" ref="title">
        Consitent leads flow to streamline. Your&nbsp;business growth.
      </h2>
    </div>
    <VerticalGraph :verticalGraphData="verticalGraphData" />
    <HorizontalGraph :horizontalGraphData="horizontalGraphData" />
  </section>
</template>

<script>
import HorizontalGraph from "./HorizontalGraph.vue";
import VerticalGraph from "./VerticalGraph.vue";

import { revealByWords } from "@/animations/textReveal.js";

export default {
  components: {
    VerticalGraph,
    HorizontalGraph,
  },
  data() {
    return {
      verticalGraphData: [
        27, 53, 61, 58, 30, 63, 55, 63, 71, 76, 67, 88, 78, 90,
      ],
      horizontalGraphData: [
        {
          title: "Revenue generated for clients",
          amount: "1570",
          width: 100,
          marginLeft: 0,
        },
        {
          title: "Conversationd opened",
          amount: "1200",
          width: 59,
          marginLeft: 41,
        },
        {
          title: "Leads generated via targeted",
          amount: "378",
          width: 100,
          marginLeft: 0,
        },
        {
          title: "Calls scheduled for clients",
          amount: "197",
          width: 43,
          marginLeft: 57,
        },
      ],
    };
  },
  mounted() {
    revealByWords(this.$refs.title);
  },
};
</script>
