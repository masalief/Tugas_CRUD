<template>
    <div class="formdelete">
    <div class="card-body border-color-dark">
        <h5 class="card-title">Success !</h5>
        <p class="card-text" >Student data has been deleted</p>
        <button @click="refreshFunc" class="btn btn-danger text-light">Close</button>
    </div>
    </div>
</template>

<script>
export default {

    methods : {
        refreshFunc() {
            location.reload();
        },
    },

};
</script>

<style scoped>
.formdelete {
    text-align: center;
}

</style>