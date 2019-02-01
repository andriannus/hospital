<template>
  <v-container grid-list-lg>
    <h4 class="display-1 font-weight-thin mb-3">
      Hospital
    </h4>

    <v-layout row wrap>
      <v-flex
        v-for="(hospital, index) in hospitals.data"
        :key="index"
        md4 sm6 xs12
      >
        <v-card
          flat
          hover
          class="bra-10"
          :to="`/hospital/${hospital.id}`"
        >
          <v-img
            :src="hospital.featuredImage"
            lazy-src="https://picsum.photos/10/6?image=15"
            max-height="200px"
          >
            <v-layout
              slot="placeholder"
              fill-height
              align-center
              justify-center
              ma-0
            >
              <v-progress-circular
                indeterminate
                color="light-blue lighten-1"
              ></v-progress-circular>
            </v-layout>
          </v-img>

          <v-card-title
            class="title font-weight-thin bg-blue white--text"
          >
            {{ hospital.name }}
          </v-card-title>
          <v-divider></v-divider>

          <v-card-text>
            <span>
              <strong>Alamat</strong>
            </span>
            <p>
              {{ hospital.addressDetail }}
            </p>

            <v-chip label class="ma-0 text-capitalize">
              {{ hospital.type }}
            </v-chip>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  metaInfo: {
    title: 'Home',
  },
})

export default class Home extends Vue {
  private hospitals = [];

  private mounted() {
    this.getHospitals();
  }

  private getHospitals() {
    this.axios.get('health-center')
      .then((res) => {
        this.hospitals = res.data;
      })
      .catch((err) => {
        //
      });
  }
}
</script>
