<template>
  <div id="main-wrap">
    <Navbar class='abso'/>
    <router-view :class='{sideSpace: !getRight, sideSpaceFar: getRight}'></router-view>
  </div>
  
</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import Navbar from './components/Navbar.vue';
export default {
  name: "App",
  components: {
    //HelloWorld,
    Navbar
  },
  data: () => ({
  }),
  computed:{
    getRight(){
      return this.$store.state.right
    }
  }
}
</script>
<style>
h1{
  font-family:Arial, Helvetica, sans-serif;
  background-color: #4380D5;   /*#6A9BDE #083d87 #243E49 #1E6ACE*/;
  color: white/*#322F2F*/;
  text-indent: 10px;
}
li{
  margin-top: 5px;
  color: #636363
}
h3{
  margin-top: 20px;
  color: black;
}
a{
  color: black !important;
  text-decoration: none;
}
p{
  color: #5A5A5A;
}
#main-wrap{
  position: relative;
  height: 100%;
}
.content{
  display: grid;
  margin-left: 60px;
}
.abso{
  position: absolute;
}
.sideSpace{
  margin-left: 56px;
}
.sideSpaceFar{
  margin-left: 256px;
}
.opaque-enter-active{
  transition: opacity 2s;
}
.opaque-enter{
  opacity: 0;
}
.v-application a:visited{
  color: white !important;
}
</style>
