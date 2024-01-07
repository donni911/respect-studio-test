<template>
  <div
    class="py-[4.844vw] pr-[7.813vw] relative overflow-hidden border-t border-black"
  >
    <img
      ref="image"
      :src="data.image"
      :alt="data.image"
      class="absolute inset-0 object-cover w-full h-full translate-y-[-100%] z-[-1]"
    />
    <div class="flex justify-between text-black" ref="text">
      <div ref="slide">
        <div class="max-w-[23.958vw]">
          <p
            ref="textP"
            class="border border-primary border-color py-[0.208vw] px-[0.521vw] mb-[1.042vw] text-base inline-block"
          >
            {{ data.hashtag }}
          </p>
          <h5 class="leading-baseLg text-md">{{ data.title }}</h5>
        </div>
      </div>
      <div class="flex gap-[2.865vw]">
        <div class="flex gap-[0.677vw] items-center">
          <p class="">
            Appointments <br />
            per month
          </p>
          <div class="flex">
            <span class="text-[2.604vw] leading-baseLg">{{
              data.perMonth
            }}</span>
            <div class="w-[0.625vw] ml-[0.521vw]">
              <svg
                width="14"
                height="22"
                viewBox="0 0 14 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6.99801 0.355469L13.025 6.38247V9.38847L8.06201 4.42647V21.6445H5.93301V4.42647L0.975006 9.38947V6.38347L6.99801 0.355469Z"
                  fill="#E63E3A"
                />
              </svg>
            </div>
          </div>
        </div>
        <div class="flex gap-[0.677vw] items-center">
          <p class="">
            Email <br />
            open rate
          </p>
          <div class="flex">
            <span class="text-[2.604vw] leading-baseLg">{{ data.rate }}</span>
            <div class="w-[1.146vw] ml-[0.521vw]">
              <svg
                width="22"
                height="18"
                viewBox="0 0 22 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M3.95898 10.2286C6.50998 10.2286 7.82098 8.19256 7.82098 5.28956C7.82098 2.38656 6.50998 0.351562 3.95898 0.351562C1.43098 0.351562 0.138977 2.38756 0.138977 5.28956C0.138977 8.19156 1.43098 10.2286 3.95898 10.2286ZM3.95898 8.94156C2.64798 8.94156 1.92298 7.63056 1.92298 5.29056C1.92298 2.95056 2.64898 1.61556 3.95898 1.61556C5.33998 1.61556 6.04198 2.94956 6.04198 5.29056C6.04198 7.63156 5.33898 8.94156 3.95898 8.94156ZM6.29898 17.4846L17.999 0.514563H15.639L3.93898 17.4846H6.29898ZM17.999 17.6486C20.55 17.6486 21.861 15.6126 21.861 12.7096C21.861 9.80656 20.55 7.77056 17.999 7.77056C15.471 7.77056 14.184 9.80656 14.184 12.7096C14.184 15.6126 15.475 17.6486 18.003 17.6486H17.999ZM17.999 16.3616C16.688 16.3616 15.963 15.0506 15.963 12.7106C15.963 10.3706 16.689 9.03556 17.999 9.03556C19.38 9.03556 20.082 10.3696 20.082 12.7106C20.082 15.0516 19.384 16.3616 18.003 16.3616H17.999Z"
                  fill="#E63E3A"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  props: ["data"],

  mounted() {
    gsap.defaults({ ease: "power1.inOut", duration: 0.7 });

    const animation = gsap
      .timeline({ paused: true })
      .to(this.$refs.image, { translateY: 0 }, 0)
      .to(this.$refs.text, { color: "white" }, 0)
      .to(this.$refs.textP, { borderColor: "white" }, 0)
      .to(this.$refs.slide, { translateX: "15%" }, 0);

    this.$el.addEventListener("mouseenter", () => animation.play());
    this.$el.addEventListener("mouseleave", () => animation.reverse());
  },
};
</script>
