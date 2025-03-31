<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

// Liste des compétences interpersonnelles à afficher
const softSkills = [
  { name: 'Leadership', value: 95 },
  { name: 'Communication', value: 90 },
  { name: 'Résolution de problèmes', value: 85 },
  { name: 'Travail d\'équipe', value: 92 },
  { name: 'Adaptabilité', value: 88 }
];

// Initialiser l'animation des compétences interpersonnelles
onMounted(() => {
  // Animation de l'image de profil
  gsap.from('.profile-image-container', {
    opacity: 0,
    scale: 0.8,
    duration: 1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%'
    }
  });
  
  // Animation du fond géométrique
  gsap.from('.geometric-bg', {
    opacity: 0,
    x: -50,
    duration: 1.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-image',
      start: 'top 80%'
    }
  });
  
  // Animation du texte de présentation
  gsap.from('.about-text h3, .about-text p', {
    opacity: 0,
    y: 30,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.about-text',
      start: 'top 80%'
    }
  });
  
  // Animation des barres de compétences
  gsap.from('.skill-progress-bar', {
    width: 0,
    duration: 1.5,
    stagger: 0.2,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.soft-skills',
      start: 'top 80%'
    }
  });
  
  // Animation des informations personnelles
  gsap.from('.info-item', {
    opacity: 0,
    x: -20,
    stagger: 0.15,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.personal-info',
      start: 'top 80%'
    }
  });
  
  // Animation du bouton CV
  gsap.from('.download-cv', {
    opacity: 0,
    y: 20,
    duration: 0.8,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.download-cv',
      start: 'top 90%'
    }
  });
});
</script>

<template>
  <section id="about" class="section about">
    <h2 class="section-title">À Propos de Moi</h2>
    
    <div class="about-content">
      <!-- Image de profil avec effet -->
      <div class="about-image">
        <div class="geometric-bg"></div>
        <div class="profile-image-container">
          <div class="profile-image">
            <!-- Remplacez l'URL par votre propre image -->
            <img src="https://via.placeholder.com/400" alt="YAKAM TCHAMEGNI EMMANUEL" />
          </div>
          <div class="experience-badge">
            <span class="years">6+</span>
            <span class="text">Années<br>d'expérience</span>
          </div>
        </div>
      </div>
      
      <!-- Information textuelle -->
      <div class="about-text">
        <h3>Développeur Backend & Expert en Sécurité</h3>
        
        <p class="intro">
          Passionné par les architectures distribuées et la cybersécurité, je développe des solutions robustes 
          et sécurisées qui répondent aux défis techniques les plus complexes dans le monde numérique actuel.
        </p>
        
        <p>
          Mon parcours dans le développement backend et la sécurité informatique a commencé il y a plus de 6 ans, 
          et depuis, j'ai continuellement perfectionné mes compétences pour concevoir des architectures microservices 
          performantes, évolutives et sécurisées. J'ai travaillé sur des projets d'envergure pour diverses entreprises 
          et industries, en mettant toujours l'accent sur la qualité du code et la sécurité des données.
        </p>
        
        <!-- Compétences interpersonnelles -->
        <div class="soft-skills">
          <h4>Compétences Interpersonnelles</h4>
          <div class="skill-items">
            <div 
              v-for="(skill, index) in softSkills" 
              :key="index" 
              class="skill-item"
            >
              <div class="skill-info">
                <span class="skill-name">{{ skill.name }}</span>
                <span class="skill-value">{{ skill.value }}%</span>
              </div>
              <div class="skill-bar">
                <div 
                  class="skill-progress-bar" 
                  :style="{ width: `${skill.value}%`, backgroundColor: index % 2 === 0 ? 'var(--primary)' : 'var(--accent)' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Informations personnelles -->
        <div class="personal-info">
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-user"></i>
            </div>
            <div class="info-content">
              <h5>Nom complet</h5>
              <p>YAKAM TCHAMEGNI EMMANUEL</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-envelope"></i>
            </div>
            <div class="info-content">
              <h5>Email</h5>
              <p>emmanuel.yakam@exemple.com</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-map-marker-alt"></i>
            </div>
            <div class="info-content">
              <h5>Localisation</h5>
              <p>Yaoundé, Cameroun</p>
            </div>
          </div>
          
          <div class="info-item">
            <div class="info-icon">
              <i class="fas fa-briefcase"></i>
            </div>
            <div class="info-content">
              <h5>Disponibilité</h5>
              <p>Disponible pour projets freelance</p>
            </div>
          </div>
        </div>
        
        <a href="#" class="btn download-cv">
          <i class="fas fa-download"></i> Télécharger mon CV
        </a>
      </div>
    </div>
  </section>
</template>

