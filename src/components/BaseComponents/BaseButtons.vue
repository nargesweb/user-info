<template>
<div>
    <button :class="classStyle"> <slot/></button>
</div>
</template>

<script>
export default {
    name: 'UserInfoBasebuttons',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    props:{
     
        classStyle : String,
    }
};
</script>

<style scoped>
button{
    padding: 5px 15px ;
    border-radius: 10px ;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px;
    font-size: 16px;
}
.big{
    width: 100%;
    padding: 10px;
}
.outline{
    border: 2px solid #3a4e62 ;
    background: transparent;
    color: #2c3e50;
}
.bg{
    border: none;
    background: #2c3e50;
    color: #fff;
}
.info{
    background: #17a2b8 ;
    border: none;
    color: #fff;
}
@media screen and (max-width : 800px) {
    button{
        font-size: 10px;
    }
}
</style>