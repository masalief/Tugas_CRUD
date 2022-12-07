<template>
    <div>
      <FormAddComponent></FormAddComponent>
      <CopyrightComponent></CopyrightComponent>
    </div>
  </template>
  
  <script>
  import CopyrightComponent from '@/components/CopyrightComponent.vue';
  import FormAddComponent from '@/components/FormAddComponent.vue';

  export default {
      name : "AddPage",
  
      components : {
         CopyrightComponent,
         FormAddComponent,
      },
  }
  </script>
  
  <style>
  
  </style>