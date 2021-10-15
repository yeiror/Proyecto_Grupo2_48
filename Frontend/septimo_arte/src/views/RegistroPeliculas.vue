<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
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
                            yellow--text
                            text--accent-4
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
                            color="yellow accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <v-row align="center" justify="center">
                      <div class="text-center pa-3 mt-n5">
                        <v-btn rounded outlined color="yellow accent-4" dark
                          >BUSCAR</v-btn
                        >
                        
                      </div>
                       <div class="text-center mt-n5 pa-3">
                      <router-link to="/" style="text-decoration:none">
                        <v-btn rounded outlined dark color="#FFDB58" > CANCELAR </v-btn>
                        </router-link>
                      </div>
                      </v-row>
                      <br>
                    </v-col>
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bienvenido!</h1>
                        <h5 class="text-center">
                          Ingresa los detalles de la nueva pelicuala
                        </h5>
                        <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >REGISTRAR PELICULA</v-btn
                        >
                      </div>
                      </v-card-text>
                      
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="1">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Hola!
                        </h1>
                        <h5 class="text-center">
                          Si solo quieres actualizar una pelicula existente accede por aqui! 
                        </h5>
                        <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >ACTUALIZAR PELICULA</v-btn
                        >
                      </div>
                      </v-card-text>
                      
                    </v-col>

                    <v-col cols="12" md="8">
                      <v-card-text class="mt-12">
                        <h1
                          class="
                            text-center
                            display-2
                            yellow--text
                            text--accent-4
                          "
                        >
                          Registrar Nueva Pelicula
                        </h1>
                       
                        <h4 class="text-center mt-4">
                          Ingresa los detalles de la nueva pelicuala, asegurate de subir una foto de portada.
                        </h4>
                        <v-form>
                          <v-text-field
                          v-model="title"
                            label="Titulo"
                            name="filmTitle"
                            prepend-icon="mdi-movie-open"
                            type="text"
                            color="yellow accent-4"
                          />

                          <v-select
                          v-model="clasification"
                            label="Clasificacion"
                            name="clasification"
                            :items="Tipo"
                            prepend-icon="mdi-account-filter-outline"
                            color="yellow accent-4"
                          />
                            <v-select
                          v-model="room"
                            label="Sala"
                            name="sala numero"
                            :items="Tipo1"
                            prepend-icon="mdi-room"
                            color="yellow accent-4"
                          />
                            
                          <v-combobox
                            v-model="select1"
                            :items="items"
                            label="Formatos disponibles"
                            prepend-icon="mdi-motion-play"
                            type="text"
                            color="yellow accent-4"
                            multiple
                            chips
                          ></v-combobox>
                           <v-file-input
                           v-model="picture"
                            accept="image/*"
                            label="Portada"
                            prepend-icon="mdi-camera"
                            color="yellow accent-4"
                          ></v-file-input>
                           <v-row>
                             <v-col
                              cols="12"
                              sm="6"
                            >
                          <v-date-picker
                              v-model="dates1"
                              range
                              color="yellow accent-4"
                            ></v-date-picker>
                          </v-col>
                            <v-col
                              cols="12"
                              sm="6"
                            >
                            <v-text-field
                              v-model="dateRangeText"
                              label="Estreno y ultima presentacion"
                              prepend-icon="mdi-calendar"
                              color="yellow accent-4"
                              readonly
                            ></v-text-field>
                            model: {{ dates }}
                            </v-col>
                            </v-row>
                        <v-combobox
                            v-model="languajes"
                            :items="items2"
                            :search-input.sync="search"
                            hide-selected
                            hint="Maximum of 5 tags"
                            label="Idiomas"
                            prepend-icon="mdi-chat-question"
                            color="yellow accent-4"
                            multiple
                            persistent-hint
                            small-chips
                          >
                            <template v-slot:no-data>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </template>
                          </v-combobox>
                           <v-combobox
                            v-model="Actors"
                            :items="items3"
                            :search-input.sync="search"
                            hide-selected
                            hint="Maximum of 5 tags"
                            label="Actores"
                            prepend-icon="mdi-account-star"
                            color="yellow accent-4"
                            multiple
                            persistent-hint
                            small-chips
                          >
                            <template v-slot:no-data>
                              <v-list-item>
                                <v-list-item-content>
                                  <v-list-item-title>
                                    No results matching "<strong>{{ search }}</strong>". Press <kbd>enter</kbd> to create a new one
                                  </v-list-item-title>
                                </v-list-item-content>
                              </v-list-item>
                            </template>
                          </v-combobox>
                        <v-textarea
                        v-model="desciptions"
                            counter
                            label="Descripcion"
                            name="descrition"
                            prepend-icon="mdi-comment"
                            type="text"
                            color="yellow accent-3"
                            ></v-textarea>
                            
                        </v-form>
                        <br>
                        <v-row align="center" justify="center">
                        <div class="text-center mt-n5 pa-3">
                        <v-btn id="registerfilm" @click="registerfilm" rounded outlined color="yellow accent-4" dark
                          >REGISTRAR PELICULA</v-btn
                        >
                      </div>
                      <div class="text-center mt-n5 pa-3">
                      <router-link to="/" style="text-decoration:none">
                        <v-btn rounded outlined dark color="yellow accent-4" > CANCELAR </v-btn>
                        </router-link>
                      </div>
                      </v-row>
                      </v-card-text>
                      
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
import axios from "axios";
export default {
  data: () => ({
    step: 1,
    Tipo: ["12+", "18+", "Todo Publico"],
    Tipo1: ["1", "2", "3"],
    select: ['2D', '3D'],
        items: [
          '2D',
          '3D',
          '4D',
          '4Dx',
        ],
      dates: ['2021-09-10', '2021-09-20'],
      
      menu: false,
      modal: false,
      menu2: false,
      items2: ['Espanol', 'Ingles', 'Frances', 'Ruso'],
      
      items3: ['Denzel Washinton', 'Keanu Reeves', 'Johnny Depp', 'Will Smith'],
      
      search: null,
      title:"",
      clasification:"",
      select1:"",
      dates1:"",
      languajes:"",
      actors:"",
      descriptions:"",

    }),
  methods:{
  registerfilm(){
    axios.post('http://localhost:3000/api/v1/peliculas',{
      nombre: this.title,
      clasificacion: this.clasification,
      formatos: this.select1,
      fecha_estreno: this.dates1,
      sala: this.room,
      descripcion: this.descriptions,
      actores: this.actors,
      //genero: this.gender,


    })
    .then(response =>{
      console.log(response.data);
    })
    .catch(err =>{
      console.log(err);
    });
    this.$router.push("/Cartelera");
  }

  },


  watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
    computed: {
      dateRangeText () {
        return this.dates.join(' ~ ')
      },
    },

  props: {
    source: String,
  },
};
</script>