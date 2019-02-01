<template>
  <v-bottom-nav
    fixed
    :value="true"
    class="hidden-md-and-up"
    color="white"
  >
    <v-btn
      to="/"
      color="light-blue lighten-1"
      flat
      value="home"
    >
      <span>Home</span>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn
      to="/search"
      color="light-blue lighten-1"
      flat
      value="search"
    >
      <span>Search</span>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-bottom-nav>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class NavBottom extends Vue {}
</script>
