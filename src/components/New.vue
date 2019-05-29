<template>
  <div>
    <v-card img="https://picsum.photos/500/500">
      <v-card-title>{{ newArticle.SourceName }}</v-card-title>
      <v-card-text>{{ newArticle.MainTitle }}</v-card-text>
    </v-card>
  </div>
</template>

<script>
  export default {
    data() {
      return {
      }
    },
    props: ['newArticle']
  }
</script>
