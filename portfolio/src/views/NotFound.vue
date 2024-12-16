<template>
    <div class="NotFound text-center flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <h1 class="text-indigo-600 text-7xl leading-tight font-bold">404</h1>
        <p class="text-gray-700 text-xl mt-4">Page non trouvée</p>
        <p class="text-gray-500 text-base mt-2">Il semble que cette page n'existe pas.</p>
        <router-link to="/" class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition">
            Retour à l'accueil
        </router-link>
    </div>
</template>

<script>
export default {
    name: 404,
};
</script>

<style scoped>
.NotFound {
    /* Centrage vertical et horizontal */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.NotFound h1 {
    animation: pulse 2s infinite;
}

@keyframes pulse {
    0%, 100% {
        transform: scale(1);
    }
    50% {
        transform: scale(1.1);
    }
}
</style>
