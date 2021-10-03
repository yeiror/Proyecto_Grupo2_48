<template>
   <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="9">
           <v-card
    class="mx-auto"
    max-width="500"
    elevation="12"
    dark
  >
    <v-card-title class="text-h6 font-weight-regular justify-space-between">
      <span>{{ currentTitle }}</span>
      <v-avatar
        color="warning"
        class="subheading white--text"
        size="24"
        v-text="step"
      ></v-avatar>
    </v-card-title>

    <v-window v-model="step">
      <v-window-item :value="1">
        <v-card-text>
          <v-select
                            label="Seleccionar pelicula"
                            name="document type"
                            :items="pelicula"
                            prepend-icon="mdi-card-account-details"
                          />
          <span class="text-caption grey--text text--darken-1">
            Selecciona la pelicula a reservar
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="2">
        <v-row justify="center">
    <v-date-picker v-model="picker" color="warning"></v-date-picker>
  </v-row>
        <v-card-text >
        
      <v-chip-group
        v-model="selection"
        active-class="warning accent-4 white--text "
        column
        
      >
        <v-chip>4:00PM</v-chip>

        <v-chip>3:40PM</v-chip>

        <v-chip>5:30PM</v-chip>

        <v-chip>7:30PM</v-chip>

        <v-chip>8:00PM</v-chip>

        <v-chip>9:00PM</v-chip>

      </v-chip-group>
          <span class="text-caption grey--text text--darken-1">
           Selecciona la hora de la función
          </span>
        </v-card-text>
      </v-window-item>

      <v-window-item :value="3">
        <div class="pa-4 text-center">
          <v-img
            class="mb-4"
            contain
            height="128"
            src="https://cdn.vuetifyjs.com/images/logos/v.svg"
          ></v-img>
          <h3 class="text-h6 font-weight-light mb-2">
            Welcome to Vuetify
          </h3>
          <span class="text-caption grey--text">Thanks for signing up!</span>
        </div>
      </v-window-item>
    </v-window>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :disabled="step === 1"
        text
        @click="step--"
      >
        Back
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn
        :disabled="step === 3"
        color="warning"
        depressed
        @click="step++"
      >
        Next
      </v-btn>
    </v-card-actions>
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
    pelicula: ["pelicula1", "pelicula2", "Pelicula3", "pelicula4", "pelicula5"],
            picker: (new Date(Date.now() - (new Date()).getTimezoneOffset() * 60000)).toISOString().substr(0, 10),

    }),

    computed: {
      currentTitle () {
        switch (this.step) {
          case 1: return 'Bienvenido Realiza tu reserva'
          case 2: return 'Seleccione el horario'
          default: return 'Account created'
        }
      },
    },
  }
</script>