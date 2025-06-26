<template>
  <div class="salad-page">
    <!-- Hero Section -->
    <section class="salad-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop&crop=center" alt="Salad" class="salad-hero-image" />
        </div>
        <div class="right-section">
          <p class="text-block">
            Fresh, crisp salads made with the finest organic ingredients. Our garden-to-table approach ensures every leaf is picked at peak freshness for maximum nutrition and flavor.
          </p>
          <p class="text-block">
            From classic Caesar to exotic superfood bowls, each salad is carefully crafted to provide a perfect balance of taste, texture, and wholesome goodness that nourishes your body and delights your palate.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Fresh Salad Menu</h2>
        <div class="salad-grid">
          <div v-for="salad in saladMenu" :key="salad.id" class="salad-card">
            <div class="card-image">
              <img :src="salad.image" :alt="salad.name" />
            </div>
            <div class="card-content">
              <h3 class="salad-name">{{ salad.name }}</h3>
              <p class="salad-description">{{ salad.description }}</p>
              <div class="salad-details">
                <span class="salad-size">{{ salad.size }}</span>
                <span class="salad-price">${{ salad.price }}</span>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(salad)">
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
import { cartStore, cartNotification } from '../stores/cart'

const saladMenu = [
  {
    id: 1,
    name: "Caesar Salad",
    description: "Crisp romaine lettuce, parmesan cheese, croutons, and classic Caesar dressing",
    size: "Large",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Greek Mediterranean",
    description: "Mixed greens, feta cheese, olives, tomatoes, cucumbers, and olive oil dressing",
    size: "Large",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Superfood Bowl",
    description: "Kale, quinoa, avocado, blueberries, almonds, and lemon vinaigrette",
    size: "Large",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1511690743698-d9d85f2fbf38?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Chicken Protein",
    description: "Grilled chicken breast, mixed greens, cherry tomatoes, and honey mustard",
    size: "Large",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Caprese Fresh",
    description: "Fresh mozzarella, tomatoes, basil, mixed greens, and balsamic glaze",
    size: "Medium",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Asian Fusion",
    description: "Mixed greens, edamame, carrots, sesame seeds, and ginger soy dressing",
    size: "Large",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1607532941433-304659e8198a?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Tuna Niçoise",
    description: "Seared tuna, mixed greens, hard-boiled eggs, olives, and vinaigrette",
    size: "Large",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Vegan Delight",
    description: "Spinach, chickpeas, roasted vegetables, nuts, and tahini dressing",
    size: "Large",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1505576391880-b3f9d713dc4f?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Berry Spinach",
    description: "Baby spinach, strawberries, goat cheese, walnuts, and poppy seed dressing",
    size: "Medium",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Cobb Classic",
    description: "Mixed greens, bacon, blue cheese, eggs, tomatoes, and ranch dressing",
    size: "Large",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (salad: any) => {
  cartStore.addItem({
    ...salad,
    category: 'Salad'
  });
  cartNotification.showNotification(`${salad.name} added to cart! 🥗`);
};
</script>

<style scoped>
.salad-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.salad-section {
  /* color: white; */
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

.salad-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.salad-hero-image:hover {
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
  color: #4CAF50;
  font-family: 'Impact', sans-serif;
}

.salad-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.salad-card {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.salad-card:hover {
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

.salad-card:hover .card-image img {
  transform: scale(1.05);
}

.salad-card:hover .salad-name {
  color: #4CAF50;
}

.salad-card:hover .salad-description {
  color: #333;
}

.salad-card:hover .salad-price {
  color: #fff;
  background: #4CAF50;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}

.card-content {
  padding: 1.5rem;
}

.salad-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #4CAF50;
  margin-bottom: 0.5rem;
}

.salad-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.salad-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.salad-size {
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
}

.salad-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #4CAF50;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #4CAF50, #45a049);
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
  background: linear-gradient(45deg, #45a049, #3d8b40);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .salad-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .salad-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .container {
    padding: 0 0.5rem;
  }
  
  .section-title {
    font-size: 2rem;
    margin-bottom: 2rem;
  }
  
  .content-wrapper {
    flex-direction: column;
    gap: 1.5rem;
    padding: 0 0.5rem;
  }
  
  .salad-hero-image {
    width: 200px;
    height: 200px;
  }
  
  .text-block {
    font-size: 16px;
  }
  
  .salad-section {
    height: 70vh;
    padding-top: 1rem;
  }
}
</style>
