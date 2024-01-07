<template>
  <section
    class="px-[1.041vw] py-[7.813vw] min-h-[33.333vw] h-[100vh] flex"
  >
    <div class="w-1/2 relative">
      <div
        v-for="(item, index) in images"
        :key="index"
        class="w-[20.469vw] h-[27.917vw] absolute top-[50%] translate-y-[-50%] translate-x-[-50%]"
        :class="imagePosition(index)"
      >
        <img loading="lazy" :src="item.url" class="object-cover" alt="" />
      </div>
    </div>
    <div class="w-1/2">
      <div class="w-[34.063vw] ml-auto flex flex-col justify-center h-full">
        <div class="pl-[4.583vw] text-right">
          <h4 class="text-sxl mb-3.698vw leading-baseLg">
            Still not sure what service to choose?
          </h4>
          <p class="mt-[3.698vw]">
            Fill our qualification form to <br />
            understand which service fits <br />
            your business needs
          </p>
        </div>
        <div class="mt-[7.917vw]">
          <div class="h-[0.052vw] bg-primary w-full"></div>
          <div class="px-[1.823vw] py-[0.8vw] flex gap-[2.604vw] items-center">
            <div class="text-primary flex">
              <span class="leading-baseLg">1</span>
              <span class="text-xs items-start">&nbsp;/&nbsp;5</span>
            </div>
            <input
              type="text"
              class="flex-grow placeholder-primary color-primary"
              placeholder="Hey! Type your name here"
            />
            <button
              class="w-[3.333vw] h-[3.333vw] px-[1.042vw] py-[1.002vw] hover:translate-x-2 transition-transform will-change-transform"
            >
              <svg
                class="rotate-90 h-full"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99801 0.355469L13.025 6.38247V9.38847L8.06201 4.42647V21.6445H5.93301V4.42647L0.975006 9.38947V6.38347L6.99801 0.355469Z"
                  fill="#E63E3A"
                />
              </svg>
            </button>
          </div>
          <div class="h-[0.052vw] bg-primary w-full"></div>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  methods: {
    imagePosition(id) {
      switch (id) {
        case 0:
          return "left-[50%] z-10";
        case 1:
          return "left-[25%] ";
        case 2:
          return "left-[75%]";
      }
    },
  },
  data() {
    return {
      images: [
        {
          position: "left",
          url: "/images/team/team-3.png",
        },
        {
          position: "center",
          url: "/images/team/team-4.png",
        },
        {
          position: "right",
          url: "/images/team/team-5.png",
        },
      ],
    };
  },
};
</script>
