<template>
  <div class="container">
    <div class="card">
      <div class="card-body jumbotron">
        <h1>แบบฟอร์มลงทะเบียนผู้ป่วยใหม่ โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ</h1>
        <h1 class="lead">โปรดกรอกข้อความ</h1>
      </div>

      <div class="card">
        <p>ข้อมูลผู้ป่วย</p>
        <PatientProfileSection v-model="PatientPS"></PatientProfileSection>
      </div>

      <div class="card">
        <p>ผู้ติดต่อได้กรณีฉุกเฉิน</p>
        <EmergencyContactSection v-model="EmergCS"></EmergencyContactSection>
      </div>

      <div class="card">
        <p class="display-4">ประวัติการแพ้ยา</p>
        <AllergyInfoSection v-model="Allergy"></AllergyInfoSection>
      </div>

      <ConfirmSection></ConfirmSection>
    </div>

    <p>{{PatientPS}}</p><br>
    <p>{{EmergCS}}</p><br>
    <p>{{Allergy}}</p>
  </div>
</template>

<script>
import PatientProfileSection from "./PatientProfileSection.vue";
import EmergencyContactSection from "./EmergencyContactSection.vue";
import AllergyInfoSection from "./AllergyInfoSection.vue";
import ConfirmSection from "./ConfirmSection.vue";

export default {
  components: {
    PatientProfileSection,
    EmergencyContactSection,
    AllergyInfoSection,
    ConfirmSection
  },

  data() {
    return {
      PatientPS: {
        IDcard: "",
        prefix: "",
        firstName: "",
        lastName: "",
        birthday: "",
        religious: "",
        nationality: "",
        ethnicity: "",
        sex: "",
        occupation: "",
        status: "",
        bloodgroup: "",
        symptoms: "",
        housenumber: "",
        moo: "",
        phone: "",
        email: "",
        fatherfirstName: "",
        fatherlastName: "",
        motherfirstName: "",
        motherlastName: "",
        tambon: "",
        district: "",
        city: ""
      },

      EmergCS: {
        prefix1: "",
        firstName1: "",
        lastName1: "",
        housenumber1: "",
        moo1: "",
        tambon1: "",
        district1: "",
        city1: "",
        relationship1: ""
      },

      Allergy: {
        allergyStatus: ""
      }
    };
  }
};
</script>

<style>
body {
  background-color: lightblue;
}

h1 {
  color: darkblue;
  text-align: center;
  font-size: 30px;
}

p {
  color: blue;
  font-size: 20px;
}
</style>










