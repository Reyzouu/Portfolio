<template>
    <header>
        <!-- Flèche pour remonter en haut de la page -->
        <button class="scroll-to-top" @click="scrollToTop" aria-label="Remonter en haut">
            &uarr;
        </button>

        <!-- Navigation -->
        <nav>
            <ul>
                <li><router-link to="#presentation">Présentation</router-link></li>
                <li><router-link to="#creations">Créations</router-link></li>
                <li><router-link to="#contact">Contact</router-link></li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide jusqu'en haut de la page
        },
    },
};
</script>

<style scoped>
header {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px 20px; /* Espacement horizontal */
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed; /* Fixe le header en haut de la page si désiré */
    top: 0;
    left: 0;
    z-index: 1000; /* Assure que le header passe par-dessus d'autres éléments */
}

.scroll-to-top {
    position: absolute;
    left: 10px; /* Positionnez la flèche à gauche */
    top: 50%;
    transform: translateY(-50%);
    background-color: #555;
    color: white;
    border: none;
    border-radius: 50%;
    width: 35px;
    height: 35px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    cursor: pointer;
    transition: 0.5s;
}

.scroll-to-top:hover {
    background-color: #777;
}

nav ul {
    list-style-type: none;
    display: flex;
    padding: 0;
    margin: 0;
    gap: 25px;
}

nav ul li {
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    transition: color 0.5s;
    font-size: large;
}

nav ul li a:hover {
    color: #aaa;
}
</style>
