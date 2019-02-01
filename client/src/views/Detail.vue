<template>
  <v-container grid-list-xl>
    <v-layout
      row wrap
      class="hidden-sm-and-down"
    >
      <v-flex xs8>
        <v-carousel
          class="elevation-0 bra-10 mb-4"
          height="400"
        >
          <v-carousel-item
            lazy
            v-for="(picture, index) in hospital.pictures"
            :key="index"
            :src="picture"
          ></v-carousel-item>
        </v-carousel>

        <h4
          class="title mb-3"
        >Fasilitas</h4>

        <div
          v-if="typeof hospital.facilities !== 'undefined' && hospital.facilities.length > 0"
        >
          <v-chip
            v-for="(facility, indexFac) in hospital.facilities"
            :key="`D-${indexFac}`"
            class="bg-blue white--text"
          >
            <v-icon left>mdi-check</v-icon>
            {{ facility.name }}
          </v-chip>
        </div>

        <span
          v-if="typeof hospital.facilities !== 'undefined' && hospital.facilities.length < 1"
          class="subheading"
        >
          <em>Tidak ada data</em>
        </span>
      </v-flex>

      <v-flex xs4>
        <h3 class="headline font-weight-thin blue-medigo--text mb-3">
          {{ hospital.name }}
        </h3>

        <span>
          {{ hospital.addressDetail }}
        </span>
        <v-divider class="my-3"></v-divider>

        <v-chip
          v-show="hospital.isOpen"
          label
          class="bg-green white--text mx-0"
        >
          <v-icon left>mdi-alarm-check</v-icon>
          Buka
        </v-chip>

        <v-chip
          v-show="!hospital.isOpen"
          label
          class="error white--text mx-0"
        >
          <v-icon left>mdi-alarm-off</v-icon>
          Tutup
        </v-chip>

        <br /><br />

        <span>
          <strong>Telepon</strong>
        </span>
        <p>
          {{ hospital.telephone }}
        </p>

        <span>
          <strong>Operasional</strong>
        </span>
        <p
          v-for="(operational, iOperate) in hospital.openHours"
          :key="iOperate"
        >
          {{ operational.days }} <br />
          {{ operational.time }}
        </p>
      </v-flex>
    </v-layout>

    <v-layout
      row wrap
      class="hidden-md-and-up"
    >
      <v-flex xs12>
        <v-carousel
          hide-delimiters
          class="elevation-0 bra-10 mb-4"
          height="200"
        >
          <v-carousel-item
            lazy
            v-for="(picture, index) in hospital.pictures"
            :key="index"
            :src="picture"
          ></v-carousel-item>
        </v-carousel>
      </v-flex>

      <v-flex xs12>
        <h3 class="headline font-weight-thin blue-medigo--text mb-3">
          {{ hospital.name }}
        </h3>

        <span>
          {{ hospital.addressDetail }}
        </span>
        <v-divider class="my-3"></v-divider>

        <v-chip
          v-show="hospital.isOpen"
          label
          class="bg-green white--text mx-0"
        >
          <v-icon left>mdi-alarm-check</v-icon>
          Buka
        </v-chip>

        <v-chip
          v-show="!hospital.isOpen"
          label
          class="error white--text mx-0"
        >
          <v-icon left>mdi-alarm-off</v-icon>
          Tutup
        </v-chip>

        <br /><br />

        <span>
          <strong>Telepon</strong>
        </span>
        <p>
          {{ hospital.telephone }}
        </p>

        <span>
          <strong>Operasional</strong>
        </span>
        <p
          v-for="(operational, iOperate) in hospital.openHours"
          :key="iOperate"
        >
          {{ operational.days }} <br />
          {{ operational.time }}
        </p>
      </v-flex>

      <v-flex xs12>
        <h4
          class="title mb-3"
        >Fasilitas</h4>

        <div
          v-if="typeof hospital.facilities !== 'undefined' && hospital.facilities.length > 0"
        >
          <v-chip
            v-for="(facility, indexFac) in hospital.facilities"
            :key="`M-${indexFac}`"
            class="bg-blue white--text"
          >
            <v-icon left>mdi-check</v-icon>
            {{ facility.name }}
          </v-chip>
        </div>

        <span
          v-if="typeof hospital.facilities !== 'undefined' && hospital.facilities.length < 1"
          class="subheading"
        >
          <em>Tidak ada data</em>
        </span>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

// Register Hook
Component.registerHooks([
  'metaInfo',
]);

@Component
export default class Detail extends Vue {
  private hospital = {} as any;
  /**
   * Vue Meta Asynchronous
   */
  public metaInfo(): any {
    return {
      title: this.hospital.name,
    };
  }

  private beforeMount(): void {
    this.getHospital();
  }

  private getHospital(): void {
    const { id } = this.$route.params;

    this.axios.get(`health-center/${id}`)
      .then((res) => {
        this.hospital = res.data.data;
      })
      .catch((err) => {
        //
      });
  }
}
</script>
