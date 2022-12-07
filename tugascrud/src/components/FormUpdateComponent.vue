<template>
    <div>
            <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" alt="Logo" id="logo">
            <div>
                <router-link to="/" type="submit" class="btn btn-primary mt-3 ml-3">Back</router-link>
            </div>
    
            <div class="row justify-content-center my-6">
            <div class="col-8 border border-dark p-5 rounded">
                <h1 class=" text-center">Update Student</h1>
                <form class="mt-5" id="formshipping" @submit.prevent="inputAddForm" v-show="!success">
                    <div class="d-flex">
                        <div class="form-group col-md-6">
                            <label for="exampleInputEmail1">Student Name</label>
                            <input v-model="formData.first_name" type="first" class="form-control" id="namaform" aria-describedby="emailHelp"
                                placeholder="Enter name" required />
                        </div>
                        <div class="form-group mx-3 col-md-6">
                            <label for="exampleInputPassword1">Soft Skills</label>
                            <input v-model="formData.soft_skills" type="phone" class="form-control" id="exampleInputPassword1"
                                placeholder="Enter soft skills" required />
                        </div>
                    </div>
    
                    <div class="d-flex">
                        <div class="form-group col-md-3">
                            <label for="exampleInputEmail1">Student Age</label>
                            <input v-model="formData.student_age" type="last" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter age" required />
                        </div>
    
                        <div class="form-group col-md-3">
                        <label for="inputState">Gender</label>
                        <select id="inputState" class="form-control">
                            <option>
                                <p></p>
                            </option>
                            <option>
                                <p>Male</p>
                            </option>
                            <option>
                                <p>Female</p>
                            </option>
                        </select>
                        </div>
    
                        <div class="form-group mx-3 col-md-6">
                            <label for="exampleInputPassword1">Hard Skills</label>
                            <input v-model="formData.hard_skills" type="city" class="form-control" id="exampleInputPassword1" placeholder="Enter hard skills" required/>
                        </div>
                    </div>
    
                <div class="d-flex">
                    <div class="col-md-6">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Student Email</label>
                            <input v-model="formData.student_email" type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                                placeholder="Enter Email" required />
                        </div>
                    </div>
    
                    <div class="form-group col-md-6 mx-3">
                    <label for="inputState">Interest</label>
                    <select id="inputState" class="form-control">
                        <option></option>
                        <option>
                            <p>Data Science</p>
                        </option>
                        <option>
                            <p>Network</p>
                        </option>
                        <option>
                            <p>Web Frontend</p>
                        </option>
                        <option>
                            <p>Web Backend</p>
                        </option>
                        <option>
                            <p>Mobile Apps</p>
                        </option>
                    </select>
                    </div>
                </div>
    
                    <div class="form-group mx-5 my-3">
                        <label for="exampleInputEmail1">Self Description</label>
                        <textarea type="address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                            placeholder="Enter address"></textarea>
                    </div>
    
                    <button type="submit" class="btn btn-success">{{ buttonValue }}</button>
                </form>
                <SuccessForm v-show="success"></SuccessForm>
            </div>
        </div>
    </div>
    </template>
    
    <script>
    import FormService from '@/Service/FormService';
    import SuccessForm from './SuccessForm.vue'; 
    
    export default {
       
        data() {
            return {
                
                formData : {
                "first_name" : null,
                "last_name" : null,
                "phone_number" : null,
                "city" : null,
                "postal_code" : null,
                "address" : null,
                },
                success : false,
                buttonValue : "Submit"
            }
        },
    
        methods : {
            inputAddForm(){
                let data = this.fromData;
                    
                if(this.buttonValue === "Submit"){
                    FormService.create(data)
                        .then(response => {
                            console.log(response.data);
                            this.success = true;
                        })
                        .catch(e => {
                                console.log(e);
                        });  
                    }else{
                        FormService.updateForm(data.id, data)
                            .then(response => {
                                console.log(response.data);
                                this.success = true;
                            })
                            .catch(e => {
                                console.log(e);
                            });
                    }
        },
    },
        components : {
            SuccessForm
        },
        props: ["fromDataProps"],
            watch: {
                'formDataProps'(newValue) {
                    this.formData = newValue;
                    console.log(this.fromData);
                    this.buttonValue = "Update"
                }
            }
    }
    
    
    
    </script>
    
    <style>
    
    </style>