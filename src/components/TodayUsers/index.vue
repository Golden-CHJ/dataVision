<template>
  <common-card title="今日交易用户数" value="21,029">
    <template>
      <div id="todayUsersChart" :style="{height:'100%', width:'100%' }"></div>
    </template>
    <template v-slot:footer>
      <span>退货率</span>
      <span class="emphasis">5.23%</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [CommonCardMixin],
  mounted() {
    const chartDom = document.getElementById("todayUsersChart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      color: ["#3398db"],
      xAxis: {
        type: "category",
        data: [
          "00:00",
          "01:00",
          "02:00",
          "03:00",
          "04:00",
          "05:00",
          "06:00",
          "07:00",
          "08:00",
          "09:00",
          "10:00",
          "11:00",
          "12:00",
          "13:00",
        ],
        show: false,
        boundaryGap: false, // x轴左右两侧拉伸开
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "bar",
          data: [
            122,
            344,
            54,
            252,
            342,
            123,
            200,
            256,
            356,
            395,
            256,
            531,
            83,
            445,
          ],
          barWidth: "60%",
        },
      ],
      grid: {
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
    });
  },
};
</script>

<style></style>
