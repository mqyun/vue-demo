import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import { Button } from "element-ui";
import vConsole from "vconsole";

new vConsole();

Vue.config.productionTip = false;

Vue.component(Button.name, Button);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
