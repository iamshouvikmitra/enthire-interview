<template>
  <b-col md="4">
    <font-awesome-icon v-if="showTime" @click="resetSlotData()" icon="arrow-alt-circle-left" size="2x" class="mb-2"/>
    <h6 class="mb-1"><b class="primary-title">Enthire Support</b></h6>
    <h2><b class="secondary-title">Enthire Interview</b></h2>
    <div><font-awesome-icon icon="clock" /> 1 hr.</div>
    <div class="description mt-4" v-if="!showTime">
      <a href="#">Enthire</a> strives hard to make the job search process easier and faster for candidates by making hiring more merit-based and removing biases.
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in repudiandae id nulla, repellat voluptatibus a, ut aliquid numquam ipsum magni labore esse dolore amet aperiam! Amet omnis numquam ipsum.
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in repudiandae id nulla, repellat voluptatibus a, ut aliquid numquam ipsum magni labore esse dolore amet aperiam! Amet omnis numquam ipsum.
      <br>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae in repudiandae id nulla, repellat voluptatibus a, ut aliquid numquam ipsum magni labore esse dolore amet aperiam! Amet omnis numquam ipsum.
      <br>
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. In nostrum laboriosam aspernatur consequuntur, impedit quibusdam eum ea earum iusto perferendis necessitatibus, veniam exercitationem placeat voluptas officiis rem maiores voluptate. Error?
    </div>
    <div v-if="showTime" class="mt-4" >
      <div style="color:#58e0ba"><font-awesome-icon icon="calendar" />
        {{ formatAMPM(new Date(slotData)) }} - {{ formatAMPM(endTime) }}
        , {{new Date(slotData).toString().substr(0,16)}}
      </div>
      <div>
        <font-awesome-icon icon="globe"/> India, Sri Lanka Time
      </div>
    </div>

  </b-col>
</template>

<script>
export default {
  name: 'EventDetails',
  props: {
    slotData: Number
  },
  data() {
    return {
      showTime : false,
      endTime : Number,
    }
  },
  methods: {
    formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      return strTime;
    },
    resetSlotData(){
      this.showTime = false;
      this.$emit("slotReset", true)
    }
  },
  watch: {
    slotData : function(){
      if(this.slotData) 
       { this.showTime = true;
        this.endTime = new Date();
        this.endTime.setHours( new Date(this.slotData).getHours() + 1 )
        this.endTime.setMinutes( new Date(this.slotData).getMinutes())
      }
      else
        this.showTime = false;
    }
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.secondary-title{
   color: #4d5964;
}
</style>
