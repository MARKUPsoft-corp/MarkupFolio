<script setup>
import { ref, onMounted } from 'vue';
import gsap from 'gsap';

// Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  }
});

// Référence aux éléments animés
const shapesRef = ref(null);

onMounted(() => {
  // Animation des formes
  if (shapesRef.value) {
    const shapes = shapesRef.value.querySelectorAll('.shape');
    
    // Animation initiale
    gsap.fromTo(shapes, 
      { opacity: 0, scale: 0.3 },
      { 
        opacity: 1, 
        scale: 1, 
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );
    
    // Animation continue des formes
    shapes.forEach((shape, index) => {
      // Valeurs aléatoires pour l'animation
      const duration = 15 + Math.random() * 30;
      const delay = Math.random() * 5;
      const xMovement = 50 + Math.random() * 100;
      const yMovement = 50 + Math.random() * 100;
      const rotation = 180 + Math.random() * 360;
      
      // Animation flottante continue
      gsap.to(shape, {
        x: `+=${xMovement * (index % 2 === 0 ? 1 : -1)}`,
        y: `+=${yMovement * (index % 3 === 0 ? 1 : -1)}`,
        rotation: rotation * (index % 2 === 0 ? 1 : -1),
        duration: duration,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: delay,
      });
    });
  }
});
</script>

<template>
  <div class="animated-background" :class="{ 'dark-mode': isDarkMode }">
    <div class="blur-overlay"></div>
    
    <!-- Formes animées en arrière-plan -->
    <div class="shapes-container" ref="shapesRef">
      <div class="shape shape-1"></div>
      <div class="shape shape-2"></div>
      <div class="shape shape-3"></div>
      <div class="shape shape-4"></div>
      <div class="shape shape-5"></div>
      <div class="shape shape-6"></div>
      
      <!-- Gradient glow spots -->
      <div class="glow-spot glow-spot-1"></div>
      <div class="glow-spot glow-spot-2"></div>
      <div class="glow-spot glow-spot-3"></div>
    </div>
    
    <!-- Effet de grille (optionnel) -->
    <div class="grid-effect"></div>
  </div>
</template>

<style scoped>
.animated-background {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  z-index: -1;
  background: var(--bg-gradient);
}

.blur-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  backdrop-filter: blur(80px);
  -webkit-backdrop-filter: blur(80px);
  z-index: 1;
}

.shapes-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.shape {
  position: absolute;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  opacity: 0.15;
  filter: blur(60px);
  z-index: 0;
}

.shape-1 {
  width: 600px;
  height: 600px;
  background: var(--primary);
  top: -100px;
  right: -200px;
  animation: morphShape 25s infinite alternate;
}

.shape-2 {
  width: 450px;
  height: 450px;
  background: var(--accent);
  bottom: -100px;
  left: -150px;
  animation: morphShape 20s infinite alternate-reverse;
}

.shape-3 {
  width: 300px;
  height: 300px;
  background: var(--primary-light);
  top: 40%;
  right: 25%;
  animation: morphShape 15s infinite alternate;
}

.shape-4 {
  width: 250px;
  height: 250px;
  background: var(--accent-transparent);
  top: 20%;
  left: 20%;
  animation: morphShape 18s infinite alternate-reverse;
}

.shape-5 {
  width: 200px;
  height: 200px;
  background: var(--primary-dark);
  bottom: 15%;
  right: 15%;
  animation: morphShape 22s infinite alternate;
}

.shape-6 {
  width: 350px;
  height: 350px;
  background: linear-gradient(135deg, var(--accent-transparent), var(--primary-transparent));
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  animation: morphShapeRotate 20s infinite alternate;
}

.glow-spot {
  position: absolute;
  border-radius: 50%;
  filter: blur(100px);
  opacity: 0.15;
  z-index: 0;
}

.glow-spot-1 {
  width: 400px;
  height: 400px;
  background: var(--accent);
  top: 10%;
  right: 20%;
}

.glow-spot-2 {
  width: 350px;
  height: 350px;
  background: var(--primary-light);
  bottom: 15%;
  left: 25%;
}

.glow-spot-3 {
  width: 300px;
  height: 300px;
  background: var(--primary);
  top: 50%;
  left: 15%;
}

.grid-effect {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: 
    linear-gradient(to right, var(--border-color) 1px, transparent 1px),
    linear-gradient(to bottom, var(--border-color) 1px, transparent 1px);
  background-size: 40px 40px;
  opacity: 0.05;
  z-index: 1;
}

/* Animation pour modifier la forme des blobs */
@keyframes morphShape {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 60% 40% 40% 60% / 50% 60% 40% 50%;
  }
  50% {
    border-radius: 40% 60% 70% 30% / 70% 30% 70% 30%;
  }
  75% {
    border-radius: 30% 70% 50% 50% / 40% 60% 40% 60%;
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 40% 60% 40%;
  }
}

@keyframes morphShapeRotate {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    transform: translate(-50%, -50%) rotate(0deg);
  }
  50% {
    border-radius: 40% 60% 70% 30% / 70% 30% 70% 30%;
    transform: translate(-50%, -50%) rotate(180deg);
  }
  100% {
    border-radius: 60% 40% 30% 70% / 60% 40% 60% 40%;
    transform: translate(-50%, -50%) rotate(360deg);
  }
}

/* Mode sombre */
.dark-mode .shape-1 {
  opacity: 0.2;
}

.dark-mode .shape-2 {
  opacity: 0.2;
}

.dark-mode .glow-spot {
  opacity: 0.2;
}
</style> 