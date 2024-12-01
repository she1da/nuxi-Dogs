<template>
    <UProgress v-if="loading" animation="carousel" />
    <div v-if="error" class="text-red-500">Error fetching data</div>
    <div v-else>
        <div class="flex flex-wrap">
            <NuxtLink v-for="breed in paginatedBreeds" :key="breed" :to="`/breeds/${breed}`"
                class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <img class="hover:grow hover:shadow-lg" :src="getBreedImage(breed)" alt="Dog breed" />
                <div class="pt-3 flex items-center justify-between">
                    <p class="capitalize">{{ breed }}</p>
                </div>
            </NuxtLink>
        </div>
        <div class="flex mt-4">


            <UButton label="Previous" color="gray" v-if="currentPage > 1" @click="goToPage(currentPage - 1)">
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-left-20-solid" class="w-5 h-5" />
                </template>
            </UButton>
            <UButton label="Next" color="gray" v-if="hasNextPage" @click="goToPage(currentPage + 1)">
                <template #trailing>
                    <UIcon name="i-heroicons-arrow-right-20-solid" class="w-5 h-5" />
                </template>
            </UButton>


        </div>
    </div>
</template>

<script setup>
import { useFetch } from '../composable/useFetch'

const breeds = ref({})
const breedImages = ref({})
const currentPage = ref(1)
const breedsPerPage = 6
const paginatedBreeds = ref([])
const hasNextPage = ref(false)
const loading = ref(true)
const error = ref(null)
const { data: breedsData, error: errorMessages } = useFetch('https://dog.ceo/api/breeds/list/all')
if (breedsData.value) {
    const { message } = breedsData.value
    breeds.value = message
    loading.value = false
}
if (errorMessages.value) {
    error.value = true
    loading.value = false
}
const updatePageBreeds = () => {
    const breedKeys = Object.keys(breeds.value)
    const startIndex = (currentPage.value - 1) * breedsPerPage
    const endIndex = currentPage.value * breedsPerPage
    paginatedBreeds.value = breedKeys.slice(startIndex, endIndex)
    hasNextPage.value = endIndex < breedKeys.length
    paginatedBreeds.value.forEach(breed => {
        fetchBreedImages(breed)
    })
}
const fetchBreedImages = async (breed) => {
    const { data, error: errorMessages } = useFetch(`https://dog.ceo/api/breed/${breed}/images`)
    const { message } = data.value
    if (errorMessages.value) {
        error.value = true
        loading.value = false
    }
    breedImages.value[breed] = message[0]
}
const getBreedImage = (breed) => {
    return breedImages.value[breed] || "https://via.placeholder.com/400"
}
const goToPage = (page) => {
    currentPage.value = page
    updatePageBreeds()
}
onMounted(() => {
    updatePageBreeds()
})
</script>
