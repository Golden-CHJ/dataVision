<template>
  <div class="top-view">
    <el-row :gutter="20">
      <!--每列的边距-->
      <el-col :span="6">
        <!--一共24 所以有分成6列-->
        <el-card shadow="hover" :body-style="{ padding: 20 }">
          <total-sales />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-orders />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <today-users />
        </el-card>
      </el-col>
      <el-col :span="6">
        <el-card shadow="hover">
          <total-users />
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import TotalSales from "../TotalSales/index";
import TotalOrders from "../TotalOrders/index";
import TodayUsers from "../TodayUsers/index";
import TotalUsers from "../TotalUsers/index";
export default {
  components: {
    TotalSales,
    TotalOrders,
    TodayUsers,
    TotalUsers,
  },
};
</script>

<style>
.top-view {
}
</style>
