<template>
  <div>
    <router-view />
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
@import 'bootstrap/dist/css/bootstrap.css';
@import url('https://fonts.googleapis.com/css2?family=Jua&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Jua&display=swap');
* {
  /*font-family: 'Do Hyeon', sans-serif;*/
  font-family: 'Jua', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
