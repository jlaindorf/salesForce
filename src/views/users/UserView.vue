<template class="menu-template">
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
                <th colspan="2" class="title-table">USUÁRIOS</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <th>NOME</th>
                <th>EMAIL</th>
            </tr>
            <tr v-for="(user, index) in users" :key="user.id">
                <td>{{ user.name }}</td>
                <td>{{ user.email }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            users: []
        }
    },
    mounted() {
        this.loadUsers();
    },
    methods: {
        loadUsers() {
            axios.get('http://localhost/Sales/routes/users.php')
                .then(response => {
                    this.users = response.data;
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
