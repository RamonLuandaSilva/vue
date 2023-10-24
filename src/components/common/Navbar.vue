<template>
    
    <div class="left-side-navbar">
        <div class="nav-grid">
            <div class="user-panel">
                <div class="user-face">
                    <div class="username">
                        <i class="pi pi-user" style="padding-right: 4px;"></i>
                        <div>{{ username }}</div>
                    </div>
                    <div class="user-icon">
                    </div>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>

        

    </div>
    
</template>

<script>

export default {
    data() {
        return {
            username: "Ramon"
        }
    }
}

</script>

<style scoped>

.left-side-navbar {
    display: block;
    position: absolute;
    height: 100%;
    width: var(--navbar-size);
    text-align: center;
}

.nav-grid {
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(1fr, 6);
    width: 100%;
    height: 100%;
    /*background-color: rgba(61, 0, 101, 0.78);*/
    background-color: rgba(15, 82, 141, 0.7);
}

.user-panel {
    display: flex;
    justify-content: center;
    align-items: center;
}

.user-face {
    border: 3px solid rgb(0, 0, 0, 0.4);
    border-radius: 8px;
    width: 80%;
    height: 80%;
}

.username {
    padding-top: 2px;
    display: flex !important; 
    justify-content: center; 
}

</style>
