<template>
  <common-card title="累计订单量" value="￥12341245">
    <template>
      <div id="totalOrdersChart" :style="{height:'100%', width:'100%' }"></div>
    </template>
    <template v-slot:footer>
      <span>累计订单量</span>
      <span class="emphasis">20302010</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [CommonCardMixin],
  mounted() {
    const chartDom = document.getElementById("totalOrdersChart");
    const chart = this.$echarts.init(chartDom);
    chart.setOption({
      xAxis: {
        type: "category",
        show: false,
        boundaryGap: false, // x轴左右两侧拉伸开
      },
      yAxis: {
        show: false,
      },
      series: [
        {
          type: "line",
          data: [
            620,
            345,
            222,
            356,
            405,
            664,
            963,
            256,
            356,
            395,
            256,
            759,
            683,
            345,
          ],
          areaStyle: {
            color: "purple", // 面积区域
          },
          lineSytle: {
            width: 0, // 线段
          },
          itemStyle: {
            opacity: 0, // 点
          },
          smooth: true, // 平滑
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
