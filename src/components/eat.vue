<template>
  <div class="hello">
    <p>{{allProduct}}</p>
  </div>
</template>

<script>
export default {
  data(){
    return {
      allProduct:''
    }
  },
  mounted () {
     if (this.$route.params.id === '11') {
        this.allProduct = '葫芦卜/白菜/香菇……'
      }
  },
   watch: {
    // to 表示你将要去的路由对象， from表示你从哪个路由对象来
    '$route' (to, from) {
      if (to.params.id === '11'||from.params.id==='') {
        this.allProduct = '葫芦卜/白菜/香菇……'
      } else if (to.params.id === '22') {
        this.allProduct = '西瓜/香蕉/苹果……'
      } else {
        this.allProduct = '猪肉/牛肉/羊肉……'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
