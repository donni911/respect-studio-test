<template>
  <section
    class="relative py-[5.469vw] px-[1.041vw] min-h-[37.500vw]"
  >
    <div class="max-w-[66.406vw]">
      <h2 class="text-xl leading-[96%]">
        Consitent leads flow to streamline Your business growth.
      </h2>
    </div>
    <VerticalGraph :verticalGraphData="verticalGraphData" />
     <HorizontalGraph :horizontalGraphData="horizontalGraphData" />
  </section>
</template>

<script>
import HorizontalGraph from "./HorizontalGraph.vue";
import VerticalGraph from "./VerticalGraph.vue";

export default {
  components: {
    VerticalGraph,
    HorizontalGraph
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
        },
        {
          title: "Conversationd opened",
          amount: "1200",
          width: 59,
        },
        {
          title: "Leads generated via targeted",
          amount: "378",
          width: 100,
        },
        {
          title: "Calls scheduled for clients",
          amount: "197",
          width: 43,
        },
      ],
    };
  },
};
</script>
