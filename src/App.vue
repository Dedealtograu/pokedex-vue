<script setup>
import { RouterLink, RouterView } from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import './complementes/estilo.css'
import BarraNavegacao from './componentes/BarraNavegacao.vue'

</script>

<template>
  <BarraNavegacao />
  <RouterView />
</template>

<style>

</style>
