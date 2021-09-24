<template>
  <div>
    <b-form-select class="form-select" v-model="selected" :options="options"></b-form-select>
    
  </div>
</template>

<script>
  export default {
      name: 'form-selection',

    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Choose Category' },
          { value: 'Festival', text: 'Festival' },
          { value: 'Kompetisi', text: 'Kompetisi' },
          { value: 'Konser', text: 'Konser' },
          { value: 'Pameran', text: 'Pameran' },
          { value: 'Seminar', text: 'Seminar' },
          { value: 'Talkshow', text: 'Talkshow' },
        ]
      }
    }
  }
</script>

<style>
.form-select {
  margin-bottom: 3%;
}
#pilihan-form-select {
  font-family: 'Inter';
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  color: #717375;
}
</style>