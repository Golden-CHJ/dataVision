<template>
  <div class="sales-view">
    <el-card shadow="hover">
      <template v-slot:header> <!-- 这里是为了定制该卡片的header,ele card中有对应的插槽-->
      <div class="menu-wrapper">
        <el-menu
        mode="horizontal"
        :default-active="activeIndex"
        @select="onMenuSelect">
        <!--elmenu的水平模式-->
          <el-menu-item index="1">销售额</el-menu-item>
          <el-menu-item index="2">访问量</el-menu-item>
        </el-menu>
        <div class="menu-right">
          <el-radio-group v-model="radioSelect" size="small">
            <el-radio-button label="今日"/>
            <el-radio-button label="本周"/>
            <el-radio-button label="本月"/>
            <el-radio-button label="今年"/>
            
          </el-radio-group>
          <el-date-picker
          type="daterange"
          v-model="date"
          range-separator="至"
          start-placeholde="开始日期"
          end-placeholde="结束日期"
          size="small"
          unlink-panels
          :picker-options="pickOptions"
          >

          </el-date-picker>
        </div>
      </div>
      </template>
      <template > <!-- 这里是为了定制该卡片的header,ele card中有对应的插槽-->
      <div class="">header
      </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data(){
    return{
      date:null,
      pickOptions:{
        shortcuts:[{ // 左侧的小tip
          text:"最近一周",
          onClick(picker){
            const start = new Date();
            const end = new Date();
            start.setTime(start.getTime() - 3600*24*1000*7); // Date() 的getTime和setTime
            picker.$emit('pick', [start, end])
          }
        },{ // 左侧的小tip
          text:"最近一个月",
          onClick(picker){
            const start = new Date();
            const end = new Date();
            start.setTime(start.getTime() - 3600*24*1000*30); // Date() 的getTime和setTime
            picker.$emit('pick', [start, end])
          }
        },{ // 左侧的小tip
          text:"最近三个月",
          onClick(picker){
            const start = new Date();
            const end = new Date();
            start.setTime(start.getTime() - 3600*24*1000*30*3); // Date() 的getTime和setTime
            picker.$emit('pick', [start, end])
          }
        }]
      },
      radioSelect:"今日",
      activeIndex:"1" // <el-menu-item index="1">销售额</el-menu-item> 中是字符串 数据绑定中是数字1
    }
  },
  methods:{
    onMenuSelect:function(index){
      this.activeIndex = index
    }
  }
};
</script>

<style lang="scss" scoped>
/* @import url(../../style/index.css);定制样式时放在这里就不行放在main.js就会成功*/ 
.sales-view{
  margin-top: 20px;
  .menu-wrapper{
    display: flex;
  }
}
</style>
