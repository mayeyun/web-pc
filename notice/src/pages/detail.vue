<template>
    <!-- 通知公告详情 -->
    <div class="detail container">
        <el-breadcrumb separator="/" class="warp-breadcrum">
            <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通知公告详情</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="box">
            <el-row>
                <el-col :span="6" :offset="3">状态：发送中</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">类别：公众号公告</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">名称：XX小区2019年8月缴费通知</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">内容：XXX</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">时间：XXXXXX</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">条数：20条</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">单价：0.5元/条</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">总金额：5元</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">创建：XX</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">复核：XX</el-col>
            </el-row>
            <el-row class="mt">
                <el-col :span="6" :offset="3">发送对象：XX</el-col>
            </el-row>
        </div>
    </div>
</template>
<style scoped>
 .box{
     border: 1px solid #f1f1f1;
     padding: 40px 10px;
     margin-top: 20px;
     font-size: 14px;
 }
 .mt{
     margin-top: 20px;
 }
</style>