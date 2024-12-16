<template>
    <footer>
        <div class="social-icons">
            <a href="https://github.com/Reyzouu" target="_blank"><img src="/img/github.png" alt="GitHub"></a>
            <a href="https://Linkedin.com/in/leny-desaegher-a78749306/" target="_blank"><img src="/img/Linkedin.png" alt="Linkedin"></a>
        </div>

        <p>Date de la dernière mise à jour : <span>12/12/2024</span></p>
    </footer>
</template>

<script>
export default {
    name: 'Footer',
};
</script>

<style scoped>

footer {
    text-align: center;
    padding: 1rem;
    background-color: #333;
    color: white;
    position: relative;
}

.social-icons {
    display: flex;
    justify-content: center;
    gap: 1px;
}

.social-icons img {
    width: 30px;
    transition: 0.3s;
}

.social-icons img:hover {
    transform: scale(1.1);
}

</style>