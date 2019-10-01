<template>
  <div class="card">
    <div class="card-content">

      <div class="field">
        <b-message type="is-success" has-icon>
          ข้าพเจ้าขอรับรองว่าข้อมูลทั้งหมดนี้ถูกต้อง ตรงกับความเป็นจริงทุกประการ และยินยอมให้โรงพยาบาลธรรมศาสตร์ เฉลิมพระเกียรติ
          ตรวจสอบหลักฐานข้อมูลภาครัฐ หากมีข้อมูลใดไม่ถูกต้อง ไม่เป็นความจริง ข้าพเจ้ายินยอมรับผิดชอบทุกประการ
        </b-message>
      </div>

      <div class="field">
        <b-message type="is-warning" has-icon>กรุณาติ๊กยอมรับเงื่อนไข ก่อนกดปุ่ม 'ลงทะเบียน'</b-message>
      </div>
      
      <div class="field">
        <b-checkbox :value="false" type="is-info">ยอมรับเงื่อนไข</b-checkbox>
        <b-button type="is-success">ลงทะเบียน</b-button>
      </div>
      
    </div>
  </div>
</template>
<script>
export default {
  data: function() {
    return {};
  }
};
</script>
<style scoped>
