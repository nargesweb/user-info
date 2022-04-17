<template>
    <div>
        <div  class="container-xl py-5">
            <Card :teacher="teachers" btn="رزرو کلاس(جلسه اول رایگان )"  />
            <div class="info-section mt-5">
                <div class="d-flex deatilsWrap">
                    <div class="tags">
                        <ul>
                            <li v-for="(tag,i) in teachers.tags" :key="i">{{tag}}</li>
                        </ul>
                    </div>
                    <div class="text w-100 mt-5">
                        <div  class="bar">
                            <button @click="navInfoBar" class="active"  ><UilGraduationCap  class="barIcon" />  درباره کلاس ها</button>
                            <button @click="otherInfo"><UilBag class="barIcon" />رزومه مدرسه  </button>
                            <button @click="otherInfo"><UilVideo class="barIcon" /> کالکشن ویدیو ها</button>
                            <button @click="otherInfo"><UilCommentAltMessage  class="barIcon" />  نظرات و امتیازات</button>
                        </div>
                        <div>
                            <div v-if='barInfo == "info"'>
                                <div  class="m-2 my-5 lessonInfo" v-for="(skill,i) in teachers.skill" :key="i" >
                                    <h3>{{skill}}</h3>
                                    <p>{{teachers.info}}</p>
                                </div>
                            </div>
                            <div v-else-if='barInfo == "other"'>
                                <h1>not things</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// components 
import Card from "./Card.vue"
// data 
import teacher from '../../services/userdata'
// icons 
import { UilBag,UilGraduationCap,UilVideo,UilCommentAltMessage   } from '@iconscout/vue-unicons'
export default {
    name: 'UserInfoTeacherdeatails',

    data() {
        return {
            teachers : {},
            focusedBtn : false,
            barInfo:"info"
        };
    },

    mounted() {
        let users = teacher.filter(user => user.id == this.$route.params.id);
        this.teachers = users[0]
        console.log(this.teachers);
        
    },
    methods: {
        navInfoBar(){
           this.barInfo = "info"
        },
        otherInfo(){
          this.barInfo = "other" 

        }
    },
    components:{
        Card,
        UilBag,
        UilGraduationCap ,
        UilVideo,
        UilCommentAltMessage 
    }
};
</script>

<style scoped>
.bar{
    display: flex;
    justify-content: space-around;
    align-items: center;
    color: rgb(94, 108, 115);
    border-radius: 5px;
    height: 45px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    overflow: hidden;

}
.bar button{
    margin: 0;
    padding: 15px 5px;
    border: 1px solid rgb(136, 151, 159);
    width: 100%;
    height: 100%;
    align-items: center;
    background: rgba(141, 163, 175, 0.427);
    display: flex;
    justify-content: center;
    transition: all 0.3s ease-out;
    font-weight: 600;
    cursor: pointer;
}
.bar button:active{
    background: #fff;
    border-radius: 5px;
    border: 1px solid rgb(193, 205, 210);
    transition: all 0.3s ease-in;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;

}

ul{
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    width: 250px;
}
li{
    margin: 10px;
    padding: 5px 20px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgba(141, 163, 175, 0.427);
    color: rgb(94, 108, 115);
    border-radius: 10px;
    font-weight: 600;
   
}
p{
    padding: 0;
    margin: 0;
}
h3{
    font-size: 20px;
    font-weight: 600;
}
h3::before {
  content: "•"; /* Insert content that looks like bullets */
  padding-left: 8px;
  font-size: 20px;
  vertical-align: middle;
  color: rgb(0, 187, 255); /* Or a color you prefer */
}
.barIcon{
    margin: 5px;
}
.deatilsWrap{
    padding: 15px;
}
@media screen and (max-width : 800px) {
    .deatilsWrap{
        flex-direction: column-reverse;
        padding: 10px;
    }
    .barIcon{
        display: none;
    }
    ul{
        width: 100%;
        margin-top: 100px;
    }
    .bar button{
        font-size: 10px;
    }
    .lessonInfo p{
        font-size: 12px;
    }
    .lessonInfo h3{
        font-size: 16px;
    }
    .tags li {
        font-size: 10px;
    }
}
</style>