<template>
  <div class="container">
    <div class="card">
      <div class="card-body jumbotron">
        <h1 class="display-4">แบบฟอร์มลงทะเบียนผู้ป่วยใหม่ โรงพยาบาลธรรมศาสตร์เฉลิมพระเกียรติ</h1>
        <p class="lead">
            โปรดกรอกข้อความ</p>
        
      </div>
      <PatientProfileSection class="card-body"></PatientProfileSection>
      
    </div>
  </div>
</template>

<script>
import PatientProfileSection from "./PatientProfileSection.vue";
//import EmergencyContactSection from "./EmergencyContactSection.vue";
//import AllergyInfoSection from "./AllergyInfoSection.vue";
//import ComfirmSectionCon from "./ComfirmSectionCon.vue";

export default {
components: {
    PatientProfileSection,
    //EmergencyContactSection,
    //AllergyInfoSection,
    //ComfirmSectionCon,
  }

}
</script>












