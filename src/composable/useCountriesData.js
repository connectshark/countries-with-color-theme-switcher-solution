import { onBeforeMount, ref } from 'vue'

const API_DOMAIN = import.meta.env.VITE_API_DOMAIN
const API_VERSION = import.meta.env.VITE_API_VERSION

export default function ( code = undefined ) {
  const data = ref([])
  const loading = ref(false)
  const borders = ref([])

  const fetchAllData = async () => {
    loading.value = true
    data.value = []

    const fetch_response =  await fetch(API_DOMAIN + '/' + API_VERSION + '/all?fields=name,cca3,capital,region,population,flags')
    const response = await fetch_response.json()

    data.value = response
    loading.value = false
  }

  const fetchTargetCountry = async () => {
    loading.value = true
    data.value = []
    borders.value = []

    const fetch_response =  await fetch(API_DOMAIN + '/' + API_VERSION + `/alpha?codes=${code}`)
    const response = await fetch_response.json()

    if (response[0].borders.length > 0) {
      const str = response[0].borders.join(',')
      borders.value = await fetchBorderCountry(str)
    }

    data.value = response[0]
    loading.value = false
  }

  const fetchBorderCountry = async (codeString) => {
    const fetch_response =  await fetch(API_DOMAIN + '/' + API_VERSION + `/alpha?codes=${codeString}&fields=name,cca3`)
    const res =  await fetch_response.json()
    return res.map(country => {
      return {
        code: country.cca3,
        name: country.name.common
      }
    })
  }

  if (code) {
    onBeforeMount(fetchTargetCountry)
  } else {
    onBeforeMount(fetchAllData)
  }
  

  return {
    loading,
    data,
    fetchTargetCountry,
    borders
  }
}