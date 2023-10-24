<template>

    <div>
        <Navbar></Navbar>
        <div class="book">
            Teste
        </div>
        
    </div>

</template>

<script>
import Navbar from '../common/Navbar.vue'

export default {
    date() {
        return {
            books: []
        }
    },
    components: {
        Navbar
    }
}

</script>

<style scoped>

.book {
    padding-left: var(--navbar-size);
    height: 100vh;
}

</style>

