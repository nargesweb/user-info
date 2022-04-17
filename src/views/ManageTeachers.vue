<template>
    <div>
        <HeaderTeacherManagment />
        <Table :teachers="teachers" />
    </div>
</template>

<script>
// components 
import HeaderTeacherManagment from '../components/ManageTeachersPageComponents/HeaderTeacherManagment.vue';
import Table from '../components/ManageTeachersPageComponents/Table.vue';

// data 
import teacher from "../services/userdata";
import eventBus from '../services/eventBus'

export default {
    name: 'UserInfoManageteachers',

    data() {
        return {
            teachers : teacher,
        };
    },

    mounted() {
        
    },

    methods: {
        removeUserItem(index){
            let t = confirm('are you sure ?');
            console.log(t);
            if (t == true) {
                this.teachers.splice(index,1)
                console.log(index);
                
            }
        },
    },
    components:{
        HeaderTeacherManagment,
        Table
    },
    created () {
        eventBus.$on('deletItem' , index =>{
            this.removeUserItem(index)
        })
       console.log(this.teachers);
    }
};
</script>

<style lang="scss" scoped>

</style>