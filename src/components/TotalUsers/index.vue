<template>
  <common-card title="累计用户数" value="1,221,029">
    <template>
      <div id="totalUsersChart" :style="{height:'100%', width:'100%' }"></div>
    </template>
    <template v-slot:footer>
      <div class="totalUsersFooter">
        <span>日同比</span>
        <span class="emphasis">8.73%</span>
        <div class="increase"></div>
        <span style="margin-left:10px">月同比</span>
        <span class="emphasis">35.92%</span>
        <div class="decrease"></div>
      </div>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [CommonCardMixin],
  mounted() {
    const chartDom = document.getElementById("totalUsersChart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      grid: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
      xAxis: {
        type: "value",
        show: false,
      },
      yAxis: {
        type: "category",
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [200],
          stack: "总量", // 合并到同一条线
          barWidth: "10px",
          itemStyle: {
            color: "green",
          },
        },
        {
          type: "bar",
          data: [250],
          stack: "总量", // 合并到同一条线
          barWidth: "10px",
          itemStyle: {
            color: "gray",
          },
        },
        {
          type: "custom", // 自定义
          data: [200],
          stack: "总量", // 合并到同一条线
          renderItem: (params, api) => {
            const value = api.value(0); // 拿到第一个数据
            const endPoint = api.coord([value, 0]); //绑定坐标
            return {
              // 这个函数是返回一个 svg
              type: "group", // 返回一个svg组
              position: endPoint,
              children: [
                // children
                {
                  type: "path",
                  shape: {
                    d: "M1024 255.996 511.971 767.909 0 255.996 1024 255.996z",
                    x: -5,
                    y: -20,
                    width: 10,
                    height: 10,
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
                {
                  type: "path",
                  shape: {
                    d: "M0 767.909l512.029-511.913L1024 767.909 0 767.909z",
                    x: -5,
                    y: 10,
                    width: 10,
                    height: 10,
                  },
                  style: {
                    fill: "#45c946",
                  },
                },
              ],
            };
          },
        },
      ],
    });
  },
};
</script>

<style>
.totalUsersFooter {
  display: flex;
  align-items: center;
}
</style>
