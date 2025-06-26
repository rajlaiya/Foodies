<template>
  <section class="contact-page">
    <div class="contact-container">
      <!-- Hero Section -->
      <div class="hero-section">
        <h1 class="main-title">Contact for Web Design or Development</h1>
        <p class="subtitle">Let's create something amazing together! Reach out through any of these platforms.</p>
      </div>

      <!-- Social Media Cards -->
      <div class="social-cards-grid">
        <!-- LinkedIn Card -->
        <div class="social-card linkedin" @click="openLink('https://linkedin.com/in/rajlaiya')">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>LinkedIn</h3>
            <p>Professional Network</p>
          </div>
          <div class="card-arrow">→</div>
        </div>

        <!-- WhatsApp Card -->
        <div class="social-card whatsapp" @click="openLink('https://wa.me/6355705208')">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.525 3.488"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>WhatsApp</h3>
            <p>Quick Chat</p>
          </div>
          <div class="card-arrow">→</div>
        </div>

        <!-- Instagram Card -->
        <div class="social-card instagram" @click="openLink('https://instagram.com/raj_laiya_offecial')">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>Instagram</h3>
            <p>Visual Updates</p>
          </div>
          <div class="card-arrow">→</div>
        </div>

        <!-- Portfolio Card -->
        <div class="social-card portfolio" @click="openLink('https://rajlaiya-portfolio.netlify.app/')">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>Portfolio</h3>
            <p>View My Work</p>
          </div>
          <div class="card-arrow">→</div>
        </div>

        <!-- Email Card -->
        <div class="social-card email" @click="openLink('mailto:rajlaiya2017@gmail.com')">
          <div class="card-icon">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-.904.732-1.636 1.636-1.636h3.819l6.545 4.91 6.545-4.91h3.819A1.636 1.636 0 0 1 24 5.457z"/>
            </svg>
          </div>
          <div class="card-content">
            <h3>Email</h3>
            <p>Direct Contact</p>
          </div>
          <div class="card-arrow">→</div>
        </div>
      </div>

      <!-- Additional Info -->
      <div class="additional-info">
        <p class="info-text">
          🚀 Specializing in modern web applications, Vue.js, React, and full-stack development. 
          Let's discuss your next project!
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
const openLink = (url: string) => {
  window.open(url, '_blank');
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');

.contact-page {
  min-height: 100vh;
  padding: 2rem 1rem;
  font-family: 'Inter', sans-serif;
}

.contact-container {
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 3rem;
}

/* Hero Section */
.hero-section {
  text-align: center;
  margin-bottom: 4rem;
  color: white;
}

.main-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
  animation: fadeInUp 0.8s ease-out;
}

.subtitle {
  font-size: 1.2rem;
  opacity: 0.9;
  font-weight: 400;
  animation: fadeInUp 0.8s ease-out 0.2s both;
}

/* Social Cards Grid */
.social-cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-bottom: 3rem;
}

/* Social Card Styling */
.social-card {
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 20px;
  padding: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  position: relative;
  overflow: hidden;
  color: white;
  animation: fadeInUp 0.6s ease-out both;
}

.social-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.1), transparent);
  transition: left 0.6s;
}

.social-card:hover::before {
  left: 100%;
}

.social-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.15);
  border-color: rgba(255, 255, 255, 0.3);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
}

/* Card Icon */
.card-icon {
  width: 50px;
  height: 50px;
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.card-icon svg {
  width: 30px;
  height: 30px;
  transition: transform 0.3s ease;
}

.social-card:hover .card-icon svg {
  transform: scale(1.1);
}

/* Card Content */
.card-content {
  flex: 1;
}

.card-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.3rem;
  font-weight: 600;
}

.card-content p {
  margin: 0;
  opacity: 0.8;
  font-size: 0.95rem;
}

/* Card Arrow */
.card-arrow {
  font-size: 1.5rem;
  font-weight: bold;
  transition: transform 0.3s ease;
  opacity: 0.7;
}

.social-card:hover .card-arrow {
  transform: translateX(5px);
  opacity: 1;
}

