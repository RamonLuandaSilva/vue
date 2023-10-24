<template>

    <div style="width: 100%; height: 100%;">

        <Navbar></Navbar>

        <div class="dataTableForm">

            <div class="grid-item">
1
            </div>

            <div class="grid-item">
2
            </div>

            <div class="grid-item">
3
            </div>

            <div class="grid-item">
4
            </div>

            <div class="view-table">
                <PrimeDataTable 
                    ref="dt"
                    :value="content" 
                    responsiveLayout="scroll" 
                    showGridlines 
                    stripedRows 
                    removableSort 
                    :paginator="true"
                    :rows="10"
                    dataKey="id"
                    filterDisplay="menu"
                    :selection="selectedContent" 
                    selectionMode="multiple"
                    sortMode="multiple">
                    <template #header>
                        Table Name
                    </template>
                    <PrimeColumn sortable field="id" header="Code"></PrimeColumn>
                    <PrimeColumn sortable field="name" header="Name"></PrimeColumn>
                    <PrimeColumn sortable field="type" header="Category"></PrimeColumn>
                    <PrimeColumn sortable field="size" header="Quantity"></PrimeColumn>
                    <template #footer>
                        <div style="text-align: left;">
                            <PrimeButton icon="pi pi-external-link" label="Export" @click="exportCSV($event)" />
                        </div>
                    </template>
                </PrimeDataTable>
            </div>

            <div class="grid-item">
6
            </div>

            <div class="grid-item">
7
            </div>

            <div class="grid-item">
8
            </div>

            <div class="grid-item">
9
            </div>

        </div>
    </div>

</template>

<script>

//Melhor que isso aqui seja importado lá no main. 
import PrimeDataTable from 'primevue/datatable'
import PrimeColumn from 'primevue/column'
import PrimeButton from 'primevue/button'

import Navbar from '../common/Navbar.vue'

export default {
    data() {
        return {
            selectedContent: null,
            content: [
                {id: 0, name: 'teste0', type: 'varchar', size: '1.5Mb'},
                {id: 1, name: 'teste1', type: 'long text', size: '2.5Mb'},
                {id: 2, name: 'teste2', type: 'text', size: '3.5Mb'},
                {id: 3, name: 'teste3', type: 'int', size: '4.5Mb'},
                {id: 4, name: 'teste4', type: 'data', size: '5.5Mb'},
                {id: 5, name: 'teste5', type: 'blob', size: '6.5Mb'}
            ]
        }
    },
    components: {
        PrimeDataTable,
        PrimeColumn,
        PrimeButton,
        Navbar
    },
    methods: {
        exportCSV() {
            this.$refs.dt.exportCSV()
        }
    }
}

</script>

<style scoped>

.dataTableForm {
    height: 100%;
    width: calc(100% - var(--navbar-size));
    margin-left: var(--navbar-size);
    display: grid;
    grid-template-columns: 5% 90% 5%;
    grid-template-rows: 5% 90% 5%;
    overflow-y: scroll;
}

.view-table {
    width: 100%;
    height: 100%;
}

.grid-item {
    
}

</style>
