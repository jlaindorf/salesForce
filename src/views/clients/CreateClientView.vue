<template>
    <div>
      <header>
        <div class="logo">
          <img
            width="60"
            src="https://i.pinimg.com/736x/19/f9/81/19f981df33902928f30d424a3b7dbb43.jpg"
            alt="logo salesforce"
          />
          <h1>Sales Force</h1>
        </div>
      </header>
  
      <main>
        <h2>Atualizar Cliente</h2>
  
        <form @submit.prevent="handleClient">
          <label for="name">Nome:</label>
          <input id="name" type="text" v-model="name" required /><br />
  
          <label for="cpf">CPF:</label>
          <input id="cpf" type="text" v-model="cpf" required /><br />
  
          <label for="email">Email:</label>
          <input id="email" type="email" v-model="email" required /><br />
  
          <label for="contact">Contato:</label>
          <input id="contact" type="text" v-model="contact" /><br />
  
          <label for="city">Cidade:</label>
          <input id="city" type="text" v-model="city" /><br />
  
          <label for="state">Estado:</label>
          <input id="state" type="text" v-model="state" /><br />
  
          <label for="street">Rua:</label>
          <input id="street" type="text" v-model="street" /><br />

          <label for="neighborhood">Bairro:</label>
          <input id="neighborhood" type="text" v-model="neighborhood" /><br />
  
          <label for="number">Número:</label>
          <input id="number" type="text" v-model="number" /><br />
  
          <label for="cep">CEP:</label>
          <input id="cep" type="text" v-model="cep" /><br />
  
          <button type="submit">Salvar</button>
          <button @click="cancelCreation">Cancelar</button>
        </form>
      </main>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
          name: '',
          cpf: '',
          email: '',
          contact: '',
          city: '',
          state: '',
          street: '',
          neighborhood: '',
          number: '',
          cep: ''
    
      }
    },
    methods: {
    handleClient() {
      axios.post('http://localhost/Sales/routes/clients.php', {
        name: this.name,
        cpf: this.cpf,
        email: this.email,
        contact: this.contact,
        city: this.city,
        state: this.state,
        street: this.street,
        neighborhood: this.neighborhood,
        number: this.number,
        cep: this.cep
      })
      .then(response => {
        alert('Novo cliente criado com sucesso!');
        this.$router.push('/clients');
      })
      .catch(error => {
        console.error('Erro ao criar cliente:', error);
        alert('Falha ao criar cliente. Verifique os dados e tente novamente.');
      });
    },
      cancelCreation() {
        this.$router.push('/clients'); 
      }
    }
  };
  </script>
  
  <style>
  header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
  
  .logo img {
    margin-right: 10px;
  }
  
  main {
    padding: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    max-width: 400px;
  }
  
  form label {
    margin-bottom: 5px;
  }
  
  form input {
    margin-bottom: 10px;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  form button {
    padding: 8px 12px;
    margin-top: 10px;
    cursor: pointer;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 4px;
  }
  
  form button:hover {
    background-color: #0056b3;
  }
  </style>
  