<template>
  <section class="about-section">
    <div class="overlay"></div>
    <div class="salad-bg"></div>
    
    <div class="content-wrapper">
      <div class="left-section">
        <h1 class="title animated-title">
          <span class="word">FOODIES</span>
          <span class="word">VEGETARIAN</span>
          <span class="word">RESTAURANT</span>
        </h1>
      </div>
      <div class="right-section">
        <p class="text-block fade-in-up">
          Welcome to <strong>Foodies</strong> - your ultimate destination for delicious, healthy, and 100% vegetarian cuisine! 
          We specialize in crafting mouth-watering plant-based dishes that celebrate the rich flavors and traditions 
          of Indian regional cuisines alongside international favorites.
        </p>
        <p class="text-block fade-in-up delay-1">
          From authentic Gujarati Dhokla and Punjabi Butter Paneer to gourmet veggie burgers and artisan pizzas, 
          every dish is prepared with fresh, locally-sourced ingredients. Our mission is to prove that vegetarian 
          food can be both nutritious and incredibly satisfying.
        </p>
        <p class="text-block fade-in-up delay-2">
          Whether you're craving a traditional South Indian breakfast, a hearty Marathi meal, or a refreshing salad bowl, 
          Foodies brings you the finest vegetarian dining experience with convenient home delivery. 
          <em>Taste the difference, embrace the green lifestyle!</em> 🌱
        </p>
        
        <div class="action-section fade-in-up delay-3">
          <router-link to="/contact" class="contact-btn">
            <span class="btn-icon">📞</span>
            <span class="btn-text">Contact Us</span>
            <span class="btn-arrow">→</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "About",
  mounted() {
    // Trigger animations on mount
    this.animateElements();
  },
  methods: {
    animateElements() {
      // Add animation classes after component mounts
      setTimeout(() => {
        const elements = document.querySelectorAll('.fade-in-up');
        elements.forEach((el, index) => {
          setTimeout(() => {
            el.classList.add('animate');
          }, index * 200);
        });
      }, 100);
    }
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700&family=Lora:wght@400;500;600&display=swap');

.about-section {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('https://plus.unsplash.com/premium_photo-1675073085303-9c7c624b8c24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGJnJTIwdGV4dHVyZXxlbnwwfHwwfHx8MA%3D%3D') no-repeat center center/cover;
  color: white;
  margin: 0;
  padding: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

body, html, #app {
  height: 100vh;
  overflow: hidden !important;
  margin: 0;
  padding: 0;
}

.overlay {
  background: rgba(0, 0, 0, 0.7);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
}

.salad-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: url('/src/assets/salad-bowl.png') no-repeat center center;
  background-size: cover;
  opacity: 0.15;
  z-index: 2;
  pointer-events: none;
}

.content-wrapper {
  position: relative;
  z-index: 3;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 3rem;
  padding: 0 2rem;
}

.left-section {
  flex: 1;
  text-align: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Animated Title */
.animated-title {
  font-size: 3.5rem;
  font-weight: 700;
  color: white;
  text-shadow: 3px 3px 6px rgba(0,0,0,0.8);
  font-family: 'Playfair Display', serif;
  line-height: 1.2;
}

.animated-title .word {
  display: block;
  animation: slideInLeft 1s ease-out forwards;
  opacity: 0;
  transform: translateX(-50px);
}

.animated-title .word:nth-child(1) {
  animation-delay: 0.2s;
  color: #4CAF50;
}

.animated-title .word:nth-child(2) {
  animation-delay: 0.5s;
  color: #FF6B35;
}

.animated-title .word:nth-child(3) {
  animation-delay: 0.8s;
  color: #FFD700;
}

@keyframes slideInLeft {
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.right-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
  padding-left: 2rem;
}

/* Enhanced Text Styling */
.text-block {
  font-size: 1.1rem;
  font-family: 'Lora', serif;
  font-weight: 400;
  line-height: 1.8;
  color: #f8f9fa;
  max-width: 95%;
  text-shadow: 1px 1px 3px rgba(0,0,0,0.7);
  letter-spacing: 0.3px;
  margin-bottom: 1rem;
  overflow-wrap: anywhere;
  hyphens: auto;
}

.text-block strong {
  color: #4CAF50;
  font-weight: 600;
}

.text-block em {
  color: #FFD700;
  font-style: italic;
  font-weight: 500;
}

/* Text Animations */
.fade-in-up {
  opacity: 0;
  transform: translateY(30px);
  transition: all 0.8s ease-out;
}

.fade-in-up.animate {
  opacity: 1;
  transform: translateY(0);
}

.delay-1 {
  transition-delay: 0.2s;
}

.delay-2 {
  transition-delay: 0.4s;
}

.delay-3 {
  transition-delay: 0.6s;
}

/* Contact Button */
.action-section {
  margin-top: 2rem;
}

.contact-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.8rem;
  padding: 1rem 2rem;
  background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
  color: white;
  text-decoration: none;
  border-radius: 50px;
  font-family: 'Lora', serif;
  font-weight: 600;
  font-size: 1.1rem;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(76, 175, 80, 0.3);
  position: relative;
  overflow: hidden;
}

.contact-btn::before {
  content: '';
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent);
  transition: left 0.5s;
}

.contact-btn:hover::before {
  left: 100%;
}

.contact-btn:hover {
  transform: translateY(-3px);
  box-shadow: 0 8px 25px rgba(76, 175, 80, 0.4);
  background: linear-gradient(135deg, #45a049 0%, #4CAF50 100%);
}

.btn-icon {
  font-size: 1.2rem;
}

.btn-text {
  font-weight: 600;
}

.btn-arrow {
  font-size: 1.3rem;
  transition: transform 0.3s ease;
}

.contact-btn:hover .btn-arrow {
  transform: translateX(5px);
}

/* Responsive Design */
@media (max-width: 768px) {
  .about-section {
    padding: 1rem 0.75rem;
    /* min-height: 100vh; */
    display: flex;
    /* align-items: center; */
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 1vmax;
    padding: 1rem 0;
    text-align: center;
    max-width: 90%;
    /* margin: 0 auto; */
  }
  
  .left-section {
    margin-bottom: 1vmax;
  }
  
  .animated-title {
    font-size: 2vmax;
    line-height: 1.2;
    margin-bottom: 1vmax;
  }
  
  .right-section {
    padding-left: 0;
    gap: 1vmax;
  }
  
  .text-block {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1vmax;
    overflow-wrap: anywhere;
    hyphens: auto;
  }
  
  .veggie {
    width: 45px !important;
    height: 45px !important;
  }
  
  .contact-btn {
    padding: 0.75rem 1.25rem;
    font-size: 0.95rem;
    margin-top: 1vmax;
  }
  
  .btn-icon {
    font-size: 1rem;
  }
  
  .btn-arrow {
    font-size: 1.1rem;
  }
}

@media (max-width: 480px) {
  .about-section {
    padding: 0.75rem 0.5rem;
  }
  
  .animated-title {
    font-size: 1.8rem;
    line-height: 1.3;
  }
  
  .text-block {
    font-size: 0.9rem;
    line-height: 1.5;
  }
  
  .veggie {
    width: 40px !important;
    height: 40px !important;
  }
  
  .contact-btn {
    padding: 0.6rem 1rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .animated-title {
    font-size: 2rem;
  }
  
  .text-block {
    font-size: 0.9rem;
  }
  
  .veggie {
    width: 40px !important;
    height: 40px !important;
  }
}
</style>
