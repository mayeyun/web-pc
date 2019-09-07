<template>
     <!-- 通知公告新建 -->
    <div class="addNotice container">
          <el-breadcrumb separator="/" class="warp-breadcrum">
            <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通知公告新建</el-breadcrumb-item>
         </el-breadcrumb>
         <div class="box">
            <div class="flexBox">
                <el-select v-model="group" placeholder="请选择群组" clearable>
                    <el-option label="花名册" value="0"></el-option>
                    <el-option label="房屋用户注册" value="1"></el-option>
                    <el-option label="未缴费用户" value="2"></el-option>
                </el-select>
                <el-button type="primary" @click="addGroup">新建群组</el-button>
            </div>
            <div class="tableBox">
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="50"></el-table-column>
                    <el-table-column label="状态" width="70">
                        <template slot-scope="scope">{{ scope.row.status }}</template>
                    </el-table-column>
                    <el-table-column label="账单状态" width="70">
                        <template slot-scope="scope">
                            <span :class="{'color1':scope.row.billStatus==1,'color2':scope.row.billStatus==0}">{{ scope.row.billStatus |filterBillStatus(scope.row.billStatus) }}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="way" label="缴费方式" align="center"></el-table-column>
                    <el-table-column prop="billName" label="账单名称"></el-table-column>
                    <el-table-column prop="tungNum" label="栋数"></el-table-column>
                     <el-table-column prop="roomId" label="房号"></el-table-column>
                    <el-table-column prop="amount" label="总金额"></el-table-column>
                    <el-table-column prop="propertyfee" label="物业费"></el-table-column>
                    <el-table-column prop="cost" label="折扣率"></el-table-column>
                    <el-table-column prop="wxPrice" label="维修基金"></el-table-column>
                    <el-table-column prop="waterPrice" label="水费"></el-table-column>
                    <el-table-column prop="garbage" label="垃圾处理费"></el-table-column>
                    <el-table-column prop="pwPrice" label="排污费"></el-table-column>
                    <el-table-column prop="date" label="日期"></el-table-column>
                    <el-table-column label="操作" align="center">
                         <template>
                            <el-button type="text" size="small">操作</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                 <!-- 分页 -->
                <el-pagination
                @size-change="handleSizeChange"
                @current-change="handleCurrentChange"
                :style="{'display': total < 11 ? 'none': ''}"
                :current-page="query.page"
                :page-size="query.limit"
                background
                layout="total, sizes, prev, pager, next"
                :total="total">
                </el-pagination>
            </div>
            <div class="bottom">
                <div class="input_group">
                    <el-row :gutter="20" style="display:flex;align-items:center;">
                        <el-col :span="6" class="item">
                            <span>名称：</span><el-input type="text" placeholder="请输入名称"></el-input>
                        </el-col>
                        <el-col :span="6" class="item">
                            <span>内容：</span><el-input type="text" placeholder="请输入内容"></el-input>
                        </el-col>
                        <el-col :span="6">
                            <el-checkbox-group v-model="checkedItems">
                                <el-checkbox v-for="item in items" :label="item" :key="item">{{item}}</el-checkbox>
                            </el-checkbox-group>
                        </el-col>
                    </el-row>
                </div>
                <div class="send">
                    <div class="sborder">
                        共<input type="text" />条
                        1元/条
                        共<input type="text" />元
                    </div>
                    <el-button type="primary">确认发送</el-button>
                </div>
            </div>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            checkedItems:'',
            items:['模板1','模板2','模板3'],
            group:'1',
            tableData: [{
                status: '初始',
                billStatus:1,
                way:'系统缴费',
                billName:'深圳市某小区2019年8月账单',
                tungNum:'',
                roomId:'A-101',
                amount:'5元',
                propertyfee:'￥220.00',//物业费
                cost:1,//折扣率
                wxPrice:'￥50.00',//维修基金
                waterPrice:'￥32.41',//水费
                garbage:'￥90.00',//垃圾处理费
                pwPrice:'￥90.00',//排污费
                date:"2019-09-04"
            },
            {
                status: '进行中',
                billStatus:0,
                way:'系统缴费',
                billName:'深圳市某小区2019年8月账单',
                tungNum:'',
                roomId:'A-101',
                amount:'5元',
                propertyfee:'￥220.00',//物业费
                cost:1,//折扣率
                wxPrice:'￥50.00',//维修基金
                waterPrice:'￥32.41',//水费
                garbage:'￥90.00',//垃圾处理费
                pwPrice:'￥90.00',//排污费
                date:"2019-09-04"
            },
            {
                status: '完成',
                billStatus:0,
                way:'系统缴费',
                billName:'深圳市某小区2019年8月账单',
                tungNum:'',
                roomId:'A-101',
                amount:'5元',
                propertyfee:'￥220.00',//物业费
                cost:1,//折扣率
                wxPrice:'￥50.00',//维修基金
                waterPrice:'￥32.41',//水费
                garbage:'￥90.00',//垃圾处理费
                pwPrice:'￥90.00',//排污费
                date:"2019-09-04"
            }],
            multipleSelection:[],
            total: 0,
            query:{
                limit:10,
                page:1
            },
        }
    },
    filters:{
       filterBillStatus(val){
            if(val==1){
                return '已缴费'
            }
            if(val==0){
                return '未缴费'
            }
       }  
    },
    methods:{
        addGroup(){
            this.$router.push({path:'../addGroup'})
        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        //分页
        handleSizeChange(size) {
            this.query.limit = size
        },
        handleCurrentChange(currentPage) {
           this.query.page = currentPage
        }
    }
}
</script>
<style scoped>
  .flexBox{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
  }
  .box{
     border: 1px solid #f1f1f1;
     padding: 10px 10px 40px;
     margin-top: 20px;
     font-size: 14px;
 }
 .color1{
    color: green;
 }
 .color2{
    color: red;
 }
 .bottom{
     margin-top: 10px;
 }
 .item{
     display: flex;
     align-items: center;
 }
 .item span{
     display: inline-block;
     width: 50px;
     font-size: 14px;
 }
 .send{
     margin-top: 10px;
     display: flex;
     align-items: center;
 }
 .send .sborder{
     border: 1px solid #eee;
     width: 20%;
     padding: 10px;
     margin-right: 20px;
 }
 .send .sborder input{
     border-bottom: 1px solid #eee;
     border-top: 0;
     border-left: 0;
     border-right: 0;
     width: 50px;
 }
</style>