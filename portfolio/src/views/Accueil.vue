<template>
    <main>
        <!-- Section Présentation -->
        <section id="presentation">
            <div class="presentation-container">
                <img src="/img/photo-leny.jpg" alt="Photo de Leny Desaegher" class="photo-profil" />
                <div class="texte-presentation">
                    <h1>Leny Desaegher</h1>
                    <h2>Bonjour et bienvenue sur mon portfolio !</h2>
                    <p>
                        Je m'appelle Leny Desaegher, j'ai 18 ans et je vis en Ardèche. Actuellement en formation de
                        développeur web, je suis passionné par le monde du numérique et je vous invite à explorer mon travail !
                    </p>
                </div>
            </div>
        </section>

        <!-- Section Créations -->
        <section id="creations">
            <h2>Mes Créations</h2>
            <div class="creations-container">
                <article
                    class="creation"
                    v-for="(creation, index) in creations"
                    :key="index"
                >
                    <div class="image-container">
                        <img
                            :src="currentImage(creation)"
                            :alt="'Aperçu de la création ' + creation.title"
                            class="project-image"
                        />
                        <button @click="prevImage(creation)" class="nav-button prev">&lt;</button>
                        <button @click="nextImage(creation)" class="nav-button next">&gt;</button>
                    </div>
                    <h3>{{ creation.title }}</h3>
                    <button class="voir-plus" @click="openModal(creation)">Voir plus</button>
                </article>
            </div>
        </section>

        <!-- Section Contact -->
<section id="contact">
    <h2>Contactez-moi</h2>
    <form @submit.prevent="handleSubmit" ref="form">
        <!-- Champ Nom -->
        <div class="form-field">
            <label for="nom">Nom:</label>
            <input type="text" id="nom" v-model="form.nom" required />
        </div>

        <!-- Champ Prénom -->
        <div class="form-field">
            <label for="prenom">Prénom:</label>
            <input type="text" id="prenom" v-model="form.prenom" required />
        </div>

        <!-- Champ Objet -->
        <div class="form-field">
            <label for="objet">Objet:</label>
            <input type="text" id="objet" v-model="form.objet" required />
        </div>

        <!-- Champ Message -->
        <div class="form-field">
            <label for="message">Message:</label>
            <textarea id="message" v-model="form.message" required></textarea>
        </div>

        <!-- Bouton Envoyer -->
        <button type="submit" class="submit-button">Envoyer</button>

        <!-- Message de confirmation ou d'erreur -->
        <p v-if="message" :class="['message-feedback', message.type]">
            {{ message.text }}
        </p>
    </form>
</section>


        <!-- Modal -->
        <Modal
            :isVisible="modal.isVisible"
            :title="modal.title"
            :creationDate="modal.creationDate"
            :technologies="modal.technologies"
            :link="modal.link"
            :githubLink="modal.githubLink"
            @close="closeModal"
        />
    </main>
</template>

<script>
import Modal from '../components/modal.vue';

