<template>
    <header>
        <!-- Flèche pour remonter en haut de la page -->
        <button class="scroll-to-top" @click="scrollToTop" aria-label="Remonter en haut">
            &uarr;
        </button>

        <!-- Navigation -->
        <nav>
            <ul>
                <li 
                  v-for="item in menuItems" 
                  :key="item.id" 
                  :class="{ active: activeTab === item.id }"
                  @click="setActiveTab(item.id)"
                >
                    <router-link :to="item.link">{{ item.label }}</router-link>
                </li>
            </ul>
        </nav>
    </header>
</template>

<script>
export default {
    name: 'Header',
    data() {
        return {
            activeTab: null, // ID de l'onglet actif
            menuItems: [
                { id: 'presentation', label: 'Présentation', link: '#presentation' },
                { id: 'creations', label: 'Créations', link: '#creations' },
                { id: 'contact', label: 'Contact', link: '#contact' },
            ],
        };
    },
    methods: {
        scrollToTop() {
            window.scrollTo({ top: 0, behavior: 'smooth' }); // Défilement fluide
        },
        setActiveTab(id) {
            this.activeTab = id; // Met à jour l'onglet actif
        },
    },
};
</script>

<style scoped>
header {
    width: 100%;
    background-color: #333;
    color: #fff;
    padding: 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;
}

.scroll-to-top {
    position: absolute;
    left: 10px;
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
    position: relative;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
    font-size: large;
    padding: 5px 0;
}

nav ul li.active::after {
    content: "";
    position: absolute;
    bottom: -5px; /* Positionné sous le texte */
    left: 0;
    right: 0;
    height: 3px; /* Épaisseur de la barre */
    background-color: #fff; /* Couleur de la barre */
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
}

nav ul li a:hover {
    color: #aaa; /* Optionnel : couleur au survol */
}
</style>
