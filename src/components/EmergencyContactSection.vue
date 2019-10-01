<template>
  <section>
    <b-field grouped>
      <b-field label="คำนำหน้า">
        <b-select v-model="emergencyInfo.prefix">
          <option>ด.ช.</option>
          <option>ด.ญ.</option>
          <option>นาย</option>
          <option>นาง</option>
          <option>น.ส.</option>
          <option>Mr.</option>
          <option>Mrs.</option>
          <option>Miss</option>
          <option>อื่นๆ</option>
        </b-select>
      </b-field>

      <b-field label="ชื่อ" expanded>
        <b-input v-model="emergencyInfo.firstName"></b-input>
      </b-field>

      <b-field label="นามสกุล" expanded>
        <b-input v-model="emergencyInfo.lastName"></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="บ้านเลขที่">
        <b-input v-model="emergencyInfo.housenumber"></b-input>
      </b-field>
      <b-field label="หมู่">
        <b-input v-model="emergencyInfo.moo"></b-input>
      </b-field>

      <b-field label="ตำบล">
        <b-input v-model="emergencyInfo.tambon"></b-input>
      </b-field>
      <b-field label="อำเภอ">
        <b-input v-model="emergencyInfo.district"></b-input>
      </b-field>

      <b-field label="จังหวัด">
        <b-select v-model="emergencyInfo.city" placeholder="โปรดเลือก">
          <option
            v-for="city in cityList "
            v-bind:key="city.id"
            v-bind:value="city.name"
          >{{ city.name }}</option>
        </b-select>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="ผู้ติดต่อได้เกี่ยวข้องเป็น">
        <b-radio v-model="emergencyInfo.relationship" native-value="บิดา">บิดา</b-radio>
        <b-radio v-model="emergencyInfo.relationship" native-value="มารดา">มารดา</b-radio>
        <b-radio v-model="emergencyInfo.relationship" native-value="สามี">สามี</b-radio>
        <b-radio v-model="emergencyInfo.relationship" native-value="ภรรยา">ภรรยา</b-radio>
        <b-radio v-model="emergencyInfo.relationship" native-value="ญาติ">ญาติ</b-radio>
        <b-radio v-model="emergencyInfo.relationship" native-value="บุตร">บุตร</b-radio>
        <b-radio v-model="emergencyInfo.relationship" native-value="อื่นๆ">อื่นๆ</b-radio>
      </b-field>
    </b-field>
  </section>
</template>


<script>
export default {
  data: function() {
    return {
      emergencyInfo: {
        prefix: "",
        firstName: "",
        lastName: "",
        housenumber: "",
        moo: "",
        tambon: "",
        district: "",
        city: "",
        relationship: ""
      },
      cityList: [
        { id: 1, name: "กระบี่" },
        { id: 2, name: "กรุงเทพมหานคร" },
        { id: 3, name: "กาญจนบุรี" },
        { id: 4, name: "กาฬสินธุ์" },
        { id: 5, name: "กำแพงเพชร" },
        { id: 6, name: "ขอนแก่น" },
        { id: 7, name: "จันทบุรี" },
        { id: 8, name: "ฉะเชิงเทรา" },
        { id: 9, name: "ชลบุรี" },
        { id: 10, name: "ชัยนาท" },
        { id: 11, name: "ชัยภูมิ" },
        { id: 12, name: "ชุมพร" },
        { id: 13, name: "เชียงราย" },
        { id: 14, name: "เชียงใหม่" },
        { id: 15, name: "ตรัง" },
        { id: 16, name: "ตราด" },
        { id: 17, name: "ตาก" },
        { id: 18, name: "นครนายก" },
        { id: 19, name: "นครปฐม" },
        { id: 20, name: "นครพนม" },
        { id: 21, name: "นครราชสีมา" },
        { id: 22, name: "นครศรีธรรมราช" },
        { id: 23, name: "นครสวรรค์" },
        { id: 24, name: "นนทบุรี" },
        { id: 25, name: "นราธิวาส" },
        { id: 26, name: "น่าน" },
        { id: 27, name: "บึงกาฬ" },
        { id: 28, name: "บุรีรัมย์" },
        { id: 29, name: "ปทุมธานี" },
        { id: 30, name: "ประจวบคีรีขันธ์" },
        { id: 31, name: "ปราจีนบุรี" },
        { id: 32, name: "ปัตตานี" },
        { id: 33, name: "พะเยา" },
        { id: 34, name: "พังงา" },
        { id: 35, name: "พัทลุง" },
        { id: 36, name: "พิจิตร" },
        { id: 37, name: "พิษณุโลก" },
        { id: 38, name: "เพชรบุรี" },
        { id: 39, name: "เพชรบูรณ์" },
        { id: 40, name: "แพร่" },
        { id: 41, name: "ภูเก็ต" },
        { id: 42, name: "มหาสารคาม" },
        { id: 43, name: "มุกดาหาร" },
        { id: 44, name: "แม่ฮ่องสอน" },
        { id: 45, name: "ยโสธร" },
        { id: 46, name: "ยะลา" },
        { id: 47, name: "ร้อยเอ็ด" },
        { id: 48, name: "ระนอง" },
        { id: 49, name: "ระยอง" },
        { id: 50, name: "ราชบุรี" },
        { id: 51, name: "ลพบุรี" },
        { id: 52, name: "ลำปาง" },
        { id: 53, name: "ลำพูน" },
        { id: 54, name: "เลย" },
        { id: 55, name: "ศรีสะเกษ" },
        { id: 56, name: "สกลนคร" },
        { id: 57, name: "สงขลา" },
        { id: 58, name: "สตูล" },
        { id: 59, name: "สมุทรปราการ" },
        { id: 60, name: "สมุทรสงคราม" },
        { id: 61, name: "สมุทรสาคร" },
        { id: 62, name: "สระแก้ว" },
        { id: 63, name: "สระบุรี" },
        { id: 64, name: "สิงห์บุรี" },
        { id: 65, name: "สุโขทัย" },
        { id: 66, name: "สุพรรณบุรี" },
        { id: 67, name: "สุราษฎร์ธานี" },
        { id: 68, name: "สุรินทร์" },
        { id: 69, name: "หนองคาย" },
        { id: 70, name: "หนองบัวลำภู" },
        { id: 71, name: "อยุธยา" },
        { id: 72, name: "อ่างทอง" },
        { id: 73, name: "อำนาจเจริญ" },
        { id: 74, name: "อุดรธานี" },
        { id: 75, name: "อุตรดิตถ์" },
        { id: 76, name: "อุทัยธานี" },
        { id: 77, name: "อุบลราชธานี" }
      ]
    };
  }
};
</script>