<template>
  <main ref="main">
    <Banner :isPageLoaded="isPageLoaded" />
    <Header :isPageLoaded="isPageLoaded" />
    <BigDescription />
    <Graph />
    <Partner />
    <Contact />
    <Leads />
    <CaseStudies />
    <Quality />
    <About />
  </main>
  <Footer />
  <Loader @pageLoaded="pageLoaded" />
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./pages/Home/Banner/index.vue";
import BigDescription from "./pages/Home/BigDescription/index.vue";
import Graph from "./pages/Home/Graph/index.vue";
import Partner from "./pages/Home/Partner/index.vue";
import Contact from "./pages/Home/Contact/index.vue";
import Leads from "./pages/Home/Leads/index.vue";
import CaseStudies from "./pages/Home/CaseStudies/index.vue";
import Quality from "./pages/Home/Quality/index.vue";
import About from "./pages/Home/About/index.vue";
import Footer from "./components/Footer.vue";
import Loader from "./components/Loader.vue";

export default {
  components: {
    Banner,
    Header,
    BigDescription,
    Graph,
    Partner,
    Contact,
    Leads,
    CaseStudies,
    Quality,
    About,
    Footer,
    Loader,
  },

  data() {
    return {
      isPageLoaded: false,
    };
  },

  methods: {
    pageLoaded(val) {
      this.isPageLoaded = val;
    },
  },

  
};
</script>
