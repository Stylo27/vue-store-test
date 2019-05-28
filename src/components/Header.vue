<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase">
      <span>C</span>
      <span class="font-weight-light">atalog</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String
  }
}
</script>
