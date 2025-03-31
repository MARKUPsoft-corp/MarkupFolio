<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';

// Données des projets
const projects = [
  {
    id: 1,
    title: 'Secure Banking API',
    category: 'backend',
    image: '/images/projects/project1.jpg',
    technologies: ['Java', 'Spring Boot', 'JWT', 'PostgreSQL'],
    description: 'API bancaire sécurisée conforme aux normes PSD2 et RGPD. Intégration d\'authentification à deux facteurs et de cryptage des données sensibles.',
    githubLink: 'https://github.com/username/secure-banking-api',
    liveLink: 'https://api.securebank.example',
    featured: true
  },
  {
    id: 2,
    title: 'Cloud Microservices Monitoring',
    category: 'devops',
    image: '/images/projects/project2.jpg',
    technologies: ['Docker', 'Kubernetes', 'Prometheus', 'Grafana', 'Go'],
    description: 'Solution de monitoring pour architectures microservices. Détection proactive des anomalies et alertes automatisées pour optimiser la performance.',
    githubLink: 'https://github.com/username/cloud-monitoring',
    liveLink: 'https://monitor.example.com',
    featured: true
  },
  {
    id: 3,
    title: 'Vulnerability Scanner',
    category: 'security',
    image: '/images/projects/project3.jpg',
    technologies: ['Python', 'Django', 'Vue.js', 'Docker'],
    description: 'Scanner de vulnérabilités pour applications web avec rapports détaillés et suggestions de correction automatisées.',
    githubLink: 'https://github.com/username/vulnerability-scanner',
    liveLink: 'https://vulnscan.example.net',
    featured: true
  },
  {
    id: 4,
    title: 'E-commerce Dashboard',
    category: 'frontend',
    image: '/images/projects/project4.jpg',
    technologies: ['React', 'Redux', 'Node.js', 'MongoDB', 'Chart.js'],
    description: 'Tableau de bord pour plateforme e-commerce avec analyses avancées et interface utilisateur intuitive pour gérer les produits et commandes.',
    githubLink: 'https://github.com/username/ecommerce-dashboard',
    liveLink: 'https://dashboard.ecom-example.com',
    featured: false
  },
  {
    id: 5,
    title: 'Distributed Cache System',
    category: 'backend',
    image: '/images/projects/project5.jpg',
    technologies: ['Go', 'Redis', 'gRPC', 'Kubernetes'],
    description: 'Système de cache distribué haute performance pour applications à forte charge. Optimisé pour la résilience et la latence minimale.',
    githubLink: 'https://github.com/username/distributed-cache',
    liveLink: null,
    featured: false
  },
  {
    id: 6,
    title: 'Identity Management System',
    category: 'security',
    image: '/images/projects/project6.jpg',
    technologies: ['OAuth 2.0', 'OpenID Connect', 'Java', 'Spring Security'],
    description: 'Système de gestion d\'identité et d\'accès avec support multi-tenants, authentification sociale et analytics de sécurité.',
    githubLink: 'https://github.com/username/identity-management',
    liveLink: 'https://idm.example.org',
    featured: false
  }
];

// État du filtre et de la vue détaillée
const activeFilter = ref('all');
const selectedProject = ref(null);
const isModalOpen = ref(false);

// Filtrer les projets
const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') {
    return projects;
  } else {
    return projects.filter(project => project.category === activeFilter.value);
  }
});

// Affichage des projets mis en avant
const featuredProjects = computed(() => {
  return projects.filter(project => project.featured);
});

// Ouvrir la vue détaillée d'un projet
const openProjectDetails = (project) => {
  selectedProject.value = project;
  isModalOpen.value = true;
  
  // Empêcher le défilement de la page lorsque la modale est ouverte
  document.body.style.overflow = 'hidden';
  
  // Animation d'ouverture de la modale
  gsap.fromTo('.modal-content', 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 0.4, ease: 'power2.out' }
  );
};

// Fermer la vue détaillée
const closeProjectDetails = () => {
  gsap.to('.modal-content', {
    y: 50,
    opacity: 0,
    duration: 0.3,
    ease: 'power2.in',
    onComplete: () => {
      isModalOpen.value = false;
      selectedProject.value = null;
      document.body.style.overflow = 'auto';
    }
  });
};

