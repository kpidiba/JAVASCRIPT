<template>
    <div class="block" v-if="showBlock" @click="stopTimer" >
        click me
    </div>
</template>

<script>
export default {
    props: ['delay'],
    data(){
        return {
            showBlock: false,
            timer:0,
            reactionTimer:0
        }
    },
    methods:{
        startTimer(){
            this.timer = setInterval(() =>{
                this.reactionTimer +=10;
            },10);
        },
        stopTimer(){
            clearInterval(this.timer);
            console.log(this.reactionTimer);
            this.$emit('end',this.reactionTimer);
        }
    },
    mounted(){
        console.log("component mounted");
        setTimeout(() => {
            this.showBlock = true ;
            console.log(this.delay);
        },this.delay);
        this.startTimer();
    },
    updated(){
        console.log('component updated');
    }
}
</script>

<style>
    .block {
        width: 400px;
        border-radius:20px;
        background: #0faf87;
        text-align: center;
        color: white;
        margin: 40px auto;
        padding:100px 0;
    }
</style>