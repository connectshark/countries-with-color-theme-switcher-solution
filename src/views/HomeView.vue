<template>
  <main class="min-h">
    <aside class=" w-11/12 mx-auto py-10 lg:flex lg:items-center lg:justify-between">
      <label class="relative block shadow rounded-md overflow-hidden mb-6 text-light-text dark:text-primary-white lg:w-2/5">
        <span class="absolute text-light-input top-4 left-8">
          <i class='bx bx-search bx-sm align-middle'></i>
        </span>
        <input v-model.trim.lazy="searchText" class="w-full placeholder:text-light-input bg-primary-white dark:bg-primary-dark p-4 pl-20 outline-none appearance-none" type="search" placeholder="Search for a country...">
      </label>
      <label class=" w-48 relative block shadow rounded-md overflow-hidden text-light-text dark:text-primary-white">
        <span class="absolute text-light-input right-3 top-4 pointer-events-none">
          <i class='bx bx-chevron-down bx-sm'></i>
        </span>
        <select v-model="filterArea" class="p-4 outline-none w-full appearance-none bg-primary-white dark:bg-primary-dark">
          <option value="" disabled>Filter by Region</option>
          <option v-for="area in areas" :value="area.name">{{ area.name }}</option>
        </select>
      </label>
    </aside>
    <TransitionGroup v-bind="fadeTransition" tag="ul" class=" grid gap-8 w-5/6 mx-auto lg:grid-cols-4">
      <li v-if="loading" class=" text-center col-span-full" key="loading">
        <i class='bx bx-loader-alt bx-spin bx-md' ></i>
      </li>
      <li v-else-if="countryFilter.length === 0" class="text-center col-span-full">
        <p>
          <i class='bx bx-question-mark bx-md'></i>
        </p>
      </li>
      <template v-else>
        <li class=" bg-primary-white dark:bg-primary-dark shadow rounded-md overflow-hidden" v-for="country in countryFilter" :key="country.cca3">
          <router-link :to="`/detail/` + country.cca3" class=" block">
            <figure>
              <img loading="lazy" class="lg:h-48 lg:w-full object-contain object-center" :src="country.flags.svg" alt="country flags">
            </figure>
            <div class=" p-6">
              <h3 class="leading-loose font-extrabold">{{ country.name.common }}</h3>
              <p><span class="font-semibold">Population:</span> {{ country.population }}</p>
              <p><span class="font-semibold">Region:</span> {{ country.region }}</p>
              <p><span class="font-semibold">Capital:</span> {{ country.capital[0] }}</p>
            </div>
          </router-link>
        </li>
      </template>
    </TransitionGroup>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue'
import useCountriesData from '../composable/useCountriesData'
import { fadeTransition } from '../utils/transitions'
const searchText = ref('')

const filterArea = ref('')

const countryFilter = computed(() => {
  let res = countryList.value
  if (searchText.value !== '') {
    res = res.filter(country => {
      return country.name.common.toLowerCase().includes(searchText.value)
    })
  }
  if (filterArea.value !== '' && filterArea.value !== 'All') {
    res = res.filter(country => {
      return country.region.toLowerCase() === filterArea.value.toLowerCase()
    })
  }
  return res
})

const {
  data: countryList,
  loading
} = useCountriesData()


const areas = [
  {
    name: 'All'
  },
  {
    name: 'Africa'
  },
  {
    name: 'Americas'
  },
  {
    name: 'Asia'
  },
  {
    name: 'Europe'
  },
  {
    name: 'Oceania'
  }
]


</script>