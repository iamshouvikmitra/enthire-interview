<template>
  <b-col md="8" class="panel mb-4">
    <div v-if="!showRegForm">
      <b>Select a Date &amp; Time</b>
      <p class="my-3">Friday, November 22</p>
      <b-row>
        <b-col lg="4" class="pb-2">
          <b-row>
            <b-col>
              <b-button
                block
                :variant="btnDesign[0]"
                @click="confirmPrompt(0)"
                size="lg"
              >{{ formatAMPM(new Date(slotInfo[0])) }}</b-button>
            </b-col>
            <b-col v-if="this.confirmSelection[0]">
              <b-button block variant="outline-primary" @click="submit" size="lg">Confirm</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" class="pb-2">
          <b-row>
            <b-col>
              <b-button
                block
                :variant="btnDesign[1]"
                @click="confirmPrompt(1)"
                size="lg"
              >{{ formatAMPM(new Date(slotInfo[1])) }}</b-button>
            </b-col>
            <b-col v-if="this.confirmSelection[1]">
              <b-button block variant="outline-primary" @click="submit" size="lg">Confirm</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" class="pb-2">
          <b-row>
            <b-col>
              <b-button
                block
                :variant="btnDesign[2]"
                @click="confirmPrompt(2)"
                size="lg"
              >{{ formatAMPM(new Date(slotInfo[2])) }}</b-button>
            </b-col>
            <b-col v-if="this.confirmSelection[2]">
              <b-button block variant="outline-primary" @click="submit" size="lg">Confirm</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="4" class="pb-2">
          <b-row>
            <b-col>
              <b-button
                block
                :variant="btnDesign[3]"
                @click="confirmPrompt(3)"
                size="lg"
              >{{ formatAMPM(new Date(slotInfo[3])) }}</b-button>
            </b-col>
            <b-col v-if="this.confirmSelection[3]">
              <b-button block variant="outline-primary" @click="submit" size="lg">Confirm</b-button>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </div>
    <div v-if="showRegForm" id="regForm">
      <b class="my-2">Enter Details</b>
      <b-form @submit="onFormSubmit">
        <ValidationObserver ref="observer" v-slot="{ valid }" @submit.prevent="onFormSubmit()">
          <b-row>
            <b-col>
              <b-form-group id="input-group-1" label="First Name: *" label-for="input-1">
                <validation-provider name="fname" rules="required" v-slot="{ errors }">
                  <b-form-input id="input-1" v-model="form.fname" required></b-form-input>
                  <b-form-invalid-feedback id="inputLiveFeedback">{{ errors[0] }}</b-form-invalid-feedback>
                </validation-provider>
              </b-form-group>
            </b-col>
            <b-col>
              <b-form-group id="input-group-2" label="Last Name: *" label-for="input-2">
                <validation-provider name="lname" rules="required" v-slot="{ errors }">
                  <b-form-input id="input-2" v-model="form.lname" required></b-form-input>
                </validation-provider>
              </b-form-group>
            </b-col>
          </b-row>

          <b-form-group id="input-group-2" label="Email ID: *" label-for="input-3">
            <validation-provider name="email" rules="required|email" v-slot="{ errors }">
              <b-form-input id="input-3" v-model="form.email" type="email" required></b-form-input>
            </validation-provider>
          </b-form-group>

          <b-button variant="outline-primary" class="mb-2">Add Guest</b-button>

          <b-form-group id="input-group-3" label="Phone Number : *" label-for="input-4">
            <validation-provider name="phone" rules="required" v-slot="{ errors }">
              <b-input-group class="mt-3">
                <template v-slot:prepend>
                  <b-input-group-prepend>
                    <img
                      src="@/assets/india.png"
                      class="px-1"
                      style="border: 1px solid #ced4da"
                      alt
                      srcset
                    />
                  </b-input-group-prepend>
                </template>
                <b-form-input id="input-4" v-model="form.phone" type="number" required></b-form-input>
              </b-input-group>
            </validation-provider>
          </b-form-group>

          <b-form-group id="input-group-4" label="Current Company : *" label-for="input-5">
            <validation-provider name="company" rules="required" v-slot="{ errors }">
              <b-form-input id="input-5" v-model="form.company" required></b-form-input>
            </validation-provider>
          </b-form-group>

          <b-form-group id="input-group-5" label="LinkedIn Profile Link : *" label-for="input-6">
            <validation-provider name="linkedin" rules="required" v-slot="{ errors }">
              <b-form-input id="input-6" v-model="form.linkedin" required></b-form-input>
            </validation-provider>
          </b-form-group>

          <b-form-group id="input-group-6" label="Send Text Reminder To : *" label-for="input-7">
            <validation-provider name="reminder" rules="required" v-slot="{ errors }">
              <b-input-group class="mt-3">
                <template v-slot:prepend>
                  <b-input-group-prepend>
                    <img
                      src="@/assets/india.png"
                      class="px-1"
                      style="border: 1px solid #ced4da"
                      alt
                      srcset
                    />
                  </b-input-group-prepend>
                </template>
                <b-form-input id="input-6" v-model="form.reminder" type="tel" required></b-form-input>
              </b-input-group>
            </validation-provider>
          </b-form-group>

          <b-button :disabled="!valid" type="submit" variant="primary">Schedule Event</b-button>
        </ValidationObserver>
      </b-form>
    </div>
  </b-col>
