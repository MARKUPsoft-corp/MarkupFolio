<script setup>
import { ref, onMounted } from 'vue';
import { gsap } from 'gsap';

// État du formulaire
const formData = ref({
  name: '',
  email: '',
  subject: '',
  message: ''
});

// État du formulaire (validation et soumission)
const formErrors = ref({});
const isSubmitting = ref(false);
const submitSuccess = ref(false);
const submitError = ref(false);

// Valider un champ individuel
const validateField = (field, value) => {
  switch (field) {
    case 'name':
      return value.trim().length > 0 ? null : 'Veuillez saisir votre nom';
    case 'email':
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(value) ? null : 'Veuillez saisir une adresse email valide';
    case 'subject':
      return value.trim().length > 0 ? null : 'Veuillez saisir un sujet';
    case 'message':
      return value.trim().length > 10 ? null : 'Votre message doit contenir au moins 10 caractères';
    default:
      return null;
  }
};

// Valider tous les champs du formulaire
const validateForm = () => {
  const errors = {};
  let isValid = true;
  
  Object.keys(formData.value).forEach(field => {
    const error = validateField(field, formData.value[field]);
    if (error) {
      errors[field] = error;
      isValid = false;
    }
  });
  
  formErrors.value = errors;
  return isValid;
};

// Gérer la soumission du formulaire
const handleSubmit = async (e) => {
  e.preventDefault();
  
  // Réinitialiser les états
  submitSuccess.value = false;
  submitError.value = false;
  
  // Valider le formulaire
  if (!validateForm()) {
    // Animation des erreurs
    gsap.to('.error-message', {
      y: [0, -5, 0],
      duration: 0.3,
      ease: 'power2.out'
    });
    return;
  }
  
  isSubmitting.value = true;
  
  try {
    // Simulation d'envoi de formulaire (à remplacer par votre API réelle)
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Réinitialiser le formulaire après succès
    formData.value = { name: '', email: '', subject: '', message: '' };
    submitSuccess.value = true;
    
    // Animation de succès
    gsap.fromTo('.success-message', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'back.out' }
    );
  } catch (error) {
    console.error('Erreur lors de l\'envoi du formulaire', error);
    submitError.value = true;
    
    // Animation d'erreur
    gsap.fromTo('.error-alert', 
      { opacity: 0, y: -20 },
      { opacity: 1, y: 0, duration: 0.5, ease: 'back.out' }
    );
  } finally {
    isSubmitting.value = false;
  }
};

// Coordonnées de contact
const contactInfo = [
  { icon: 'fas fa-envelope', text: 'contact@marc-dubois.com', href: 'mailto:contact@marc-dubois.com' },
  { icon: 'fas fa-phone', text: '+33 6 12 34 56 78', href: 'tel:+33612345678' },
  { icon: 'fas fa-map-marker-alt', text: 'Lyon, France', href: 'https://goo.gl/maps/Lyon' },
  { icon: 'fas fa-globe', text: 'www.marc-dubois.com', href: 'https://www.marc-dubois.com' }
];

// Réseaux sociaux
const socialLinks = [
  { icon: 'fab fa-github', href: 'https://github.com/marc-dubois' },
  { icon: 'fab fa-linkedin-in', href: 'https://linkedin.com/in/marc-dubois' },
  { icon: 'fab fa-twitter', href: 'https://twitter.com/marc_dubois' },
  { icon: 'fab fa-dev', href: 'https://dev.to/marc_dubois' }
];

onMounted(() => {
  // Animation du titre
  gsap.from('.contact-title', {
    opacity: 0,
    y: -30,
    duration: 0.8,
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 80%'
    }
  });
  
  // Animation des informations de contact
  gsap.from('.contact-info-item', {
    opacity: 0,
    x: -30,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.contact-info',
      start: 'top 85%'
    }
  });
  
  // Animation des réseaux sociaux
  gsap.from('.social-icon', {
    opacity: 0,
    scale: 0.5,
    stagger: 0.1,
    duration: 0.5,
    ease: 'back.out(1.7)',
    scrollTrigger: {
      trigger: '.social-links',
      start: 'top 90%'
    }
  });
  
  // Animation du formulaire
  gsap.from('.form-group', {
    opacity: 0,
    y: 30,
    stagger: 0.1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 80%'
    }
  });
  
  // Animation du bouton d'envoi
  gsap.from('.submit-btn', {
    opacity: 0,
    y: 20,
    duration: 0.5,
    delay: 0.5,
    scrollTrigger: {
      trigger: '.contact-form',
      start: 'top 70%'
    }
  });
  
  // Animation des formes de fond
  gsap.from('.bg-shape', {
    opacity: 0,
    scale: 0.8,
    duration: 1.2,
    stagger: 0.2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: '#contact',
      start: 'top 85%'
    }
  });
});
</script>

