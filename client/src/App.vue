<template>
  <v-app class="bg-medigo">
    <router-view />
  </v-app>
</template>

<script lang="ts">
import './style.scss';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css';

import { Component, Vue } from 'vue-property-decorator';

@Component
export default class App extends Vue {}
</script>
