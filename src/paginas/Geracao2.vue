<template>
    <div class="carregamento" v-if="carregamento">
        <img src="../complementes/carregamento.gif">
    </div>
    <main class="container" v-if="!carregamento">
        <div class="row">
            <div class="col-12">
                <input type="text" placeholder="Qual pkemon deseja pesquisar?" class="form-control pesquisa" v-model="termoFiltragem">
                <p v-if="filtrar().length == 0" class="text-weight-bold">Não foi encontrado nenhum pokemon.</p>
                <p v-else-if="filtrar().length == 1" class="text-weight-bold">Foi encontrado um pokemon.</p>
                <p v-else class="text-weight-bold">Foram encontrados {{ filtrar().length }} pokemons.</p>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-md-6 col-md-4 col-lg-3" v-for="pokemon in filtrar()">
                <div class="card" :class="pokemon.types[0].type.name">
                    <img :src="pokemon.sprites.other.home.front_default" :alt="pokemon.name">
                    <p>{{ pokemon.name }}</p>
                </div>
            </div>
        </div>
    </main>
</template>

<script setup>
import { onMounted, ref } from 'vue';

    let carregamento = ref(true)

    let vetor = ref([])

    let termoFiltragem = ref('')

    onMounted(async () => {
        for (let index = 152; index <= 251; index++) {
            let requisicao = await fetch('https://pokeapi.co/api/v2/pokemon/'+index)
            let pokemon = await requisicao.json()
            vetor.value.push(pokemon)
        }

        carregamento.value = false
    })

    function filtrar() {
        return vetor.value.filter(obj => obj.name.toLowerCase().includes(termoFiltragem.value.toLocaleLowerCase()))
    }
</script>