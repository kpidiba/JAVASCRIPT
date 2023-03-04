<template>
    <div class="home">
        Home
        <p ref="p">MY name is {{ name }} and my  age is {{ age }}</p>
        <button @click="handleClick">
            Click me
        </button>
    </div>
</template>

<script>
    import { ref } from 'vue'
    export default{
        name:  'Home',
        //NOTE: varibale here is not reactive
        setup(){
            console.log(this);         
            const p = ref(null)

            let name = "mario"
            let age = 20
            const handleClick =() =>{
                console.log("you clicked me");
                console.log(p,p.value,p.value.classList.add('test'),
                p.value.textContent= 'hello,ninjas');
            }
            return {name:name,age:age ,handleClick,p}
        }
        //NOTE: reactive data(){return {}}
    }
</script>