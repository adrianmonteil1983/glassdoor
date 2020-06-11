<template>
  <div>
    <h1 class="title">School</h1>
    <v-divider></v-divider>
    <transition name="opaque">
      <div v-if="appear" class="content">
        <h3>Bachelor Degree Computer Engineering</h3>
        <ul>
          <li>C/C++</li>
          <li>Cryptography</li>
          <li>Networking</li>
          <li>Linux</li>
          <li>Active directory</li>
          <li>Embedded programming</li>
        </ul>
        <h3>Former Electrician 4 years trade school</h3>
        <ul>
          <li>Reading/Drawing electric schemas</li>
          <li>Wiring Pannels</li>
          <li>Using tools</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'School',
  data(){
    return{
      content: true,
      appear: false
    }
  },
  mounted(){
    this.appear = true;
  }
}
</script>

<style>
            
</style>