<template>
  <v-container class="flex">
    <v-col class="container">
      <v-card class="mx-auto" height="380px" max-width="800" outlined>
        <div class="my-3"></div>
        <v-list-item three-line>
          <v-list-item-avatar tile class="icon"
            ><v-icon class="icon">
              mdi-image-size-select-actual</v-icon
            ></v-list-item-avatar
          >

          <v-list-item-content>
            <v-row no-gutters>
              <v-col md="3">
                <v-list-item-title class="titleText mb-2">
                  Nome do Projeto
                </v-list-item-title>
              </v-col>

              <v-col md="3">
                <v-btn text color="#9b0b9b" class="btnSide"> Editar</v-btn>
              </v-col>
            </v-row>

            <v-row no-gutters>
              <v-col md="5">
                <v-list-item-subtitle class="dateText"
                  >Criado: 00/00/0000 | Alterado: 00/00/0000
                </v-list-item-subtitle>
              </v-col>
            </v-row>

            <div class="my-5"></div>

            <v-row no-gutters>
              <v-col>
                <v-row no-gutters>
                  <v-col md="3">
                    <v-list-item-title class="cardText1"
                      >Tipo:
                    </v-list-item-title>
                  </v-col>

                  <v-col md="3">
                    <div class="my-3"></div>
                    <span class="cardText2"> Residencial </span>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col md="3">
                    <v-list-item-title class="cardText1"
                      >Dono:
                    </v-list-item-title>
                  </v-col>

                  <v-col md="3">
                    <div class="my-3"></div>
                    <span class="cardText2"> Usuário </span>
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col md="3">
                    <v-list-item-title class="cardText1"
                      >Loja:
                    </v-list-item-title>
                  </v-col>

                  <v-col md="4">
                    <div class="my-3"></div>
                    <span class="cardText2"> Nome da Loja </span>
                  </v-col>
                </v-row>

                <div class="my-7"></div>
                <v-list-item-title class="cardText1"
                  ><p>Previsão de Fechamento:</p>
                </v-list-item-title>

                <div class="pickerAling"><DataPicker /></div>
              </v-col>

              <v-col md="2" order="12">
                <v-list-item-title class="cardText1"
                  >Tarefas:
                </v-list-item-title>
                <div class="my-6"></div>
                <v-row no-gutters>
                  <v-col md="6">
                    <v-card
                      class="colorBox1"
                      placeholder="Placeholder"
                      outlined
                      dense
                      ><span>000</span></v-card
                    >
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col md="6">
                    <v-card
                      class="colorBox2"
                      placeholder="Placeholder"
                      outlined
                      dense
                      ><span>000</span></v-card
                    >
                  </v-col>
                </v-row>

                <v-row no-gutters>
                  <v-col md="6">
                    <v-card
                      class="colorBox3"
                      placeholder="Placeholder"
                      outlined
                      dense
                      ><span>000</span></v-card
                    >
                  </v-col>
                </v-row>
              </v-col>
              <v-col order="1">
                <v-row no-gutters>
                  <v-col md="12">
                    <v-list-item-title class="cardText1"
                      ><p>Fluxo de Projeto:</p>
                    </v-list-item-title>
                  </v-col>
                  <div class="my-8"></div>
                  <v-col md="10">
                    <v-list-item-subtitle class="dateText"
                      ><p>
                        Este projeto não pertence a nenhuma etapa ou status.
                        Altere abaixo:
                      </p>
                    </v-list-item-subtitle>
                  </v-col>
                  <div class="my-6"></div>
                  <v-col md="12" class="points">
                    <v-card height="55px" flat class="point">
                      <v-chip class="chip" color="#136b13" text-color="white">
                        Proposta Comercial Técnica
                      </v-chip>
                    </v-card>

                    <v-card-text class="py-0">
                      <v-timeline dense class="pointLine">
                        <v-row no-gutters>
                          <v-col md="1">
                            <div class="circle"></div>
                          </v-col>

                          <v-col md="11">
                            <div class="caption">
                              <h3>Proposta Técnica finalizada</h3>
                            </div>
                          </v-col>
                        </v-row>
                      </v-timeline>
                    </v-card-text>
                  </v-col>
                  <div class="my-8"></div>
                  <v-col md="3">
                    <v-btn text color="#9b0b9b" class="btnSide">
                      Ver Fluxo Completo</v-btn
                    >
                  </v-col>
                </v-row>
              </v-col>
            </v-row>

            <v-row no-gutters> </v-row>
          </v-list-item-content>
        </v-list-item>
      </v-card>
    </v-col>
  </v-container>
</template>

<script>
import DataPicker from "./DataPicker";

export default {
  components: {
    DataPicker,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.btnSide {
  font-size: 12px;
  margin-left: -16px;
  margin-top: -4px;
  font-weight: 800;
}

.circle {
  margin-top: 3px;
  margin-left: 42px;
  border-radius: 100%;
  border: 1px solid #136b13;
  width: 13px;
  height: 13px;
  background-color: rgba(255, 255, 255, 0.938);
}

.container {
  padding: 20px;
}

.colorBox1 {
  text-shadow: 0px 1px #000000;
  font-size: 13px;
  padding: 8px;
  text-align: center;
  margin-left: 5px;
  margin-bottom: 12px;
  width: 40px;
  height: 32px;
  box-shadow: 0 0 0 1px #fec57f;
  color: #fec57f;
  font-weight: 300;
}

.colorBox2 {
  text-shadow: 0px 1px #000000;
  font-size: 13px;
  padding: 8px;
  text-align: center;
  margin-left: 5px;
  margin-bottom: 12px;
  width: 40px;
  height: 32px;
  box-shadow: 0 0 0 1px #41d2ae;
  color: #41d2ae;
  font-weight: 300;
}

.colorBox3 {
  text-shadow: 0px 1px #000000;
  font-size: 13px;
  padding: 8px;
  text-align: center;
  margin-left: 5px;
  margin-bottom: 12px;
  width: 40px;
  height: 32px;
  box-shadow: 0 0 0 1px #c74c52;
  color: #c74c52;
  font-weight: 300;
}

.cardText1 {
  font-size: 14px;
  font-weight: 600;
  margin-top: 12px;
}

.cardText2 {
  font-size: 14px;
  font-weight: 400;
  margin-left: -20px;
}

.chip {
  font-size: 13px;
  margin-left: 12px;
  height: 25px;
  width: 200px;
  font-weight: 400;
  margin-top: -1px;
}

.caption {
  color: #7f7f7f;
  margin-left: 40px;
  margin-bottom: -35px;
}

.dateText {
  font-size: 12px;
  color: #a59aab;
  font-weight: 500;
  margin-top: -5px;
}

.icon {
  color: #a59aab;
  font-size: 45px;
  margin: 10px;
}

.titleText {
  font-size: 21px;
  font-weight: 600;
}

.point {
  margin-right: 30px;
}

.points {
  margin-left: -30px;
}

.pointLine {
  margin-top: -40px;
  margin-left: -35px;
  margin-bottom: -25px;
}

.pickerAling {
  margin-top: -14px;
  margin-left: -12px;
}
</style>
