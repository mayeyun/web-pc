<template>
    <!-- 新建群组 -->
    <div class="addGroup container">
         <el-breadcrumb separator="/" class="warp-breadcrum">
            <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>新建群组</el-breadcrumb-item>
         </el-breadcrumb>
         <div class="box">
              <div class="flexBox">
                <el-select v-model="group" placeholder="请选择群组" clearable>
                    <el-option label="花名册" value="0"></el-option>
                    <el-option label="房屋用户注册" value="1"></el-option>
                    <el-option label="未缴费用户" value="2"></el-option>
                </el-select>
                <el-button type="primary">导入Excel</el-button>
            </div>
            <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%">
                    <el-table-column prop="name" label="姓名"></el-table-column>
                    <el-table-column prop="phone" label="电话"></el-table-column>
                    <el-table-column prop="num" label="序号"></el-table-column>
                    <el-table-column prop="mark" label="备注"></el-table-column>
            </el-table>
         </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            group:'1',
            tableData:[]
        }
    }
}
</script>
<style scoped>
.box{
     border: 1px solid #f1f1f1;
     padding: 10px 10px 40px;
     margin-top: 20px;
     font-size: 14px;
 }
  .flexBox{
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
  }
</style>