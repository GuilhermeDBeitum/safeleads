<template>
  <v-app>
    <v-col cols="12" sm="6" md="12">
      <v-select
        class="date"
        :items="datas"
        v-model="selectData"
        @input="setDates()"
        @click:clear="startDate = null"
        color="#9b0b9b"
        outlined
        dense
        item-color="#000"
      >
        <template v-slot:item="{ item }">
          <template
            v-if="
              item.value === selectData &&
              item.value === 'select' &&
              startDate &&
              !showSelectDate
            "
          >
            <span class="grow">
              {{ startDate | dateFormat("DD/MM/YYYY") }}
            </span>
            <v-icon>refresh</v-icon>
          </template>
          <template v-else>{{ item.text }}</template>
        </template>
        <template v-slot:selection="{ item }">
          <span
            v-if="
              item.value === selectData &&
              item.value === 'select' &&
              startDate &&
              !showSelectDate
            "
          >
            {{ startDate | dateFormat("DD/MM/YYYY") }}
          </span>
          <span v-else>{{ item.text }}</span>
        </template>
      </v-select>
    </v-col>
    <v-dialog
      :value="showSelectDate"
      @input="showSelectDate = false"
      @keydown.esc="showSelectDate = false"
      v-model="showSelectDate"
      persistent
      full-width
      :width="$vuetify.breakpoint.smAndUp ? '290px' : '290px'"
    >
      <v-window touchless v-model="currentDateSelector">
        <v-window-item value="startDate">
          <v-date-picker
            v-model="startDate"
            :scrollable="false"
            color="#9b0b9b"
          >
            <v-spacer></v-spacer>

            <v-btn text color="black" @click="showSelectDate = false"
              >Concluir</v-btn
            >
            >
          </v-date-picker>
        </v-window-item>
      </v-window>
    </v-dialog>
  </v-app>
</template>

<script>
var moment = require("moment-timezone");
export default {
  name: "App",

  components: {},

  data: () => ({
    datas: [{ text: "Escolher Data", value: "select" }],
    currentDateSelector: "startDate",
    selectData: "select",
    startDate: null,

    showSelectDate: false,
  }),

  methods: {
    setDates() {
      if (this.selectData) {
        this.currentDateSelector = "startDate";
        this.startDate = moment().format("YYYY-MM-DD");
        this.showSelectDate = true;
      }
    },
  },

  filters: {
    dateFormat: function (value, opts) {
      return moment(value).format(opts);
    },
  },
};
</script>

<style scoped>
.date {
  font-size: 12px;
  width: 127px;
}
</style>
