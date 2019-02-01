<template>
  <div>
    <v-toolbar
      app fixed flat
      color="white"
      class="hidden-sm-and-down"
    >
      <v-img
        :src="logo"
        class="hover"
        max-width="10%"
        @click="$router.push('/')"
      ></v-img>

      <v-spacer></v-spacer>
      <v-toolbar-items>
        <v-btn
          flat
          active-class="light-blue lighten-1 white--text"
          to="/"
        >Home</v-btn>
      </v-toolbar-items>

      <v-toolbar-items>
        <v-btn
          flat
          active-class="light-blue lighten-1 white--text"
          to="/search"
        >Search</v-btn>
      </v-toolbar-items>
    </v-toolbar>

    <v-toolbar
      app fixed flat
      color="white"
      class="hidden-md-and-up"
    >
      <v-img
        :src="logo"
        class="hover"
        max-width="20%"
        @click="$router.push('/')"
      ></v-img>
    </v-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Nav extends Vue {
  private logo = require('@/assets/medigo.svg');
}
</script>
