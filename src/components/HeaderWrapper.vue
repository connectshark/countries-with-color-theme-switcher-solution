<template>
  <header class="bg-primary-white dark:bg-primary-dark border-b-2 border-gray-200 dark:border-gray-800">
    <div class=" w-11/12 mx-auto flex items-center justify-between py-5 ">
      <h1 class=" font-extrabold">
        <router-link to="/">Where in the world?</router-link>
      </h1>
      <nav>
        <ul>
          <li>
            <button type="button" @click="toggle">
              <i v-if="isDark" class='bx bxs-moon'></i>
              <i v-else class='bx bx-moon'></i>
              <span class=" font-semibold">Dark Mode</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>
<script setup>
import { ref } from 'vue'
const isDark = ref(false)
const toggle = () => {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark')
}

</script>