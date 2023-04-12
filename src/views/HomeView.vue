<template>
  <main class="min-h">
    <aside class=" w-11/12 mx-auto py-10">
      <label class="relative block shadow rounded mb-6">
        <span class="absolute text-light-input top-4 left-8">
          <i class='bx bx-search bx-sm align-middle'></i>
        </span>
        <input v-model.trim.lazy="searchText" class=" w-full p-4 pl-20 outline-none appearance-none" type="search" placeholder="Search for a country...">
      </label>
      <select v-model="filterArea" class="">
        <option value="" disabled>Filter by Region</option>
        <option v-for="area in areas" :value="area.name">{{ area.name }}</option>
      </select>
    </aside>
    <ul>
      <li></li>
    </ul>
  </main>
</template>

<script setup>
import { ref } from 'vue'
const searchText = ref('')

const filterArea = ref('')

const areas = [
  {
    name: 'Africa'
  },
  {
    name: 'America'
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