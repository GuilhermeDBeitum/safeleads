<template>
  <v-card class="cardAl" height="510" width="1000">
    <v-tabs color="#9b0b9b" class="tabs">
      <v-tab href="#tab-address" class="tab">Endereço</v-tab>
      <v-tab href="#tab-sizing" class="tab">Dimensionamento</v-tab>
      <v-tab class="tab">Dados da conta</v-tab>
      <v-tab class="tab">Arquivos</v-tab>
      <v-tab class="tab">Campos Personalizados</v-tab>
      <v-tab class="tab">Complemento</v-tab>

      <v-tab-item value="tab-address">
        <Address />
      </v-tab-item>

      <v-tab-item value="tab-sizing">
        <Sizing />
      </v-tab-item>
      <hr />
    </v-tabs>
  </v-card>
</template>

<script>
import Address from "./ProjectData/Address";
import Sizing from "./ProjectData/Sizing";
export default {
  components: {
    Address,
    Sizing,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.cardAl {
  margin-top: -10px;
}

.tab {
  font-size: 11px;
  height: 50px;
}
</style>
