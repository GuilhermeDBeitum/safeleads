<template>
  <v-container class="flex">
    <v-col>
      <v-card height="500" width="275" class="mx-auto">
        <v-menu offset-y>
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="#9b0b9b" v-bind="attrs" v-on="on" depressed dark>
              <div class="btnText">
                <v-icon class="iconText">mdi-plus</v-icon>
                Adicionar
              </div>
            </v-btn>
          </template>
          <v-list>
            <v-list-item v-for="(item, index) in addItems" :key="index">
              <v-list-item-icon class="icons">
                <v-icon size="18px">{{ item.icon }}</v-icon>
              </v-list-item-icon>

              <v-list-item-title class="cardText">{{
                item.title
              }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>

        <v-list dense class="mainText">
          <v-list-item-group v-model="selectedItem" color="black">
            <v-list-item v-for="item in items" :key="item.title" link>
              <v-list-item-content>
                <v-list-item-title>{{ item.title }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list-item-group>
        </v-list>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      selectedItem: 0,
      items: [
        { title: "Dados do Projeto" },
        { title: "Visão Geral" },
        { title: "Propostas" },
        { title: "Vendas" },
        { title: "Documentos" },
        { title: "Histórico" },
      ],

      addItems: [
        { title: "Arquivo", icon: "mdi-folder-outline" },
        { title: "Agendamento", icon: "mdi-calendar-month" },
        { title: "E-mail", icon: "mdi-email-outline" },
        { title: "Notas", icon: "mdi-alert-circle-outline" },
        { title: "Proposta", icon: "mdi-file-document-outline" },
        { title: "Tarefa", icon: "mdi-calendar-check-outline" },
        { title: "Venda", icon: "mdi-cash-usd-outline" },
        { title: "Documento", icon: "mdi-file" },
      ],
      right: null,
    };
  },
};
</script>

<style scoped>
.flex {
  align-content: left;
}

.icons {
  cursor: pointer;
  margin-left: 10px;
}

.iconText {
  cursor: pointer;
  margin: 5px;
}

.btnText {
  margin-right: 120px;
  font-weight: 300;
}

.cardText {
  cursor: pointer;
  margin: -25px;
  font-size: 14px;
}

.mainText {
  margin-left: 40px;
}
</style>
