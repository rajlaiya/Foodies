<template>
  <div class="alkhol-page">
    <!-- Age Verification Modal -->
    <div v-if="showAgeVerification" class="age-verification-modal">
      <div class="modal-overlay"></div>
      <div class="modal-content">
        <div class="modal-header">
          <h2>Age Verification Required</h2>
          <span class="warning-icon">🚫</span>
        </div>
        <div class="modal-body">
          <p class="warning-text">
            <strong>Warning:</strong> Consumption of alcohol is injurious to health.
          </p>
          <p class="age-question">
            Are you 18 years or older?
          </p>
          <p class="legal-note">
            By clicking "Yes", you confirm that you are of legal drinking age in your jurisdiction and understand the health risks associated with alcohol consumption.
          </p>
        </div>
        <div class="modal-footer">
          <button @click="confirmAge" class="confirm-btn">Yes, I am 18+</button>
          <button @click="denyAge" class="deny-btn">No, I am under 18</button>
        </div>
      </div>
    </div>

    <!-- Main Content -->
    <div v-if="!showAgeVerification" class="main-content">
      <!-- Hero Section -->
    <section class="alkhol-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1551538827-9c037cb4f2a0?w=400&h=300&fit=crop&crop=center" alt="Alcohol" class="alkhol-hero-image" />
        </div>
        <div class="right-section">
          <p class="text-block">
            Discover our curated collection of premium alcoholic beverages from around the world. From vintage wines to craft spirits, each bottle tells a story of tradition and excellence.
          </p>
          <p class="text-block">
            Our expert sommeliers have selected only the finest drinks for your enjoyment. Whether celebrating special moments or unwinding after a long day, find your perfect companion in our extensive collection.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Premium Collection</h2>
        <div class="alkhol-grid">
          <div v-for="drink in drinks" :key="drink.id" class="alkhol-card">
            <div class="card-image">
              <img :src="drink.image" :alt="drink.name" />
            </div>
            <div class="card-content">
              <h3 class="drink-name">{{ drink.name }}</h3>
              <p class="drink-description">{{ drink.desc }}</p>
              <div class="drink-details">
                <span class="drink-type">{{ drink.type }}</span>
                <span class="drink-price">₹{{ drink.price }}</span>
              </div>
              <div class="availability-status" :class="{ 'not-available': !drink.available }">
                {{ drink.available ? 'Available' : 'Out of Stock' }}
              </div>
              <button class="add-to-cart-btn" :disabled="!drink.available" @click="addToCart(drink)">
                {{ drink.available ? 'Add to Cart' : 'Notify Me' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Warning Section -->
    <section class="warning-section">
      <div class="container">
        <div class="warning-note">
          <span class="icon">🚫</span>
          <strong>Warning (India):</strong> Consumption of alcohol is injurious to health. Not for sale to persons under the age of 21 years.
        </div>
        <div class="info-note">
          <span class="icon">💡</span>
          <strong>Did you know?</strong> Moderate consumption of red wine is sometimes linked to heart health, but always drink responsibly!
        </div>      </div>
    </section>
    </div> <!-- End main-content -->
  </div> <!-- End alkhol-page -->
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { cartStore, cartNotification } from '../stores/cart.ts';

const showAgeVerification = ref(true);

const drinks = [
  { 
    id: 1, 
    name: 'Classic Beer', 
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?w=300&h=200&fit=crop&crop=center', 
    desc: 'Refreshing lager with a crisp finish.', 
    price: 299, 
    available: true, 
    type: 'Beer' 
  },
  { 
    id: 2, 
    name: 'Red Wine', 
    image: 'https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=300&h=200&fit=crop&crop=center', 
    desc: 'Smooth and fruity red wine.', 
    price: 799, 
    available: false, 
    type: 'Wine' 
  },
  { 
    id: 3, 
    name: 'Whiskey', 
    image: 'https://images.unsplash.com/photo-1527281400683-1aae777175f8?w=300&h=200&fit=crop&crop=center', 
    desc: 'Aged whiskey with rich flavor.', 
    price: 999, 
    available: true, 
    type: 'Whiskey' 
  },
  { 
    id: 4, 
    name: 'Vodka', 
    image: 'https://images.unsplash.com/photo-1581006852262-e4307cf6283a?w=300&h=200&fit=crop&crop=center', 
    desc: 'Crystal clear and smooth.', 
    price: 699, 
    available: true, 
    type: 'Vodka' 
  },
  { 
    id: 5, 
    name: 'Rum', 
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=300&h=200&fit=crop&crop=center', 
    desc: 'Sweet and spicy Caribbean favorite.', 
    price: 499, 
    available: false, 
    type: 'Rum' 
  },
  { 
    id: 6, 
    name: 'Gin', 
    image: 'https://images.unsplash.com/photo-1551538827-9c037cb4f2a0?w=300&h=200&fit=crop&crop=center', 
    desc: 'Botanical and aromatic.', 
    price: 599, 
    available: true, 
    type: 'Gin' 
  },
  { 
    id: 7, 
    name: 'Tequila', 
    image: 'https://images.unsplash.com/photo-1615332579937-23bbaa4bb05c?w=300&h=200&fit=crop&crop=center', 
    desc: 'Bold and festive Mexican spirit.', 
    price: 899, 
    available: true, 
    type: 'Tequila' 
  },
  { 
    id: 8, 
    name: 'Champagne', 
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop&crop=center', 
    desc: 'Sparkling wine for celebrations.', 
    price: 1299, 
    available: false, 
    type: 'Sparkling' 
  },
  { 
    id: 9, 
    name: 'Brandy', 
    image: 'https://images.unsplash.com/photo-1569529465841-dfecdab7503b?w=300&h=200&fit=crop&crop=center', 
    desc: 'Rich and smooth, perfect for sipping.', 
    price: 899, 
    available: true, 
    type: 'Brandy' 
  },
  { 
    id: 10, 
    name: 'Absinthe', 
    image: 'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop&crop=center', 
    desc: 'A strong, herbal spirit with a unique taste.', 
    price: 1099, 
    available: true, 
    type: 'Absinthe' 
  },
];

const addToCart = (drink) => {
  if (drink.available) {
    cartStore.addItem({
      ...drink,
      category: 'Alcohol'
    });
    cartNotification.showNotification(`${drink.name} added to cart! 🍷`);
  } else {
    cartNotification.showNotification(`We'll notify you when ${drink.name} is back in stock! 📩`);
  }
};

const confirmAge = () => {
  showAgeVerification.value = false;
  sessionStorage.setItem('ageVerifiedAlcohol', 'true');
  cartNotification.showNotification('Welcome to our premium alcohol collection! 🍷');
};

const denyAge = () => {
  cartNotification.showNotification('You must be 18 or older to access this content. 🚫');
  // Redirect to home page
  setTimeout(() => {
    window.location.href = '/about';
  }, 2000);
};

onMounted(() => {
  // Check if user has already verified age in this session (not persistent across browser restarts)
  const ageVerified = sessionStorage.getItem('ageVerifiedAlcohol');
  if (ageVerified === 'true') {
    showAgeVerification.value = false;
  } else {
    // Show modal if age not verified
    showAgeVerification.value = true;
  }
});
</script>

<style scoped>
/* Age Verification Modal */
.age-verification-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 99999;
  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);
}

