import Vue from "vue";
import VueRouter from 'vue-router';
// components 
import Teacherusers from "../views/Teacherusers";
import Teacherdeatils from "../components/TeachersPageComponents/Teacherdeatils";
import ManageTeachers from "../views/ManageTeachers"
import TeacherForm from '../components/ManageTeachersPageComponents/TeacherForm'

Vue.use(VueRouter);
export default new VueRouter({
  routes: [
    { path:'/teachers',name : 'teacher' , component : Teacherusers},
    { path:'/teachers/:id',name : 'teacherdeatils' , component : Teacherdeatils}, 
    { path:'/manageTeachers',name : 'managementTeachers' , component : ManageTeachers}, 
    { path:'/manageTeachers/edit/:id',name : 'managementTeachersnameid' , component : TeacherForm}, 
    { path:'/manageTeachers/add',name : 'managementTeachersnameadd' , component : TeacherForm}, 
  ],
  mode:"history"
})


