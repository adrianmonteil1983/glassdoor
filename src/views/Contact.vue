<template>
  <div>
    <h1 class="title">Contact</h1>
    <v-divider></v-divider>
    <transition name="opaque">
      <div v-if="appear" class="content">
        <h3>Phone</h3>
        <ul>
          <li><a href=“tel:+13473251581”>+1 347 325 1581</a></li>
        </ul>
        <h3>E-mail</h3>
        <ul>
          <li> <a href="mailto:monteiladrian@gmail.com" target="_blank">Email</a></li>
        </ul>
        <h3>Linkedin</h3>
        <ul>
          <li> <a href="https://linkedin.com/in/adrianmonteil" target="_blank">Linkedin</a></li>
        </ul>
        <h3>Website</h3>
        <ul>
          <li> <a href="https://github.com/adrianmonteil1983" target="_blank">Github</a></li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Contact',
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