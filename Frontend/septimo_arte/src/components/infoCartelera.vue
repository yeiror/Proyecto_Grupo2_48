<template>
  <v-card class="pa-3 mx-auto"  dark>
    <v-img   :src="cartelera.imagen"></v-img>

    <v-card-title class="pb-0 text-h6">
      {{ cartelera.title }}
    </v-card-title>

  

    <v-card-actions>
      <v-btn color="yellow accent-4" text :to="cartelera.reserva" link> Reservar </v-btn>

      <v-btn color="yellow accent-4" text :href="cartelera.trailer" target="_blank" link>
        Ver trailer
      </v-btn>
      <v-spacer></v-spacer>

      <v-btn
        icon
        @click="show = !show"
      >
        <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

          <v-card-text class="text--white subtitle-1">
      <div>{{ cartelera.titleingles }}</div>
      <div>{{ cartelera.estreno }}</div>
      <div>{{ cartelera.genero }}</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="text--white">
      <div>{{ cartelera.info1 }}</div>
      <div>{{ cartelera.info2 }}</div>
    </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["cartelera"],
  data: () => ({
      show: false,
    }),
};

</script>

<style>
</style>