<template>
    <div>
        <table class="table">
            <thead class="thead-dark">
                <tr>
                <th scope="col">#</th>
                <th scope="col">نام</th>
                <th scope="col">جنسیت</th>
                <th scope="col">شهر</th>
                <th scope="col">عملیات </th>
                </tr>
            </thead>
            <tbody>
                <tr  v-for="(teacher,i) in teachers" :key="i">
                    <th scope="row">{{i}}</th>
                    <td>{{teacher.name}}</td>
                    <td :class='teacher.gen == "زن" ?"table-info" :"table-success"'>{{teacher.gen}}</td>
                    <td>{{teacher.location}}</td>
                    <td>
                        <router-link :to='{name :"managementTeachersnameid", params: { id: i }}'>
                            <span><UilEdit class="edit"  /></span>
                        </router-link>
                        <span @click="deleteItem(i)"><UilTrash class="trash" /></span>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import { UilTrash,UilEdit  } from '@iconscout/vue-unicons';
import eventBus from '../../services/eventBus'
export default {
    name: 'UserInfoTable',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        deleteItem(index){
            eventBus.$emit('deletItem',index)
            // console.log(index);
        }
    },
    props:{
        teachers: Array
    },
    components:{
        UilTrash,UilEdit 
    }
};
</script>

<style scoped>
a{
    color: inherit;
}
span{
    padding: 0 10px;
}
.trash{
    color: red;
}
.edit{
    color: green;
}
@media screen and (max-width : 800px) {
    tr{
        font-size: 10px;
    }
}
</style>