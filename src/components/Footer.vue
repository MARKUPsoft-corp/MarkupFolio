<script setup>
import { ref } from 'vue';

const currentYear = new Date().getFullYear();
const socialLinks = ref([
  { name: 'GitHub', icon: 'fab fa-github', url: 'https://github.com/' },
  { name: 'LinkedIn', icon: 'fab fa-linkedin', url: 'https://linkedin.com/' },
  { name: 'Twitter', icon: 'fab fa-twitter', url: 'https://twitter.com/' },
  { name: 'ResearchGate', icon: 'fab fa-researchgate', url: 'https://www.researchgate.net/' }
]);
</script>

<template>
  <footer class="footer">
    <div class="footer-wave">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" preserveAspectRatio="none" width="100%" height="100%">
        <path fill="var(--card-bg)" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,90.7C384,85,480,107,576,128C672,149,768,171,864,165.3C960,160,1056,128,1152,122.7C1248,117,1344,139,1392,149.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
      </svg>
    </div>

    <div class="footer-content">
      <div class="footer-logo">
        <span class="logo-text">MARKUP<span class="accent-text">folio</span></span>
        <p class="footer-tagline">Cryptographie et développement backend de haut niveau</p>
        
        <div class="footer-crypto-badge">
          <i class="fas fa-shield-alt"></i>
          <span>Sécurité & Cryptographie</span>
        </div>
      </div>
      
      <div class="footer-links">
        <div class="footer-link-group">
          <h4>Expertise</h4>
          <a href="#" class="footer-link"><i class="fas fa-lock"></i> Cryptographie</a>
          <a href="#" class="footer-link"><i class="fas fa-server"></i> Développement Backend</a>
          <a href="#" class="footer-link"><i class="fas fa-code"></i> Conception d'API</a>
          <a href="#" class="footer-link"><i class="fas fa-brain"></i> Intelligence Artificielle</a>
        </div>
      </div>
      
      <div class="footer-social">
        <h4>Suivez-moi</h4>
        <div class="social-links">
          <a v-for="link in socialLinks" :key="link.name" :href="link.url" target="_blank" class="social-link" :title="link.name">
            <i :class="link.icon"></i>
          </a>
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <div class="footer-bottom-content">
        <p>© {{ currentYear }} MARKUP<span class="accent-text">folio</span> | YAKAM TCHAMEGNI Emmanuel</p>
        <p class="footer-affiliation">CNCCE, Yaoundé, Cameroun | <a href="mailto:emmanuelyakam1@gmail.com">emmanuelyakam1@gmail.com</a></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  position: relative;
  background-color: var(--card-bg);
  padding: 60px 20px 30px;
  color: var(--text-main);
  margin-top: 80px;
  overflow: hidden;
}

.footer-wave {
  position: absolute;
  top: -120px;
  left: 0;
  width: 100%;
  height: 120px;
  overflow: hidden;
  line-height: 0;
  transform: rotate(180deg);
}

.footer-wave svg {
  display: block;
  width: 100%;
  height: 100%;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 40px;
}

.footer-logo {
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 350px;
}

.logo-text {
  font-size: 1.8rem;
  font-weight: 700;
  color: var(--text-main);
  position: relative;
  display: inline-block;
}

.logo-text::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 40px;
  height: 3px;
  background: linear-gradient(90deg, var(--primary), var(--primary-transparent));
  border-radius: 3px;
}

.accent-text {
  color: var(--primary);
}

.footer-tagline {
  font-size: 1rem;
  color: var(--text-secondary);
  line-height: 1.5;
}

.footer-crypto-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(90deg, var(--primary-transparent), transparent);
  padding: 8px 15px;
  border-radius: 30px;
  font-size: 0.9rem;
  margin-top: 10px;
  color: var(--primary);
  font-weight: 600;
  max-width: fit-content;
}

.footer-crypto-badge i {
  font-size: 1rem;
}

.footer-links {
  display: flex;
  gap: 40px;
}

.footer-link-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.footer-link-group h4 {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 15px;
  color: var(--text-main);
  position: relative;
  display: inline-block;
}

.footer-link-group h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 30px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.footer-link {
  color: var(--text-secondary);
  text-decoration: none;
  transition: all 0.3s ease;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
}

.footer-link i {
  color: var(--primary);
  font-size: 0.9rem;
  opacity: 0.8;
}

.footer-link:hover {
  color: var(--primary);
  transform: translateX(5px);
}

.footer-link:hover i {
  opacity: 1;
}

