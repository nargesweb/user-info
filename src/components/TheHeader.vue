<template>
    <div class="position-sticky">
        <div class=" p-4 bg-info">
            <div class="container-xl">
                <div class="d-flex justify-content-between align-items-center">
                    <h1>
                        مدرسین                      
                    </h1>
                    <div class="closeIcons"  @click="openingSide" v-if="openSidebar == true" >
                        <UilTimes class="icon"  />
                    </div>
                    <div class="sidebar" v-show="openSidebar == true">
                        <router-link to='/home'>
                            <p>خانه  </p>
                        </router-link>
                        <router-link to='/teachers'>
                            <p> مدرسین  </p>
                        </router-link>
                        <router-link to='/aboutus'>
                            <p>درباره ما</p> 
                        </router-link>
                        <router-link to='/conection'>
                            <p > تماس با ما </p>
                        </router-link>   
                        <router-link to='/manageTeachers'>
                            <p > مدیریت مدرسین </p>
                        </router-link>    
                    </div>
                    <div class="d-flex">
                        <div class="searchBox">
                            <input type="text" placeholder="جستجو ...">
                            <UilSearch  />
                        </div>
                        <div  @click="openingSide" class="icon">
                            <UilBars class="menuIcons icon"/> 
                        </div>
                    </div>
                 
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import { UilBars,UilTimes,UilSearch   } from '@iconscout/vue-unicons'

export default {
    name: 'UserInfoHeader',
    data() {
        return {
            openSidebar: true ,
            screenWeb : screen.width,
        };
    },
    methods:{
        openingSide(){
            if(this.openSidebar){
                this.openSidebar = false
            }else if (this.screenWeb  >= "800px") {
                this.openSidebar = true
                
            } else {
                this.openSidebar = true
                
            }
            console.log(screen.width);
        }
    },
    watch:{
        screenWeb(){
            console.log(this.screenWeb);
        }
    },
    components:{
        UilBars,UilTimes,UilSearch 
    }
};
</script>

<style scoped>
.sidebar{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
a{
    align-items: center;
    padding: 0;
    margin: 0;
    font-weight: 550;
    font-size: 20px;
    padding: 0 15px;
    /* background: rgba(255, 255, 255, 0.635); */
}

.router-link-active{
    color: #fff;
    color: rgb(20, 76, 88);
    transition:all 0.3s ease-in-out;
}
a{
    color: #fff;
}
a:hover{
    text-decoration: none;
    color: rgb(193, 195, 196);
}
.icon{
    display: none;
    color: #fff;
    font-size: 26px;
    justify-content: space-between;
  
}
.closeIcons{
    z-index: 50;
    position: fixed;
    top: 30px;
    left: 30px;
}

.searchBox{
    border: 1px solid rgb(120, 116, 116);
    padding: 5px 10px;
    background: #fff;
    border-radius: 5px;
}
.searchBox input{
    border: none;
    outline: none;
    width: 90%;
}
h1{
    font-size: 30px;
}
@media screen and (max-width : 800px) {
    .sidebar{
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        display: flex;
        flex-direction: column;
        width: 100%;
        z-index: 20;
        padding: 100px 0 ;
        background: rgba(15, 15, 15, 0.961);
    }
    .icon{
        display: flex;
    }
    .searchBox{
        display: none;
    }
    
    h1{
        font-size: 20px;

font-weight: 600;    }
}
</style>