<template>
  <div class="container">
    <div class="card">
      <div class="card-body jumbotron">
        <h1 class="display-4">แบบฟอร์มลงทะเบียนผู้ป่วยใหม่ โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ</h1>
        <p class="lead">โปรดกรอกข้อความ</p>
      </div>
      <PatientProfileSection class="card-body"></PatientProfileSection>

      <div class="card">
      <h2 class="display-4">ผู้ติดต่อได้กรณีฉุกเฉิน</h2>
      <EmergencyContactSection></EmergencyContactSection>
      </div>

      <div class="card">
      <h2 class="display-4">ประวัติการแพ้ยา</h2>
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












