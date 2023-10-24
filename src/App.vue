<template>
  <div style="width: 100%; height: 100%;">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}

</script>

<style>

:root {
  --navbar-size: 4%;
  /*--main-bg-components-color: #B50000 linear-gradient(to bottom, hsla(0, 0%, 100%, 0), hsla(0, 0%, 100%, 0.3));
  --lazybackground-color: #e5e5e5;
  --body-bg-color: white;
  --body-color: black;
  --card-bg-color: white;
  --bs-body-line-height: 1.2;*/
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0px;
  padding: 0px;
  overflow: hidden;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.p-datatable {
  border-radius: 6px !important;
}

</style>
