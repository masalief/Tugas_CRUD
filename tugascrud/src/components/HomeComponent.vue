<template>
        <div>
            <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" alt="Logo" id="logo">
            <div>
                <router-link to="Add" type="submit" class="btn btn-primary mt-3 ml-3">Add Data</router-link>
            </div>

        <div class="row mb-5 mt-3 mr-3 ml-3">
            <div v-for="item in studentData" :key="item.id" class="p-3 col-4">
                <div class="card">
                <div class="card-body">
                    <dt>{{item.student_name}},</dt>
                    <dd>{{item.student_age}} years old</dd>
                    <p>{{item.self_description}}</p>
                    <p>Student Email   : {{item.student_email}}</p>
                    <p>Soft Skills     : {{item.shoft_skill}}</p>
                    <p>Hard Skills     : {{item.hard_skill}}</p>
                    <p>Interest        : {{item.interest}}</p>
                    <router-link to="/update" type="submit" class="btn btn-primary mt-3">Update</router-link>
                    <router-link to="/delete" type="submit" class="btn btn-danger mt-3 ml-3">Delete</router-link>
                    <img v-if="item.gender==`Male`" src="../assets/img/male.png" alt="male" style="width: 50px; margin-left: 20px">
                    <img v-else-if="item.gender==`Female`" src="../assets/img/female.png" alt="male" style="width: 50px; margin-left: 20px">
                </div>
                </div>
            </div>
        </div>

        </div>

</template>

<script>
import FormService from "@/Service/FormService.js";

export default {

    data() {
        return {
            
            studentData : null,
        }
    },

    methods : {
        viewStudent() {
            FormService.getAll()
                .then(response => {
                    this.studentData = response.data;
                    console.log(this.studentData);
                })
                .catch(e => {
                    console.log(e);
                });
        }
    },
    mounted(){
        this.viewStudent();
    },
    
}
</script>

<style scope>
#logo {
    width: 100%;
    height: 250px;
    margin-top: -60px;
    margin-bottom: 20px;
}

</style>