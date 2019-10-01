<template>
  <div class="container">
    <div class="card">
      <div class="card-body jumbotron">
        <h1>แบบฟอร์มลงทะเบียนผู้ป่วยใหม่ โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ</h1>
        <h1 class="lead">โปรดกรอกข้อความ</h1>
        <p>ข้อมูลผู้ป่วย</p>
      
      <PatientProfileSection class="card-body"></PatientProfileSection></div>

      <div class="card">
      <p>ผู้ติดต่อได้กรณีฉุกเฉิน</p>
      <EmergencyContactSection></EmergencyContactSection>
      </div>

      <div class="card">
      <p class="display-4">ประวัติการแพ้ยา</p>
      <AllergyInfoSection></AllergyInfoSection>
      </div>
      
      <ConfirmSection></ConfirmSection>
    </div>
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










