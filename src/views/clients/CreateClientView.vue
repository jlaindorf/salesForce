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
      <h2>Cadastrar Cliente</h2>

      <form @submit.prevent="handleClient">
        <label for="name">Nome:</label>
        <input id="name" type="text" v-model="formData.name" />
        <span class="error">{{ errors.name }}</span>

        <label for="cpf">CPF:</label>
        <input  placeholder="000.000.000-00" type="text" v-model="formData.cpf" />
        <span class="error">{{ errors.cpf }}</span>

        <label for="email">Email:</label>
        <input id="email" type="email" v-model="formData.email" />
        <span class="error">{{ errors.email }}</span>

        <label for="contact">Contato:</label>
        <input id="contact" type="text" v-model="formData.contact" />
        <span class="error">{{ errors.contact }}</span>

        <label for="city">Cidade:</label>
        <input id="city" type="text" v-model="formData.city" />
        <span class="error">{{ errors.city }}</span>

        <label for="state">Estado:</label>
        <input id="state" type="text" v-model="formData.state" />
        <span class="error">{{ errors.state }}</span>

        <label for="street">Rua:</label>
        <input id="street" type="text" v-model="formData.street" />
        <span class="error">{{ errors.street }}</span>

        <label for="number">Número:</label>
        <input id="number" type="text" v-model="formData.number" />
        <span class="error">{{ errors.number }}</span>

        <label for="cep">CEP:</label>
        <input id="cep" type="text" v-model="formData.cep" />
        <span class="error">{{ errors.cep }}</span>

        <button type="submit">Salvar</button>
        <button @click="cancelCreation">Cancelar</button>
      </form>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import * as yup from 'yup';

export default {
  data() {
    return {
      formData: {
        name: '',
        cpf: '',
        email: '',
        contact: '',
        city: '',
        state: '',
        street: '',
        number: '',
        cep: ''
      },
      errors: {} 
    };
  },
  methods: {
    async handleClient() {
      const schema = yup.object().shape({
        name: yup.string().required('O nome é obrigatório'),
        cpf: yup.string().required('O CPF é obrigatório').matches(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, 'CPF inválido, formato aceito xxx.xxx.xxx-xx'),
        email: yup.string().email('Insira um email válido').required('O email é obrigatório')
      });

      try {
        this.errors = {};
        await schema.validate(this.formData, { abortEarly: false });
      
        await axios.post('http://localhost/Sales/routes/clients.php', this.formData);
        alert('Novo cliente criado com sucesso!');
        this.$router.push('/clients');
      } catch (error) {
        if (error instanceof yup.ValidationError) {
          error.inner.forEach(err => {
            this.errors[err.path] = err.message;
          });
        }
      }
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

.error {
  color: red;
  font-size: 12px;
  margin-top: 5px;
}
</style>
