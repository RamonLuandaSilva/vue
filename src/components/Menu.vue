<template>

    <div style="width: 100%; height: 100%;">

        <Navbar></Navbar>

        <div class="menu">

            <div class="card-container">
                <Card class="custom-card">
                    <template #header>
                        <div class="card-image">
                            <Carousel :value="graphs" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000">
                                <template #item="item">
                                    <div style="padding-top: 2rem;">
                                        <img :src="item.data.source" alt="Image" width="200" height="200"/>
                                    </div>
                                </template>
                            </Carousel>
                        </div>
                    </template>
                    <template #title>
                        DataTable Form
                    </template>
                    <template #content>
                        View to manipulate database content. 
                    </template>
                    <template #footer>
                        <a href="/datatable">
                            <Button severity="secondary" text raised>
                                <i class="pi pi-arrow-up-right"></i>
                            </Button>
                        </a>
                    </template>
                </Card>
            </div>

            <div class="card-container">
                <Card class="custom-card">
                    <template #header>
                        <div class="card-image">
                            <Carousel :value="graphs" :numVisible="1" :numScroll="1" circular :autoplayInterval="5000">
                                <template #item="item">
                                    <div style="padding-top: 2rem;">
                                        <img :src="item.data.source" alt="Image" width="200" height="200"/>
                                    </div>
                                </template>
                            </Carousel>
                        </div>
                    </template>
                    <template #title>
                        Graphs
                    </template>
                    <template #content>
                        View to generate differents types of graphics dinamycally. 
                    </template>
                    <template #footer>
                        <a href="/graphs">
                            <Button severity="secondary" text raised>
                                <i class="pi pi-arrow-up-right"></i>
                            </Button>
                        </a>
                    </template>
                </Card>
            </div>

        </div>
        <!-- Fazer um navbar bonito na esquerda da tela. 

        <br>

        Fazer uma tela de login. 
            
        <br>

        Criar botões pra ir para as telas.  -->


        <!-- <PrimeButton></PrimeButton> -->

    </div>

</template>

<script>

import Navbar from './common/Navbar.vue'
import Card from 'primevue/card'
import Carousel from 'primevue/carousel'
import Button from 'primevue/button'

// import Fieldset from 'primevue/fieldset'
// import ScrollPanel from 'primevue/scrollpanel'
// import TabView from 'primevue/tabview'
// import TabPanel from 'primevue/tabpanel'

// Fieldset,
//         ScrollPanel,
//         TabView,
//         TabPanel

export default {
    components: {
        Navbar,
        Card,
        Carousel,
        Button
    },
    methods: {
        //Funciona. 
        changeScene(value) {
            alert(value)
        }
    },
    data() {
        return {
            graphs: [{name: "Nome", price: "Price", source: "https://www.queroviajarmais.com/wp-content/uploads/2020/08/lago-louise.jpg"},
                    {name: "Nome", price: "Price", source: "https://thumbs.dreamstime.com/b/belas-fotos-rosa-e-roxo-no-infravermelho-de-paisagens-rurais-na-europa-lindas-infravermelhos-roxos-cor-alemanha-157831242.jpg"},
                    {name: "Nome", price: "Price", source: "https://i0.wp.com/omeudiadia.com.br/wp-content/uploads/2022/04/paisagem-natural.jpg?resize=800%2C534&ssl=1"},
                    {name: "Nome", price: "Price", source: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdDX469fn1kDJL7CJPC6ftE_Hqfb98YHpDABORQ9hW&s"},
                    {name: "Nome", price: "Price", source: "https://i.pinimg.com/236x/7e/d0/c1/7ed0c1ee3dfcef219558a8ac325316bd.jpg"},
                    {name: "Nome", price: "Price", source: "https://img.freepik.com/fotos-gratis/ponte-de-madeira-para-a-praia-durante-o-por-do-sol_181624-18247.jpg"}]
        }
    }
}

</script>

<style scoped>

.menu {
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: 1fr 1fr 1fr;
    padding-left: var(--navbar-size);
    padding-top: 2rem;
    height: 100vh;
    overflow-y: scroll;
}

.card-image {
    width: 100%;
    height: 100%;
    text-align: center;
}

.custom-card {
    width: 90%;
}

.card-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 1rem;
    padding-bottom: 1rem;
}

</style>

<style>

.p-carousel-indicator, .p-carousel-prev-icon, .p-carousel-next-icon {
    display: none !important;
}

</style>
