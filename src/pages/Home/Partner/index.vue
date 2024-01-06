<template>
  <section class="px-[1.041vw]">
    <div class="h-[0.052vw] bg-primary w-full"></div>
    <div class="pt-[0.521vw] pb-[2.083vw] text-primary">
      <h2 class="text-xxl leading-baseLg text-right mb-[1.667vw]">
        Trusted long-term partner
      </h2>
      <p class="text-md w-[22.917vw] ml-[auto] text-right">
        For leading B2B tech and service companies
      </p>
    </div>
    <div class="h-[0.052vw] bg-primary w-full"></div>
    <p class="text-primary pt-[3.125vw] pb-[1.042vw]">
      We combine disruptive marketing techniques with proven tech solutions to
      provide maximum business value.
    </p>
    <SwipeCards/>
  </section>
</template>

<script>
import SwipeCards from './SwipeCards.vue'
export default {
    components:{
        SwipeCards
    }
};
</script>
