<template>
    <nav id="header" class="w-full z-30 top-0 py-1">
        <div class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-6 py-3">
            <div class="order-1 md:order-2">
                <NuxtLink to="/"
                    class="flex items-center tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 mr-2" viewBox="0 0 24 24"
                        fill="currentColor">
                        <path
                            d="M12 2c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm-7 9.5c1.66 0 3-1.34 3-3S6.66 5.5 5 5.5 2 6.84 2 8.5 3.34 11.5 5 11.5zm14 0c1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3 1.34 3 3 3zm-7 3.5c-2.33 0-7 1.17-7 3.5V21h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
                    </svg>
                    Dogs breeds
                </NuxtLink>
            </div>
            <div class="order-2 md:order-3 flex items-center" id="nav-content">
                <nav class="flex items-center space-x-4">
                    <NuxtLink to="/" class="text-gray-800 hover:text-gray-600">Home</NuxtLink>
                    <NuxtLink to="/breeds" class="text-gray-800 hover:text-gray-600">Breeds</NuxtLink>
                    <NuxtLink to="/about" class="text-gray-800 hover:text-gray-600">About</NuxtLink>
                </nav>
            </div>
        </div>
    </nav>
</template>