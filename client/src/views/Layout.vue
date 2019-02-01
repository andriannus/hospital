<template>
  <div>
    <m-nav></m-nav>

    <v-content class="mb-5">
      <router-view />
    </v-content>

    <m-nav-bottom></m-nav-bottom>

    <v-footer
      app absolute py-3
      class="hidden-sm-and-down"
    >
      <v-layout justify-center row wrap>
        <v-flex text-xs-center class="font-weight-bold">
          &copy; 2019 - Medigo
        </v-flex>
      </v-layout>
    </v-footer>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Nav from '@/components/Nav.vue';
import NavBottom from '@/components/NavBottom.vue';

@Component({
  metaInfo: {
    titleTemplate: '%s - Medigo',
  },

  components: {
    'm-nav': Nav,
    'm-nav-bottom': NavBottom,
  },
})

export default class Layout extends Vue {}
</script>
