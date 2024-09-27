<template>
    <footer>
        <div class="social-icons">
            <a href="https://github.com/Reyzouu" target="_blank"><img src="./Images/github.png" alt="GitHub"></a>
            <a href="https://Linkedin.com/in/leny-desaegher-a78749306/" target="_blank"><img src="./Images/Linkedin.png" alt="Linkedin"></a>
        </div>

        <p>Date de la dernière mise à jour : <span id="last-updated">27/092024</span></p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>
footer {
    background-color: #333;
    color: #fff;
    padding: 10px;
    text-align: center;
}

.social-icons img {
    width: 30px;
    margin: 0 5px;
}

#presentation {
    margin: 20px;
}
</style>