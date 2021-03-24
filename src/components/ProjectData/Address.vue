<template>
  <v-container>
    <v-row no-gutters>
      <v-col cols="12" md="11">
        <div class="my-3"></div>
        <v-list-item-content>
          <v-list-item-title class="mapText"
            >Digite o Endereço e o CEP para Pesquisar</v-list-item-title
          >
        </v-list-item-content>
      </v-col>
      <v-col cols="12" sm="6" md="7">
        <v-card
          class="mx-auto elevation-20"
          color="purple"
          dark
          style="max-width: 410px"
        >
          <v-img
            lazy-src="https://picsum.photos/id/11/10/6"
            max-height="400"
            max-width="700"
            src="https://picsum.photos/id/11/500/300"
          ></v-img>
        </v-card>

        <v-container class="containerAlign">
          <v-row no-gutters>
            <v-col cols="4" md="2">
              <div class="my-2"></div>
              <v-list-item-title class="cardText1">Latitude:</v-list-item-title>
            </v-col>

            <v-col cols="4" md="2">
              <v-list-item-title class="cardText3">0 </v-list-item-title>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="4" md="2">
              <div class="my-2"></div>
              <v-list-item-title class="cardText1"
                >Longitude:</v-list-item-title
              >
            </v-col>

            <v-col cols="1" md="2">
              <v-list-item-title class="cardText3">0 </v-list-item-title>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col cols="1" md="2">
              <div class="my-2"></div>
              <v-btn color="#9b0b9b" depressed dark>
                <div class="btn">Salvar Coordenadas</div>
              </v-btn>
            </v-col>
          </v-row>

          <v-row no-gutters>
            <v-col md="2">
              <div class="my-2"></div>
              <v-list-item-title class="cardText1">Endereço:</v-list-item-title>
            </v-col>
          </v-row>
        </v-container>
      </v-col>

      <v-col cols="12" md="5">
        <v-card>
          <v-container>
            <div class="cardAlign">
              <v-row cols="12" no-gutters>
                <v-col cols="1" md="1" class="iconMap">
                  <v-icon class="iconMap" color="#9b0b9b"
                    >mdi-map-marker</v-icon
                  >
                </v-col>

                <v-col cols="11" md="11">
                  <v-list-item-content>
                    <v-list-item-title class="projectText"
                      >Localização Do Projeto</v-list-item-title
                    >
                  </v-list-item-content>
                </v-col>
                <v-col cols="6" md="6">
                  <v-row no-gutters>
                    <v-col cols="4" md="5">
                      <div class="my-2"></div>
                      <v-list-item-title class="cardText1"
                        >Latitude
                      </v-list-item-title>
                    </v-col>

                    <v-col cols="8" md="6" no-gutters>
                      <v-list-item-title class="cardText3"
                        >Não informado
                        <v-icon class="iconEdit" color="#9b0b9b"
                          >mdi-lead-pencil</v-icon
                        >
                      </v-list-item-title>
                    </v-col>
                  </v-row>
                </v-col>
                <v-col cols="2" md="3">
                  <div class="my-2"></div>
                  <v-list-item-title class="cardText1"
                    >Longitude</v-list-item-title
                  >
                </v-col>

                <v-col cols="4" md="3">
                  <v-list-item-subtitle class="cardText3"
                    >Não informado
                    <v-icon class="iconEdit" color="#9b0b9b"
                      >mdi-lead-pencil</v-icon
                    ></v-list-item-subtitle
                  >
                </v-col>
              </v-row>
              <v-row no-gutters>
                <v-col cols="2" md="2">
                  <div class="my-2"></div>
                  <v-list-item-title class="cardText1">CEP</v-list-item-title>
                </v-col>

                <v-col md="8">
                  <v-list-item-title class="cardText3"
                    >Não informado
                    <v-icon class="iconEdit" color="#9b0b9b"
                      >mdi-lead-pencil</v-icon
                    ></v-list-item-title
                  >
                </v-col>
              </v-row>

              <v-list-item-content>
                <v-list-item-title class="cardText1"
                  >Logradouro</v-list-item-title
                >
                <v-list-item-title class="cardText2"
                  >Não informado
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="cardText1">Número</v-list-item-title>
                <v-list-item-title class="cardText2"
                  >Não informado
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="cardText1"
                  >Complemento</v-list-item-title
                >
                <v-list-item-title class="cardText2"
                  >Não informado
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="cardText1">Bairro</v-list-item-title>
                <v-list-item-title class="cardText2"
                  >Não informado
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="cardText1">Cidade</v-list-item-title>
                <v-list-item-title class="cardText2"
                  >Não informado
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="cardText1">UF</v-list-item-title>
                <v-list-item-title class="cardText2"
                  >Não informado
                  <v-icon class="iconEdit" color="#9b0b9b"
                    >mdi-lead-pencil</v-icon
                  ></v-list-item-title
                >
              </v-list-item-content>

              <v-list-item-content>
                <v-list-item-title class="cardText1">Zoom</v-list-item-title>
                <v-list-item-title class="cardText2">20</v-list-item-title>
              </v-list-item-content>
            </div>
          </v-container>
        </v-card>
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
  margin-left: 20px;
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

.iconMap {
  margin-left: -1px;
  margin-top: 7px;
  font-size: 15px;
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
