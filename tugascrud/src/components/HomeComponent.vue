<template>
        <div>
            <img src="https://www.gstatic.com/classroom/themes/img_code.jpg" alt="Logo" id="logo">
            <div>
                <router-link to="Add" type="submit" class="btn btn-success mt-3 ml-3" v-show="!success">Add Data</router-link>
            </div>

        <div class="row mb-5 mt-3 mr-3 ml-3" v-show="!success">
            <div v-for="item in studentData" :key="item.id" class="p-3 col-4">
                <div class="card">
                <div class="card-body">
                    <h3>{{ item.student_name + "," + " " + item.student_age + " years old" }}</h3>
                    <h5>{{item.self_description}}</h5>
                    <br>
                    <table>
                        <tr>
                            <td style="width:50%;">Student Email</td>
                            <td>:  {{ item.student_email }}</td>
                        </tr>
                        <tr>
                            <td>Soft Skill </td>
                            <td>:  {{ item.shoft_skill }}</td>
                        </tr>
                        <tr>
                            <td>Hard Skill</td>
                            <td>:  {{ item.hard_skill }}</td>
                        </tr>
                        <tr>
                            <td>Interest</td>
                            <td>:  {{ item.interest }}</td>
                        </tr>
                    </table>
                    <br>
                    <!-- <p>Student Email   : {{item.student_email}}</p>
                    <p>Soft Skills     : {{item.shoft_skill}}</p>
                    <p>Hard Skills     : {{item.hard_skill}}</p>
                    <p>Interest        : {{item.interest}}</p> -->
                    <router-link :to="{path:'/update/'+item.id}" type="submit" class="btn btn-primary mt-3">Update</router-link>
                    <button type="submit" @click="deleteStudentFunc(item.id)" class="btn btn-danger mt-3 ml-3">Delete</button>
                    <img v-if="item.gender == `Male`" src="../assets/img/male.png" alt="male" style="width: 50px; margin-left: 20px">
                    <img v-else-if="item.gender == `Female`" src="../assets/img/female.png" alt="male" style="width: 35px; margin-left: 20px">
                </div>
                </div>
            </div>
            
        </div>
        <SuccessDeleteForm v-show="success"></SuccessDeleteForm>
        </div>

</template>

<script>
import FormService from "@/Service/FormService.js";
import SuccessDeleteForm from "@/components/SuccessDeleteForm.vue";

export default {
    name : "HomeBeranda",
    components : {
        SuccessDeleteForm,
    },

    data() {
        return {
            
            studentData : null,
            success : false,
        };
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
        },

        deleteStudentFunc(id) {
            if (confirm("Warning! Data anda akan di hapus")) {
                FormService.deleteStudent(id)
                    .then((response) => {
                        console.log(response.data);
                        this.success = true;
                    })
                    .catch((e) => {
                        console.log(e);
                    });
            }else {
                alert("Hapus Telah Dibatalkan");
            }
        },
    },
    mounted(){
        this.viewStudent();
    },
    
};
</script>

<style scope>
#logo {
    width: 100%;
    height: 250px;
    margin-top: -60px;
    margin-bottom: 20px;
}

</style>