<template>

    <div>

        <Navbar></Navbar>

        <div class="chartView">
            <div class="form-container">
                <div class="form">
                    <div>
                        
                    </div>
                    <div class="form-body">
                        <div class="field-simple-chart">
                            <InputText class="simple-chart-input" v-model="label" placeholder="Label"></InputText>
                            <InputNumber class="simple-chart-input" v-model="value" placeholder="Value"></InputNumber>
                            <Button @click="incrementData()" severity="secondary" icon="pi pi-plus" text raised rounded outlined></Button>    
                        </div>
                    </div>
                    
                    <div class="form-footer">
                        <Button @click="generateChart()" id="button-generate-chart" severity="secondary" icon="pi pi-chart-pie" text raised rounded outlined></Button>
                    </div>
                </div>
                <!-- form

                Aqui da pra fazer com Steps do PrimeVue.  -->
            </div>
            <div class="graph-container">
                <!-- graph -->
                <div class="graph">
                    <div v-if="showChart">
                        <component :is="chartAtual" type="bar" :data="chartData" :options="chartOptions">
                        </component>
                    </div>
                </div>
            </div>
        </div>
        
    </div>

</template>

<script>

import Navbar from '../common/Navbar.vue'
import InputText from 'primevue/inputtext'
import InputNumber from 'primevue/inputnumber'
import Button from 'primevue/button'
import Chart from 'primevue/chart'

export default {
    components: {
        Navbar,
        Chart,
        InputText,
        InputNumber,
        Button
    },
    data() {
		return {
            chartAtual: undefined,
            label: '',
            value: 0,
            showChart: false,
			chartData: {
                labels: [],
                datasets: [
                    {
                        label: 'Graph',
                        data: [],
                        backgroundColor: ['rgba(54, 162, 235, 0.2)'],
                        borderColor: ['rgb(153, 102, 255)'],
                        borderWidth: 1
                    }
                ]
            },
            chartOptions: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                }
            }
		}
	},
    methods: {
        incrementData() {
            this.chartAtual = undefined
            this.showChart = false

            this.chartData.labels.push(this.label)
            this.label = ''

            this.chartData.datasets[0].data.push(this.value)
            this.value = 0
        },
        generateChart() {
            this.chartAtual = new Chart

            this.showChart = true
        }
    }
}

</script>

<style scoped>

.chartView {
    display: grid;
    padding-left: var(--navbar-size);
    grid-template-columns: 100%;
    grid-template-rows: 20% 80%;
    height: 100vh;
    overflow-y: scroll;
}

.form-container {
    background-color: aliceblue;
    border: 1px solid rgb(140, 174, 181);
    border-radius: 6px;
    
}

.form {
    height: 100%;
}

.form-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 70%;
}

.form-footer {
    float: right;
}

#button-generate-chart {
    margin-right: 1rem;
}

.field-simple-chart {
    display: flex;
    margin: 1rem;
}

.simple-chart-input {
    margin: 0rem 1rem 0rem 1rem;
}

</style>
