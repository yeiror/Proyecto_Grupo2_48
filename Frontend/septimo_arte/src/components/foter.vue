<template>
     <v-footer dark padless >
      <v-card flat tile width="150%" class="black white--text text-center">
        <v-card-text>
          <v-btn v-for="icon in icons" :key="icon" class="mx-4 yellow accent-4" icon>
            <v-icon size="24px">
              {{ icon }}
            </v-icon>
          </v-btn>
        </v-card-text>

        <v-divider class="yellow accent-4"></v-divider>

        <v-card-text class="yellow accent-4">
          {{ new Date().getFullYear() }} — <strong>Septimo Arte</strong>
        </v-card-text>
      </v-card>
    </v-footer>
</template>

<script>
export default {
  data() {
    return {
     
      icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
    };
  },
};
</script>
<style>

</style>