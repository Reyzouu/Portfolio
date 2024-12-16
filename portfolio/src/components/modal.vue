<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="closeModal">
      <div class="modal">
          <span class="close" @click="closeModal">&times;</span>
          <h2>{{ title }}</h2>
          <p><strong>Date de création:</strong> {{ creationDate }}</p>
          <p><strong>Technologies utilisées:</strong> {{ technologies }}</p>
          <div v-if="link">
              <p><strong>Voir le projet:</strong> <a :href="link" target="_blank">Lien vers le projet</a></p>
          </div>
          <div v-if="githubLink">
              <p><strong>Voir le code source:</strong> <a :href="githubLink" target="_blank">Lien GitHub</a></p>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: {
      isVisible: Boolean,
      title: String,
      creationDate: String,
      technologies: String,
      link: String,
      githubLink: String,
  },
  methods: {
      closeModal() {
          this.$emit('close');
      },
  },
};
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
}

.modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white; /* Fond blanc */
    color: black; /* Couleur de texte noir */
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    z-index: 1000;
}

.modal h2 {
    font-size: 1.5rem;
    margin-bottom: 10px;
    font-weight: bold;
}

.modal p {
    margin: 10px 0;
    font-size: 1rem;
}

.modal a {
    color: blue; /* Couleur de lien */
    text-decoration: underline;
}

.close {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 20px;
    cursor: pointer;
    color: black; /* Couleur de la croix de fermeture */
}
</style>

