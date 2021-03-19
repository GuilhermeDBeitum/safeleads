<template>
  <v-app>
    <v-main>
      <Cproject />
      <Nav />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/NavBar";
import Cproject from "./components/ProjectCard";

export default {
  name: "App",

  components: {
    Nav,
    Cproject,
  },

  data: () => ({
    //
  }),
};
</script>
