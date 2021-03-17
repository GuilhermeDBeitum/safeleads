import Vue from "vue";
import App from "./App.vue";
import store from "./store";
import vuetify from "./plugins/vuetify";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;

new Vue({
  store,
  vuetify,
  icons: {
    iconfont: "mdi", // default - only for display purposes
  },
  render: function (h) {
    return h(App);
  },
}).$mount("#app");
