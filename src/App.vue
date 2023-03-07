<template>
  <v-app>
    <v-main>
    <v-container class="container">
      <!-- <selectbox /> -->
      <dataTable />
    </v-container>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
// import selectbox from './components/selectbox.vue'
import dataTable from './components/table.vue'
export default Vue.extend({
  components: {
    // selectbox,
    dataTable
  }
})

</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

.button {
  margin: 20px;
}
</style>
