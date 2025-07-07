<template>
  <div class="colddrinks-page">
    <!-- Hero Section -->
    <section class="colddrinks-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1544145945-f90425340c7e?w=400&h=300&fit=crop&crop=center" alt="Cold Drinks" class="colddrinks-hero-image" />
        </div>
        <div class="right-section">
          <p class="text-block">
            Refresh and revitalize with our extensive collection of ice-cold beverages. From classic sodas to exotic fruit juices, each drink is carefully selected to quench your thirst perfectly.
          </p>
          <p class="text-block">
            Our beverages are served at the perfect temperature with fresh garnishes and premium ingredients. Whether you need a quick refreshment or a flavorful treat, we have the perfect drink for every moment.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Refreshing Drinks Menu</h2>
        <div class="colddrinks-grid">
          <div v-for="drink in coldDrinksMenu" :key="drink.id" class="colddrinks-card">
            <div class="card-image">
              <img :src="drink.image" :alt="drink.name" />
            </div>
            <div class="card-content">
              <h3 class="drink-name">{{ drink.name }}</h3>
              <p class="drink-description">{{ drink.description }}</p>
              <div class="drink-details">
                <span class="drink-size">{{ drink.size }}</span>
                <span class="drink-price">${{ drink.price }}</span>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(drink)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { cartStore, cartNotification } from '../stores/cart.ts'

const coldDrinksMenu = [
  {
    id: 1,
    name: "Fresh Lemonade",
    description: "Freshly squeezed lemons with a touch of mint and sparkling water",
    size: "16 oz",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Iced Coffee",
    description: "Cold brew coffee with ice, perfect for a caffeine boost",
    size: "20 oz",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Tropical Smoothie",
    description: "Mango, pineapple, and coconut blended with ice",
    size: "16 oz",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1553530666-ba11a7da3888?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Classic Cola",
    description: "Ice-cold cola with a slice of lemon",
    size: "12 oz",
    price: 2.99,
    image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Orange Juice",
    description: "Freshly squeezed orange juice served chilled",
    size: "16 oz",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1600271886742-f049cd451bba?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Mint Mojito",
    description: "Non-alcoholic mojito with fresh mint and lime",
    size: "14 oz",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1551538827-9c037cb4f2a0?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Iced Tea",
    description: "Classic iced tea with lemon and honey",
    size: "18 oz",
    price: 3.99,
    image: "https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Berry Blast",
    description: "Mixed berry juice with sparkling water",
    size: "16 oz",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Cucumber Cooler",
    description: "Refreshing cucumber water with lime and mint",
    size: "16 oz",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Energy Drink",
    description: "Natural energy drink with vitamins and electrolytes",
    size: "12 oz",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1570831739435-6601aa3fa4fb?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (drink: any) => {
  cartStore.addItem({
    ...drink,
    category: 'Cold Drinks'
  });
  cartNotification.showNotification(`${drink.name} added to cart! 🥤`);
};
</script>

<style scoped>
.colddrinks-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.colddrinks-section {
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

.colddrinks-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.colddrinks-hero-image:hover {
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
  color: #03a9f4;
  font-family: 'Impact', sans-serif;
}

.colddrinks-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.colddrinks-card {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.colddrinks-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(3, 169, 244, 0.3);
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

.colddrinks-card:hover .drink-name {
  color: #03a9f4;
}

.colddrinks-card:hover .drink-description {
  color: #333;
}

.colddrinks-card:hover .drink-price {
  color: #fff;
  background: #03a9f4;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
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

.drink-size {
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
}

.drink-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #03a9f4;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #2196f3, #03a9f4);
  color: white;
  border: none;
  padding: 0.75rem;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.add-to-cart-btn:hover {
  background: linear-gradient(45deg, #1976d2, #0288d1);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(33, 150, 243, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .colddrinks-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .colddrinks-section {
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
  
  .colddrinks-hero-image {
    width: 15vmax;
    height: 15vmax;
  }
  
  .colddrinks-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5vmin;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  
  .colddrinks-card {
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
    margin-bottom: 1rem;
  }
  
  .drink-price {
    font-size: 3vmin;
  }
  
  .drink-size {
    font-size: 2vmin;
  }
  
  .add-to-cart-btn {
    padding: 1vmin 2vmin;
    font-size: 2.5vmin;
  }
}

@media (max-width: 480px) {
  .colddrinks-section {
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
  
  .colddrinks-hero-image {
    width: 18vmax;
    height: 18vmax;
  }
  
  .colddrinks-grid {
    gap: 0.25vmin;
    padding: 0;
  }
  
  .colddrinks-card {
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
  
  .drink-size {
    font-size: 2.5vmin;
  }
  
  .add-to-cart-btn {
    padding: 1vmin 1.5vmin;
    font-size: 3vmin;
  }
}
</style>
