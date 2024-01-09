<template>
  <header class="h-[4.531vw] mt-[calc(100vh-4.531vw)] z-20 bg-primary gap-10 p-[0.9375vw_1.041vw] flex">
    <a href="/" class="flex items-center w-[10%] ml-auto">
      <svg
        class="h-full w-auto"
        viewBox="0 0 79 51"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M21.609 36.3C21.661 37.28 21.661 38.157 21.661 39.137V45.74H37.389V51H0L0 39.138C0 30.061 1.806 23.563 10.778 23.563C16.709 23.563 19.545 26.399 20.778 30.99L37.384 22.326V28.206L21.609 36.3ZM4.435 45.74H17.225V38.726C17.225 33.208 16.657 28.979 10.882 28.979C5.107 28.979 4.435 33.208 4.435 38.726L4.435 45.74Z"
          fill="#101820"
        />
        <path
          d="M63.822 3.8147e-06C70.579 3.8147e-06 76.508 3.042 78.004 10.211H72.898C71.66 5.931 67.329 4.43501 63.615 4.43501C60.728 4.43501 55.672 5.72501 55.672 9.902C55.672 13.202 58.251 14.853 61.759 15.626L66.09 16.606C71.814 17.843 78.672 20.009 78.672 27.538C78.672 34.81 71.866 38.729 64.441 38.729C55.623 38.729 50.052 33.881 49.072 26.456H54.229C55.209 31.612 58.772 34.294 64.543 34.294C70.112 34.294 73.26 31.715 73.26 28.002C73.26 24.031 69.855 22.484 65.213 21.402L60.572 20.422C55.417 19.287 50.31 16.399 50.31 10.211C50.31 3.042 57.788 3.8147e-06 63.822 3.8147e-06Z"
          fill="#101820"
        />
        <path d="M44.398 51V45.069H50.328V51H44.398Z" fill="#101820" />
      </svg>
    </a>
    <nav class="flex w-[70%] gap-[2vw] ml-[4.146vw] mr-[4.146vw]">
      <div class="flex items-center gap-[4.1666vw]">
        <a :href="item.url" v-for="item in menuItems.slice(0, 4)" :key="item">{{
          item.title
        }}</a>
      </div>
      <div class="flex items-center gap-[4.1666vw] ml-auto">
        <a :href="item.url" v-for="item in menuItems.slice(4)" :key="item">{{
          item.title
        }}</a>
      </div>
    </nav>
    <div class="w-[20%]">
      <button class="btn-icon w-[17.1875vw] h-full ml-auto">
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
        <span>Book a call</span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          title: "Services",
          url: "/services",
        },
        {
          title: "Case Studies",
          url: "/case-studies",
        },
        {
          title: "Blog",
          url: "/blog",
        },
        {
          title: "About us",
          url: "/about",
        },
        {
          title: "We're hiring",
          url: "/hiring",
        },
        {
          title: "Contacts",
          url: "/contacts",
        },
      ],
    };
  },
};
</script>

<style></style>
