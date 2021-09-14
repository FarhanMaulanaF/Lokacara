<template>
  <div>
    <b-form-select class="form-select" v-model="selected" :options="options"></b-form-select>
    <div id= "pilihan-form-select" class="mt-3">Selected: <strong>{{ selected }}</strong></div>
  </div>
</template>

<script>
  export default {
      name: 'Form_Select',

    data() {
      return {
        selected: null,
        options: [
          { value: null, text: 'Choose Category' },
          { value: 'a', text: 'This is First option' },
          { value: 'b', text: 'Selected Option', disabled: true },
          {
            label: 'Grouped options',
            options: [
              { value: { C: '3PO' }, text: 'Option with object value' },
              { value: { R: '2D2' }, text: 'Another option with object value' }
            ]
          }
        ]
      }
    }
  }
</script>

<style>
form-select {
  position: absolute;
  width: 362px;
  height: 48px;
  left: 400px;
  top: 456px;
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