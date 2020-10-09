import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import VueECharts from "vue-echarts";
import "./plugins/element.js";
import ECharts from "echarts";
import './style/index.css' // 修改eleUI中该css加入app.vue中会被覆盖，不会生效

Vue.config.productionTip = false;
Vue.prototype.$echarts = ECharts;
Vue.component("v-chart", VueECharts); // 注册组件

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
