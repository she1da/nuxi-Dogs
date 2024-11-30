<template>
    <div>
        <div class="flex flex-wrap">
            <NuxtLink v-for="breed in paginatedBreeds" :key="breed" :to="`/breeds/${breed}`"
                class="w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col">
                <img class="hover:grow hover:shadow-lg" :src="getBreedImage(breed)" alt="Dog breed" />
                <div class="pt-3 flex items-center justify-between">
                    <p class="capitalize">{{ breed }}</p>
                </div>
            </NuxtLink>

        </div>

        <div class="flex justify-center mt-4">
            <button v-if="currentPage > 1" @click="goToPage(currentPage - 1)"
                class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600">
                Previous
            </button>
            <button v-if="hasNextPage" @click="goToPage(currentPage + 1)"
                class="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 ml-2">
                Next
            </button>
        </div>
    </div>
</template>

<script>


export default {

    data() {
        return {
            breeds: {},
            breedImages: {},
            currentPage: 1,
            breedsPerPage: 6,
            paginatedBreeds: [],
            hasNextPage: false,
        };
    },
    methods: {

        async fetchBreeds() {
            try {
                const response = await fetch("https://dog.ceo/api/breeds/list/all");
                const { message } = await response.json();
                this.breeds = message;

                this.updatePageBreeds();
            } catch (error) {
                console.error("Failed to fetch breeds:", error);
            }
        },

        updatePageBreeds() {
            const breedKeys = Object.keys(this.breeds);
            const startIndex = (this.currentPage - 1) * this.breedsPerPage;
            const endIndex = this.currentPage * this.breedsPerPage;

            this.paginatedBreeds = breedKeys.slice(startIndex, endIndex);

            this.hasNextPage = endIndex < breedKeys.length;

            this.paginatedBreeds.forEach(breed => {
                this.fetchBreedImages(breed);
            });

        },

        async fetchBreedImages(breed) {
            try {
                const response = await fetch(`https://dog.ceo/api/breed/${breed}/images`);
                const { message } = await response.json();
                this.breedImages[breed] = message[0];
            } catch (error) {
                console.error(`Failed to fetch images for breed ${breed}:`, error);
            }
        },

        getBreedImage(breed) {
            return this.breedImages[breed] || "https://via.placeholder.com/400"; // Return placeholder if no image
        },

        goToPage(page) {
            this.currentPage = page;
            this.updatePageBreeds();
        },
    },
    created() {
        this.fetchBreeds();
    },
};


</script>

<style scoped>
.hover\:grow {
    transform: scale(1.05);
    transition: transform 0.2s;
}

button {
    transition: background-color 0.2s;
}
</style>