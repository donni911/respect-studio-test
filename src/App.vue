<template>
  <Banner />
  <main class="mt-[calc(100vh-4.531vw)]">
    <Header />
    <BigDescription />
    <Graph />
    <Partner />
    <Contact />
  </main>
</template>

<script>
import Header from "./components/Header.vue";
import Banner from "./pages/Home/Banner/index.vue";
import BigDescription from "./pages/Home/BigDescription/index.vue";
import Graph from "./pages/Home/Graph/index.vue";
import Partner from "./pages/Home/Partner/index.vue";
import Contact from "./pages/Home/Contact/index.vue";

export default {
  components: {
    Banner,
    Header,
    BigDescription,
    Graph,
    Partner,
    Contact
  },
};
</script>
