<template>
  <form @submit.prevent="handleSubmit">
    <label>Email:</label>
    <input type="email" required v-model="email" />

    <label>Email:</label>
    <input type="password" required v-model="password" />

    <Label>Role: </Label>
    <select v-model="role">
        <option value="developer" >Developeur d' application</option>
        <option value="designer">Web Designer</option>
    </select>

    <!-- NOTE: checkbox -->
    <div class="terms">
        <input type="checkbox" v-model="terms"  required>
        <label>Accepted Terms and conditions</label>
    </div>

    <!-- NOTE: multi checkbox -->
    <div>
        <input type="checkbox" value="hello" v-model="names" >
        <label>David</label>
    </div>
    <div>
        <input type="checkbox" value="shaun" v-model="names" >
        <label >Shaun</label>
    </div>
    <div>
        <input type="checkbox" value="marid"  v-model="names" >
        <label>marid</label>
    </div>

    <label>Skills: </label>
    <input type="text" v-model="tempSkill" @keyup="addSill" required>

    <div class="submti">
        <button>submit</button>
    </div>
  </form>

  <p>Email: {{ email }}</p>
  <p>Password: {{ password }}</p>
  <p>role: {{ role }}</p>
  <p>terms: {{ terms }}</p>
  <p>names : {{ names }}</p>
  <p> </p>


</template>


<script>
export default {
    data(){
        return{
            email :'kpidibadavid1@gmail.com',
            password:'',
            role: 'designer',
            terms:true,
            names:[],
            tempSkill: '',
            skills: []
        }
    },
    methods:{
        addSill(e){
            console.log(e); 
            if(e.key === ',' && this.tempSkill){
                this.skills.push(this.tempSkill);
                this.tempSkill = '';
            }
            console.log(this.skills);
        },
        handleSubmit(){
            console.log("submit the value");
        }
    }
}
</script>

<style>
    form{
        max-width: 420px;
        margin:30px auto;
        background: white;
        text-align: left;
        padding:40px;
        border-radius: 10px;
    }
    label{
        color:#aaa;
        display: inline-block;
        margin:25px 0 15px;
        font-size: 0.6em;
        text-transform: 1px;
        letter-spacing: 1px;
        font-weight: bold;
    }

    input,select{
        display:block;
        padding:10px 6px;
        width:100%;
        box-sizing: border-box;
        border:none;
        border-bottom:1px solid #ddd;
        color:#555;

    }
</style>