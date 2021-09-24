<template>
  <v-app>
    <v-main>
      <p id="ellooo" class="text-center">hello</p>
    </v-main>
    <footer>
      <foter/>
    </footer>
  </v-app>
</template>

<script>
import foter from '../components/foter.vue'
export default {
  components: { foter },

}
</script>
<style scoped>
#ellooo{
  color: chartreuse;
}
</style>