.modal-content {
  position: relative;
  background: linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%);
  border-radius: 20px;
  padding: 2rem;
  max-width: 500px;
  width: 90%;
  color: white;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.5);
  border: 2px solid #ff6b35;
  animation: modalSlideIn 0.5s ease-out;
}

@keyframes modalSlideIn {
  from {
    opacity: 0;
    transform: translateY(-50px) scale(0.9);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

.modal-header {
  text-align: center;
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.modal-header h2 {
  color: #ff6b35;
  font-size: 1.8rem;
  font-weight: bold;
  margin: 0;
}

.warning-icon {
  font-size: 2rem;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

.modal-body {
  margin-bottom: 2rem;
}

.warning-text {
  background: rgba(255, 107, 53, 0.1);
  border: 2px solid #ff6b35;
  border-radius: 10px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  font-size: 1.1rem;
  text-align: center;
  color: #ff6b35;
}

.age-question {
  font-size: 1.3rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 1rem;
  color: #fff;
}

.legal-note {
  font-size: 0.9rem;
  color: #ccc;
  line-height: 1.5;
  text-align: center;
}

.modal-footer {
  display: flex;
  gap: 1rem;
  justify-content: center;
}

.confirm-btn, .deny-btn {
  padding: 0.8rem 2rem;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  min-width: 120px;
}

.confirm-btn {
  background: linear-gradient(45deg, #4caf50, #45a049);
  color: white;
}

.confirm-btn:hover {
  background: linear-gradient(45deg, #45a049, #3d8b40);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.deny-btn {
  background: linear-gradient(45deg, #f44336, #d32f2f);
  color: white;
}

.deny-btn:hover {
  background: linear-gradient(45deg, #d32f2f, #c62828);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(244, 67, 54, 0.3);
}

.alkhol-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.alkhol-section {
  color: white;
  height: 80vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 2rem;
  backdrop-filter: blur(10px);
}

.content-wrapper {
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  padding: 0 1rem;
}

.left-section {
  flex: 1;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
}

.alkhol-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.alkhol-hero-image:hover {
  transform: scale(1.05);
}

.right-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 2rem;
}

.text-block {
  font-size: 18px;
  font-family: 'Georgia', serif;
  line-height: 1.6;
  color: #fff;
  max-width: 90%;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
  font-style: italic;
}

/* Section Spacer */
.section-spacer {
  height: 4rem;
  background: transparent;
}

/* Shopping Section */
.shopping-section {
  backdrop-filter: blur(15px);
  padding: 3rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: #ffffff;
  font-family: 'Impact', sans-serif;
}

.alkhol-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.alkhol-card {
  /* background: rgba(255, 255, 255, 0.85); */
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.alkhol-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(139, 0, 139, 0.3);
}

.card-image {
  width: 100%;
  height: 200px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.alkhol-card:hover .card-image img {
  transform: scale(1.05);
}

.alkhol-card:hover .drink-name {
  color: #000000;
}

.alkhol-card:hover .drink-description {
  color: #000000;
}

.alkhol-card:hover .drink-price {
  color: #fff;
  background: #4B0082;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}

.alkhol-card:hover .availability-status {
  color: #8B008B;
  font-weight: bolder;
}

.alkhol-card:hover .availability-status.not-available {
  color: #ff1744;
}

.card-content {
  padding: 1.5rem;
}

.drink-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.drink-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.drink-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.drink-type {
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
}

.drink-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4B0082;
}

.availability-status {
  text-align: center;
  font-weight: bold;
  color: #4caf50;
  margin-bottom: 1rem;
  font-size: 0.9rem;
}

.availability-status.not-available {
  color: #ff5252;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #8B008B, #4B0082);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover:not(:disabled) {
  background: linear-gradient(45deg, #9932CC, #663399);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 0, 139, 0.3);
}

.add-to-cart-btn:disabled {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
  transform: none;
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Warning Section */
.warning-section {
  background: rgba(255, 255, 255, 0.9);
  backdrop-filter: blur(10px);
  padding: 2rem 0;
}

.warning-note, .info-note {
  background: rgba(255, 235, 59, 0.1);
  border: 2px solid #FFC107;
  border-radius: 12px;
  padding: 1rem 1.5rem;
  margin-bottom: 1rem;
  color: #333;
  font-size: 1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
}

.info-note {
  background: rgba(33, 150, 243, 0.1);
  border-color: #2196F3;
}

.icon {
  font-size: 1.2rem;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .alkhol-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .alkhol-section {
    padding: 1rem 0;
    min-height: 100vh;
  }
  
  .container {
    padding: 0;
    max-width: 100%;
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 1rem;
    padding: 0;
    text-align: center;
  }
  
  .left-section {
    width: 100%;
  }
  
  .section-title {
    font-size: 4vmax;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .text-block {
    font-size: 3vmin;
    line-height: 1.5;
    margin-bottom: 1rem;
    max-width: 100%;
  }
  
  .right-section {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .alkhol-hero-image {
    width: 15vmax;
    height: 15vmax;
  }
  
  .alkhol-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5vmin;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  
  .alkhol-card {
    padding: 0.5vmin;
    max-width: 100%;
  }
  
  .card-image {
    height: 15vmax;
  }
  
  .card-content {
    padding: 1.5vmin;
  }
  
  .drink-name {
    font-size: 3vmin;
    margin-bottom: 0.5rem;
  }
  
  .drink-description {
    font-size: 2.5vmin;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
  
  .drink-details {
    margin-bottom: 0.5rem;
  }
  
  .drink-price {
    font-size: 3vmin;
  }
  
  .drink-type {
    font-size: 2vmin;
  }
  
  .availability-status {
    font-size: 2vmin;
    margin-bottom: 0.5rem;
  }
  
  .add-to-cart-btn {
    padding: 1vmin 2vmin;
    font-size: 2.5vmin;
  }
  
  /* Age verification modal mobile styles */
  .modal-content {
    width: 90%;
    max-width: 350px;
    padding: 1.5rem;
    margin: 0 1rem;
  }
  
  .modal-title {
    font-size: 1.4rem;
    margin-bottom: 1rem;
  }
  
  .modal-text {
    font-size: 0.9rem;
    line-height: 1.5;
    margin-bottom: 1.5rem;
  }
  
  .modal-buttons {
    flex-direction: column;
    gap: 0.75rem;
  }
  
  .modal-btn {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .alkhol-section {
    padding: 0.75rem 0;
  }
  
  .container {
    padding: 0;
  }
  
  .section-title {
    font-size: 5vmax;
    line-height: 1.3;
  }
  
  .text-block {
    font-size: 3.5vmin;
  }
  
  .alkhol-hero-image {
    width: 18vmax;
    height: 18vmax;
  }
  
  .alkhol-grid {
    gap: 0.25vmin;
    padding: 0;
  }
  
  .alkhol-card {
    padding: 0.5vmin;
  }
  
  .card-image {
    height: 18vmax;
  }
  
  .card-content {
    padding: 1vmin;
  }
  
  .drink-name {
    font-size: 3.5vmin;
  }
  
  .drink-description {
    font-size: 2.8vmin;
  }
  
  .drink-price {
    font-size: 3.5vmin;
  }
  
  .drink-type {
    font-size: 2.5vmin;
  }
  
  .availability-status {
    font-size: 2.5vmin;
  }
  
  .add-to-cart-btn {
    padding: 1vmin 1.5vmin;
    font-size: 3vmin;
  }
  
  .modal-content {
    width: 95%;
    max-width: 320px;
    padding: 1.25rem;
  }
  
  .modal-title {
    font-size: 1.2rem;
  }
  
  .modal-text {
    font-size: 0.85rem;
  }
  
  .modal-btn {
    padding: 0.6rem 1.25rem;
    font-size: 0.85rem;
  }
}
</style>