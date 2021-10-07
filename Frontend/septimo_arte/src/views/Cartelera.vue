<template>
  <v-app>
    <v-container>
      <h1 id="h1" class="font-weight-black text-center">ULTIMOS ESTRENOS</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="cartelera in carteleras" :key="cartelera.id" md="4">
          <info-cartelera :cartelera="cartelera" />
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
import InfoCartelera from "../components/infoCartelera.vue";
export default {
  components: { foter, InfoCartelera },
  data() {
    return {
      carteleras: [
        {
          id: 1,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
          title: "Sin Tiempo Para Morir",
          titleingles: "Título en inglés:No Time to Die",
          estreno: "Estreno: 30-Sept-2021",
          genero: "Género: Acción",
          info1: "Recomendada para Mayores de 12 años",
          info2: "163 Min",
          trailer: "https://www.youtube.com/watch?v=VYvmuz7ILvg",
          reserva: "/Reserva",
        },
        {
          id: 2,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/3/3/0/20337-1-esl-CO/Poster-MEMORIA.jpg",
          title: "Memoria",
          titleingles: "Título en inglés:Memory",
          estreno: "Estreno: 30-Sept-2021",
          genero: "Género: Drama",
          info1: "Recomendada para todo el Público",
          info2: "136 Min",
          trailer: "https://www.youtube.com/watch?v=zyVe11x5y9o",
          reserva: "/Reserva",
        },
        {
          id: 3,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/9/3/6/0/20639-1-esl-CO/1080x1600.jpg",
          title: "Los Santos de la Mafia",
          titleingles: "Título en inglés:The Many Saints Of Newark",
          estreno: "Estreno: 30-Sept-2021",
          genero: "Género: Drama",
          info1: "Exclusiva para Mayores de 15 años",
          info2: "121 Min",
          trailer: "https://www.youtube.com/watch?v=49TQXg-aE2o",
          reserva: "/Reserva",
        },
        {
          id: 4,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/4/3/2/0/20234-1-esl-CO/2_poster_480x670.png",
          title: "La Última Estafa",
          titleingles: "Título en inglés:The Comeback Trail",
          estreno: "Estreno: 23-Sept-2021",
          genero: "Género: Crimen, Comedia",
          info1: "Recomendada para Mayores de 12 años",
          info2: "104 Min",
          trailer: "https://www.youtube.com/watch?v=JFq5Iji7B4k",
          reserva: "/Reserva",
        },
        {
          id: 5,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/8/2/0/0/20028-1-esl-CO/02_STB_P143_Ringfight_ARG.jpg",
          title: "Shang-Chi ",
          titleingles: "Título en inglés:Shang-Chi And The Legend Of The Ten Rings",
          estreno: "Estreno: 02-Sept-2021",
          genero: "Género: Acción, Aventura, Marvel",
          info1: "Recomendada para Mayores de 12 años",
          info2: "132 Min",
          trailer: "https://www.youtube.com/watch?v=BD77EOU8N3o",
          reserva: "/Reserva",
        },
        {
          id: 6,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/0/4/5/0/20540-4-esl-CO/TerapiaALaFrancesa_Afiche_480x670px_v2.jpg",
          title: "Terapia a la Francesa",
          titleingles: "Título en inglés:Arab Blues",
          estreno: "Estreno: 23-Sept-2021",
          genero: "Género: Comedia",
          info1: "Recomendada para Mayores de 12 años",
          info2: "88 Min",
          trailer: "https://www.youtube.com/watch?v=qu8fQmLyrng",
          reserva: "/Reserva",
        },
        {
          id: 7,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/6/3/8/2/12836-29-esl-CO/Poster-PR2-480-x-670.jpg",
          title: "Peter Rabbit ",
          titleingles: "Título en inglés:Peter Rabbit 2: The Runaway",
          estreno: "Estreno: 09-Sept-2021",
          genero: "Género: Animación, Aventura, Comedia",
          info1: "Recomendada Para todo el Público",
          info2: "93 Min",
          trailer: "https://www.youtube.com/watch?v=PhgrpI9vj34",
          reserva: "/Reserva",
        },
        {
          id: 8,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/1/2/9/9/19921-1-esl-CO/Poster-300x450.jpg",
          title: "Tantas Almas",
          titleingles: "Título en inglés:So Many Souls",
          estreno: "Estreno: 16-Sept-2021",
          genero: "Género: Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "137 Min",
          trailer: "https://www.youtube.com/watch?v=fchxtTSoA1Y",
          reserva: "/Reserva",
        },
        {
          id: 9,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/8/3/7/0/20738-1-esl-CO/Poster_480x670.png",
          title: "La Casa Oscura",
          titleingles: "Título en inglés:The Night House",
          estreno: "Estreno: 23-Sept-2021",
          genero: "Género: Terror",
          info1: "Recomendada para Mayores de 12 años",
          info2: "107 Min",
          trailer: "https://www.youtube.com/watch?v=dODEd2vBth8",
          reserva: "/Reserva",
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
