<template>
  <div>
    <h1 class="title">Experience</h1>
    <v-divider></v-divider>
    <transition name="opaque">
      <div v-if="appear" class="content">
        <h3>Fullstack Developer/ Home Automation Integrator</h3>
        <ul>
          <li>Development of a web platform for smart building</li>
          <li>Using web standards: React, node, mongoDB</li>
          <li>Integration of Audio-visual, automation, electronic security</li>
        </ul>
        <h3>Project Manager Smart Building</h3>
        <ul>
          <li>Designed smart building architecture large national projects (+400Ke)</li>
          <li>Quotations</li>
          <li>Technical support for sales team</li>
           <li>Studied special integration(3rd party systems, SQL)</li>
        </ul>
        <h3>International Field Egineer / Project manager</h3>
        <ul>
          <li>Designed, programmed, commissioned complex hardware and SCADA architecture for smart building in france and in Qatar.</li>
          <li>Participed in large national projects, +500Ke, Indigo parkings, DOHA airport, DOHA SHERATON, LUSAIL MARINA. centralisation in one hypersion software to control cctv, intercom, ligthing system, technical alarms, hvac, parking payment system, etc...</li>
          <li>Developed python scripts to reduce configuration time (80% time saved).</li>
          <li>Managed local teams of technicians (10 people).</li>
          <li>Participated  in technical meetings with clients.</li>
          <li>Used of network tools such as wireshark, and linux command line.</li>
          <li>In charge of Low voltage wiring verifications.</li>
        </ul>
        <h3>Developer</h3>
        <ul>
          <li>C# development for industrial automation</li>
          <li>Pascal development for PLC</li>
          <li>Used wireshark for reverse engineering.</li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name:'Experience',
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