// Changer le filtre actif
const setFilter = (filter) => {
  // Animation de transition pour les projets
  gsap.to('.projects-grid', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    onComplete: () => {
      activeFilter.value = filter;
      
      // Après changement de filtre, animer les nouveaux projets
      setTimeout(() => {
        gsap.to('.projects-grid', {
          opacity: 1,
          y: 0,
          duration: 0.5
        });
        
        gsap.from('.project-card', {
          opacity: 0,
          y: 30,
          stagger: 0.1,
          duration: 0.5,
          ease: 'power2.out'
        });
      }, 50);
    }
  });
};

onMounted(() => {
  // Animation du titre et des filtres
  gsap.from('.section-title', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '#projects',
      start: 'top 80%'
    }
  });
  
  gsap.from('.filter-buttons button', {
    opacity: 0,
    y: 20,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.filter-buttons',
      start: 'top 85%'
    }
  });
  
  // Animation des cartes de projets
  gsap.from('.project-card', {
    opacity: 0,
    y: 50,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.projects-grid',
      start: 'top 75%'
    }
  });
});
</script>

<template>
  <section id="projects" class="section projects">
    <h2 class="section-title">Mes Projets</h2>
    
    <!-- Filtres de projets -->
    <div class="filter-buttons">
      <button 
        :class="['filter-btn', { active: activeFilter === 'all' }]"
        @click="setFilter('all')"
      >
        Tous
      </button>
      <button 
        :class="['filter-btn', { active: activeFilter === 'backend' }]"
        @click="setFilter('backend')"
      >
        Backend
      </button>
      <button 
        :class="['filter-btn', { active: activeFilter === 'frontend' }]"
        @click="setFilter('frontend')"
      >
        Frontend
      </button>
      <button 
        :class="['filter-btn', { active: activeFilter === 'security' }]"
        @click="setFilter('security')"
      >
        Sécurité
      </button>
      <button 
        :class="['filter-btn', { active: activeFilter === 'devops' }]"
        @click="setFilter('devops')"
      >
        DevOps
      </button>
    </div>
    
    <!-- Grille de projets -->
    <div class="projects-grid">
      <div 
        v-for="project in filteredProjects" 
        :key="project.id"
        class="project-card"
        @click="openProjectDetails(project)"
      >
        <div class="project-image">
          <img :src="project.image" :alt="project.title">
          <div class="project-overlay">
            <span class="view-project">Voir le Projet</span>
          </div>
        </div>
        <div class="project-info">
          <h3 class="project-title">{{ project.title }}</h3>
          <div class="project-category">
            <span>{{ project.category.charAt(0).toUpperCase() + project.category.slice(1) }}</span>
          </div>
          <div class="project-tech">
            <span v-for="(tech, index) in project.technologies.slice(0, 3)" :key="index" class="tech-badge">
              {{ tech }}
            </span>
            <span v-if="project.technologies.length > 3" class="tech-badge more">
              +{{ project.technologies.length - 3 }}
            </span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Modal de détails de projet -->
    <div v-if="isModalOpen" class="project-modal" @click.self="closeProjectDetails">
      <div class="modal-content">
        <button class="close-modal" @click="closeProjectDetails">
          <i class="fas fa-times"></i>
        </button>
        
        <div class="modal-grid">
          <div class="modal-image">
            <img :src="selectedProject.image" :alt="selectedProject.title">
          </div>
          
          <div class="modal-details">
            <h2 class="modal-title">{{ selectedProject.title }}</h2>
            
            <div class="modal-category">
              <span class="category-label">
                {{ selectedProject.category.charAt(0).toUpperCase() + selectedProject.category.slice(1) }}
              </span>
            </div>
            
            <p class="modal-description">{{ selectedProject.description }}</p>
            
            <div class="modal-technologies">
              <h4>Technologies</h4>
              <div class="tech-tags">
                <span v-for="(tech, index) in selectedProject.technologies" :key="index" class="tech-tag">
                  {{ tech }}
                </span>
              </div>
            </div>
            
            <div class="modal-links">
              <a :href="selectedProject.githubLink" target="_blank" rel="noopener noreferrer" class="btn btn-github">
                <i class="fab fa-github"></i> Code Source
              </a>
              <a 
                v-if="selectedProject.liveLink" 
                :href="selectedProject.liveLink" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="btn btn-live"
              >
                <i class="fas fa-external-link-alt"></i> Voir en Direct
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.projects {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  overflow: hidden;
}

