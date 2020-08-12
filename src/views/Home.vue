<template>
  <div class="home">
    <top-view />
    <sales-view />
    <bottom-view />
    <map-view />
  </div>
</template>

<script>
// @ is an alias to /src
import TopView from "../components/TopView/index.vue";
import SalesView from "../components/SalesView/index.vue";
import BottomView from "../components/BottomView/index.vue";
import MapView from "../components/MapView/index.vue";
export default {
  name: "Home",
  components: {
    TopView,
    SalesView,
    BottomView,
    MapView,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss">
.home {
  width: 100%;
  height: 100%;
  padding: 20px;
  background: #eee;
  box-sizing: border-box;
}
</style>
