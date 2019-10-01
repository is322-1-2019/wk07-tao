<template>
  <div class="card">
    <div class="card-content">
      <b-field grouped>
        <b-field label="ประวัติการแพ้ยา:"></b-field>
        <b-radio-button v-model="radioButton" native-value="เคยแพ้" type="is-danger">
          <b-icon icon="close"></b-icon>
          <span>เคยแพ้</span>
        </b-radio-button>
        <b-radio-button v-model="radioButton" native-value="ไม่เคยแพ้" type="is-success">
          <b-icon icon="check"></b-icon>
          <span>ไม่เคยแพ้</span>
        </b-radio-button>
      </b-field>
    </div>
  </div>  
</template>
<script>
export default {
  data: function() {
    return {
      radioButton: ""
    };
  }
};
</script>