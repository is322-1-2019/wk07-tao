<template>
  <div class="card">
    <div class="card-content">
      <b-field grouped>
        <b-field label="ประวัติการแพ้ยา:"></b-field>
        <b-radio-button @input="fireChanges" v-model="radioButton.allergyStatus" native-value="เคยแพ้" type="is-danger">
          <b-icon icon="close"></b-icon>
          <span>เคยแพ้</span>
        </b-radio-button>
        <b-radio-button @input="fireChanges" v-model="radioButton.allergyStatus" native-value="ไม่เคยแพ้" type="is-success">
          <b-icon icon="check"></b-icon>
          <span>ไม่เคยแพ้</span>
        </b-radio-button>
      </b-field>
    </div>
  </div>  
</template>
<script>
export default {
  props: ["value"],
  data: function() {
    return {
      radioButton: {
        allergyStatus: this.value.allergyStatus
      }
    };

  },
  methods: {
    

    fireChanges() {
      this.$emit("input", {
        allergyStatus: this.radioButton.allergyStatus
      });
    }
  }

  
};
</script>