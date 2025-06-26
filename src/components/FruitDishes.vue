<template>
  <div class="fruit-page">
    <!-- Hero Section -->
    <section class="fruit-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=400&h=300&fit=crop&crop=center" alt="Fruit Dishes" class="fruit-hero-image" />
        </div>
        <div class="right-section">
          <p class="text-block">
            Sweet and refreshing fruit dishes for a healthy treat. Our carefully curated fruit selections feature the finest seasonal and exotic fruits, beautifully presented and bursting with natural flavors.
          </p>
          <p class="text-block">
            From traditional fruit salads to creative fruit bowls and smoothies, each dish is prepared with the freshest ingredients to provide you with maximum nutrition and delightful taste experiences.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Fruit Menu</h2>
        <div class="fruit-grid">
          <div v-for="item in fruitMenu" :key="item.id" class="fruit-card">
            <div class="card-image">
              <img :src="item.image" :alt="item.name" />
            </div>
            <div class="card-content">
              <h3 class="item-name">{{ item.name }}</h3>
              <p class="item-description">{{ item.description }}</p>
              <div class="item-details">
                <span class="item-type">{{ item.type }}</span>
                <span class="item-price">${{ item.price }}</span>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(item)">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { cartStore, cartNotification } from '../stores/cart.ts'

const fruitMenu = [
  {
    id: 1,
    name: "Tropical Paradise Bowl",
    description: "Mango, pineapple, kiwi, and passion fruit with coconut flakes",
    type: "Bowl",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Berry Bliss Salad",
    description: "Fresh strawberries, blueberries, raspberries with honey lime dressing",
    type: "Salad",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Dragon Fruit Delight",
    description: "Exotic dragon fruit served with lime zest and mint leaves",
    type: "Exotic",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1526318896980-cf78c088247c?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Classic Fruit Salad",
    description: "Apple, orange, grapes, and banana with fresh lemon juice",
    type: "Classic",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1610832958506-aa56368176cf?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Watermelon Mint Cup",
    description: "Juicy watermelon cubes with fresh mint and feta cheese",
    type: "Refreshing",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1587049352846-4a222e784d38?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Pomegranate Power Bowl",
    description: "Antioxidant-rich pomegranate seeds with Greek yogurt and honey",
    type: "Healthy",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1633023863937-82424e732b27?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Citrus Sunshine Plate",
    description: "Orange, grapefruit, and lemon segments with mint garnish",
    type: "Citrus",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1557800636-894a64c1696f?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Exotic Fruit Platter",
    description: "Rambutan, lychee, star fruit, and jackfruit medley",
    type: "Exotic",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Grape & Cheese Board",
    description: "Sweet grapes paired with artisanal cheese and crackers",
    type: "Savory",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1554611512-c67faa4cb3cb?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Smoothie Bowl Supreme",
    description: "Acai berry smoothie topped with granola, banana, and coconut",
    type: "Smoothie",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (item) => {
  cartStore.addItem({
    ...item,
    category: 'Fruit Dishes'
  });
  cartNotification.showNotification(`${item.name} added to cart! 🍎`);
};
</script>

<style scoped>
.fruit-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.fruit-section {
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

.fruit-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.fruit-hero-image:hover {
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
  color: #4caf50;
  font-family: 'Impact', sans-serif;
}

.fruit-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.fruit-card {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.fruit-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(76, 175, 80, 0.3);
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

.fruit-card:hover .item-name {
  color: #4caf50;
}

.fruit-card:hover .item-description {
  color: #333;
}

.fruit-card:hover .item-price {
  color: #fff;
  background: #4caf50;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}

.card-content {
  padding: 1.5rem;
}

.item-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.item-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.item-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.item-type {
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
}

.item-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4caf50;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #4caf50, #8bc34a);
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
  background: linear-gradient(45deg, #388e3c, #689f38);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .fruit-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .fruit-section {
    padding: 1rem 0.75rem;
    min-height: 100vh;
  }
  
  .container {
    padding: 0;
    max-width: 100%;
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0;
    text-align: center;
  }
  
  .left-section {
    width: 100%;
  }
  
  .section-title {
    font-size: 2.2rem;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .text-block {
    font-size: 0.95rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    max-width: 100%;
  }
  
  .right-section {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-bottom: 1rem;
  }
  
  .fruit-hero-image {
    width: 180px;
    height: 180px;
  }
  
  .fruit-grid {
    grid-template-columns: 1fr;
    gap: 1rem;
    max-width: 100%;
    margin: 0 auto;
  }
  
  .fruit-card {
    padding: 1.25rem;
    max-width: 100%;
  }
  
  .fruit-image {
    width: 80px;
    height: 80px;
    margin-bottom: 1rem;
  }
  
  .fruit-name {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }
  
  .fruit-description {
    font-size: 0.85rem;
    line-height: 1.4;
    margin-bottom: 1rem;
  }
  
  .fruit-meta {
    margin-bottom: 1rem;
  }
  
  .fruit-price {
    font-size: 1.1rem;
    margin-bottom: 0.25rem;
  }
  
  .fruit-type, .fruit-serving {
    font-size: 0.8rem;
  }
  
  .add-to-cart-btn {
    padding: 0.7rem 1.2rem;
    font-size: 0.9rem;
  }
}

@media (max-width: 480px) {
  .fruit-section {
    padding: 0.75rem 0.5rem;
  }
  
  .section-title {
    font-size: 1.8rem;
    line-height: 1.3;
  }
  
  .text-block {
    font-size: 0.9rem;
  }
  
  .fruit-hero-image {
    width: 150px;
    height: 150px;
  }
  
  .fruit-card {
    padding: 1rem;
  }
  
  .fruit-image {
    width: 70px;
    height: 70px;
  }
  
  .fruit-name {
    font-size: 1.1rem;
  }
  
  .fruit-description {
    font-size: 0.8rem;
  }
  
  .add-to-cart-btn {
    padding: 0.6rem 1rem;
    font-size: 0.85rem;
  }
}
</style>

