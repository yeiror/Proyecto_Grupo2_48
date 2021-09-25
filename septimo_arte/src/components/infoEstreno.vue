<template>
       <v-card
    class="mx-auto"
    max-width="400"
    dark
  >
    <v-img
      class="white--text align-end"
      height="200px"
      :src="estreno.imagen"
    >
    </v-img>

    <v-card-subtitle class="pb-0">
      {{estreno.title}}
    </v-card-subtitle>

    <v-card-text class="text--primary">
      <div>{{estreno.info}}</div>

      <div>{{estreno.info2}}</div>
    </v-card-text>

    <v-card-actions>
      <v-btn
        color="orange"
        text
      >
        Reservar
      </v-btn>

      <v-btn
        color="orange"
        text
      >
        Ver tariler
      </v-btn>
    </v-card-actions>
      </v-card>
</template>

<script>
export default {
props: [
    "estreno"
]
}
</script>

<style>

</style>