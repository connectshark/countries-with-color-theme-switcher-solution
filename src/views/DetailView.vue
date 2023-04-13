<template>
  <main class="min-h">
    <aside class=" w-11/12 mx-auto py-10">
      <router-link to="/" class="w-40 shadow py-4 bg-primary-white dark:bg-primary-dark flex items-center justify-center">
        <i class='bx bx-left-arrow-alt bx-sm'></i>
        <span class="">Back</span>
      </router-link>
    </aside>
    <div v-if="loading" class=" text-center">
      <i class='bx bx-loader-alt bx-spin bx-md' ></i>
    </div>
    <div class=" w-11/12 mx-auto grid lg:grid-cols-2 grid-rows-2 gap-4" v-else>
      <figure class="row-span-2">
        <img class=" mx-auto" :src="data.flags.svg" alt="country flag">
      </figure>
      <div class="p-6 grid grid-cols-2 gap-4">
        <h2 class=" col-span-2 font-extrabold text-2xl mb-6">{{ data.name.common }}</h2>
        <p><span class="font-semibold">Population:</span> {{ data.population }}</p>
        <p><span class="font-semibold">Top Level Domain:</span> {{ data.tld[0] }}</p>
        <p><span class="font-semibold">Region:</span> {{ data.region }}</p>
        <p><span class="font-semibold">Sub Region:</span> {{ data.subregion }}</p>
        <p><span class="font-semibold">Capital:</span> {{ data.capital[0] }}</p>
        <p><span class="font-semibold">Currencies:</span> {{ Object.keys(data.currencies)[0] }}</p>
        <p class=" space-x-2"><span class="font-semibold">Languages: </span><span class="inline-block" v-for="language in Object.values(data.languages)">{{ language }}</span></p>
      </div>
      <div class="p-6" v-if="borders.length > 0">
        <h3 class="font-extrabold">Border Countries:</h3>
        <ul class=" space-x-4">
          <li class=" inline-block mb-4" v-for="country in borders">
            <router-link class=" bg-primary-white dark:bg-primary-dark block p-4 shadow" :to="country.code">{{ country.name }}</router-link>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<script setup>
import { computed } from 'vue'
import useCountriesData from '../composable/useCountriesData'

const props = defineProps({
  country: String
})

const countryCode = computed(() => props.country)

const {
  data,
  loading,
  borders
} = useCountriesData(countryCode)

</script>