.footer-social {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.footer-social h4 {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--text-main);
  position: relative;
  display: inline-block;
  margin-bottom: 15px;
}

.footer-social h4::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: -5px;
  width: 30px;
  height: 2px;
  background: var(--primary);
  border-radius: 2px;
}

.social-links {
  display: flex;
  gap: 15px;
}

.social-link {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: var(--bg-alt);
  color: var(--text-main);
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.social-link::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: var(--primary);
  top: 100%;
  left: 0;
  transition: all 0.3s ease;
  z-index: 1;
}

.social-link i {
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}

.social-link:hover {
  transform: translateY(-5px);
  color: white;
}

.social-link:hover::before {
  top: 0;
}

.footer-bottom {
  max-width: 1200px;
  margin: 30px auto 0;
  padding-top: 15px;
  padding-bottom: 10px;
  border-top: 1px solid rgba(var(--border-color), 0.2);
  text-align: center;
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer-bottom-content {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.footer-affiliation {
  margin-top: 5px;
  font-size: 0.85rem;
  font-style: italic;
  background: linear-gradient(90deg, transparent, rgba(0, 171, 145, 0.1), transparent);
  padding: 8px;
  border-radius: 3px;
  display: inline-block;
  margin-top: 10px;
  max-width: 80%;
}

@media (max-width: 992px) {
  .footer-links {
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .footer-wave {
    top: -60px;
    height: 60px;
  }
  
  .footer-content {
    flex-direction: column;
    text-align: center;
    gap: 30px;
  }
  
  .footer-logo, .footer-link-group {
    align-items: center;
  }
  
  .logo-text::after,
  .footer-link-group h4::after,
  .footer-social h4::after {
    left: 50%;
    transform: translateX(-50%);
  }
  
  .footer-crypto-badge {
    margin: 10px auto 0;
  }
  
  .footer-links {
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
  
  .footer-link {
    justify-content: center;
  }
  
  .social-links {
    justify-content: center;
  }
}

/* Media queries supplémentaires pour petits écrans */
@media (max-width: 576px) {
  .footer {
    padding: 40px 15px 10px;
    margin-top: 30px;
  }
  
  .footer-wave {
    top: -40px;
    height: 40px;
  }
  
  .footer-content {
    gap: 25px;
  }
  
  .logo-text {
    font-size: 1.5rem;
  }
  
  .footer-tagline {
    font-size: 0.9rem;
  }
  
  .footer-crypto-badge {
    font-size: 0.8rem;
    padding: 6px 12px;
  }
  
  .footer-link-group h4,
  .footer-social h4 {
    font-size: 1rem;
    margin-bottom: 12px;
  }
  
  .footer-link {
    font-size: 0.9rem;
  }
  
  .social-link {
    width: 35px;
    height: 35px;
  }
  
  .footer-bottom {
    margin-top: 20px;
    padding-bottom: 5px;
    font-size: 0.8rem;
  }
  
  .footer-bottom-content {
    padding: 0 10px;
  }
  
  .footer-affiliation {
    font-size: 0.75rem;
    padding: 6px;
    max-width: 95%;
  }
}

@media (max-width: 400px) {
  .footer {
    padding: 30px 10px 15px;
  }
  
  .footer-wave {
    top: -30px;
    height: 30px;
  }
  
  .social-links {
    flex-wrap: wrap;
    justify-content: center;
  }
  
  .footer-bottom p {
    line-height: 1.4;
    word-break: break-word;
    max-width: 100%;
  }
  
  .footer-bottom-content {
    padding: 0 5px;
  }
  
  .footer-affiliation {
    margin-top: 8px;
    padding: 5px;
    max-width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    line-height: 1.3;
  }
  
  .footer-links {
    gap: 15px;
  }
  
  .footer-link-group {
    gap: 8px;
    width: 100%;
  }
  
  .social-link {
    width: 32px;
    height: 32px;
    margin-bottom: 5px;
  }
}

/* Très petits écrans */
@media (max-width: 320px) {
  .footer {
    padding: 25px 10px 5px;
    margin-top: 20px;
  }
  
  .footer-content {
    gap: 20px;
  }
  
  .logo-text {
    font-size: 1.3rem;
  }
  
  .footer-tagline {
    font-size: 0.8rem;
  }
  
  .footer-crypto-badge {
    padding: 5px 10px;
    font-size: 0.75rem;
  }
  
  .footer-bottom {
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 3px;
    font-size: 0.75rem;
    word-wrap: break-word;
  }
}
</style>