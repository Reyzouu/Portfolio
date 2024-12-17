<template>
    <div class="NotFound bg-gray-100 flex items-center justify-center flex-col">
      <!-- Contenu principal -->
      <h1 class="text-indigo-600 text-[12rem] font-bold animate-pulse">404</h1>
      <p class="text-gray-700 text-2xl mt-4">Page non trouvée</p>
      <p class="text-gray-500 text-lg mt-2">Il semble que cette page n'existe pas.</p>
      <router-link 
        to="/" 
        class="mt-6 px-6 py-3 bg-indigo-600 text-white text-lg rounded-lg hover:bg-indigo-700 transition duration-300"
      >
        Retour à l'accueil
      </router-link>
    </div>
  
    <!-- Pas d'inclusion de Footer.vue ici -->
  </template>
  
  <script>
  export default {
    name: 'NotFound',
  };
  </script>
  
  <style scoped>
  /* Centrage du contenu avec Flexbox */
  .NotFound {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 100vh; /* Occupation complète de la hauteur de l'écran */
  }

  h1 {
    font-size: 12rem; /* Ajuste la taille de "404" */
  }
   
  </style> 