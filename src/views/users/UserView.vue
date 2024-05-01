<template class="menu-template">
    <header>
        <img width="60" src="https://i.pinimg.com/736x/19/f9/81/19f981df33902928f30d424a3b7dbb43.jpg" alt="logo salesforce">
        <h1>Sales Force</h1>
    </header>
    <table class="menu">
        <thead>
            <tr>
                <th colspan="2">Rh - Usuários</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="user in users" :key="user.id">
                <td>{{ user.name }}</td>
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
    .menu {
        border-collapse: collapse;
        width: 100%;
        margin: 0 auto;
    }
    th, td {
        text-align: left;
        padding: 8px;
    }
    th {
        background-color: #f2f2f2;
    }
    td:hover {
        background-color: #f0f0f0;
        cursor: pointer;
    }
</style>
