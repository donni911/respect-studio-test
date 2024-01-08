<template>
  <section
    class="relative min-h-[37.500vw] h-[calc(100vh-4.531vw)] bg-primary pt-[3.854vw] pb-[9.896vw] px-[1.041vw]"
  >
    <div class="max-w-[43.490vw] ml-auto">
      <h1 class="text-xxxl leading-baseLg text-right inline-flex flex-wrap justify-end" ref="title">
        Growing businesses by &nbsp; building relationships
      </h1>
    </div>
    <div>
      <p class="absolute text-regular bottom-[1.042vw]">
        B2B Marketing & LinkedIn Lead <br />
        Generation agency
      </p>
    </div>
  </section>
</template>

<script>
import gsap from "gsap";

export default {
  mounted() {
    const titleChars = this.$refs.title.textContent.trim().split(" ");
    this.$refs.title.innerHTML = titleChars
      .map((char) => `<span>${char}</span>`)
      .join("");


    gsap.fromTo(
      this.$refs.title.children,
      { opacity: 0},
      {
        opacity: 1,
        stagger: 0.02,
        scrollTrigger: {
          trigger: this.$el,
          // scrub: 1,
          start: "top 80%",
          end: "bottom bottom",
        },
      }
    );
  },
};
</script>