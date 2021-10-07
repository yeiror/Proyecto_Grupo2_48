<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="9">
            <v-card class="elevation-12" dark>
              <v-window v-model="step">
                <v-window-item :value="2">
                  <v-row>
                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            warning--text
                            text--accent-3
                          "
                        >
                          Atualizar Pelicual
                        </h1>
                    
                        <v-form>
                          <v-text-field
                            label="Nombre de la pelicula"
                            name="filmName"
                            prepend-icon="mdi-movie"
                            type="text"
                            color="warning accent-3"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center pa-3 mt-3">
                        <v-btn rounded color="warning accent-3" dark
                          >BUSCAR</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="warning accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bienvenido!</h1>
                        <h5 class="text-center">
                          Ingresa los detalles de la nueva pelicuala
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >REGISTRAR NUEVA PELICULA</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="1">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="warning accent-3">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Hola!
                        </h1>
                        <h5 class="text-center">
                          Si solo quieres actualizar una pelicula existente accede por aqui! 
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >ACTUALIZAR PELICULA</v-btn
                        >
                      </div>
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            warning--text
                            text--accent-3
                          "
                        >
                          Registrar Nueva Pelicula.
                        </h1>
                       
                        <h4 class="text-center mt-4">
                          Ingresa los detalles de la nueva pelicuala, asegurate de subir una foto de portada.
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Titulo"
                            name="filmTitle"
                            prepend-icon="mdi-movie-open"
                            type="text"
                            color="warning accent-3"
                          />

                          <v-select
                            label="Clasificacion"
                            name="clasification"
                            :items="Tipo"
                            prepend-icon="mdi-account-filter-outline"
                            color="warning accent-3"
                          />
                          <v-combobox
                            v-model="select"
                            :items="items"
                            label="Formato"
                            prepend-icon="mdi-motion-play"
                            type="text"
                            color="warning accent-3"
                            multiple
                            chips
                          ></v-combobox>
                           <v-file-input
                            accept="image/*"
                            label="Portada"
                            prepend-icon="mdi-camera"
                            color="warning accent-3"
                          ></v-file-input>
                          <v-menu
                          ref="menu"
                          v-model="menu"
                          :close-on-content-click="false"
                          :return-value.sync="date"
                          transition="scale-transition"
                          offset-y
                          min-width="auto"
                          color="warning accent-3"
                        >
                          <template v-slot:activator="{ on, attrs }">
                            <v-text-field
                              v-model="date"
                              label="Fecha de estreno"
                              prepend-icon="mdi-calendar"
                              readonly
                              v-bind="attrs"
                              v-on="on"
                              color="warning accent-3"
                            ></v-text-field>
                          </template>
                          <v-date-picker
                            v-model="date"
                            no-title
                            scrollable
                            color="warning accent-3"
                          >
                            <v-spacer></v-spacer>
                            <v-btn
                              text
                              color="warning accent-3"
                              @click="menu = false"
                            >
                              Cancel
                            </v-btn>
                            <v-btn
                              text
                              color="warning accent-3"
                              @click="$refs.menu.save(date)"
                              
                            >
                              OK
                            </v-btn>
                          </v-date-picker>
                        </v-menu>
                        <v-textarea
                            counter
                            label="Descripcion"
                            name="descrition"
                            prepend-icon="mdi-comment"
                            type="text"
                            color="warning accent-3"
                            ></v-textarea>
                        </v-form>
                      </v-card-text>
                      <div class="text-center mt-n5 pa-3">
                        <v-btn rounded color="warning accent-3" dark
                          >REGISTRAR PELICULA</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
              </v-window>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    step: 1,
    Tipo: ["12+", "18+", "Todo Publico"],
    select: ['2D', '3D'],
        items: [
          '2D',
          '3D',
          '4D',
          '4Dx',
        ],
      date: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),
      menu: false,
      modal: false,
      menu2: false,
  }),

  props: {
    source: String,
  },
};
</script>