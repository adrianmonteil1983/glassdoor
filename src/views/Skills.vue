<template>
  <div>
    <h1 class="title">Skills</h1>
    <v-divider></v-divider>
    <transition name="opaque">
      <div v-if="appear" class="content">
        <h3>Software programming</h3>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Vue</li>
          <li>Node</li>
          <li>C/C++</li>
          <li>MongoDB</li>
          <li>PostgreSQL</li>
        </ul>
        <h3>Networking/Devops</h3>
        <ul>
          <li>OSI Model: TCP/IP, DNS, HTTP, FTP, DHCP, WLAN, LAN, VLAN</li>
          <li>Wireshark, Putty</li>
          <li>Dockers, CI/CD, AWS</li>
        </ul>
        <h3>Electronics</h3>
        <ul>
          <li>Electronic security: cctv, alarm, acces control</li>
          <li>PLC programming</li>
          <li>Electricity: residential, industrial, voltmeter, toner, cat6</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Skills',
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
.opaque-enter-active{
  transition: opacity 2s;
}
.opaque-enter{
  opacity: 0;
}
</style>