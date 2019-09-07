<template>
    <!-- 通知公告列表 -->
    <div class="list container">
        <el-breadcrumb separator="/" class="warp-breadcrum">
            <el-breadcrumb-item :to="{path: '/'}">首页</el-breadcrumb-item>
            <el-breadcrumb-item>通知公告列表</el-breadcrumb-item>
        </el-breadcrumb>
        <div class="box">
            <div class="topSerach">
                 <el-form inline :model="form" class="demo-form-inline">
                     <el-form-item>
                        <el-select v-model="form.status" placeholder="请选择状态" clearable>
                        <el-option label="初始" value="0"></el-option>
                        <el-option label="进行中" value="1"></el-option>
                        <el-option label="完成" value="2"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-select v-model="form.type" placeholder="请选择类别" clearable>
                            <el-option label="公众号公告" value="0"></el-option>
                            <el-option label="屏幕公告" value="1"></el-option>
                            <el-option label="app消息通知" value="2"></el-option>
                            <el-option label="短信通知" value="3"></el-option>
                        </el-select>
                    </el-form-item>
                    <el-form-item>
                        <el-date-picker
                            v-model="date"
                            type="daterange"
                            start-placeholder="请选择开始时间"
                            end-placeholder="请选择结束时间"
                            @change="handelDate"
                            value-format="yyyy-MM-dd">
                        </el-date-picker>
                    </el-form-item>
                    <el-form-item>
                        <el-input v-model="form.name" placeholder="请输入名称/内容"></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="handleSearch">搜索</el-button>
                    </el-form-item>
                    <el-form-item>
                        <el-button type="primary" @click="add">新建</el-button>
                    </el-form-item>
                </el-form>
            </div>
            <div class="tableBox">
                <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%" @selection-change="handleSelectionChange">
                    <el-table-column type="selection" width="55"></el-table-column>
                    <el-table-column label="状态" width="120">
                        <template slot-scope="scope">{{ scope.row.status }}</template>
                    </el-table-column>
                    <el-table-column prop="type" label="类别" width="120"></el-table-column>
                    <el-table-column prop="name" label="名称"></el-table-column>
                    <el-table-column prop="content" label="内容"></el-table-column>
                    <el-table-column prop="data" label="时间"></el-table-column>
                    <el-table-column prop="num" label="条数"></el-table-column>
                    <el-table-column prop="price" label="单价"></el-table-column>
                    <el-table-column prop="amount" label="总金额"></el-table-column>
                    <el-table-column prop="create" label="创建"></el-table-column>
                    <el-table-column prop="review" label="复核"></el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button @click.native.prevent="edit(scope.row.id)" type="text" size="small">
                                编辑
                            </el-button>
                            <el-button @click.native.prevent="del(scope.row.id)" type="text" size="small">
                                删除
                            </el-button>
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
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return{
            total: 0,
            query:{
                limit:10,
                page:1
            },
            form:{
                status:'0',
                type:'',
                name:'',
                StartTime: '',
                EndTime: '',
            },
            date: [],
            tableData: [{
                status: '初始',
                type: '公众号公告',
                name: '某某小区2019年8月缴费通知',
                content:'内容',
                data:'2019.09.01 12:08:21',
                num:100,
                price:'0.01元/条',
                amount:'5元',
                cerate:'',
                review:''
            },
            {
                status: '进行中',
                type: '屏幕公告',
                name: '某某小区2019年8月缴费通知',
                content:'内容',
                data:'2019.09.01 12:08:21',
                num:100,
                price:'0.01元/条',
                amount:'5元',
                cerate:'',
                review:''
            },
            {
                status: '完成',
                type: 'app消息通知',
                name: '某某小区2019年8月缴费通知',
                content:'内容',
                data:'2019.09.01 12:08:21',
                num:100,
                price:'0.01元/条',
                amount:'5元',
                cerate:'',
                review:''
            }],
            multipleSelection:[]
        }
    },
    methods:{
        // 日期处理
        handelDate (date) {
            if (date && date.length) {
                this.form.StartTime = date[0]
                this.form.EndTime = date[1]
            } else {
                this.date = []
                this.form.StartTime = this.form.EndTime = ''
            }
        },
        // 搜索
        handleSearch(){

        },
        // 新建
        add(){

        },
        handleSelectionChange(val) {
            this.multipleSelection = val;
        },
        edit(){

        },
        del(){

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
 .box{
     border: 1px solid #f1f1f1;
     padding: 20px 10px;
     margin-top: 20px;
 }
</style>