/* Filtres */
.filter-buttons {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
}

.filter-btn {
  background-color: transparent;
  border: 2px solid var(--bg-tertiary);
  color: var(--text-secondary);
  font-weight: 500;
  font-size: 0.95rem;
  padding: 10px 20px;
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn:hover,
.filter-btn.active {
  background-color: var(--primary);
  border-color: var(--primary);
  color: white;
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* Grille de projets */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 30px;
  transition: opacity var(--transition-normal), transform var(--transition-normal);
}

.project-card {
  background-color: var(--bg-secondary);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-sm);
  cursor: pointer;
  transition: all var(--transition-fast);
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: var(--shadow-lg);
}

.project-image {
  position: relative;
  overflow: hidden;
  height: 220px;
}

.project-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.project-card:hover .project-image img {
  transform: scale(1.05);
}

.project-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.view-project {
  color: white;
  font-weight: 600;
  padding: 10px 20px;
  border: 2px solid white;
  border-radius: var(--radius-full);
  transition: all 0.3s ease;
}

.project-info {
  padding: 20px;
}

.project-title {
  font-size: 1.2rem;
  margin-bottom: 10px;
  font-weight: 600;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.project-category {
  margin-bottom: 12px;
}

.project-category span {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--primary);
  padding: 5px 10px;
  background-color: var(--primary-light);
  background-opacity: 0.2;
  border-radius: var(--radius-full);
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tech-badge {
  display: inline-block;
  padding: 5px 10px;
  font-size: 0.8rem;
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

.tech-badge.more {
  background-color: var(--accent-muted);
  color: var(--accent);
}

/* Modal de détails de projet */
.project-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
  backdrop-filter: blur(5px);
}

.modal-content {
  background-color: var(--bg-primary);
  border-radius: var(--radius-lg);
  max-width: 1000px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
  box-shadow: var(--shadow-xl);
}

.close-modal {
  position: absolute;
  top: 20px;
  right: 20px;
  background: var(--bg-tertiary);
  border: none;
  color: var(--text-primary);
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10;
  transition: all var(--transition-fast);
}

.close-modal:hover {
  background-color: var(--accent);
  color: white;
  transform: rotate(90deg);
}

.modal-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
}

.modal-image {
  height: 100%;
  max-height: 500px;
  overflow: hidden;
  border-radius: var(--radius-lg) 0 0 var(--radius-lg);
}

.modal-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.modal-details {
  padding: 40px 40px 40px 10px;
}

.modal-title {
  font-size: 2rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.modal-category {
  margin-bottom: 20px;
}

.category-label {
  background-color: var(--primary-light);
  color: white;
  font-size: 0.9rem;
  font-weight: 500;
  padding: 5px 15px;
  border-radius: var(--radius-full);
}

.modal-description {
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.modal-technologies h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 30px;
}

.tech-tag {
  display: inline-block;
  padding: 8px 15px;
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
}

.tech-tag:hover {
  background-color: var(--primary-light);
  color: white;
  transform: translateY(-3px);
}

.modal-links {
  display: flex;
  gap: 15px;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 12px 25px;
  border-radius: var(--radius-full);
  font-weight: 500;
  font-size: 0.95rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  text-decoration: none;
}

.btn-github {
  background-color: #24292e;
  color: white;
}

.btn-live {
  background-color: var(--primary);
  color: white;
}

.btn:hover {
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* Responsive styles */
@media (max-width: 992px) {
  .modal-grid {
    grid-template-columns: 1fr;
  }
  
  .modal-image {
    border-radius: var(--radius-lg) var(--radius-lg) 0 0;
    max-height: 300px;
  }
  
  .modal-details {
    padding: 30px;
  }
}

@media (max-width: 768px) {
  .filter-buttons {
    gap: 10px;
    margin-bottom: 30px;
  }
  
  .filter-btn {
    font-size: 0.85rem;
    padding: 8px 15px;
  }
  
  .project-image {
    height: 180px;
  }
  
  .project-title {
    font-size: 1.1rem;
  }
  
  .modal-title {
    font-size: 1.5rem;
  }
}
</style> 