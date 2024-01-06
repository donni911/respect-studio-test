<template>
  <div
    class="flex flex-col items-end gap-[0.052vw] mt-[0.052vw] overflow-hidden"
  >
    <div
      v-for="(item, index) in horizontalGraphData"
      :key="index"
      :style="`width:${item.width}%;`"
      class="p-[0.625vw_2.083vw] bg-black h-[4.844vw]"
    >
      <div class="text-primary h-full flex gap-[1.042vw]">
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
  },
};
</script>
