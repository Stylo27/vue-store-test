<template>
  <div>
    <span v-for="newArticle in news">
      <New :newArticle="newArticle" :key="newArticle.ID"/>
    </span>
  </div>
</template>

<script>
  import New from './New'

  export default {
    components: {
      New
    },
    mounted() {
      this.$store.dispatch('GET_NEWS');
    },
    computed: {
      news() {
        return this.$store.getters.NEWS
      }
    }
  }
</script>
