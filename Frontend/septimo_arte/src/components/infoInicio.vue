<template>
  <v-container>
    <v-row dense>
      <v-col v-for="(item, i) in items" :key="i" cols="4">
        
        <v-card :color="item.color" dark align="center" justify="center">
          
          <div class="d-flex flex-no-wrap justify-space-between">
            
            <div>
              
            <v-avatar  class="ma-3" size="270" tile>
              <v-img height="250" :src="item.src"></v-img>
            </v-avatar>
            <v-row
        align="center"
        class="mx-0 pa-4"
      >
        <v-rating
          :value="4.5"
          color="amber"
          dense
          half-increments
          readonly
          size="14"
        ></v-rating>

        <div class="grey--text ms-4">
          4.5 (413)
        </div>
      </v-row>
              <v-card-title 
              class="text-h6" v-text="item.title"></v-card-title>

              <v-card-subtitle
                class="text-overline"
                v-text="item.info"
              ></v-card-subtitle>

              <v-card-actions>
                <v-btn
                  class="ml-2 mt-5"
                  outlined
                  rounded-lg
                  small
                  :to="item.page"
                  link
                  dark 
                  color="yellow accent-4"
                  aling="center"
                >
                  VER MAS
                </v-btn>
              </v-card-actions>
            </div>
          </div>
        </v-card>
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    items: [
      {
        color: "#212121",
        src: "https://thedailycav.files.wordpress.com/2017/12/series.jpg",
        title: "CARTELERA",
        info: "Disfruta de las mejores estrenos en Septimo Arte",
        page: "/Cartelera",
      },
      {
        color: "#212121",
        src: "https://us.123rf.com/450wm/corund/corund1903/corund190300023/118742045-speech-bubble-with-coming-soon.jpg?ver=6",
        title: "PRÓXIMOS ESTRENOS",
        info: "Observa las proximos estrenos que habra en Septimo Arte",
        page: "/Proximamente",
      },
      {
        color: "#212121",
        src: "https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        title: "CATERING",
        info: "Disfruta de nuestras comidas y combos que tenemos para ti en Septimo  Arte",
        page: "/Catering",
      },
    ],
  }),
};
</script>

<style>
</style>