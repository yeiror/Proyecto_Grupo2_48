<template>
  <v-card class="pa-3 mx-auto" dark>
    <v-img :src="estreno.imagen">
    </v-img>

    <v-card-title class="pb-0 text-h6">
      {{ estreno.title }}
    </v-card-title>


 <v-card-actions>
      <v-btn color="orange" text :to="estreno.reserva" link> Reservar </v-btn>

      <v-btn color="orange" text :href="estreno.trailer" target="_blank" link>
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
      <div>{{ estreno.titleingles }}</div>
      <div>{{ estreno.estreno }}</div>
      <div>{{ estreno.genero }}</div>
    </v-card-text>

    <v-divider></v-divider>

    <v-card-text class="text--white">
      <div>{{ estreno.info1 }}</div>
      <div>{{ estreno.info2 }}</div>
    </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
export default {
  props: ["estreno"],
};
</script>

<style>
</style>