<style scoped>
.about {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
  overflow: hidden;
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

/* Fond avec légère texture */
.about::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11 18c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm48 25c3.866 0 7-3.134 7-7s-3.134-7-7-7-7 3.134-7 7 3.134 7 7 7zm-43-7c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm63 31c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM34 90c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zm56-76c1.657 0 3-1.343 3-3s-1.343-3-3-3-3 1.343-3 3 1.343 3 3 3zM12 86c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm28-65c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm23-11c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-6 60c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm29 22c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zM32 63c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm57-13c2.76 0 5-2.24 5-5s-2.24-5-5-5-5 2.24-5 5 2.24 5 5 5zm-9-21c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM60 91c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM35 41c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2zM12 60c1.105 0 2-.895 2-2s-.895-2-2-2-2 .895-2 2 .895 2 2 2z' fill='%234ecca3' fill-opacity='0.05' fill-rule='evenodd'/%3E%3C/svg%3E");
  opacity: 0.3;
  z-index: 0;
}

.about-content {
  position: relative;
  z-index: 1;
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  align-items: center;
}

/* Styles de l'image de profil */
.about-image {
  flex: 1;
  min-width: 300px;
  position: relative;
}

.geometric-bg {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 30px;
  left: 30px;
  background: linear-gradient(135deg, var(--primary-light), var(--primary-dark));
  border-radius: var(--radius-lg);
  opacity: 0.7;
  z-index: 1;
}

.profile-image-container {
  position: relative;
  max-width: 400px;
  margin: 0 auto;
  z-index: 2;
}

.profile-image {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-lg);
  transition: all var(--transition-fast);
}

.profile-image img {
  width: 100%;
  height: auto;
  display: block;
  transition: transform var(--transition-fast);
}

.profile-image:hover img {
  transform: scale(1.05);
}

.experience-badge {
  position: absolute;
  right: -20px;
  bottom: 40px;
  width: 120px;
  height: 120px;
  background-color: var(--accent);
  border-radius: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: white;
  box-shadow: var(--shadow-lg);
  border: 5px solid white;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.05); }
  100% { transform: scale(1); }
}

.experience-badge .years {
  font-size: 2.5rem;
  font-weight: 800;
  line-height: 1;
}

.experience-badge .text {
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.2;
}

/* Styles du texte */
.about-text {
  flex: 1.5;
  min-width: 300px;
}

.about-text h3 {
  font-size: 2.2rem;
  margin-bottom: 25px;
  color: var(--primary);
  position: relative;
  display: inline-block;
}

.about-text h3::after {
  content: '';
  position: absolute;
  width: 70px;
  height: 3px;
  background-color: var(--accent);
  bottom: -10px;
  left: 0;
}

.about-text p {
  margin-bottom: 25px;
  line-height: 1.8;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.about-text .intro {
  font-size: 1.2rem;
  font-weight: 500;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

/* Compétences interpersonnelles */
.soft-skills {
  margin: 35px 0;
  padding: 25px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: background-color var(--transition-normal);
}

.soft-skills h4 {
  font-size: 1.3rem;
  margin-bottom: 20px;
  color: var(--primary);
}

.skill-items {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.skill-item {
  width: 100%;
}

.skill-info {
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
}

.skill-name {
  font-weight: 600;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.skill-value {
  color: var(--accent);
  font-weight: 700;
}

.skill-bar {
  height: 8px;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--transition-normal);
}

.skill-progress-bar {
  height: 100%;
  border-radius: var(--radius-full);
}

/* Informations personnelles */
.personal-info {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin: 35px 0;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  padding: 15px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
}

.info-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.info-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 45px;
  background-color: var(--primary-light);
  color: white;
  border-radius: 50%;
  font-size: 1.2rem;
}

.info-content h5 {
  font-size: 1rem;
  margin-bottom: 5px;
  color: var(--primary);
}

.info-content p {
  font-size: 0.95rem;
  margin-bottom: 0;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

/* Bouton de téléchargement CV */
.download-cv {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 28px;
  background-color: var(--primary);
  color: white;
  text-decoration: none;
  border-radius: var(--radius-full);
  font-weight: 600;
  transition: all var(--transition-fast);
  margin-top: 10px;
  box-shadow: var(--shadow-md);
}

.download-cv:hover {
  background-color: var(--accent);
  transform: translateY(-5px);
  box-shadow: var(--shadow-lg);
}

.download-cv i {
  font-size: 1.1rem;
}

/* Responsivité */
@media (max-width: 768px) {
  .about-content {
    flex-direction: column;
    gap: 40px;
  }
  
  .geometric-bg {
    top: 20px;
    left: 20px;
  }
  
  .profile-image-container {
    max-width: 320px;
  }
  
  .experience-badge {
    width: 100px;
    height: 100px;
    right: -15px;
    bottom: 30px;
  }
  
  .experience-badge .years {
    font-size: 2rem;
  }
  
  .about-text h3 {
    font-size: 1.8rem;
  }
  
  .about-text .intro {
    font-size: 1.1rem;
  }
  
  .personal-info {
    grid-template-columns: 1fr;
  }
}
</style> 