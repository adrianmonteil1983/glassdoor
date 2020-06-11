<template>
  <v-app id="inspire">
    <div id="wrapper" @mouseenter="slideRightStore" @mouseleave="slideLeftStore">
        <v-navigation-drawer
          v-model="drawer"
          :color="color"
          :expand-on-hover="expandOnHover"
          :mini-variant="miniVariant"
          :right="right"
          :permanent="permanent"
          :src="bg"
          dark
        >
          <v-list-item link :to="{name: 'Welcome'}">
            <v-list-item-content >
              <v-list-item-title class="title" >
                Adrian Monteil
              </v-list-item-title>
              <v-list-item-subtitle>
                developer
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>

          <v-divider></v-divider>

          <v-list
            dense
            nav
          >
            <v-list-item
              v-for="item in items"
              :key="item.title"
              link
              :to="{name: item.title}"
            >
              <v-list-item-icon>
                <v-icon>{{ item.icon }}</v-icon>
              </v-list-item-icon>
              
                <v-list-item-content>
                    <v-list-item-title>{{ item.title }}</v-list-item-title>
                </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </div>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      drawer: true,
      items: [
        { title: 'Skills', icon: 'mdi-hammer-screwdriver' },
        { title: 'Experience', icon: 'mdi-cog' },
        { title: 'School', icon: 'mdi-school' },
        { title: 'Portfolio', icon: 'mdi-image'},
        { title: 'Contact', icon: 'mdi-phone' },
      ],
      color: 'primary',
      colors: [
        'primary',
        'blue',
        'success',
        'red',
        'teal',
      ],
      right: false,
      permanent: true,
      miniVariant: true,
      expandOnHover: true,
      background: false,
    }
  },
  methods:{
    slideRightStore(){
      this.$store.commit('slideRight')
    },
    slideLeftStore(){
      this.$store.commit('slideLeft')
    }
  },
  computed: {
    
    bg() {
      return this.background ? 'https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg' : undefined
    },
  },
}
</script>
<style scoped>
#inspire{
   height: 100%;
}
#wrapper{
  height: 100%;
}
</style>