<script setup>
import { ref } from 'vue';

// Titre professionnel
const jobTitle = ref('Développeur Backend & Expert Sécurité');

// Fonction pour naviguer vers les différentes sections
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
  }
};
</script>

<template>
  <section id="hero" class="hero">
    <div class="hero-content">
      <h1 class="hero-title">Marc Dubois</h1>
      
      <div class="job-title">{{ jobTitle }}</div>
      
      <p class="hero-description">
        Développeur Backend passionné et Expert en Sécurité Informatique avec une solide 
        expérience dans la conception et le développement d'architectures microservices 
        sécurisées et scalables.
      </p>
      
      <div class="hero-buttons">
        <a href="#projects" class="btn btn-primary" @click.prevent="scrollToSection('projects')">
          <i class="fas fa-project-diagram"></i> Voir mes projets
        </a>
        <a href="#contact" class="btn btn-secondary" @click.prevent="scrollToSection('contact')">
          <i class="fas fa-envelope"></i> Me contacter
        </a>
      </div>
      
      <div class="social-links">
        <a href="#" title="LinkedIn" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-linkedin-in"></i>
        </a>
        <a href="#" title="GitHub" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-github"></i>
        </a>
        <a href="#" title="Twitter" target="_blank" rel="noopener noreferrer">
          <i class="fab fa-twitter"></i>
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  min-height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--primary);
  color: white;
  position: relative;
}

.hero::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(135deg, rgba(0, 184, 148, 0.9) 0%, rgba(0, 158, 129, 0.85) 100%);
}

.hero-content {
  position: relative;
  z-index: 2;
  max-width: 800px;
  padding: 0 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
}

.job-title {
  font-size: 1.8rem;
  font-weight: 600;
  margin-bottom: 25px;
  color: rgba(255, 255, 255, 0.9);
  font-family: 'Montserrat', sans-serif;
}

.hero-description {
  font-size: 1.2rem;
  line-height: 1.6;
  margin-bottom: 30px;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
}

.hero-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 30px;
}

.social-links {
  display: flex;
  justify-content: center;
  gap: 15px;
}

.social-links a {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.2);
  color: white;
  text-decoration: none;
  transition: all 0.3s ease;
}

.social-links a:hover {
  background-color: white;
  color: var(--primary);
  transform: translateY(-3px);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .job-title {
    font-size: 1.5rem;
  }
  
  .hero-description {
    font-size: 1rem;
  }
  
  .hero-buttons {
    flex-direction: column;
    align-items: center;
  }
}
</style> 