import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueECharts from "vue-echarts";
import "./plugins/element.js";
import ECharts from "echarts";

Vue.config.productionTip = false;
Vue.prototype.$echarts = ECharts;
Vue.component("v-echart", VueECharts); // 注册组件

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
