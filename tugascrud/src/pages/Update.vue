<template>
    <div>
      <FormUpdateComponent></FormUpdateComponent>
      <CopyrightComponent></CopyrightComponent>
    </div>
  </template>
  
  <script>
  import CopyrightComponent from '@/components/CopyrightComponent.vue';
  import FormUpdateComponent from '@/components/FormUpdateComponent.vue';

  export default {
      name : "AddPage",
  
      components : {
         CopyrightComponent,
         FormUpdateComponent,
      },
  }
  </script>
  
  <style>
  
  </style>