</template>

<script>
export default {
  name: "RegisterForm",
  data() {
    return {
      slotInfo: [
        new Date(
          "Fri Nov 22 2019 19:30:10 GMT+0530 (India Standard Time)"
        ).getTime(),
        new Date(
          "Fri Nov 22 2019 20:30:10 GMT+0530 (India Standard Time)"
        ).getTime(),
        new Date(
          "Fri Nov 22 2019 21:30:10 GMT+0530 (India Standard Time)"
        ).getTime(),
        new Date(
          "Fri Nov 22 2019 22:30:10 GMT+0530 (India Standard Time)"
        ).getTime()
      ],
      selectedSlot: undefined,
      confirmSelection: [false, false, false, false],
      btnDesign: [
        "outline-primary",
        "outline-primary",
        "outline-primary",
        "outline-primary"
      ],
      showRegForm: false,
      form: {
        email: "",
        fname: "",
        lname: "",
        phone: "",
        company: "",
        linkedin: "",
        reminder: ""
      }
    };
  },
  methods: {
    confirmPrompt: function(i) {
      this.confirmSelection.forEach((x, n) => {
        this.confirmSelection[n] = false;
      });
      this.confirmSelection[i] = !this.confirmSelection[i];
      this.selectedSlot = this.slotInfo[i];
      this.btnDesign.forEach((x, n) => {
        this.btnDesign[n] = "outline-primary";
      });
      this.btnDesign[i] = this.btnDesign[i] == "" ? "outline-primary" : "";
      this.$forceUpdate();
    },
    submit: function() {
      this.$emit("slotData", this.selectedSlot);
      this.showRegForm = true;
    },
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
    async onFormSubmit(evt) {
      evt.preventDefault();
      const isValid = await this.$refs.observer.validate();
      if (isValid) {
        // data is valid - post your form data
        alert("Successful!");
      }
    }
  },
  props: {
    hasSlotData: Boolean
  },
  watch: {
    hasSlotData: function() {
      this.showRegForm = this.hasSlotData;
    },
    showRegForm: function() {
      if (!this.showRegForm) {
        this.form = {
          email: "",
          fname: "",
          lname: "",
          phone: "",
          company: "",
          linkedin: "",
          reminder: ""
        };
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.panel {
  border-left: 1px solid rgb(207, 203, 203);
}
#regForm {
  font-weight: bold;
}
</style>
