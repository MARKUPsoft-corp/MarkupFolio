<script setup>
import { ref, onMounted, computed } from 'vue';
import { gsap } from 'gsap';

// Compétences techniques organisées par catégorie
const technicalSkills = {
  backend: [
    { name: 'Node.js', level: 95, icon: 'fab fa-node-js' },
    { name: 'Java / Spring Boot', level: 90, icon: 'fab fa-java' },
    { name: 'Python', level: 85, icon: 'fab fa-python' },
    { name: 'GraphQL', level: 82, icon: 'fas fa-project-diagram' },
    { name: 'PHP / Laravel', level: 75, icon: 'fab fa-php' },
  ],
  frontend: [
    { name: 'JavaScript / TypeScript', level: 90, icon: 'fab fa-js' },
    { name: 'Vue.js', level: 88, icon: 'fab fa-vuejs' },
    { name: 'React', level: 80, icon: 'fab fa-react' },
    { name: 'HTML5 / CSS3', level: 85, icon: 'fab fa-html5' },
    { name: 'Bootstrap / Tailwind', level: 78, icon: 'fab fa-bootstrap' },
  ],
  security: [
    { name: 'Penetration Testing', level: 92, icon: 'fas fa-user-shield' },
    { name: 'Network Security', level: 85, icon: 'fas fa-network-wired' },
    { name: 'Cryptography', level: 80, icon: 'fas fa-key' },
    { name: 'Security Auditing', level: 90, icon: 'fas fa-shield-alt' },
    { name: 'OWASP Top 10', level: 95, icon: 'fas fa-bug' },
  ],
  devops: [
    { name: 'Docker', level: 90, icon: 'fab fa-docker' },
    { name: 'Kubernetes', level: 80, icon: 'fas fa-dharmachakra' },
    { name: 'CI/CD', level: 85, icon: 'fas fa-infinity' },
    { name: 'AWS', level: 78, icon: 'fab fa-aws' },
    { name: 'Linux', level: 92, icon: 'fab fa-linux' },
  ],
  database: [
    { name: 'MongoDB', level: 88, icon: 'fas fa-database' },
    { name: 'MySQL / PostgreSQL', level: 90, icon: 'fas fa-server' },
    { name: 'Redis', level: 80, icon: 'fas fa-bolt' },
    { name: 'Elasticsearch', level: 75, icon: 'fas fa-search' },
    { name: 'ORM Tools', level: 85, icon: 'fas fa-table' },
  ]
};

// État actif pour les onglets de catégories
const activeCategory = ref('backend');

// Obtenir les compétences de la catégorie active
const activeSkills = computed(() => technicalSkills[activeCategory.value]);

// Changer de catégorie
const setCategory = (category) => {
  // Animation de transition
  gsap.to('.skills-content', {
    opacity: 0,
    y: 20,
    duration: 0.3,
    onComplete: () => {
      activeCategory.value = category;
      gsap.to('.skills-content', {
        opacity: 1,
        y: 0,
        duration: 0.5,
        delay: 0.1
      });
    }
  });
};

// Techniques supplémentaires (puces sans barres de progression)
const additionalTechnologies = [
  'Git', 'REST API', 'Microservices', 'OAuth', 'JWT', 
  'TDD', 'Agile', 'WebSockets', 'RabbitMQ', 'Kafka',
  'Nginx', 'Apache', 'Firewall Config', 'Load Balancing', 'Proxy Servers',
  'Design Patterns', 'Clean Code', 'SOLID', 'Domain-Driven Design'
];

onMounted(() => {
  // Animation des catégories
  gsap.from('.category-item', {
    opacity: 0,
    y: -20,
    stagger: 0.1,
    duration: 0.5,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '.category-tabs',
      start: 'top 80%'
    }
  });
  
  // Animation des compétences
  gsap.from('.skill-card', {
    opacity: 0,
    scale: 0.9,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.skills-content',
      start: 'top 80%'
    }
  });
  
  // Animation des barres de progression
  gsap.from('.progress-fill', {
    width: 0,
    duration: 1.5,
    stagger: 0.1,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.skills-content',
      start: 'top 80%'
    }
  });
  
  // Animation des puces de technologies supplémentaires
  gsap.from('.tech-tag', {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.5,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.additional-technologies',
      start: 'top 85%'
    }
  });
});
</script>

