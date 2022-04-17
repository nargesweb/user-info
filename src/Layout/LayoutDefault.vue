<template>
    <div class="LayoutDefault">
        <TheHeader  class="LayoutDefault__nav" />
        <main  class="LayoutDefault__main">
            <slot></slot>
        </main>
        <TheFooter  class="LayoutDefault__footer" />
    </div>
</template>

<script>
import TheHeader from '../components/TheHeader.vue';
import TheFooter from '../components/TheFooter.vue';

export default {
    name: 'LayoutDefault',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
    components:{
        TheHeader,TheFooter
    }
};
</script>

<style lang="scss" scoped>

</style>