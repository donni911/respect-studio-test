<template>
  <section class="px-[1.041vw] pb-[2.604vw] flex justify-between items-center">
    <div class="max-w-[41.146vw] flex flex-col">
      <h2
        class="text-sxl leading-baseLg mb-[3.906vw] inline-flex flex-wrap"
        ref="title"
      >
        Our team of top talents has a perfect blend of data and creativity
      </h2>
      <p class="max-w-[22vw]" ref="description">
        We've gathered experienced pros that thrive in the dynamic digital
        market. <br />
        Growth and excellence are our fuel to provide commitment and deliver
        success.
      </p>
      <div class="flex gap-[1.667vw] items-center mt-[3.125vw]" ref="btns">
        <a href="#" class="btn-icon btn-icon--primary h-[2.656vw]">
          <div>
            <svg
              class="w-[1.042vw]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 22 13"
              fill="none"
            >
              <path
                d="M21.1014 6.50109L15.3865 0.786255L12.5312 0.787669L17.2413 5.49771L0.900746 5.48852L0.898624 7.51438L17.2483 7.51296L12.5291 12.2138H15.3858L21.1014 6.50109Z"
                fill="#E63E3A"
              />
            </svg>
          </div>
          <span>About us</span>
        </a>
        <a
          href="#"
          class="decoration-primary underline text-primary hover:decoration-muted"
        >
          Career Page
        </a>
      </div>
    </div>
    <div>
      <img
        class="w-[40.104vw] h-[44.271vw] object-cover"
        src="/images/team/team-5.png"
        alt=""
      />
    </div>
  </section>
</template>
<script>
import { fadeIn, revealByLetters } from "@/animations/textReveal.js";

export default {
  mounted() {
    revealByLetters(this.$refs.title);
    fadeIn(this.$refs.subtitle);
    fadeIn(this.$refs.description);
  },
};
</script>
