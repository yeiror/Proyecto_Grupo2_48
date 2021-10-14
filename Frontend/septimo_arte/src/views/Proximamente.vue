<template>
  <v-app>
    <v-container>
      <h1 id="h1" class="font-weight-black text-center">PRÓXIMOS ESTRENOS</h1>
    </v-container>

    <v-container>
      <v-row>
        <v-col v-for="estreno in estrenos" :key="estreno.id" md="4">
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
          id: 1,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/1/9/2/1/21291-1-esl-CO/Poster-AL-LIMITE-SLALOM.jpg",
          title: "Al Límite",
          titleingles: "Título en inglés:Slalom",
          estreno: "Estreno: 14-Oct-2021",
          genero: "Género: Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "92 Min",
          trailer: "https://www.youtube.com/watch?v=SxQMByjUIPI",
          
        },
        {
          id: 2,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/3/7/5/0/20573-1-esl-CO/2_poster_480x670.png",
          title: "Chernóbil: La Película",
          titleingles: "Título en inglés:Chernobyl",
          estreno: "Estreno: 14-Oct-2021",
          genero: "Género: Drama, Suspenso",
          info1: "Recomendada para Mayores de 12 años",
          info2: "136 Min",
          trailer: "https://www.youtube.com/watch?v=9DkXQM3eR8I",
        },
        {
          id: 3,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/0/8/1/1/21180-1-esl-CO/EUD_Poster_480x670.png",
          title: "El Último Duelo",
          titleingles: "Título en inglés:The Last Duel",
          estreno: "Estreno: 14-Oct-2021",
          genero: "Género: Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "152 Min",
          trailer: "https://www.youtube.com/watch?v=TDxJHR_LZmE",
        },
        {
          id: 4,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/8/5/2/1/21258-1-esl-CO/575X805%20(1).png",
          title: "Fábrica de Sueños",
          titleingles: "Título en inglés:Dream Factory",
          estreno: "Estreno: 21-Oct-2021",
          genero: "Género:  Drama, Romance",
          info1: "Recomendada para Mayores de 12 años",
          info2: "125 Min",
          trailer: "https://www.youtube.com/watch?v=SKMPu6SaImo",
        },
        {
          id: 5,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/6/3/9/0/20936-1-esl-CO/1080x1600.jpg",
          title: "Duna",
          titleingles: "Título en inglés:Dune",
          estreno: "Estreno: 21-Oct-2021",
          genero: "Género: Acción, Aventura, Ciencia Ficción, Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "156 Min",
          trailer: "https://www.youtube.com/watch?v=8g18jFHCLXk",
        },
        {
          id: 6,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/7/7/0/1/21077-1-esl-CO/EHQVSP_Banner_480x670px.jpg",
          title: "El Hombre que Vendió su Piel",
          titleingles: "Título en inglés:The Man who Sold his Skin",
          estreno: "Estreno: 21-Oct-2021",
          genero: "Género: Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "104 Min",
          trailer: "https://www.youtube.com/watch?v=9MPlxja9sTk",
        },
        {
          id: 7,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/4/4/0/1/21044-1-esl-CO/2_poster_480x670.png",
          title: "Riesgo Bajo Cero",
          titleingles: "Título en inglés:The Ice Road",
          estreno: "Estreno: 11-Nov-2021",
          genero: "Género: Acción, Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "109 Min",
          trailer: "https://www.youtube.com/watch?v=8lYlRZGdQ0c",
        },
        {
          id: 8,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/0/1/1/1/21110-1-esl-CO/2_poster_480x670.png",
          title: "Amenaza Bajo el Agua",
          titleingles: "Título en inglés:Black Water: Abyss",
          estreno: "Estreno: 02-Dic-2021",
          genero: "Género: Acción, Suspenso, Terror",
          info1: "Recomendada para Mayores de 12 años",
          info2: "98 Min",
          trailer: "https://www.youtube.com/watch?v=-g-pBPWBGjQ",
        },
        {
          id: 9,
          imagen:
            "https://archivos-cms.cinecolombia.com/images/_aliases/exhibition_poster_mobile/7/0/5/0/20507-1-esl-CO/2_poster_480x670.png",
          title: "Coda, Señales del Corazón",
          titleingles: "Título en inglés:Coda",
          estreno: "Estreno: 28-Oct-2021",
          genero: "Género: Drama",
          info1: "Recomendada para Mayores de 12 años",
          info2: "111 Min",
          trailer: "https://www.youtube.com/watch?v=iy910WCy5R0",
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
