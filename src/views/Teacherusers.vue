<template>
    <div class="mb-5">
        <div class="d-md-flex justify-content-around py-2 mb-5 d-none">
            <h6>ترتیب بر اساس  :</h6>
            <router-link to='/teachers/?e=40' >
                <p>محبوب ترین  </p>
            </router-link>
            <router-link to='/teachers/?a=100'>
                <p> بیشترین نظرات  </p>
            </router-link>
            <router-link to='/teachers/?b=50'>
                <p> گران ترین</p> 
            </router-link>
            <router-link to='/teachers/?r=60'>
                <p > ارزان ترین </p>
            </router-link>    
            <router-link to='/teachers/?j=70'>
                <p > جدید ترین </p>
            </router-link> 
        </div>
        <!-- teachers card  -->
        <div v-for="(teacher , i) in teachers" :key="i" v-show="teacher">
            <Card :teacher="teacher" :idTeacher="i" btn="مشاهده پروفایل / رزرو کلاس"  class="my-5 px-3 rounded-3 bg-light shadow border"  />
        </div>
    </div>
</template>

<script>

// components 
import Card from "../components/TeachersPageComponents/Card"
// data 
import teacher from "../services/userdata"

export default {
    name: 'UserInfoHome',

    data() {
        return {
            teachers:teacher,
        };
    },
    components:{
        Card,
    },
    
};
</script>

<style scoped>
a{
    color: rgb(80, 77, 77);
    display: flex;
    align-items: center;
    justify-content: center;
}
a:focus{
    text-decoration: none;
}
p{
    margin: 0;
}
.router-link-active{
    padding: 0 15px;
    color: #fff;
    background: #2c3e50;
    font-weight: 400;
    border-radius: 30px;
    transition:all 0.3s ease-in-out;
}
</style>