<template>
    <div class="d-flex justify-content-between align-items-center my-5">
        <h5>لیست مدرسین</h5>
        <router-link to="/manageTeachers/add">
            <BaseButtons classStyle="outline"  > اضافه کردن مدرس <UilPlus/></BaseButtons>
        </router-link>
    </div>
</template>

<script>
import { UilPlus } from '@iconscout/vue-unicons'

export default {
    name: 'UserInfoHeaderteachermanagment',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        UilPlus,
    }
};
</script>

<style scoped>
@media screen  and (max-width : 600px ){
    h5{
        font-size: 14px;
        font-weight: 600;
    }
    
}
</style>