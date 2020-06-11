<template>
  <div>
    <v-app>
    <h1>Presentation</h1>
    <v-divider></v-divider>
    <div  :class="{message: true, mounted: mounted}">
      <h4 id="demo">{{message}}</h4>
       <v-btn color="primary" :class='{button: true, apparition: apparition}'><a :href='resume' download="resume.pdf">Download Resume</a></v-btn>
    </div>
    </v-app>
  </div>
</template>

<script>
import resume from '../repo/adrian_monteil_fullstack.pdf'
import typeWriter from "../logic/typeWriter.js";
export default {
  name: "Welcome",
  data(){
    return{
      message: "",
      mounted: false,
      created: false,
      apparition: false,
      resume: resume
    }
  },
  created(){
    this.created = true
  },
  mounted(){
    this.message = typeWriter();
      setTimeout(() => {
        this.mounted = true
        setTimeout(() => {
          this.mounted = false
          setTimeout(() => {
            this.apparition = true
          },750)
        },750)
      },2200)
  },
  updated(){
    console.log(this.message, this.mounted, this.created)
  }
}
</script>

<style scoped>
h4{
  color: #4380D5;
  font-size: 60px;
}
.message{
  height: calc(80vh - 38px);
  display: grid;
  grid-template-rows: 80% 20%;
  align-items: center;
  justify-items: center;
  position: relative;
}
.message::after{
  position: absolute;
  opacity: 0.5;
  content:'';
  background-color: white;
  width: 100%;
  height: 100%;
  transform: scalex(0);
  transform-origin: right;
  transition: transform 750ms ease-in;
}
.mounted.message::after{
  transform: scalex(1);
  transform-origin: left;
}
.button{
  opacity: 0;
  transition: opacity 1s ease-in
}
.apparition{
  opacity: 1;
}
.v-application{
  font-family: inherit;
  line-height: inherit;
}
</style>