<template class="menu-template">
   
    <header>
        <img width="60" src="https://i.pinimg.com/736x/19/f9/81/19f981df33902928f30d424a3b7dbb43.jpg" alt="logo salesforce">
      <h1>Sales Force</h1>
    </header>
    <table class="menu">
        <tr>
            <th colspan="2">INÍCIO</th>
        </tr>
        <tr >
            <td @click="hadleUser">USUÁRIOS</td>
        </tr>
        <tr >
            <td @click="hadleProduct">ESTOQUE</td>
        </tr>
        <tr >
            <td @click="hadlePayments">FINANCEIRO</td>
        </tr>
        <tr >
            <td @click="hadleClients">CLIENTES</td>
        </tr>
        <tr >
            <td @click="hadleSales">VENDAS</td>
        </tr>
    </table>
</template>
<script>
    export default {
        data() {
            return {
            
            }
        },
       
        methods: {
           hadleUser(){
            this.$router.push('/users')
           },
           hadleProduct(){
            this.$router.push('/products')
           },
           hadlePayments(){
            this.$router.push('/payments')
           },
           hadleClients(){
            this.$router.push('/clients')
           },
           hadleSales(){
            this.$router.push('/sales')
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