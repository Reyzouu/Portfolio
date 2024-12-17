<template>
    <div class="envoyer-message">
        <h2>Confirmation</h2>
        <p class="message-confirmation">Votre message a bien été envoyé.</p>
    </div>
</template>

<script>
export default {
    name: 'EnvoyerMessage',
};
</script>

<style scoped>
.envoyer-message {
    text-align: center;
    margin-top: 50px;
    font-family: Arial, sans-serif;
}

h2 {
    color: #28a745;
    font-size: 2rem;
    margin-bottom: 20px;
}

.message-confirmation {
    font-size: 1.2rem;
    color: #555;
}
</style>
