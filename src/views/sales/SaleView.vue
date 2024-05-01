<template>
    <div class="form-sale">
        <header>
            <div class="logo">
                <img width="60" src="https://i.pinimg.com/736x/19/f9/81/19f981df33902928f30d424a3b7dbb43.jpg"
                    alt="logo salesforce">
                <h1>Sales Force</h1>
            </div>
        </header>

        <main>
            <h2>Realizar Venda</h2>

            <form class="form-input" @submit.prevent="submitSale"
                v-if="clients.length && products.length && payments.length">
                <div>
                    <label for="client">Cliente:</label>
                    <select class="input" id="client" v-model="selectedClient">
                        <option v-for="client in clients" :key="client.id" :value="client.id">{{ client.name }}</option>
                    </select>
                </div>

                <div>
                    <label for="product">Produto:</label>
                    <select class="input" id="product" v-model="selectedProduct">
                        <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="quantity">Quantidade:</label>
                    <input type="number" id="quantity" v-model.number="quantity" min="1">
                </div>

                <div>
                    <label for="payment">Forma de Pagamento:</label>
                    <select id="payment" v-model="selectedPayment">
                        <option v-for="payment in payments" :key="payment.id" :value="payment.id">{{ payment.name }}
                        </option>
                    </select>
                </div>

                <div>
                    <label for="total">Valor Total:</label>
                    <input type="text" id="total" :value="calculateTotalPrice" disabled>
                </div>

                <button class="button" :style="{ backgroundColor: submitButtonColor }" :disabled="!isFormValid">Fechar
                    Venda</button>
            </form>
            <div v-else>
                Carregando dados...
            </div>
        </main>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    data() {
        return {
            clients: [],
            products: [],
            payments: [],
            selectedClient: null,
            selectedProduct: null,
            selectedPayment: null,
            quantity: 1,
            totalPrice: null
        }
    },
    computed: {
        calculateTotalPrice() {
            if (this.selectedProduct) {
                const product = this.products.find(product => product.id === this.selectedProduct);
                if (product) {
                    return (product.price * this.quantity).toFixed(2);
                }
            }
            return this.totalPrice;
        },
        isFormValid() {
            return this.selectedClient !== null && this.selectedProduct !== null && this.selectedPayment !== null && this.quantity > 0;
        },
        submitButtonColor() {
            return this.isFormValid ? '#007bff' : 'rgb(205, 207, 219)';
        }
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
        loadProducts() {
            axios.get('http://localhost/Sales/routes/products.php')
                .then(response => {
                    this.products = response.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar produtos:', error);
                });
        },
        loadPayments() {
            axios.get('http://localhost/Sales/routes/payments.php')
                .then(response => {
                    this.payments = response.data;
                })
                .catch(error => {
                    console.error('Erro ao carregar formas de pagamento:', error);
                });
        },
        submitSale() {
            const selectedProduct = this.products.find(product => product.id === this.selectedProduct);

            if (this.quantity > selectedProduct.quant) {
                alert("Quantidade selecionada maior do que o estoque disponível. Estoque disponível: " + selectedProduct.quant);
                return;
            }

            axios.post('http://localhost/Sales/routes/sales.php', {
                client_id: this.selectedClient,
                product_id: this.selectedProduct,
                payment_id: this.selectedPayment,
                quant: this.quantity,
                total_price: this.calculateTotalPrice
            })
                .then(response => {
                    alert("Venda registrada com sucesso!");
                    this.selectedClient = null;
                    this.selectedProduct = null;
                    this.selectedPayment = null;
                    this.quantity = 1;
                    this.totalPrice = null;
                })
                .catch(error => {
                    alert('Erro ao enviar venda para o servidor:' + error);
                });
        }
    },
    mounted() {
        this.loadClients();
        this.loadProducts();
        this.loadPayments();
    }
}
</script>

<style scoped>
.form-sale {
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
}

.form-input {
    display: flex;
    flex-direction: column;
}

.input {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
    margin-bottom: 10px;
}

.button {
    width: 100%;
    padding: 10px;
    color: #fff;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

.button:disabled {
    background-color: rgb(205, 207, 219);
}

.button:hover:enabled {
    background-color: #0056b3;
}
</style>
