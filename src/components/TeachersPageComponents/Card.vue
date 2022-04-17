<template>
    <div>
        <div>
            <div class="d-flex justify-content-between container">
                <div class=" d-flex align-items-center justify-content-start profile-wrap">
                    <div class="pro">
                        <img class="" :src='teacher.img' alt="">
                    </div>
                    <div class="">
                        <h3>{{teacher.name}}</h3>
                        <ul><li v-for="(skill ,i) in teacher.skill" :key="i">{{skill}}</li></ul>
                        <div class="classInfo">
                            <p><UilLocationPoint class="text-success " /> {{teacher.location}}</p>
                            <p><UilStopwatch class="text-danger " /> {{teacher.teaching}}  ساعت تدریس </p>
                            <p><UilStar class="text-warning " /> {{teacher.star  }}  | از 586 نفر  </p>
                        </div>
                        
                    </div>
                </div>
                <div class="d-flex flex-column justify-content-between left">
                    <p class="teacherInfo">
                        {{teacher.text}}
                    </p>
                    <div>
                        <p class="price"> هزینه 1 ساعت کلاس :  <span class="text-info price">{{teacher.price}} هزار تومان </span></p>
                        <router-link :to='{name:"teacherdeatils",params:{id : idTeacher}}' >
                            <BaseButtons classStyle="big info">{{btn}}</BaseButtons>
                        </router-link>
                        
                    </div>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
// icons 
import { UilLocationPoint ,UilStopwatch,UilStar} from '@iconscout/vue-unicons';

export default {
    name: 'UserInfoCard',
    props:['teacher','btn','idTeacher'],
    components:{
        UilLocationPoint ,UilStopwatch,UilStar
  
    }
};
</script>

<style scoped>
.container{
    padding: 25px 15px;
}
.info{
    text-align: right;
    margin: 20px;
    font-size: 14px;
}
.pro{
    width: 190px;
    height: 190px;
    border-radius: 50%;

    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
}
.pro img{
    width: 300px;

}
.left{
    width: 350px;
}
ul{
    padding: 0;
    list-style: none;
    line-height: 20px;
    margin-top: 25px;
}
li{
    font-weight: 400;
}
li::before {
  content: "•"; /* Insert content that looks like bullets */
  padding-left: 8px;
  font-size: 20px;
  vertical-align: middle;
  color: rgb(0, 187, 255); /* Or a color you prefer */
}
.classInfo{
    margin-top: 20px;
    font-size: 12px;
    color: rgb(112, 117, 125);
    line-height: 5px;
    font-weight: 200;
}
h3{
    font-weight: 600;
}
.price{
    font-weight: 400;
}
.teacherInfo{
    color: rgb(102, 109, 113);   
    font-size: 14px;

}
@media screen and (max-width : 800px) {
    .container{
        flex-direction: column ;
        align-items: center;
        flex-wrap: wrap;
        justify-content: start;
        padding: 20px 0;
        font-size: 14px;
    }
    h3{
        font-size: 18px;
        margin: 10px 0;
    }
    .profile-wrap{
        flex-direction: column ;

    }
    .teacherInfo{
     font-size: 12px;   
    }
    .pro{
        width: 100px;
        height: 100px;
    
    }
    .pro img{
        width: 200px;

    }
    .left{
        width: 100%;
    }
}

</style>