/* Individual Card Colors */
.linkedin:hover {
  background: rgba(0, 119, 181, 0.2);
  border-color: rgba(0, 119, 181, 0.4);
}

.linkedin .card-icon {
  background: rgba(0, 119, 181, 0.2);
}

.whatsapp:hover {
  background: rgba(37, 211, 102, 0.2);
  border-color: rgba(37, 211, 102, 0.4);
}

.whatsapp .card-icon {
  background: rgba(37, 211, 102, 0.2);
}

.instagram:hover {
  background: linear-gradient(45deg, rgba(405, 49, 147, 0.2), rgba(252, 176, 64, 0.2));
  border-color: rgba(225, 48, 108, 0.4);
}

.instagram .card-icon {
  background: linear-gradient(45deg, rgba(405, 49, 147, 0.2), rgba(252, 176, 64, 0.2));
}

.portfolio:hover {
  background: rgba(24, 39, 75, 0.2);
  border-color: rgba(24, 39, 75, 0.4);
}

.portfolio .card-icon {
  background: rgba(24, 39, 75, 0.2);
}

.email:hover {
  background: rgba(234, 67, 53, 0.2);
  border-color: rgba(234, 67, 53, 0.4);
}

.email .card-icon {
  background: rgba(234, 67, 53, 0.2);
}

/* Additional Info */
.additional-info {
  text-align: center;
  padding: 2rem;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  animation: fadeInUp 0.8s ease-out 0.4s both;
}

.info-text {
  color: white;
  font-size: 1.1rem;
  margin: 0;
  opacity: 0.9;
  line-height: 1.6;
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Animation Delays for Cards */
.social-card:nth-child(1) { animation-delay: 0.1s; }
.social-card:nth-child(2) { animation-delay: 0.2s; }
.social-card:nth-child(3) { animation-delay: 0.3s; }
.social-card:nth-child(4) { animation-delay: 0.4s; }
.social-card:nth-child(5) { animation-delay: 0.5s; }

/* Responsive Design */
@media (max-width: 768px) {
  .contact-page {
    padding: 1rem 0.75rem;
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
  
  .contact-container {
    padding-top: 1rem;
    width: 100%;
    max-width: 100%;
  }
  
  .hero-section {
    margin-bottom: 2rem;
    text-align: center;
  }
  
  .main-title {
    font-size: 2rem;
    line-height: 1.2;
    margin-bottom: 0.75rem;
  }
  
  .subtitle {
    font-size: 0.95rem;
    line-height: 1.4;
  }
  
  .social-cards-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    margin-bottom: 2rem;
  }
  
  .social-card {
    padding: 1.25rem;
    gap: 1rem;
    margin: 0 auto;
    max-width: 100%;
    width: 100%;
  }
  
  .card-icon {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
  }
  
  .card-icon svg {
    width: 22px;
    height: 22px;
  }
  
  .card-content h3 {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .card-content p {
    font-size: 0.85rem;
  }
  
  .additional-info {
    padding: 1.25rem;
    margin: 0 auto;
    max-width: 100%;
  }
  
  .info-text {
    font-size: 0.9rem;
    line-height: 1.5;
  }
}

@media (max-width: 480px) {
  .contact-page {
    padding: 0.75rem 0.5rem;
  }
  
  .contact-container {
    padding-top: 0.5rem;
  }
  
  .main-title {
    font-size: 1.6rem;
    line-height: 1.3;
  }
  
  .subtitle {
    font-size: 0.9rem;
  }
  
  .social-cards-grid {
    gap: 0.75rem;
  }
  
  .social-card {
    padding: 1rem;
    border-radius: 12px;
    gap: 0.75rem;
  }
  
  .card-icon {
    width: 35px;
    height: 35px;
  }
  
  .card-icon svg {
    width: 20px;
    height: 20px;
  }
  
  .card-content h3 {
    font-size: 1rem;
  }
  
  .card-content p {
    font-size: 0.8rem;
  }
  
  .card-arrow {
    font-size: 1.25rem;
  }
  
  .additional-info {
    padding: 1rem;
  }
  
  .info-text {
    font-size: 0.85rem;
  }
}
</style>
