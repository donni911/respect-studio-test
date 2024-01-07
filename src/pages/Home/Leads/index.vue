<template>
  <section class="px-[1.041vw] pb-[4.844vw]">
    <div class="mb-[5.208vw]">
      <h2 class="leading-baseLg text-sxl mb-[3.438vw]">
        Let's fight cold <span class="text-primary"> together</span>
      </h2>
      <p>
        We generated leads from <br />
        top-performing companies
      </p>
    </div>
    <GridIcons :color="'primary'" :items="items" />
  </section>
</template>

<script>
import GridIcons from "../../../components/GridIcons.vue";

export default {
  components: {
    GridIcons,
  },

  data() {
    return {
      items: [
        {
          id: 1,
          img: "/images/leads/sap.svg",
        },
        {
          id: 2,
          img: "/images/leads/bayer.svg",
        },
        {
          id: 3,
          img: "/images/leads/office365.svg",
        },
        {
          id: 4,
          img: "/images/leads/salesforce.svg",
        },
        {
          id: 5,
          img: "/images/leads/hp.svg",
        },
      ],
    };
  },
};
</script>
