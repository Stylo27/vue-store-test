<template>
  <v-app>
    <Header/>
    <v-content>
      <NewsList />
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header'
import NewsList from './components/NewsList'

export default {
  name: 'App',
  components: {
      Header,
      NewsList
  }
}
</script>
