<template>
  <div class="h-[35.521vw] pt-[2.865vw]">
    <p class="absolute max-w-[30.208vw]">
      We combine disruptive marketing techniques with proven tech solutions to
      provide maximum business value.
    </p>
    <div class="h-full flex items-end gap-[0.052vw]">
      <div
        v-for="item in verticalGraphData"
        class="flex flex-col justify-end h-full w-full"
      >
        <p class="text-primary text-sm mb-[0.521vw] text-center">
          {{ item }}
        </p>
        <div :key="item" :style="`height:${item}%`" class="bg-primary"></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["verticalGraphData"],
};
</script>