<template>
  <section id="skills" class="section skills">
    <h2 class="section-title">Mes Compétences</h2>
    
    <!-- Onglets de catégories -->
    <div class="category-tabs">
      <div 
        v-for="(skills, category) in technicalSkills" 
        :key="category"
        :class="['category-item', { active: activeCategory === category }]"
        @click="setCategory(category)"
      >
        <div class="category-icon">
          <i :class="category === 'backend' ? 'fas fa-server' : 
                    category === 'frontend' ? 'fas fa-desktop' :
                    category === 'security' ? 'fas fa-shield-alt' :
                    category === 'devops' ? 'fas fa-cogs' : 'fas fa-database'"></i>
        </div>
        <h3>{{ category.charAt(0).toUpperCase() + category.slice(1) }}</h3>
      </div>
    </div>
    
    <!-- Contenu des compétences -->
    <div class="skills-content">
      <div class="skill-grid">
        <!-- Cartes de compétences -->
        <div 
          v-for="(skill, index) in activeSkills" 
          :key="index"
          class="skill-card"
        >
          <div class="skill-icon">
            <i :class="skill.icon"></i>
          </div>
          <div class="skill-details">
            <h4>{{ skill.name }}</h4>
            <div class="progress-container">
              <div class="progress-bar">
                <div class="progress-fill" :style="{ width: `${skill.level}%` }"></div>
              </div>
              <span class="progress-value">{{ skill.level }}%</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Technologies supplémentaires -->
    <div class="additional-technologies">
      <h3>Autres Technologies & Méthodologies</h3>
      <div class="tech-tags">
        <span 
          v-for="(tech, index) in additionalTechnologies" 
          :key="index"
          class="tech-tag"
        >
          {{ tech }}
        </span>
      </div>
    </div>
    
    <!-- Certifications -->
    <div class="certifications">
      <h3>Certifications</h3>
      <div class="certification-cards">
        <div class="certification-card">
          <div class="certification-logo">
            <i class="fas fa-shield-alt"></i>
          </div>
          <div class="certification-content">
            <h4>Certified Ethical Hacker (CEH)</h4>
            <p>EC-Council</p>
            <span class="certification-date">2021</span>
          </div>
        </div>
        
        <div class="certification-card">
          <div class="certification-logo">
            <i class="fas fa-cloud"></i>
          </div>
          <div class="certification-content">
            <h4>AWS Certified Solutions Architect</h4>
            <p>Amazon Web Services</p>
            <span class="certification-date">2020</span>
          </div>
        </div>
        
        <div class="certification-card">
          <div class="certification-logo">
            <i class="fas fa-code-branch"></i>
          </div>
          <div class="certification-content">
            <h4>Professional Scrum Master I</h4>
            <p>Scrum.org</p>
            <span class="certification-date">2019</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.skills {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  overflow: hidden;
}

/* Effet de motif de fond */
.skills::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: radial-gradient(var(--primary-light) 1px, transparent 1px);
  background-size: 30px 30px;
  opacity: 0.05;
  pointer-events: none;
}

/* Onglets de catégories */
.category-tabs {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 15px;
  margin-bottom: 40px;
}

.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 15px 25px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
  min-width: 150px;
  position: relative;
  overflow: hidden;
}

.category-item::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 3px;
  background-color: var(--primary);
  transition: width var(--transition-normal);
}

.category-item.active::before,
.category-item:hover::before {
  width: 100%;
}

.category-item:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.category-item.active {
  background-color: var(--bg-tertiary);
  box-shadow: var(--shadow-md);
}

.category-icon {
  font-size: 1.8rem;
  color: var(--primary);
  transition: transform var(--transition-fast);
}

.category-item:hover .category-icon {
  transform: scale(1.1);
}

.category-item h3 {
  font-size: 1.1rem;
  margin: 0;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

/* Contenu des compétences */
.skills-content {
  transition: opacity var(--transition-fast), transform var(--transition-fast);
  margin-bottom: 50px;
}

.skill-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 25px;
}

.skill-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
  border-left: 4px solid transparent;
}

.skill-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
  border-left-color: var(--primary);
}

.skill-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  background-color: var(--primary-light);
  color: white;
  border-radius: 12px;
  font-size: 1.4rem;
  transition: all var(--transition-fast);
}

.skill-card:hover .skill-icon {
  transform: rotate(10deg);
  background-color: var(--primary);
}

.skill-details {
  flex: 1;
}

.skill-details h4 {
  font-size: 1.1rem;
  margin-bottom: 10px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.progress-container {
  display: flex;
  align-items: center;
  gap: 10px;
}

.progress-bar {
  flex: 1;
  height: 8px;
  background-color: var(--bg-tertiary);
  border-radius: var(--radius-full);
  overflow: hidden;
  transition: background-color var(--transition-normal);
}

.progress-fill {
  height: 100%;
  background: linear-gradient(to right, var(--primary), var(--primary-light));
  border-radius: var(--radius-full);
}

.progress-value {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary);
  min-width: 40px;
  text-align: right;
}

/* Technologies supplémentaires */
.additional-technologies {
  margin-bottom: 50px;
}

.additional-technologies h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  text-align: center;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 12px;
}

.tech-tag {
  display: inline-block;
  padding: 8px 16px;
  background-color: var(--bg-secondary);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.tech-tag:hover {
  background-color: var(--primary-light);
  color: white;
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

/* Certifications */
.certifications h3 {
  font-size: 1.5rem;
  margin-bottom: 25px;
  text-align: center;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.certification-cards {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 25px;
}

.certification-card {
  display: flex;
  align-items: center;
  gap: 15px;
  padding: 20px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-sm);
  transition: all var(--transition-fast);
  width: 320px;
  border-bottom: 3px solid var(--primary);
}

.certification-card:hover {
  transform: translateY(-5px);
  box-shadow: var(--shadow-md);
}

.certification-logo {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: var(--primary-light);
  color: white;
  border-radius: 50%;
  font-size: 1.6rem;
  transition: all var(--transition-fast);
}

.certification-card:hover .certification-logo {
  transform: scale(1.1);
  background-color: var(--accent);
}

.certification-content {
  flex: 1;
}

.certification-content h4 {
  font-size: 1.1rem;
  margin-bottom: 5px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.certification-content p {
  font-size: 0.9rem;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
  margin-bottom: 5px;
}

.certification-date {
  display: inline-block;
  padding: 4px 8px;
  background-color: var(--primary-light);
  color: white;
  border-radius: var(--radius-sm);
  font-size: 0.8rem;
  font-weight: 500;
}

/* Responsive styles */
@media (max-width: 768px) {
  .category-tabs {
    gap: 10px;
  }
  
  .category-item {
    padding: 12px 20px;
    min-width: 120px;
  }
  
  .category-icon {
    font-size: 1.5rem;
  }
  
  .category-item h3 {
    font-size: 0.9rem;
  }
  
  .skill-grid {
    gap: 15px;
  }
  
  .certification-cards {
    flex-direction: column;
    align-items: center;
  }
}
</style> 