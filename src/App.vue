<template>
  <div id="app">
    <v-container class="container">
      <v-row dense>
        <v-col cols="16">
          <v-text-field label="検索キーワード" outlined v-model="query"></v-text-field>
        </v-col>
      </v-row>

      <v-row
        align="center"
        justify="space-around">
          <v-btn
            class="button"
            v-for="(domain) of domainList"
            :key="domain"
            @click="
                searchByDomain(domain)
            "
            >
            {{ domain }}で検索する
          </v-btn>
      </v-row>
      <!-- <v-btn
        class="button"
        @click="
            searchByAllDomain()
        "
        >
          全てのドメインで検索する（まだ出来てない）
      </v-btn> -->
  </v-container>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data: () => ({
    query: '' as string,
    domainList: ['fusioncomplab.org', 'tsukuba.ac.jp', 'informatics.tsukuba.ac.jp', 'scholar.google.co.jp'] as string[]
  }),
  methods: {
    searchByDomain (domain:string) {
      var form = document.createElement('form')
      form.setAttribute('action', 'http://www.google.com/search')
      form.setAttribute('method', 'get')
      form.setAttribute('target', '_blank')
      form.style.display = 'none'
      document.body.appendChild(form)

      if (this.query !== undefined) {
        var inputDomain = document.createElement('input')
        inputDomain.setAttribute('type', 'hidden')
        inputDomain.setAttribute('name', 'as_sitesearch')
        inputDomain.setAttribute('value', domain)
        form.appendChild(inputDomain)

        var inputQuery = document.createElement('input')
        inputQuery.setAttribute('type', 'text')
        inputQuery.setAttribute('name', 'query')
        inputQuery.setAttribute('value', this.query)
        form.appendChild(inputQuery)
      }
      console.log(form)
      form.submit()
    },
    searchByAllDomain () {
      var form = document.createElement('form')
      form.setAttribute('action', 'https://www.google.com/search')
      form.setAttribute('method', 'get')
      form.setAttribute('target', '_blank')
      form.style.display = 'none'
      document.body.appendChild(form)

      if (this.query !== undefined) {
        for (const domain of this.domainList) {
          var inputDomain = document.createElement('input')
          inputDomain.setAttribute('type', 'hidden')
          inputDomain.setAttribute('name', 'as_sitesearch')
          inputDomain.setAttribute('value', domain)
          form.appendChild(inputDomain)
          var inputQuery = document.createElement('input')
          inputQuery.setAttribute('type', 'text')
          inputQuery.setAttribute('name', 'query')
          inputQuery.setAttribute('value', this.query)
          form.appendChild(inputQuery)
          form.submit()
        }
      }
    }
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
