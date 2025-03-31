import { createApp } from 'vue'
import App from './App.vue'
import './assets/main.css'

const app = createApp(App)
app.mount('#app')

console.log('Portfolio application chargée')

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
          const targetWidth = bar.getAttribute('data-width-target');
          setTimeout(() => {
            bar.style.width = targetWidth;
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
  window.addEventListener('resize', () => {
    // Attendre que le redimensionnement soit terminé
    setTimeout(() => {
      // Réinitialiser les barres de progression
      document.querySelectorAll('.skill-progress').forEach(bar => {
        bar.style.width = '0%';
        setTimeout(() => {
          const targetWidth = bar.getAttribute('data-width-target');
          bar.style.width = targetWidth;
        }, 200);
      });
    }, 300);
  });
});
