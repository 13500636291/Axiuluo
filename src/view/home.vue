<template>
  <div class="home">
    <h1>{{title}}</h1>
  </div>
</template>

<script>
import {getUserList} from  '@/api'

export default {
data(){
  return {
    title:'首页'
  }
},
mounted() {
  let params = {params:{query:'',pagesize:1,pagenum:1}}
  getUserList(params).then(res=> res.data)
}
}
</script>
<style>
h1{
  color: red;
  font-size: 21px;
}
</style>
