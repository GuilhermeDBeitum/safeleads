<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" sm="6" md="8">
        <v-container class="containerAlign">
          <div class="cardAlign">
            <v-col cols="12" md="6">
              <v-row no-gutters>
                <v-col cols="6" md="5">
                  <v-icon class="iconMap" color="#9b0b9b"
                    >mdi-ruler-square-compass</v-icon
                  >
                </v-col>

                <v-col cols="6" md="6" no-gutters>
                  <v-list-item-content>
                    <v-list-item-title class="cardText1">
                      Área</v-list-item-title
                    >
                    <v-list-item-title class="cardText2"
                      >0 m²
                      <v-icon class="iconEdit" color="#9b0b9b"
                        >mdi-lead-pencil</v-icon
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="6">
              <v-row no-gutters>
                <v-col cols="6" md="5">
                  <v-icon class="iconMap" color="#9b0b9b"
                    >mdi-compass-outline</v-icon
                  >
                </v-col>

                <v-col cols="6" md="6" no-gutters>
                  <v-list-item-content>
                    <v-list-item-title class="cardText1">
                      Face do Telhado</v-list-item-title
                    >
                    <v-list-item-title class="cardText2"
                      >Não informado
                      <v-icon class="iconEdit" color="#9b0b9b"
                        >mdi-lead-pencil</v-icon
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="6">
              <v-row no-gutters>
                <v-col cols="6" md="5">
                  <v-icon class="iconMap" color="#9b0b9b">mdi-table</v-icon>
                </v-col>

                <v-col cols="6" md="6" no-gutters>
                  <v-list-item-content>
                    <v-list-item-title class="cardText1">
                      Tipo de Telhado</v-list-item-title
                    >
                    <v-list-item-title class="cardText2"
                      >Não informado
                      <v-icon class="iconEdit" color="#9b0b9b"
                        >mdi-lead-pencil</v-icon
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-col>
              </v-row>
            </v-col>

            <v-col cols="12" md="6">
              <v-row no-gutters>
                <v-col cols="6" md="5">
                  <v-icon class="iconMap" color="#9b0b9b"
                    >mdi-circle-half-full</v-icon
                  >
                </v-col>

                <v-col cols="6" md="7" no-gutters>
                  <v-list-item-content>
                    <v-list-item-title class="cardText1">
                      Ponto de Sombreamento</v-list-item-title
                    >
                    <v-list-item-title class="cardText2"
                      >Não
                      <v-icon class="iconEdit" color="#9b0b9b"
                        >mdi-lead-pencil</v-icon
                      ></v-list-item-title
                    >
                  </v-list-item-content>
                </v-col>
              </v-row>

              <v-list-item-content class="extraAlign">
                <v-list-item-title class="cardText1"
                  >Porcentagem de perda extra de sombreamento</v-list-item-title
                >
                <v-list-item-title class="cardText2"
                  >0%
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>
            </v-col>
          </div>
        </v-container>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.btn {
  text-shadow: 1px 0px #000000;
  font-size: 9px;
  width: 120px;
  font-weight: 300;
}

.containerAlign {
  margin-left: -50px;
}

.cardAlign {
  margin-top: -20px;
}

.cardText1 {
  font-size: 12px;
  font-weight: 400;
  margin-bottom: -2px;
}

.cardText2 {
  font-size: 12px;
  font-weight: 800;
  margin-top: 8px;
  margin-bottom: -12px;
}

.cardText3 {
  font-size: 12px;
  font-weight: 800;
  margin-left: -16px;
  margin-top: 7px;
  margin-bottom: -12px;
}

.extraAlign {
  margin-left: 50px;
}

.iconMap {
  margin-left: 50px;
  margin-top: 15px;
  font-size: 25px;
}

.iconEdit {
  margin-left: -3px;
  font-size: 12px;
}

.mapText {
  margin-top: -10px;
  margin-left: 32px;
  font-size: 12px;
  font-weight: 1000;
}

.projectText {
  font-size: 14px;
  font-weight: 1000;
}
</style>
