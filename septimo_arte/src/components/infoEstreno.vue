<template>
  <v-card class="mx-auto" width="auto" dark>
    <v-img class="white--text align-end" height="420px" :src="estreno.imagen">
    </v-img>

    <v-card-subtitle class="pb-0 text-h6">
      {{ estreno.title }}
    </v-card-subtitle>

    <v-card-text class="text--white subtitle-1">
      <div>{{ estreno.info1 }}</div>
      <div>{{ estreno.info2 }}</div>
      <div>{{ estreno.info3 }}</div>
    </v-card-text>

    <v-card-text class="text--white">
      <div>{{ estreno.info4 }}</div>
      <div>{{ estreno.info5 }}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn color="orange" text :to="estreno.reserva" link> Reservar </v-btn>

      <v-btn color="orange" text :href="estreno.trailer" link>
        Ver tariler
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ["estreno"],
};
</script>

<style>
</style>