<template>
  <section id="contact" class="section contact">
    <div class="container">
      <h2 class="section-title contact-title">Contactez-Moi</h2>
      
      <!-- Formes de fond -->
      <div class="bg-shapes">
        <div class="bg-shape shape-1"></div>
        <div class="bg-shape shape-2"></div>
        <div class="bg-shape shape-3"></div>
      </div>
      
      <div class="contact-container">
        <!-- Informations de contact -->
        <div class="contact-info">
          <h3>Restons en Contact</h3>
          <p>N'hésitez pas à me contacter pour discuter de vos projets, idées ou opportunités de collaboration.</p>
          
          <div class="contact-info-list">
            <div v-for="(item, index) in contactInfo" :key="index" class="contact-info-item">
              <div class="icon-container">
                <i :class="item.icon"></i>
              </div>
              <div class="contact-text">
                <a :href="item.href" target="_blank" rel="noopener noreferrer">{{ item.text }}</a>
              </div>
            </div>
          </div>
          
          <div class="social-links">
            <h4>Suivez-moi</h4>
            <div class="social-icons">
              <a 
                v-for="(social, index) in socialLinks" 
                :key="index" 
                :href="social.href" 
                target="_blank" 
                rel="noopener noreferrer"
                class="social-icon"
              >
                <i :class="social.icon"></i>
              </a>
            </div>
          </div>
        </div>
        
        <!-- Formulaire de contact -->
        <div class="contact-form-container">
          <div class="form-header">
            <h3>Envoyez-moi un Message</h3>
            <p>Je vous répondrai dans les plus brefs délais.</p>
          </div>
          
          <form class="contact-form" @submit="handleSubmit">
            <div class="success-message" v-if="submitSuccess">
              <div class="success-alert">
                <i class="fas fa-check-circle"></i>
                <p>Votre message a été envoyé avec succès ! Je vous répondrai dès que possible.</p>
              </div>
            </div>
            
            <div class="error-alert" v-if="submitError">
              <i class="fas fa-exclamation-circle"></i>
              <p>Une erreur est survenue lors de l'envoi du message. Veuillez réessayer ultérieurement.</p>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label for="name">Nom</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name" 
                  :class="{ 'has-error': formErrors.name }"
                  placeholder="Votre nom"
                >
                <span v-if="formErrors.name" class="error-message">{{ formErrors.name }}</span>
              </div>
              
              <div class="form-group">
                <label for="email">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email" 
                  :class="{ 'has-error': formErrors.email }"
                  placeholder="Votre email"
                >
                <span v-if="formErrors.email" class="error-message">{{ formErrors.email }}</span>
              </div>
            </div>
            
            <div class="form-group">
              <label for="subject">Sujet</label>
              <input 
                type="text" 
                id="subject" 
                v-model="formData.subject" 
                :class="{ 'has-error': formErrors.subject }"
                placeholder="Sujet de votre message"
              >
              <span v-if="formErrors.subject" class="error-message">{{ formErrors.subject }}</span>
            </div>
            
            <div class="form-group">
              <label for="message">Message</label>
              <textarea 
                id="message" 
                v-model="formData.message" 
                :class="{ 'has-error': formErrors.message }"
                placeholder="Votre message"
                rows="5"
              ></textarea>
              <span v-if="formErrors.message" class="error-message">{{ formErrors.message }}</span>
            </div>
            
            <button type="submit" class="submit-btn" :disabled="isSubmitting">
              <span v-if="isSubmitting">
                <i class="fas fa-spinner fa-spin"></i> Envoi en cours...
              </span>
              <span v-else>
                <i class="fas fa-paper-plane"></i> Envoyer le Message
              </span>
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  position: relative;
  transition: background-color var(--transition-normal), color var(--transition-normal);
  overflow: hidden;
}

/* Formes de fond */
.bg-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  overflow: hidden;
  pointer-events: none;
  z-index: 0;
}

.bg-shape {
  position: absolute;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--primary-light) 0%, var(--primary) 100%);
  opacity: 0.05;
}

.shape-1 {
  width: 400px;
  height: 400px;
  top: -150px;
  left: -100px;
}

