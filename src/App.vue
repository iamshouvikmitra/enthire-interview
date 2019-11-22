<template>
  <div id="app">
    <b-container class="bv-example-row" fluid>
      <b-row>
        <EventDetails :slotData="slotInfo" @slotReset="reset" />
        <RegisterForm @slotData="updateSlotInfo" :hasSlotData="hasSlotData"/>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import EventDetails from "./components/EventDetails.vue";
import RegisterForm from "./components/RegisterForm.vue";

export default {
  name: "app",
  components: {
    EventDetails,
    RegisterForm,
  },
  data() {
    return {
      slotInfo : undefined,
      hasSlotData : false,
    }
  },
  methods: {
    updateSlotInfo(data){
      this.slotInfo = -1;
      this.hasSlotData = true;
      this.$nextTick(() => {
        this.slotInfo = data;
    })
    },
    reset(){
      this.hasSlotData = false;
    }
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #647586;
  margin-top: 30px;
  margin-left: 20px;
}
</style>
