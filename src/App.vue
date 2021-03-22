<template>
  <v-app>
    <v-main>
      <v-container>
        <v-card color="#e7ebf1">
          <v-card color="#e7ebf1">
            <Cproject />

            <v-container class="align">
              <v-col>
                <v-row no-gutters>
                  <v-col cols="12" sm="6" md="3">
                    <Nav />
                  </v-col>

                  <v-col cols="12" md="9">
                    <MainCard />
                  </v-col>
                </v-row>
              </v-col>
            </v-container>
          </v-card>
        </v-card>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from "./components/NavBar";
import Cproject from "./components/ProjectCard";
import MainCard from "./components/MainCard";

export default {
  name: "App",

  components: {
    Nav,
    Cproject,
    MainCard,
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
.align {
  margin-top: -40px;
}
</style>
