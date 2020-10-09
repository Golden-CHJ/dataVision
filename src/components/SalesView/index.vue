<template>
  <div class="sales-view">
    <el-card shadow="hover" :body-style="{ padding:'0 0 20px 0' }">
      <template v-slot:header>
        <!-- 这里是为了定制该卡片的header,ele card中有对应的插槽-->
        <div class="menu-wrapper">
          <el-menu
            mode="horizontal"
            :default-active="activeIndex"
            @select="onMenuSelect"
            class="sales-view-menu"
          >
            <!--elmenu的水平模式-->
            <el-menu-item index="1">销售额</el-menu-item>
            <el-menu-item index="2">访问量</el-menu-item>
          </el-menu>
          <div class="menu-right">
            <el-radio-group v-model="radioSelect" size="small">
              <el-radio-button label="今日" />
              <el-radio-button label="本周" />
              <el-radio-button label="本月" />
              <el-radio-button label="今年" />
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
              class="sales-view-data-pick"
            >
            </el-date-picker>
          </div>
        </div>
      </template>
      <template>
        <!-- 这里是为了定制该卡片的header,ele card中有对应的插槽-->
        <div class="sales-view-chart-wrapper">
          <v-chart :options="chartOption" />
          <div class="sales-view-list">
            <div class="sales-view-title">排行榜</div>
            <div class="list-item-wrapper">
              <div class="list-item" v-for="item in rankData" :key="item.no">
                <div
                  class="list-item-no"
                  :class="+item.no <= 3 ? 'top-no' : ''"
                >
                  {{ item.no }}
                </div>
                <!-- 注意，这里前三名的样式不同，可以使用class绑定-->
                <!-- <div :class="['list-item-no', +item.no <= 3?'top-no':'']">{{item.no}}</div>写法2，vue允许我们使用数组绑定的形式来写样式，style也是可以的 -->
                <div class="list-item-name">{{ item.name }}</div>
                <div class="list-item-money">{{ item.money }}</div>
              </div>
            </div>
          </div>
        </div>
      </template>
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      chartOption: {
        title:{
          text: '年度销售额',
          textStyle:{
            fontSize:12,
            color:'#666'
          },
          left:20,
          top:20
        },
          xAxis:{
            type:'category',
            data:['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisTick:{
              alignWithLable:true,

              lineStyle:{
                color:'#999'
              }

            },
            axisLine:{
              lineStyle:{
                color:'#999'
              }
            },

            axisLabel:{
              color:"#333"
            }
          },
          yAxis:{
            axisLine:{
              show:false
            },
            axisTick:{
              show:false
            },
            splitLine:{
              lineStyle:{
                type:'dotted',
                color:"#666"
              }
            }
          },
          series:[{
            type:'bar',
            barWidth:'35%',
            data:[200, 250, 300, 350, 300, 250, 200, 250, 300, 340, 250, 234]
          }],
          color:['#3398db'],
          grid:{
            top: 70,
            left:60,
            right:60,
            bottom:50
          }
        
      },
      rankData: [
        {
          no: 1,
          name: "麦当劳",
          money: "303,444",
        },
        {
          no: 2,
          name: "麦当劳",
          money: "303,444",
        },
        {
          no: 3,
          name: "麦当劳",
          money: "303,444",
        },
        {
          no: 4,
          name: "麦当劳",
          money: "303,444",
        },
        {
          no: 5,
          name: "麦当劳",
          money: "303,444",
        },
        {
          no: 6,
          name: "麦当劳",
          money: "303,444",
        },
      ],
      date: null,
      pickOptions: {
        shortcuts: [
          {
            // 左侧的小tip
            text: "最近一周",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 7); // Date() 的getTime和setTime
              picker.$emit("pick", [start, end]);
            },
          },
          {
            // 左侧的小tip
            text: "最近一个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30); // Date() 的getTime和setTime
              picker.$emit("pick", [start, end]);
            },
          },
          {
            // 左侧的小tip
            text: "最近三个月",
            onClick(picker) {
              const start = new Date();
              const end = new Date();
              start.setTime(start.getTime() - 3600 * 24 * 1000 * 30 * 3); // Date() 的getTime和setTime
              picker.$emit("pick", [start, end]);
            },
          },
        ],
      },
      radioSelect: "今日",
      activeIndex: "1", // <el-menu-item index="1">销售额</el-menu-item> 中是字符串 数据绑定中是数字1
    };
  },
  methods: {
    onMenuSelect: function (index) {
      this.activeIndex = index;
    },
  },
};
</script>

<style lang="scss" scoped>
/* @import url(../../style/index.css);定制样式时放在这里就不行放在main.js就会成功*/
.sales-view {
  margin-top: 20px;

  .menu-wrapper {
    display: flex;
    position: relative; // 这个方便使用absolute(?)

    .sales-view-menu {
      width: 100%;
      padding-left: 20px;

      .el-menu-item {
        height: 50px;
        line-height: 50px;
        margin: 0 20px;
      }
    }
    .menu-right {
      position: absolute;
      top: 0;
      right: 20px;
      height: 50px;
      display: flex;
      align-items: center; //  属性定义项目在交叉轴上如何对齐 align-items: flex-start | flex-end | center | baseline | stretch;
      justify-content: flex-end; // 属性定义了项目在主轴上的对齐方式。 justify-content: flex-start | flex-end | center | space-between | space-around;

      .sales-view-data-pick {
        margin-left: 20px;
      }
    }
  }
  .sales-view-chart-wrapper {
    display: flex;
    height: 270px;

    .echarts {
      flex: 0 0 70%;
      width: 70%;
      height: 100%;
    }

    .sales-view-list {
      flex: 1;
      width: 100%;
      height: 100%;
      overflow: hidden;

      .sales-view-title {
        margin-top: 20px;
        font-size: 12px;
        color: #666;
        font-weight: 500;
      }
      .list-item-wrapper {
        margin-top: 15px;
        .list-item {
          display: flex;
          align-items: center;
          font-size: 12px;
          height: 20px;
          padding: 6px 20px 6px 0;
        }
        .list-item-no{
          display: flex;
          align-items: center;
          justify-content: center;
          width:30px;
          height:30px;
          color:#333;
          &.top-no{ // 这里是多类选择器 &直接替代父类的名字
          background:#000;
          border-radius: 50%;
          color:#fff;
          font-weight: 500;
        }
        }
        
      }
      .list-item-name{
        margin-left:10px;
        color:#333;
      }
      .list-item-money{
        flex: 1; //     flex-grow: 1     flex-shrink: 1;     flex-basis: 0 这里的意思吧接下来的空间全部占下来
        text-align:right;
      }
    }
  }
}
</style>
