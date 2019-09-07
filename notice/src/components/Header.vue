<template>
  <div class="headers">
     <h1><img src="../assets/logo.png" alt=""></h1>
     <div style="display:flex;align-items:center;justify-content: space-between;width:100%;">
       <el-menu :default-active="$route.path" class="el-menu-demo" mode="horizontal" router @select="handleSelect">
        <el-menu-item v-for="(item,index) in menu" :key="index" :index="item.path">{{item.title}}</el-menu-item>
      </el-menu>
      <el-button>退出</el-button>
     </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      activeIndex: '1',
      menu:[
        {path:'/',title:'通知公告列表'},
        {path:'/detail',title:'通知公告详情'},
        {path:'/addNotice',title:'通知公告新建'},
        {path:'/addGroup',title:'新建群组'},
      ]
    }
  },
  watch: {
    $route( to , from ){  
      this.defaultActiveIndex = to.path;
    }
  },
  computed:{
  },
  methods:{
    handleSelect(key, keyPath) {
        console.log(key, keyPath);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.headers{
  padding: 10px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
}
.headers h1{
  width: 100px;
}
.headers img{
  max-width: 50px;
  margin-left: 10px;
}
.el-menu.el-menu--horizontal{
  border-bottom: 0;
}
</style>
