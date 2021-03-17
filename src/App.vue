<template>
  <v-app>
    <v-main>
      <Nav />
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/Nav";

export default {
  name: "App",

  components: {
    Nav,
  },

  data: () => ({
    //
  }),
};
</script>