export default {
    name: 'Accueil',
    components: { Modal },
    data() {
        return {
            // Données pour le formulaire de contact
            form: {
                nom: '',
                prenom: '',
                objet: '',
                message: '',
            },
            message: null, // Message de confirmation ou d'erreur

            // Données pour les créations avec gestion d'images multiples
            creations: [
                {
                    title: 'CV',
                    creationDate: 'Janvier 2023',
                    technologies: 'HTML, CSS',
                    link: 'https://example.com/CV.pdf',
                    githubLink: 'https://github.com/Reyzouu/TestCV',
                    images: ['/img/CV1.png', '/img/CV2.png'],
                    currentIndex: 0, // Index de l'image actuelle
                },
                {
                    title: 'Formulaire',
                    creationDate: 'Mars 2023',
                    technologies: 'HTML, CSS, JavaScript',
                    link: 'https://example.com/Formulaire',
                    githubLink: 'https://github.com/Reyzouu/Formulaire',
                    images: ['/img/Form1.png', '/img/Form2.png', '/img/Form3.png'],
                    currentIndex: 0,
                },
            ],

            // Données pour la modal dynamique
            modal: {
                isVisible: false,
                title: '',
                creationDate: '',
                technologies: '',
                link: '',
                githubLink: '',
            },
        };
    },
    methods: {
        /**
         * Soumission du formulaire de contact
         */
        handleSubmit() {
            this.message = null; // Réinitialise le message précédent

            // Simulation de l'envoi des données (fetch fictif)
            setTimeout(() => {
                // Simule un succès
                this.message = { text: 'Votre message a bien été envoyé.', type: 'success' };

                // Réinitialise les champs du formulaire
                this.form.nom = '';
                this.form.prenom = '';
                this.form.objet = '';
                this.form.message = '';
            }, 1000);
        },

        /**
         * Retourne l'image actuelle pour une création donnée
         */
        currentImage(creation) {
            return creation.images[creation.currentIndex];
        },

        /**
         * Passe à l'image suivante
         */
        nextImage(creation) {
            creation.currentIndex = (creation.currentIndex + 1) % creation.images.length;
        },

        /**
         * Revient à l'image précédente
         */
        prevImage(creation) {
            creation.currentIndex =
                (creation.currentIndex - 1 + creation.images.length) % creation.images.length;
        },

        /**
         * Ouvre la modal pour afficher les détails d'une création
         */
        openModal(creation) {
            this.modal = {
                isVisible: true,
                title: creation.title,
                creationDate: creation.creationDate,
                technologies: creation.technologies,
                link: creation.link,
                githubLink: creation.githubLink,
            };
        },

        /**
         * Ferme la modal
         */
        closeModal() {
            this.modal.isVisible = false;
        },
    },
};
</script>


<style scoped>
/* Style général */


main {
    max-width: 100%;
    padding: 20px;
    text-align: center;
}

/* Section Présentation */
#presentation {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 20px;
    margin-bottom: 40px;
}

.photo-profil {
    margin-top: 60px;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    object-fit: cover;
    transition: 0.3s ease;
}

.photo-profil:hover {
    transform: scale(1.05);
}

.texte-presentation {
    max-width: 800px;
    margin: 0 auto;
}

/* Section Créations */
#creations {
    padding-top: 80px;
    margin-bottom: 40px;
}

.creations-container {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.creation {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 15px;
}

.image-container {
    position: relative;
    max-width: 600px;
    width: 100%;
    height: 300px;
    overflow: hidden;
}

.project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.nav-button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    background-color: rgba(0, 0, 0, 0.5);
    color: white;
    border: none;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
}

.nav-button.prev {
    left: 10px;
}

.nav-button.next {
    right: 10px;
}

/* Voir plus */
.voir-plus {
    display: inline-block;
    background-color: #007bff;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
    width: auto;
}

.voir-plus:hover {
    background-color: #0056b3;
}

/* Section Contact */
#contact {
    max-width: 800px;
    text-align: center;
    margin: 0 auto; /* Centre le formulaire sur la page */
}

form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin: 0 auto;
    width: 100%; /* S'assurer que le formulaire prend toute la largeur disponible */
}

.form-field {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: left;
    width: 100%;
}

input,
textarea {
    font-family: Arial, Helvetica, sans-serif;
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 18px;
}

button.submit-button {
    padding: 12px 25px; /* Largeur du bouton ajustée */
    background-color: #28a745;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    transition: 0.3s;
    margin: auto;
}

button.submit-button:hover {
    background-color: #218838;
}

.message-feedback {
    margin-top: 15px;
    font-size: 1rem;
    font-weight: bold;
}

.message-feedback.success {
    color: #28a745; /* Vert pour le succès */
}

.message-feedback.error {
    color: #dc3545; /* Rouge pour l'erreur */
}


</style>
