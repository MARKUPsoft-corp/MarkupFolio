<script setup>
import { ref, onMounted } from 'vue';
import { loadFull } from "tsparticles";
import Particles from "vue3-particles";

// Options pour les particules - configuration simplifiée
const particlesOptions = ref({
  background: {
    color: {
      value: "transparent"
    }
  },
  fpsLimit: 60,
  particles: {
    color: {
      value: "#ffffff"
    },
    links: {
      color: "#ffffff",
      distance: 150,
      enable: true,
      opacity: 0.5,
      width: 1
    },
    move: {
      enable: true,
      speed: 1
    },
    number: {
      value: 30
    },
    opacity: {
      value: 0.5
    },
    shape: {
      type: "circle"
    },
    size: {
      value: { min: 1, max: 3 }
    }
  },
  detectRetina: true
});

// Fonction simplifiée pour initialiser particlesJS
const particlesInit = async (engine) => {
  try {
    await loadFull(engine);
    console.log("tsParticles initialisé avec succès");
  } catch (error) {
    console.error("Erreur lors de l'initialisation de tsParticles:", error);
  }
};

// Fonction appelée lorsque les particules sont chargées
const particlesLoaded = (container) => {
  console.log("Particules chargées", container);
};
</script>

<template>
  <div class="particles-container">
    <Particles
      id="tsparticles"
      :particlesInit="particlesInit"
      :particlesLoaded="particlesLoaded"
      :options="particlesOptions"
    />
    <div class="blur-overlay"></div>
    <slot></slot>
  </div>
</template>

<style scoped>
.particles-container {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
  overflow: hidden;
}

#tsparticles {
  position: absolute;
  width: 100%;
  height: 100%;
}

.blur-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.05);
}
</style> 