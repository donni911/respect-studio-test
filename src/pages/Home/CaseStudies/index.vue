<template>
  <section class="px-[1.041vw]">
    <div class="flex justify-between pb-[5.052vw]">
      <div class="">
        <h2 class="text-xxxl leading-baseLg mb-[2.188vw]">
          Case <br />
          Studies
        </h2>
        <p class="text-primary">Gain efficiency you deserve</p>
      </div>
      <div class="max-w-[20.313vw] mr-[11.719vw]">
        <p class="mb-[2.917vw]">
          Only a truly sophisticated strategy can help your company succeed.
          Perfect balance is in utilizing marketing channels without creating
          informational noise.
        </p>
        <button class="btn-icon btn-icon--ghost h-[2.656vw]">
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
          <span>All case studies</span>
        </button>
      </div>
    </div>
    <div class="[&>*:last-child]:border-b">
      <Case v-for="caseItem in caseData" :data="caseItem" />
    </div>
  </section>
</template>
<script>
import Case from "./Case.vue";

export default {
  components: {
    Case,
  },
  data() {
    return {
      caseData: [
        {
          hashtag: "#LinkedIn Lead Generation",
          title:
            "How to generate 40 SQLs in just 1 month in the Banking Industry",
          perMonth: "14",
          rate: "56",
          image: "images/common/solution.png",
        },
        {
          hashtag: "#LinkedIn Lead Generation",
          title:
            "How to generate 40 SQLs in just 1 month in the Banking Industry",
          perMonth: "15",
          rate: "49",
          image: "images/common/solution.png",
        },
        {
          hashtag: "#LinkedIn Lead Generation",
          title:
            "How to generate 40 SQLs in just 1 month in the Banking Industry",
          perMonth: "13",
          rate: "74",
          image: "images/common/solution.png",
        },
      ],
    };
  },
};
</script>
