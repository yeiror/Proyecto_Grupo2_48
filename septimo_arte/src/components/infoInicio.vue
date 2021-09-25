<template>

    <v-container>
      <v-row dense>
       

        <v-col v-for="(item, i) in items" :key="i" cols="12">
          <v-card :color="item.color" dark>
            <div class="d-flex flex-no-wrap justify-space-between">
              <div>
                <v-card-title
                  class="text-h6"
                  v-text="item.title"
                ></v-card-title>

                <v-card-subtitle  class="text-overline" v-text="item.info"></v-card-subtitle>

                <v-card-actions>
                  <v-btn class="ml-2 mt-5" outlined rounded-lg small>
                    VER MAS
                  </v-btn>
                </v-card-actions>
              </div>

              <v-avatar class="ma-3" size="200" tile >
                <v-img :src="item.src"></v-img>
              </v-avatar>
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
          color: '#212121',
          src: 'https://images.pexels.com/photos/4722571/pexels-photo-4722571.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'CARTELERA',
          info: 'Disfruta de las mejores estrenos en Septimo Arte',
        },
        {
          color: '#212121',
          src: 'https://images.pexels.com/photos/3137890/pexels-photo-3137890.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'PRÓXIMOS ESTRENOS',
          info: 'Observa las proximos estrenos que habra en Septimo Arte',
        },
          {
          color: '#212121',
          src: 'https://images.pexels.com/photos/33129/popcorn-movie-party-entertainment.jpg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
          title: 'CATERING',
          info: 'Disfruta de nuestras comidas y combos que tenemos para ti en Septimo  Arte',
        },
      ],
    }),
  }
</script>

<style>
</style>