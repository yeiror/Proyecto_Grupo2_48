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
          title: "Memory",
          titleingles: "Título en inglés:No Time to Die",
          estreno: "Estreno: 30-Sept-2021",
          genero: "Género: Acción",
          info1: "Recomendada para Mayores de 12 años",
          info2: "163 Min",
          trailer: "https://www.youtube.com/watch?v=VYvmuz7ILvg",
          reserva: "/Reserva",
        },
        {
          id: 3,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/9/3/6/0/20639-1-esl-CO/1080x1600.jpg",
          title: "Los Santos de la Mafia",
          titleingles: "Título en inglés:No Time to Die",
          estreno: "Estreno: 30-Sept-2021",
          genero: "Género: Acción",
          info1: "Recomendada para Mayores de 12 años",
          info2: "163 Min",
          trailer: "https://www.youtube.com/watch?v=VYvmuz7ILvg",
          reserva: "/Reserva",
        },
        {
          id: 4,
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
          id: 5,
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
          id: 6,
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
          id: 7,
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
          id: 8,
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
          id: 9,
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
          id: 10,
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
          id: 11,
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
          id: 12,
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
