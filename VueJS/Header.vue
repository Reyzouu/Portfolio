<template>
    <header>
        <div class="logo">
            <a href="Lien_vers_la_page_accueil"> <img src="./Images/Flèche.png" alt="logo"></a>
        </div>
        <nav>
            <ul>
                <li><a href="#presentation">Présentation</a></li>
                <li><a href="#creations">Créations</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
        </nav>
        <a href="#" id="back-to-top" title="Remonter en haut de la page">&uarr;</a>
    </header>
</template>

<script>
export default {
    name: 'Header',
};
</script>

<style scoped>
header {
    background-color: #333;
    color: #fff;
    padding: 10px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo img {
    width: 50px;
}

nav ul {
    list-style-type: none;
}

nav ul li {
    margin-right: 20px;
}

nav ul li a {
    color: #fff;
    text-decoration: none;
}
</style>