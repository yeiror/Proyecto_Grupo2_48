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
                          Actualizar Catering
                        </h1>
                        <v-form>
                          <v-text-field
                            label="Catering ID"
                            name="catering"
                            prepend-icon="mdi-food"
                            type="text"
                            color="#F4D03F"
                          />
                        </v-form>
                      </v-card-text>
                      <div class="text-center pa-3 mt-3">
                        <v-btn rounded outlined color="#F4D03F" dark
                          >BUSCAR</v-btn
                        >
                      </div>
                    </v-col>
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bienvenido!</h1>
                        <h5 class="text-center">
                          Ofrece algo delicioso
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >CREAR CARERING</v-btn
                        >
                      </div>
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
                         Para actualizar precios y detalles del Catering
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >ACTUALIZAR CATERING</v-btn
                        >
                      </div>
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
                          Crear Nuevo Catering
                        </h1>
                        
                        <h4 class="text-center mt-4">
                          Incluya los detalles del Catering
                        </h4>
                        <v-form>
                          <v-text-field
                          v-model="comboName"
                            label="Combo"
                            name="comboName"
                            prepend-icon="mdi-food"
                            type="text"
                            color="#F4D03F"
                          />

                         <v-text-field
                         v-model="price"
                            label="Precio"
                            name="Price"
                            prepend-icon="mdi-currency-usd"
                            type="number"
                            color="#F4D03F"
                          />
                          <v-file-input
                          v-model="photo"
                            accept="image/*"
                            label="Foto"
                            color="#F4D03F"
                            prepend-icon="mdi-camera-image"
                        ></v-file-input>

                         <v-combobox

                        v-model="description"
                        :items="items"
                        :search-input.sync="search"
                        hide-selected
                        hint="Maximum of 5 tags"
                        label="Contiene"
                        prepend-icon="mdi-account-star"
                        color="#F4D03F"
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
                        <v-switch
                        color="yellow accent-4"
                        v-model="available"
                        inset
                        :label="`disponible: ${available.toString()}`"
                      ></v-switch>
                        </v-form>
                      </v-card-text>
                      <br>
                      <v-row align="center" justify="center">
                      <div class="text-center mt-n5 pa-3">
                        <v-btn id="registrarfood" @click="registerFood" rounded outlined color="yellow accent-4" dark
                          >ENVIAR</v-btn
                        >                        
                      </div>
                       <div class="text-center mt-n5 pa-3">
                      <router-link to="/" style="text-decoration:none">
                        <v-btn rounded outlined dark color="yellow accent-4" > CANCELAR </v-btn>
                        </router-link>
                      </div>
                      </v-row>
                      <br>
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
    items: ['Crispetas', 'Papas', 'Hot Dogs', 'Gaseosas'],
     
      search: null,
      comboName:"",
      price:"",
      photo:"",
      description:"",
      available:"",
  }),

  methods:{
registerFood(){
  axios.post('http://localhost:3000/api/v1/catering',{
    nombreCombo: this.comboName,
    precio: this.price,
    foto: this.photo,
    descripcion: this.description,
    activo: this.available,
  })
  .then(response =>{
    console.log(response.data);
  })
  .catch(err =>{
    console.log(err);
  });
  this.$router.push("/Catering");
}
  },

watch: {
      model (val) {
        if (val.length > 5) {
          this.$nextTick(() => this.model.pop())
        }
      },
    },
  props: {
    source: String,
  },
};

</script>