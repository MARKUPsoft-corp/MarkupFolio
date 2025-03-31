<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

const experiences = [
  {
    id: 1,
    title: 'Lead Développeur Backend',
    company: 'TechSolutions Inc.',
    period: 'Jan 2021 - Présent',
    location: 'Yaoundé, Cameroun',
    description: 'Conception et développement de microservices pour des applications à haute disponibilité. Supervision d\'une équipe de 5 développeurs. Implémentation de solutions de sécurité et audits de code.',
    technologies: ['Node.js', 'Java Spring Boot', 'MongoDB', 'Docker', 'Kubernetes'],
    icon: 'fa-server'
  },
  {
    id: 2,
    title: 'Expert en Cybersécurité',
    company: 'SecureNet',
    period: 'Mar 2019 - Déc 2020',
    location: 'Yaoundé, Cameroun',
    description: 'Réalisation d\'audits de sécurité et tests d\'intrusion. Développement d\'outils de détection et de prévention des vulnérabilités. Formation des équipes aux bonnes pratiques de sécurité.',
    technologies: ['Penetration Testing', 'OWASP', 'Python', 'Firewall Configuration', 'Encryption'],
    icon: 'fa-shield-alt'
  },
  {
    id: 3,
    title: 'Développeur Full Stack',
    company: 'WebInnovate',
    period: 'Jun 2017 - Fév 2019',
    location: 'Douala, Cameroun',
    description: 'Conception et développement d\'applications web réactives. Intégration d\'API tierces et développement d\'API RESTful. Optimisation des performances et de l\'UX.',
    technologies: ['JavaScript', 'React', 'Node.js', 'Express', 'PostgreSQL'],
    icon: 'fa-code'
  },
  {
    id: 4,
    title: 'Ingénieur Junior',
    company: 'GlobalTech',
    period: 'Sep 2015 - Mai 2017',
    location: 'Yaoundé, Cameroun',
    description: 'Participation au développement de systèmes de gestion de bases de données. Support technique et maintenance applicative. Contribution aux phases d\'analyse et de conception.',
    technologies: ['Java', 'SQL', 'UML', 'Git', 'Linux'],
    icon: 'fa-database'
  }
];

const activeExperience = ref(0);

const selectExperience = (index) => {
  activeExperience.value = index;
};

onMounted(() => {
  // Animation d'apparition des cartes d'expérience
  gsap.from('.timeline-item', {
    opacity: 0,
    x: -30,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.timeline',
      start: 'top 70%'
    }
  });
  
  // Animation d'apparition des détails de l'expérience
  gsap.from('.experience-details', {
    opacity: 0,
    y: 30,
    duration: 0.8,
    ease: 'power3.out',
    scrollTrigger: {
      trigger: '.experience-content',
      start: 'top 70%'
    }
  });
});
</script>

<template>
  <section id="experience" class="section experience">
    <h2 class="section-title">Expériences Professionnelles</h2>
    
    <div class="experience-content">
      <!-- Timeline interactive -->
      <div class="timeline">
        <div
          v-for="(exp, index) in experiences"
          :key="exp.id"
          :class="['timeline-item', { 'active': index === activeExperience }]"
          @click="selectExperience(index)"
        >
          <div class="timeline-icon">
            <i :class="['fas', exp.icon]"></i>
          </div>
          <div class="timeline-info">
            <h3>{{ exp.title }}</h3>
            <p class="company">{{ exp.company }}</p>
            <span class="period">{{ exp.period }}</span>
          </div>
        </div>
      </div>
      
      <!-- Détails de l'expérience sélectionnée -->
      <div class="experience-details">
        <div class="experience-header">
          <h3>{{ experiences[activeExperience].title }}</h3>
          <div class="experience-meta">
            <span class="company">
              <i class="fas fa-building"></i> {{ experiences[activeExperience].company }}
            </span>
            <span class="location">
              <i class="fas fa-map-marker-alt"></i> {{ experiences[activeExperience].location }}
            </span>
            <span class="period">
              <i class="fas fa-calendar-alt"></i> {{ experiences[activeExperience].period }}
            </span>
          </div>
        </div>
        
        <div class="experience-description">
          <p>{{ experiences[activeExperience].description }}</p>
        </div>
        
        <div class="experience-technologies">
          <h4>Technologies utilisées</h4>
          <div class="tech-tags">
            <span 
              v-for="(tech, i) in experiences[activeExperience].technologies" 
              :key="i" 
              class="tech-tag"
            >
              {{ tech }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.experience {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  transition: background-color var(--transition-normal), color var(--transition-normal);
}

.experience-content {
  display: flex;
  flex-wrap: wrap;
  gap: 50px;
  align-items: flex-start;
}

/* Timeline Styles */
.timeline {
  flex: 1;
  min-width: 300px;
  border-left: 3px solid var(--primary);
  padding-left: 20px;
  margin-left: 20px;
}

.timeline-item {
  position: relative;
  padding: 20px;
  margin-bottom: 30px;
  background-color: var(--bg-secondary);
  border-radius: var(--radius-md);
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-sm);
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: -29px;
  top: 50%;
  transform: translateY(-50%);
  width: 15px;
  height: 15px;
  background-color: var(--primary);
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.timeline-item:hover, .timeline-item.active {
  transform: translateX(10px);
  box-shadow: var(--shadow-md);
}

.timeline-item.active {
  border-left: 4px solid var(--primary);
}

.timeline-item.active::before {
  background-color: var(--accent);
  transform: translateY(-50%) scale(1.3);
}

.timeline-icon {
  display: none;
  width: 40px;
  height: 40px;
  background-color: var(--primary-light);
  border-radius: 50%;
  position: absolute;
  left: -50px;
  top: 50%;
  transform: translateY(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
}

.timeline-info h3 {
  font-size: 1.2rem;
  margin-bottom: 5px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.timeline-info .company {
  font-weight: 600;
  color: var(--primary);
  margin-bottom: 5px;
}

.timeline-info .period {
  font-size: 0.9rem;
  color: var(--text-tertiary);
  transition: color var(--transition-normal);
}

/* Experience Details Styles */
.experience-details {
  flex: 2;
  min-width: 300px;
  background-color: var(--bg-secondary);
  padding: 30px;
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-md);
  transition: background-color var(--transition-normal), box-shadow var(--transition-fast);
}

.experience-header {
  margin-bottom: 25px;
}

.experience-header h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.experience-meta {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  margin-bottom: 20px;
}

.experience-meta span {
  display: flex;
  align-items: center;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.experience-meta i {
  margin-right: 8px;
  color: var(--primary);
}

.experience-description {
  margin-bottom: 25px;
  line-height: 1.8;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.experience-technologies h4 {
  font-size: 1.1rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.tech-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-tag {
  display: inline-block;
  padding: 6px 14px;
  background-color: var(--primary-light);
  color: white;
  border-radius: var(--radius-full);
  font-size: 0.85rem;
  transition: all var(--transition-fast);
}

.tech-tag:hover {
  background-color: var(--primary);
  transform: translateY(-3px);
  box-shadow: var(--shadow-md);
}

@media (max-width: 768px) {
  .experience-content {
    flex-direction: column;
  }
  
  .timeline {
    margin-left: 0;
  }
  
  .experience-details {
    padding: 20px;
  }
  
  .experience-header h3 {
    font-size: 1.5rem;
  }
  
  .experience-meta {
    flex-direction: column;
    gap: 10px;
  }
}
</style> 