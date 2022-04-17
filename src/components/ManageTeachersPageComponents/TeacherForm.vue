<template>
    <div class="container my-5">
        <div class="my-2  d-sm-flex justify-content-between">
            <div  class="w-100 ml-sm-4">
                <BaseInput type="text" v-model="form.name" placeholder="برای مثال هانیه" label ='  نام نام خانوادگی ' />
                <b-form-invalid-feedback :state="validation">
                    اسم شما باید شامل 3 تا 50 حرف باشد
                </b-form-invalid-feedback>
            </div>
            <div  class="w-100 mr-sm-4">
                <BaseInput type="number" v-model="form.price" placeholder="به تومان محاسبه می شود" label ='هزینه کلاس  ' />
                
            </div>
        </div>
        <div class="my-2   d-sm-flex justify-content-between">
                <BaseInput type="number"  class="w-100 ml-sm-4" v-model='form.time' placeholder="ساعت" label ='زمان تدریس ' />
                <div  class="w-100 mr-sm-4">
                    <label for="tags-separators">شهر</label> 
                    <b-form-select v-model="form.citySelected" :options="form.city" size="" ></b-form-select>

                </div>
        </div>
        <!-- add lessons tag  -->
            <b-form-group class="mt-3"  label="درس های مورد نظر را وارد کنید" v-slot="{ ariaDescribedby }">
                <b-form-checkbox-group
                    id="checkbox-group-1"
                    v-model="form.lessonsSelected"
                    :options="form.lessons"
                    :aria-describedby="ariaDescribedby"
                    name="flavour-1"
                ></b-form-checkbox-group>
            </b-form-group>
    
        <!-- radio btn  -->
        <b-form-group class="mt-3" label="جنسیت" v-slot="{ ariaDescribedby }" >
            <b-form-radio-group
                id="radio-group-1"
                v-model="form.genSelected"
                :options="form.gen"
                :aria-describedby="ariaDescribedby"
                name="radio-options"
            ></b-form-radio-group>
        </b-form-group>
        <hr class="my-5">
        <div>
            <!-- about teachers textarea  -->
            <label for="textarea-small">درباره مدرس :</label>
            <b-form-textarea
                id="textarea-small"
                size="sm"
                class="inputarea"
                placeholder="اطلاعاتی راجب خود بنویسید ... "
                v-model="form.aboutTeachers"
            ></b-form-textarea>
            <b-form-invalid-feedback :state="aboutTeacherValidation">
                    درباره شما باید از 25 تا حرف  بیشتر باشد
            </b-form-invalid-feedback>
            <!-- about class text area  -->
            <label for="textarea-small" class="mt-5">درباره درس ها :</label>
            <b-form-textarea
                id="textarea-small"
                size="sm"
                class="inputarea"
                placeholder="اطلاعاتی راجب دروس بنویسید ... "
                v-model="form.aboutClass"
            ></b-form-textarea>
            <b-form-invalid-feedback :state="aboutLessonValidation">
                    درباره دروس باید از 25 تا حرف  بیشتر باشد
            </b-form-invalid-feedback>
            <!-- send data button  -->
        </div>
        <div class="my-5 w-25" @click="sendFormHandeler">
                <BaseButtons classStyle="bg big"  >{{btnName}}</BaseButtons>
        </div>
    </div>
</template>


<script>
import {city} from '../../services/cityData';
import teacher from "../../services/userdata";
import woPic from "../../assets/picture/woT.jpg";
import manPic from "../../assets/picture/manT.jpg";

export default {
    name: 'UserInfoForm',

    data() {
        return {
            teachers:teacher,
            btnName : '',
            user : null,
            form:{
                name:'',
                time : '',
                lessons:[
                    {text : 'ریاضی' , value : 'ریاضی'},
                    {text : 'ادبیات' , value : 'ادبیات'},
                    {text : 'شیمی' , value : 'شیمی'},
                    {text : 'فیزیک' , value : 'فیزیک'},
                    {text : 'جبر' , value : 'جبر'},
                    {text : 'جغرافیا' , value : 'جغرافیا'},
                    {text : 'علوم تجربی' , value : 'علوم تجربی'},
                    {text : 'نویسندگی' , value : 'نویسندگی'},
                    
                ],
                lessonsSelected : [],
                city: city,
                citySelected: null,
                aboutTeachers:'',
                aboutClass:'',
                price : '',
                gen :[{text : 'زن',value : 'زن'},{text:'مرد',value : 'مرد'}],
                genSelected :''
            }
        };
    },

    mounted() {
         if(this.$route.params.id != undefined){
            //  this tags give data and show data in edit form
            this.user = teacher[this.$route.params.id]
            this.form.name = this.user.name;
            this.form.time = this.user.teaching;
            this.form.lessonsSelected = this.user.skill;
            this.form.aboutTeachers = this.user.text;
            this.form.price = this.user.price;
            this.form.genSelected = this.user.gen;
            this.form.citySelected = this.user.location;
            this.form.aboutClass = this.user.info
            console.log( this.form.citySelected);
            this.btnName = "ویرایش";
        }else{
            console.log('id params is undifined');
            this.btnName = "ارسال";

        }
    },

    methods: {
        sendFormHandeler(){
            // send data to the teacher object 
            if(this.form.name == "" || this.form.teaching == "" ||this.form.lessonsSelected == "" || this.form.aboutTeachers == "" || this.form.citySelected == "" || this.form.genSelected == "" ||this.form.aboutClass == "" ){
                alert("لطفا با دقت اطلاعات را پر کنید")
            }else{
                this.$router.push({name :"managementTeachers"});
                if(this.btnName == "ویرایش"){
                    //save edit form 
                    this.user.name = this.form.name
                    this.user.time = this.form.teaching
                    this.user.skill = this.form.lessonsSelected
                    this.user.text = this.form.aboutTeachers
                    this.user.location = this.form.citySelected
                    this.user.gen = this.form.genSelected
                    this.user.info = this.form.aboutClass
                    this.user.img == "" ? this.user.img = this.form.genSelected =="زن" ? `${woPic}` : `${manPic}`  : '';
    
                }else{
                    // send data and create new user 
                    const objUser ={
                        img: this.form.genSelected =="زن" ? `${woPic}` : `${manPic}` ,
                        name : this.form.name,
                        skill :this.form.lessonsSelected, 
                        location : this.form.citySelected,
                        teaching : this.form.time , 
                        gen : this.form.genSelected,
                        price : this.form.price,
                        text :this.form.aboutTeachers,
                        tags:this.form.lessons.map(tag=> tag.text),
                        info :this.form.aboutClass
                    }
                    this.teachers.push(objUser)
                }
            }
        }
    },
    computed:{
        // input validation 
        validation() {
            return this.form.name.length > 3 && this.form.name.length < 50;
        },
        aboutTeacherValidation() {
            return this.form.aboutTeachers.length > 25 
        },
        aboutLessonValidation() {
            return this.form.aboutClass.length > 25 
        }
    },
    created(){
       

        
    }
};
</script>

<style scoped>
.inputarea{
    min-height: 150px;
}
</style>