<template>
  <common-card title="累计销售额" value="$ 12312312">
    <template>
      <div class="compare-wrapper">
        <div class="compare">
          <span>日同比</span>
          <span class="emphasis">10%</span>
          <div class="increase"></div>
        </div>
        <div class="compare">
          <span>月同比</span>
          <span class="emphasis">12%</span>
          <div class="decrease"></div>
        </div>
      </div>
    </template>
    <template v-slot:footer>
      <span>昨日交易额</span>
      <span class="emphasis">￥30,000,000</span>
    </template>
  </common-card>
</template>

<script>
import CommonCardMixin from "../../mixins/commonCardMixin";
export default {
  mixins: [CommonCardMixin],
};
</script>

<style lang="scss">
.compare-wrapper {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  .compare {
    display: flex;
    align-items: center;
    font-size: 12px;
    height: 50%;
    margin-top: 3px;
  }
}
</style>