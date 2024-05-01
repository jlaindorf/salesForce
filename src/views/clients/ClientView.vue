<template>
    <header>
        <div class="logo">
            <img width="60" src="https://i.pinimg.com/736x/19/f9/81/19f981df33902928f30d424a3b7dbb43.jpg"
                alt="logo salesforce">
            <h1>Sales Force</h1>
        </div>
    </header>
    <table class="menu">
        <thead>
            <tr>
                <th colspan="4" class="title-table">CLIENTES</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>NOME</th>
                <th>EMAIL</th>
                <th>CONTATO</th>
                <th>ENDEREÇO</th>
            </tr>
            <tr v-for="(client, index) in clients" :key="client.id">
                <td>{{ client.name }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.contact }}</td>
                <td>{{ client.city }}/{{ client.state }}-{{ client.street }},{{ client.number }} ,CEP:{{ client.cep }}
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            clients: []
        }
    },
    mounted() {
        this.loadclients();
    },
    methods: {
        loadclients() {
            axios.get('http://localhost/Sales/routes/clients.php')
                .then(response => {
                    this.clients = response.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar usuários:', error);
                });
        }
    }
}
</script>

<style>
th,
td {
    text-align: left;
    padding: 8px;
}

.gray-row td {
    background-color: #f2f2f2;
}

td:hover {
    border-style: ridge;
}

.title-table {
    background-color: rgb(205, 207, 219);
    padding: 10px;

}
</style>
