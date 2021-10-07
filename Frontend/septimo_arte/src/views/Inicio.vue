<template>
  <v-app>
    <v-container>
      <h1 id="h1" class="font-weight-black text-center">
        BIENVENIDOS A SEPTIMO ARTE - VIVE EL CINE
      </h1>
    </v-container>

    <v-container>
      <v-carousel
        cycle
        height="400"
        hide-delimiter-background
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(imagen, i) in imagenes"
          :key="i"
          :src="imagen.src"
        >
        </v-carousel-item>
      </v-carousel>
    </v-container>

    <v-container>
      <info-inicio />
    </v-container>

    <footer>
      <foter />
    </footer>
  </v-app>
</template>

<script>
import foter from "../components/foter.vue";
import InfoInicio from "../components/infoInicio.vue";

export default {
  components: { foter, InfoInicio },
  data() {
    return {
      imagenes: [
        {
          src: "https://images.pexels.com/photos/109669/pexels-photo-109669.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          src: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        },
        {
          src: "https://images.pexels.com/photos/3945317/pexels-photo-3945317.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
        {
          src: "https://images.pexels.com/photos/436413/pexels-photo-436413.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
        },
      ],
    };
  },
};
</script>

<style scoped>
#h1 {
  color: rgb(236, 185, 16);
}
</style>>
