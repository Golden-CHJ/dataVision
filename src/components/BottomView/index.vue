<template>
  <div class="bottom-view">
    <div class="view">
      <el-card shadow="hover">
        <template v-slot:header>
          <div class="title">
            关键词搜索
          </div>
        </template>
        <template>
          <div class="chart-wrapper">
            <div class="chart">
              <div class="chart-title">搜索用户数</div>
              <div class="chart-data">93,643</div>
              <v-chart :options="chartOption"></v-chart>
            </div>
          </div>
        </template>
      </el-card>
    </div>
    <div class="view">
      <el-card shadow="hover">

      </el-card>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      chartOption:{
      
      },
    }
  }
};
</script>

<style></style>
