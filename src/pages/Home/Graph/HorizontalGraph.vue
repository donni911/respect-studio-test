<template>
  <div class="flex flex-col items-end gap-[0.052vw]">
    <div
      :style="`width:${item.width}%;`"
      class="p-[0.625vw_2.083vw] bg-black h-[4.844vw]"
      v-for="(item, index) in horizontalGraphData"
      :key="index"
    >
      <div class="text-primary h-full flex gap-[1.042vw]">
        <p class="text-right max-w-[10.417vw]">{{ item.title }}</p>
        <p class="text-xl leading-[100%] -mt-[0.260vw]">{{ item.amount }}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["horizontalGraphData"],
};
</script>
