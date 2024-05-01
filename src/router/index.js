import {createRouter, createWebHistory} from 'vue-router'

import HomeView from '@/views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import UserView from '@/views/users/UserView.vue'
import ProductView from '@/views/products/ProductView.vue'
import PaymentView from '@/views/payments/PaymentView.vue'
import ClientView from '@/views/clients/ClientView.vue'
import CreateClientView from '@/views/clients/CreateClientView.vue'
import UpdateClientView from '../views/clients/UpdateClientView.vue'
import SaleView from '@/views/sales/SaleView.vue'

    const router = createRouter({
        history: createWebHistory(import.meta.env.BASE_URL),
        routes:[
         {

            path:'/Home',
            name: 'Home',
            component: HomeView      
        },
        {
            path:'/',
            name: 'Login',
            component: LoginView
        },
        
        {
            path:'/users',
            name: 'users',
            component: UserView
        },
        {
            path:'/products',
            name: 'products',
            component: ProductView
        },
        {
            path:'/payments',
            name: 'payments',
            component: PaymentView
        },
        {
            path:'/clients',
            name: 'clients',
            component: ClientView
        },
        {
            path:'/newclient',
            name: 'newclient',
            component: CreateClientView
        },
        {
            path:'/updateclient/:id',
            name: 'updateclients',
            component: UpdateClientView
        },
        {
            path:'/sales',
            name: 'sales',
            component: SaleView
        }
    ]

   
})

export default router
