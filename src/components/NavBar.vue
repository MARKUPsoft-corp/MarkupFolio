<script setup>
import { ref, onMounted, watch, computed } from 'vue';

// Props
const props = defineProps({
  isDarkMode: {
    type: Boolean,
    default: false
  },
  profileImgSrc: {
    type: String,
    default: ''
  }
});

// Calculer l'URL de l'image avec solution de secours
const imageSource = computed(() => {
  return props.profileImgSrc || 'https://images.unsplash.com/photo-1607799279861-4dd421887fb3?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80';
});

// Surveiller les changements de l'URL de l'image
watch(() => props.profileImgSrc, (newValue) => {
  console.log('Image URL changed:', newValue);
});

// Émission d'événements
const emit = defineEmits(['toggle-theme']);

// État local
const isMenuOpen = ref(false);
const isScrolled = ref(false);

// Bascule du menu mobile
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

// Bascule du thème
const toggleTheme = () => {
  emit('toggle-theme');
};

// Détection du scroll
const handleScroll = () => {
  isScrolled.value = window.scrollY > 50;
};

// Navigation douce
const scrollToSection = (sectionId) => {
  const element = document.getElementById(sectionId);
  if (element) {
    window.scrollTo({
      top: element.offsetTop - 80,
      behavior: 'smooth'
    });
    isMenuOpen.value = false;
  }
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
  handleScroll();
});
</script>

<template>
  <header class="navbar" :class="{ 'scrolled': isScrolled }">
    <div class="navbar-container">
      <!-- Image de profil (visible seulement sur mobile) -->
      <div class="navbar-profile-img" :class="{ active: !!profileImgSrc }">
        <div class="navbar-profile-frame">
          <img 
            :src="imageSource" 
            :alt="`Profile ${profileImgSrc ? 'loaded' : 'not loaded'}`" 
            class="profile-image"
            @load="console.log('Image loaded successfully')"
            @error="console.error('Failed to load image:', imageSource)"
          />
        </div>
      </div>
      
      <!-- Logo -->
      <div class="navbar-logo">
        <a href="#hero" @click.prevent="scrollToSection('hero')">
          <span class="logo-text">MARKUP<span class="accent-text">folio</span></span>
        </a>
      </div>
      
      <!-- Navigation principale -->
      <nav class="nav-links" :class="{ 'active': isMenuOpen }">
        <a href="#about" class="nav-link" @click.prevent="scrollToSection('about')">À propos</a>
        <a href="#portfolio" class="nav-link" @click.prevent="scrollToSection('portfolio')">Portfolio</a>
        <a href="#contact" class="nav-link" @click.prevent="scrollToSection('contact')">Contact</a>
      </nav>
      
      <!-- Actions à droite -->
      <div class="navbar-actions">
        <!-- Bascule du thème -->
        <button class="theme-toggle" @click="toggleTheme" aria-label="Toggle theme">
          <i v-if="isDarkMode" class="fas fa-sun"></i>
          <i v-else class="fas fa-moon"></i>
        </button>
        
        <!-- Hamburger menu pour mobile -->
        <div class="menu-toggle" @click="toggleMenu">
          <div :class="{ 'open': isMenuOpen }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 80px;
  background-color: var(--nav-bg);
  box-shadow: 0 3px 15px rgba(0, 0, 0, 0.05);
  z-index: 1000;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
}

.navbar.scrolled {
  height: 70px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.navbar-container {
  max-width: 1400px;
  height: 100%;
  margin: 0 auto;
  padding: 0 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.navbar-logo a {
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 10px;
  position: relative;
  padding: 5px 10px;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.3s ease;
}

.navbar-logo a::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0%;
  height: 2px;
  background: linear-gradient(90deg, var(--primary), var(--accent));
  transition: width 0.4s ease;
  z-index: 1;
}

.navbar-logo a::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--primary-transparent);
  opacity: 0;
  transition: opacity 0.4s ease;
  z-index: 0;
}

.navbar-logo a:hover::before {
  width: 100%;
}

.navbar-logo a:hover::after {
  opacity: 0.1;
}

.navbar-logo a:hover .logo-text {
  transform: translateY(-2px);
}

.navbar-logo a:hover .accent-text {
  color: var(--accent);
}

