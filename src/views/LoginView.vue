<template>
  <div class="container">
    <form class="form-login" @submit.prevent="handleLogin">
      <img width="60" src="https://i.pinimg.com/736x/19/f9/81/19f981df33902928f30d424a3b7dbb43.jpg" alt="logo salesforce">
      <h1>Sales Force</h1>
      
      <input v-model="email" type="text" placeholder="Digite o email">
      <input v-model="password" type="password" placeholder="Digite a senha">
      
      <button class="button" type="submit">Logar</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    handleLogin() {
      axios({
        url: 'http://localhost/Sales/routes/login.php',
        method: 'POST',
        data: {
          email: this.email,
          password: this.password
        }
      })
      .then(() => {
        alert("Login efetuado com sucesso")
        this.$router.push('/home')
      
      })
      .catch(() => {
        alert("Falha ao realizar login")
      })
    }
  }
}
</script>

<style scoped>
.form-login {
  margin: 40px auto;
  width: 40%;
  border-radius: 4px;
  border: 1px solid #383737;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  padding: 10px;
  background-color: #fff;
}
input {
  width: 60%;
  height: 30px;
}
button{

  width: 80%;
    padding: 10px;
    background-color:  #0056b3;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    color: #fff;
    
}
</style>
