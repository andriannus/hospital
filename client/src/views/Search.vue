<template>
  <v-container grid-list-lg>
    <h4 class="display-1 font-weight-thin mb-3">
      Search Hospital
    </h4>

    <v-layout row wrap>
      <v-flex md11 sm11 xs12>
        <v-text-field
          solo
          hide-details
          class="bra-10"
          label="Search here..."
          v-model="keyword"
        ></v-text-field>
      </v-flex>

      <v-flex md1 sm1 xs12 class="text-xs-center">
        <v-btn
          icon
          outline
          color="light-blue lighten-1"
          @click="search"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-flex>
    </v-layout>

    <v-layout
      row wrap
    >
      <v-flex
        v-if="isLoading"
        xs12
        class="text-xs-center"
      >
        <v-btn
          loading
          depressed
          color="transparent"
        ></v-btn>

        <h4 class="title font-weight-thin">
          Please wait...
        </h4>
      </v-flex>

      <v-flex
        v-if="!isEmpty && !isLoading && hospitals.length < 1"
        xs12
        class="text-xs-center"
      >
        <v-icon large>mdi-magnify-minus-outline</v-icon>
        <h4 class="title font-weight-thin">
          Hospital not found
        </h4>
      </v-flex>
    </v-layout>

    <v-layout
      v-if="!isEmpty && !isLoading && hospitals.length > 0"
      row wrap
    >
      <v-flex
        v-for="(hospital, index) in hospitals"
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
    title: 'Search',
  },
})

export default class Search extends Vue {
  private keyword = '';
  private isEmpty = true;
  private isLoading = false;
  private hospitals = [] as any;

  private search() {
    this.isLoading = true;
    this.isEmpty = false;

    const { keyword } = this;
    
    this.axios.get(`health-center/result?search=${keyword}`)
      .then((res) => {
        this.hospitals = res.data.data;
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        this.isLoading = false;
      })
  }
}
</script>
