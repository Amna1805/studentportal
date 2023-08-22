import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import ArgonDashboard from "./argon-dashboard";
//import VeeValidatePlugin from '@vee-validate';
//import { defineRule } from '@vee-validate/rules';


// defineRule('cnic', (value) => {
//     return /^[0-9]{13}$/.test(value);
//   });
const appInstance = createApp(App);
//appInstance.use(VeeValidatePlugin);
appInstance.use(store);
appInstance.use(router);
appInstance.use(ArgonDashboard);
appInstance.mount("#app");