.logo-text {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-main);
  transition: all 0.3s ease;
  position: relative;
  z-index: 2;
}

.accent-text {
  color: var(--primary);
  transition: all 0.3s ease;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-link {
  text-decoration: none;
  color: var(--text-main);
  font-size: 1rem;
  font-weight: 500;
  transition: all 0.3s ease;
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  width: 0%;
  height: 2px;
  background-color: var(--primary);
  bottom: -5px;
  left: 0;
  transition: width 0.3s ease;
}

.nav-link:hover {
  color: var(--primary);
}

.nav-link:hover::after {
  width: 100%;
}

.navbar-actions {
  display: flex;
  align-items: center;
  gap: 20px;
}

.theme-toggle {
  background: transparent;
  border: none;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: var(--text-main);
  font-size: 1.2rem;
  transition: all 0.3s ease;
  outline: none;
}

.theme-toggle:hover {
  background-color: var(--primary-transparent);
  color: var(--primary);
  transform: rotate(30deg);
}

.menu-toggle {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 30px;
  position: relative;
}

.menu-toggle div {
  width: 100%;
  height: 100%;
  position: relative;
}

.menu-toggle span {
  position: absolute;
  width: 100%;
  height: 2px;
  background-color: var(--text-main);
  transition: all 0.3s ease;
  left: 0;
}

.menu-toggle span:nth-child(1) {
  top: 6px;
}

.menu-toggle span:nth-child(2) {
  top: 14px;
}

.menu-toggle span:nth-child(3) {
  top: 22px;
}

.menu-toggle .open span:nth-child(1) {
  transform: rotate(45deg);
  top: 14px;
}

.menu-toggle .open span:nth-child(2) {
  opacity: 0;
}

.menu-toggle .open span:nth-child(3) {
  transform: rotate(-45deg);
  top: 14px;
}

/* Styles pour l'image de profil dans la navbar */
.navbar-profile-img {
  width: 0;
  height: 40px;
  opacity: 0;
  overflow: hidden;
  margin-right: 0;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  position: relative;
  z-index: 5;
}

.navbar-profile-img.active {
  width: 40px;
  opacity: 1;
  margin-right: 10px;
  visibility: visible;
}

.navbar-profile-frame {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--primary);
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 5;
}

.navbar-profile-frame img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.profile-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 50%;
}

/* Media queries pour petits écrans */
@media (max-width: 768px) {
  .navbar-profile-img {
    display: flex;
    align-items: center;
    position: relative;
  }
  
  /* Ces styles seront activés par JavaScript quand l'image est déplacée */
  .navbar-profile-img.active {
    transform: scale(1);
    opacity: 1;
    width: 40px;
    margin-right: 10px;
  }
  
  .navbar-container {
    justify-content: space-between;
    gap: 10px;
  }
  
  .navbar-logo {
    margin-left: 0;
  }
  
  .navbar-actions {
    margin-left: auto;
  }
}

@media (max-width: 576px) {
  .navbar-container {
    padding: 0 3%;
    justify-content: space-between;
  }
  
  .navbar-profile-frame {
    width: 35px;
    height: 35px;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .navbar-actions {
    margin-left: auto;
    gap: 12px;
  }
  
  .theme-toggle {
    width: 36px;
    height: 36px;
  }
}

@media (max-width: 380px) {
  .navbar-container {
    padding: 0 2%;
    justify-content: space-between;
  }
  
  .navbar-profile-frame {
    width: 30px;
    height: 30px;
  }
  
  .logo-text {
    font-size: 1.1rem;
  }
  
  .navbar-actions {
    margin-left: auto;
    gap: 8px;
  }
  
  .theme-toggle {
    width: 32px;
    height: 32px;
    font-size: 1rem;
  }
  
  .menu-toggle {
    width: 28px;
    height: 28px;
  }
}

@media (max-width: 992px) {
  .nav-links {
    position: fixed;
    top: 80px;
    left: 0;
    width: 100%;
    height: 0;
    background-color: var(--bg-main);
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    gap: 0;
    overflow: hidden;
    transition: height 0.3s ease;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
  
  .nav-links.active {
    height: auto;
    padding: 20px 0;
  }
  
  .nav-link {
    margin: 15px 0;
  }
  
  .menu-toggle {
    display: block;
  }
}
</style> 