import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify, {
  customProperties: true,
  iconfont: "md",
  theme: {
    primary: "#3b125f",
    secondary: "#8b5fbf",
    accent: "#bf653f",
    error: "#722530",
    warning: "#a37513",
    info: "#396893",
    success: "#4caf50"
  }
});
