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
                <th colspan="6" class="title-table">CLIENTES
                    <button @click="newclient">ADICIONAR CLIENTE</button>
                </th>
            </tr>
            
        </thead>
        <tbody>
            <tr v-for="(client, index) in clients" :key="client.id">
                <td>{{ client.name }}</td>
                <td>{{ client.cpf }}</td>
                <td>{{ client.email }}</td>
                <td>{{ client.contact }}</td>
                <td>{{ client.city }}/
                    {{ client.state }}-
                    {{ client.street }},
                    {{ client.neighborhood }},
                    {{ client.number }},
                    CEP:{{ client.cep }}</td>
                <td>
                    <button 
                    class="actions" 
                    type="button" 
                    @click="editClient(client.id)"
                    >
                    editar
                    </button>
                    <button 
                    class="actions" 
                    type="button" 
                    @click="deleteClient(client.id)"
                    >apagar
                    </button>
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
        this.loadClients();
    },
    methods: {
        loadClients() {
            axios.get('http://localhost/Sales/routes/clients.php')
                .then(response => {
                    this.clients = response.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar clientes:', error);
                });
        },
        deleteClient(id) {
            axios.delete(`http://localhost/Sales/routes/clients.php?id=${id}`)
                .then(response => {
                    ('Cliente excluído com sucesso:', response.data);
                    this.loadClients();
                })
                .catch(error => {
                    console.error('Erro ao excluir cliente:', error.response.data);
                    alert('Não é possível excluir este cliente devido a compras existentes.');
                });
        },
        editClient(id) {
           this.$router.push(`/updateclient/${id}`)
        },
        newclient() {
           this.$router.push(`/newclient`)
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

.actions {
    width: 100%;
    margin: 2px;
}

</style>
