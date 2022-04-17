<template>
        <b-form-group
            id="input-group-1"
            :label="label "
            label-for="input-1"
        >
            <input @input="updateValue($event.target.value)"
            :type="type"
            :value="value"
            :placeholder="placeholder">
             
        </b-form-group>
</template>

<script>
export default {
    name: 'UserInfoBaseinput',
 
    data() {
        return {
        
        };
    },

    mounted() {
        
    },

    methods: {
        updateValue(value){
            this.$emit('input',value)
        }
    },
    
    props:['placeholder','label','type','value']
};
</script>

<style  scoped>
input{
    padding: 7px 15px;
    border: 1px solid #c7c9cc;
    border-radius: 5px;
    width: 100%;
    outline: none;
    color: inherit;
    width: 100%;
} 

</style>