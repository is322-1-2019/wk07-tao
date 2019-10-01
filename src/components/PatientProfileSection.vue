<template>
  <section>
    <b-field
      label="เลขที่บัตรประจำตัวประชาชน : "
      expanded
      type="is-danger"
      message="(ใส่เฉพาะตัวเลข 0-9 เท่านั้น)"
    >
      <b-input v-model="patientInfo.IDcard"></b-input>
    </b-field>

    <b-field grouped>
      <b-field label="คำนำหน้า">
        <b-select v-model="patientInfo.prefix">
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
        <b-input v-model="patientInfo.firstName"></b-input>
      </b-field>

      <b-field label="นามสกุล" expanded>
        <b-input v-model="patientInfo.lastName"></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="วัน/เดือน/ปีเกิด">
        <b-datepicker
          v-model="patientInfo.birthday"
          placeholder="คลิกเลือก"
          icon="calendar-today"
          editable
        ></b-datepicker>
      </b-field>

      <b-field label="ศาสนา">
        <b-select v-model="patientInfo.religious">
          <option>พุทธ</option>
          <option>อิสลาม</option>
          <option>คริสต์</option>
          <option>ฮินดู</option>
          <option>ซิกซ์</option>
          <option>อื่นๆ</option>
          <option>ไม่ระบุ</option>
        </b-select>
      </b-field>

      <b-field label="สัญชาติ">
        <b-input v-model="patientInfo.nationality" placeholder="สัญชาติ" rounded></b-input>
      </b-field>

      <b-field label="เชื้อชาติ">
        <b-input v-model="patientInfo.ethnicity" placeholder="เชื้อชาติ" rounded></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="เพศ">
        <b-radio v-model="patientInfo.sex" native-value="ชาย">ชาย</b-radio>
        <b-radio v-model="patientInfo.sex" native-value="หญิง">หญิง</b-radio>
      </b-field>

      <b-field label="อาชีพ">
        <b-input v-model="patientInfo.occupation"></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="สถานภาพ" expanded>
        <b-radio v-model="patientInfo.status" native-value="โสด">โสด</b-radio>
        <b-radio v-model="patientInfo.status" native-value="สมรส">สมรส</b-radio>
        <b-radio v-model="patientInfo.status" native-value="หย่า">หย่า</b-radio>
        <b-radio v-model="patientInfo.status" native-value="แยกกันอยู่">แยกกันอยู่</b-radio>
        <b-radio v-model="patientInfo.status" native-value="หม้าย">หม้าย</b-radio>
        <b-radio v-model="patientInfo.status" native-value="นักบวช">นักบวช</b-radio>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="หมู่เลือด">
        <b-radio v-model="patientInfo.bloodgroup" native-value="A">A</b-radio>
        <b-radio v-model="patientInfo.bloodgroup" native-value="B">B</b-radio>
        <b-radio v-model="patientInfo.bloodgroup" native-value="O">O</b-radio>
        <b-radio v-model="patientInfo.bloodgroup" native-value="AB">AB</b-radio>
        <b-radio v-model="patientInfo.bloodgroup" native-value="อื่นๆ">อื่นๆ</b-radio>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="อาการเบื้องต้น" expanded>
        <b-input v-model="patientInfo.symptoms"></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="บ้านเลขที่">
        <b-input v-model="patientInfo.housenumber"></b-input>
      </b-field>
      <b-field label="หมู่">
        <b-input v-model="patientInfo.moo"></b-input>
      </b-field>
    
      <b-field label="ตำบล">
        <b-input v-model="patientInfo.tambon"></b-input>
      </b-field>
      <b-field label="อำเภอ">
        <b-input v-model="patientInfo.district"></b-input>
      </b-field>

      <b-field label="จังหวัด">
        <b-select v-model="patientInfo.city" placeholder="โปรดเลือก">
          <option
            v-for="city in cityList "
            v-bind:key="city.id"
            v-bind:value="city.name"
          >{{ city.name }}</option>
        </b-select>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="โทรศัพท์" type="is-danger" message="(ใส่เฉพาะตัวเลข 0-9 เท่านั้น)">
        <b-input v-model="patientInfo.phone"></b-input>
      </b-field>
      <b-field label="อีเมล์">
        <b-input v-model="patientInfo.email"></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="ชื่อบิดา" expanded>
        <b-input v-model="patientInfo.fatherfirstName"></b-input>
      </b-field>

      <b-field label="นามสกุลบิดา" expanded>
        <b-input v-model="patientInfo.fatherlastName"></b-input>
      </b-field>
    </b-field>

    <b-field grouped>
      <b-field label="ชื่อมารดา" expanded>
        <b-input v-model="patientInfo.motherfirstName"></b-input>
      </b-field>

      <b-field label="นามสกุลมารดา" expanded>
        <b-input v-model="patientInfo.motherlastName"></b-input>
      </b-field>
    </b-field>

    <p>{{patientInfo}}</p>
  </section>
</template>

<script>
export default {
  data() {
    return {
      patientInfo: {
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
  },
  
};
</script>