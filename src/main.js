import "element-ui/lib/theme-chalk/index.css";

import Vue from "vue";
import ElementUI from "element-ui";
import VueResource from "vue-resource";
import bugsnagVue from "bugsnag-vue";
import * as VueGoogleMaps from "vue2-google-maps";
import App from "./App";

Vue.config.productionTip = false;

if (window.bugsnagClient) {
  window.bugsnagClient.use(bugsnagVue(Vue));
}

Vue.use(ElementUI);
Vue.use(VueResource);
Vue.use(VueGoogleMaps, {
  load: {
    // @todo: move to .env config
    key: "AIzaSyADke6h-GKt5dPB8IcjVeQ0lAaC1wL_LwY"
  }
});

/* eslint-disable no-new */
new Vue({
  render: h => h(App),
  components: { App }
}).$mount("#app");