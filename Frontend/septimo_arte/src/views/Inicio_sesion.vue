<template>
  <v-app>
    <v-content>
      <v-container class="fill-height" fluid>
        <v-row align="center" justify="center">
          <v-col cols="12" sm="8" md="12">
            <v-card class="elevation-12" dark>
              <v-window v-model="step">
                <v-window-item :value="1">
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
                          Iniciar Sesión en Septimo Arte
                        </h1>
                        <div class="text-center mt-4 pa-2">
                          <v-btn class="mx-2"  fab outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2"  fab outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2"  fab outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <v-form>
                          <v-text-field
                            label="Correo"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="yellow accent-4"
                          />

                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="yellow accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <v-row align="center" justify="center">
                      <div class="text-center pa-3 mt-n5">
                        <v-btn rounded outlined color="yellow accent-4" dark
                          >INICIAR SESIÓN</v-btn
                        >
                      </div>
                      <div class="text-center mt-n5 pa-3">
                      <router-link to="/" style="text-decoration:none">
                        <v-btn rounded outlined dark color="yellow accent-4" > CANCELAR </v-btn>
                        </router-link>
                      </div>
                      </v-row>
                    </v-col>
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">Bienvenido!</h1>
                        <h5 class="text-center">
                          Ingresa tus datos personales y comienza a divertirte
                          con nosotros
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step++"
                          >CREAR CUENTA</v-btn
                        >
                      </div>
                    </v-col>
                  </v-row>
                </v-window-item>
                <v-window-item :value="2">
                  <v-row class="fill-height">
                    <v-col cols="12" md="4" class="yellow accent-4">
                      <v-card-text class="white--text mt-12">
                        <h1 class="text-center display-1">
                          Bienvenido de nuevo!
                        </h1>
                        <h5 class="text-center">
                          Para mantener conectado con nosotros, inicie sesión
                          con tu información personal
                        </h5>
                      </v-card-text>
                      <div class="text-center">
                        <v-btn rounded outlined dark @click="step--"
                          >INICAR SESIÓN</v-btn
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
                          Crear cuenta
                        </h1>
                        <div class="text-center mt-4">
                          <v-btn class="mx-2" fab outlined>
                            <v-icon>mdi-facebook</v-icon>
                          </v-btn>

                          <v-btn class="mx-2" fab outlined>
                            <v-icon>mdi-google</v-icon>
                          </v-btn>
                          <v-btn class="mx-2" fab outlined>
                            <v-icon>mdi-linkedin</v-icon>
                          </v-btn>
                        </div>
                        <h4 class="text-center mt-4">
                          Asegure su correo electronico para registrarse
                        </h4>
                        <v-form>
                          <v-text-field
                            label="Nombre completo"
                            name="full_name"
                            prepend-icon="mdi-account"
                            type="text"
                            color="yellow accent-4"
                          />

                          <v-select
                            label="Tipo de documento"
                            name="document type"
                            :items="Tipo"
                            prepend-icon="mdi-card-account-details"
                            color="yellow accent-4"
                          />

                          <v-text-field
                            label="Documento"
                            name="document"
                            prepend-icon="mdi-card-account-details"
                            type="text"
                            color="yellow accent-4"
                          />
                          <v-text-field
                            label="Celular"
                            name="mobile"
                            prepend-icon="mdi-phone"
                            type="text"
                            color="yellow accent-4"
                          />
                          <v-text-field
                            label="Correo"
                            name="Email"
                            prepend-icon="mdi-email"
                            type="text"
                            color="yellow accent-4"
                          />
                          <v-text-field
                            id="password"
                            label="Contraseña"
                            name="password"
                            prepend-icon="mdi-lock"
                            type="password"
                            color="yellow accent-4"
                          />
                        </v-form>
                      </v-card-text>
                      <v-row align="center" justify="center">
                      <div class="text-center mt-n5 pa-3">
                        <v-btn rounded outlined color="yellow accent-4" dark
                          >CREAR CUENTA</v-btn
                        >
                      </div>
                        <div class="text-center mt-n5 pa-3">
                      <router-link to="/" style="text-decoration:none">
                        <v-btn rounded outlined dark color="yellow accent-4" > CANCELAR </v-btn>
                        </router-link>
                      </div>
                      </v-row>
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
    Tipo: ["Cedula", "Tarjeta de identidad", "Pasaporte", "NIT"],
  }),

  props: {
    source: String,
  },
};
</script>
