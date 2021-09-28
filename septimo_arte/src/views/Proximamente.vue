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
          id: 1,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
       {
          id: 2,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/7/3/3/0/20337-1-esl-CO/Poster-MEMORIA.jpg",
        title:"Memory",
        info1:"Título en inglés: Memoria",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Drama",
        info4:"Para todo el Público",
        info5:"136 Min",
        trailer:"https://www.youtube.com/watch?v=kMEb0cgyVww",
        reserva:"/"
        },
         {
          id: 3,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/9/3/6/0/20639-1-esl-CO/1080x1600.jpg",
        title:"Los Santos de la Mafia",
        info1:"Título en inglés:The Many Sainst Of Newark",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Drama",
        info4:"Recomendada para Mayores de 12 años",
        info5:"121 Min",
        trailer:"https://www.youtube.com/watch?v=49TQXg-aE2o",
        reserva:"/"
        },
         {
          id: 4,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 5,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 6,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 7,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 8,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 9,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 10,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 11,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
        },
         {
          id: 12,
        imagen:"https://archivos-cms.cinecolombia.com/images/_aliases/poster_card/5/0/8/2/12805-29-esl-CO/BOND_Cineco_2-Poster_480x670.jpg",
        title:"Sin Tiempo Para Morir",
        info1:"Título en inglés:No Time to Die",
        info2:"Estreno: 30-Sept-2021",
        info3:"Género: Acción",
        info4:"Recomendada para Mayores de 12 años",
        info5:"163 Min",
        trailer:"https://www.youtube.com/watch?v=VYvmuz7ILvg",
        reserva:"/"
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
