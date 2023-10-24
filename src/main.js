import { createApp } from 'vue'
import App from './App.vue'
import { createRouter, createWebHistory } from 'vue-router'

// Importe os componentes que você deseja vincular a rotas
import Menu from './components/Menu.vue'
import Charts from './components/charts/ChartView.vue'
import Book from './components/book/Book.vue'
import DataTableForm from './components/datatable/dataTableForm.vue'

import 'primevue/resources/themes/lara-light-indigo/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'

// import Primevue from 'primevue'
import PrimeVue from 'primevue/config'

const routes = [
    { path: '/', component: Menu },
    { path: '/graphs', component: Charts},
    { path: '/book', component: Book},
    { path: '/datatable', component: DataTableForm},
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

const app = createApp(App)

app.use(router)
app.use(PrimeVue)

app.mount('#app')
