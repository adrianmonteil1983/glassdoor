<template>
  <div>
    <v-app>
    <h1>Port-Folio</h1>
    <v-divider></v-divider>
      <transition-group id='containerPortFolio'>
        <div v-for="item in projects" :key="item.name" :class="{project:project, opaque:true, appear:appear}">
          <img  class="items" :src="item.image" alt="" width="200px" height="140px">
          <div class="items">
            <h3>{{item.description.h3}}</h3>
            <p>{{item.description.resume}}</p>
            <p>{{item.description.technos}}</p>
            <div id="icons">
              <a :href="item.description.github" target='blank'>
                <v-icon large color='primary'>{{github}}</v-icon>
              </a>
              <a :href="item.description.link" target='blank'>
                <v-icon large color="blue">{{site}}</v-icon>
              </a>
            </div>
          </div>
        </div>
      </transition-group>
    </v-app>
  </div>
</template>
<script>
import projects from '../repo/portFolio.js'
export default {
  name: 'Portfolio',
  data(){
    return{
      projects: projects,
      items: true,
      appear: false,
      project: true,
      github: 'mdi-github',
      site: 'mdi-web'
    }
  },
  mounted(){
    this.appear = true;
  }
}
</script>

<style lang='scss' scoped>
h3{
  text-align: center;
}
p{
  text-align: center !important;
  margin-bottom: 0px !important;
}
img{
  place-self: center;
}
#vapp{
  position: absolute;
}
#icons{
  margin-top: 8px;
  width: 100%;
  display: inline-flex;
  justify-content: space-evenly;
  color: pink;
}
.project{
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-top: 5px;
}
.opaque{
  opacity: 0;
  transition: opacity 2s;
}
.appear{
  opacity: 1;
}
.v-application{
  font-family: inherit;
  line-height: inherit;
}
#containerPortFolio{
  height: 100%;
  display: grid;
  grid-auto-rows: 1fr 1fr 1fr 1fr;
}
</style>