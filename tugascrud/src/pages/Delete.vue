<template>
    <div>
      <SuccessDeleteForm></SuccessDeleteForm>
      <CopyrightComponent></CopyrightComponent>
    </div>
  </template>
  
  <script>
  import CopyrightComponent from '@/components/CopyrightComponent.vue';
  import SuccessDeleteForm from '@/components/SuccessDeleteForm.vue';

  export default {
      name : "AddPage",
  
      components : {
         CopyrightComponent,
         SuccessDeleteForm, 
      },
  }
  </script>
  
  <style>
  
  </style>