.shape-2 {
  width: 300px;
  height: 300px;
  bottom: -100px;
  right: -50px;
}

.shape-3 {
  width: 200px;
  height: 200px;
  top: 40%;
  right: 20%;
}

.contact-container {
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  gap: 40px;
  position: relative;
  z-index: 1;
}

/* Informations de contact */
.contact-info {
  background-color: var(--bg-secondary);
  padding: 40px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
  height: 100%;
}

.contact-info h3 {
  font-size: 1.8rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.contact-info p {
  margin-bottom: 30px;
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.contact-info-list {
  margin-bottom: 30px;
}

.contact-info-item {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.icon-container {
  width: 45px;
  height: 45px;
  background-color: var(--primary-light);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  margin-right: 15px;
  transition: all var(--transition-fast);
}

.contact-info-item:hover .icon-container {
  transform: scale(1.1) rotate(10deg);
  background-color: var(--primary);
}

.contact-text a {
  color: var(--text-primary);
  font-weight: 500;
  transition: color var(--transition-fast);
}

.contact-text a:hover {
  color: var(--primary);
}

.social-links h4 {
  font-size: 1.2rem;
  margin-bottom: 15px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.social-icons {
  display: flex;
  gap: 15px;
}

.social-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  background-color: var(--bg-tertiary);
  color: var(--text-secondary);
  border-radius: 50%;
  transition: all var(--transition-fast);
}

.social-icon:hover {
  transform: translateY(-5px);
  background-color: var(--primary);
  color: white;
}

/* Formulaire de contact */
.contact-form-container {
  background-color: var(--bg-secondary);
  padding: 40px;
  border-radius: var(--radius-lg);
  box-shadow: var(--shadow-md);
}

.form-header {
  margin-bottom: 30px;
}

.form-header h3 {
  font-size: 1.8rem;
  margin-bottom: 10px;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

.form-header p {
  color: var(--text-secondary);
  transition: color var(--transition-normal);
}

.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.form-group {
  margin-bottom: 25px;
  position: relative;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 500;
  color: var(--text-primary);
  transition: color var(--transition-normal);
}

input, textarea {
  width: 100%;
  padding: 12px 15px;
  border: 2px solid var(--bg-tertiary);
  border-radius: var(--radius-md);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: var(--font-body);
  font-size: 1rem;
  transition: all var(--transition-fast);
}

input:focus, textarea:focus {
  border-color: var(--primary);
  outline: none;
  box-shadow: 0 0 0 3px rgba(0, 184, 148, 0.1);
}

input.has-error, textarea.has-error {
  border-color: #e53e3e;
}

.error-message {
  position: absolute;
  left: 0;
  bottom: -20px;
  font-size: 0.85rem;
  color: #e53e3e;
}

.submit-btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 14px 28px;
  background-color: var(--primary);
  color: white;
  border: none;
  border-radius: var(--radius-full);
  font-weight: 600;
  font-size: 1rem;
  cursor: pointer;
  transition: all var(--transition-fast);
  box-shadow: var(--shadow-md);
}

.submit-btn:hover:not(:disabled) {
  background-color: var(--primary-dark);
  transform: translateY(-3px);
  box-shadow: var(--shadow-lg);
}

.submit-btn:disabled {
  opacity: 0.7;
  cursor: not-allowed;
}

.success-message, .error-alert {
  margin-bottom: 25px;
  padding: 15px;
  border-radius: var(--radius-md);
  display: flex;
  align-items: center;
  gap: 15px;
}

.success-alert {
  background-color: rgba(0, 184, 148, 0.1);
  border-left: 4px solid var(--primary);
}

.success-alert i {
  color: var(--primary);
  font-size: 1.5rem;
}

.error-alert {
  background-color: rgba(229, 62, 62, 0.1);
  border-left: 4px solid #e53e3e;
}

.error-alert i {
  color: #e53e3e;
  font-size: 1.5rem;
}

/* Responsive styles */
@media (max-width: 992px) {
  .contact-container {
    grid-template-columns: 1fr;
  }
  
  .contact-info {
    order: 2;
  }
  
  .contact-form-container {
    order: 1;
  }
}

@media (max-width: 768px) {
  .form-row {
    grid-template-columns: 1fr;
    gap: 0;
  }
  
  .contact-info, .contact-form-container {
    padding: 30px;
  }
}

@media (max-width: 576px) {
  .contact-info, .contact-form-container {
    padding: 20px;
  }
  
  .form-header h3, .contact-info h3 {
    font-size: 1.5rem;
  }
}
</style> 