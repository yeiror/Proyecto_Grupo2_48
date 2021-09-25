<template>
  <v-app>
    <v-container>
      <h1 id="h1" class="font-weight-black text-center">PRÓXIMOS ESTRENOSS</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="estreno in estrenos" :key="estreno.id">
          <info-estreno :estreno="estreno" />
        </v-col>
      </v-row>
    </v-container>

    <footer>
      <foter />
    </footer>
  </v-app>
</template>

<script>
import foter from "../components/foter.vue";
import InfoEstreno from "../components/infoEstreno.vue";
export default {
  components: { foter, InfoEstreno },
  data() {
    return {
      estrenos: [
        {
          id: 2,
        imagen:"https://www.24horas.cl/incoming/the-simpsons-renewed-season-24-25jpg-1900054/ALTERNATES/w700/the-simpsons-renewed-season-24-25.jpg",
        title:"Los simpson",
        info:"trata de animacion",
        info2:"ver en fox solamente"
        },
        { id: 2,
        imagen:"https://www.24horas.cl/incoming/the-simpsons-renewed-season-24-25jpg-1900054/ALTERNATES/w700/the-simpsons-renewed-season-24-25.jpg",
        title:"Los simpson",
        info:"trata de animacion",
        info2:"ver en fox solamente"},
        { id: 3, name: "hellooo" },
        { id: 4, name: "hellooo" },
        { id: 5, name: "hellooo" },
        { id: 6, name: "hellooo" },
        { id: 7, name: "hellooo" },
        { id: 8, name: "hellooo" },
      ],

      colors: [
        "indigo",
        "warning",
        "pink darken-2",
        "red lighten-1",
        "deep-purple accent-4",
      ],
      slides: ["First", "Second", "Third", "Fourth", "Fifth"],
    };
  },
};
</script>

<style scoped>
#h1 {
  color: rgb(236, 185, 16);
}
</style>>
