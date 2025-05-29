import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

// Utility function for debouncing
function debounce(func, delay) {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, args);
    }, delay);
  };
}

const app = createApp(App)
app.mount('#app')

// Attendre que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
  // Observer pour les animations au scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        
        // Animer les barres de progression si présentes
        const progressBars = entry.target.querySelectorAll('.skill-progress');
        progressBars.forEach(bar => {
          const targetWidth = bar.getAttribute('data-width-target'); // e.g., "95%"
          const targetScale = parseFloat(targetWidth) / 100;
          setTimeout(() => {
            // Ensure the bar has its width set to 100% if scaleX is used for progress
            // Or, ensure the targetWidth is what's being scaled if the element is already full width.
            // Assuming .skill-progress is the colored bar itself and its parent is the track.
            bar.style.transform = `scaleX(${targetScale})`;
          }, 200);
        });
      }
    });
  }, { threshold: 0.15 });
  
  // Observer tous les éléments qui doivent être animés au scroll
  document.querySelectorAll('.section-header, .about-content, .projects-grid, .project-card, .contact-container').forEach(element => {
    observer.observe(element);
  });
  
  // Réinitialiser les animations au redimensionnement de la fenêtre
  const handleResize = debounce(() => {
    // Réinitialiser les barres de progression
    document.querySelectorAll('.skill-progress').forEach(bar => {
      bar.style.transform = 'scaleX(0)'; // Reset using transform
      // Forcer le reflow pour que l'animation se rejoue
      void bar.offsetWidth; 
      setTimeout(() => {
        const targetWidth = bar.getAttribute('data-width-target');
        const targetScale = parseFloat(targetWidth) / 100;
        bar.style.transform = `scaleX(${targetScale})`;
      }, 50); // Délai réduit car le debounce gère déjà l'attente
    });
  }, 300);

  window.addEventListener('resize', handleResize);
});
