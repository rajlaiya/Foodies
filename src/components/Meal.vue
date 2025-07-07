<template>
  <div class="meal-page">
    <!-- Hero Section -->
    <section class="meal-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=400&h=300&fit=crop&crop=center" alt="Traditional Meals" class="meal-hero-image" />
        </div>
        <div class="right-section">
          <p class="text-block">
            Discover the rich heritage of Indian cuisine with our authentic regional specialties. From the vibrant flavors of Gujarat to the bold spices of Punjab, each dish tells a story of tradition and culture.
          </p>
          <p class="text-block">
            Our expert chefs prepare every meal using traditional recipes passed down through generations, ensuring you experience the true essence of Indian culinary artistry with every bite.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Traditional Meal Collection</h2>
        <div class="meal-grid">
          <div v-for="meal in mealMenu" :key="meal.id" class="meal-card">
            <div class="card-image">
              <img :src="meal.image" :alt="meal.name" />
            </div>
            <div class="card-content">
              <h3 class="meal-name">{{ meal.name }}</h3>
              <p class="meal-description">{{ meal.description }}</p>
              <div class="meal-details">
                <span class="meal-cuisine">{{ meal.cuisine }}</span>
                <span class="meal-price">${{ meal.price }}</span>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(meal)">
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

const mealMenu = [
  // Gujarati Dishes
  {
    id: 1,
    name: "Dhokla Delight",
    description: "Soft, spongy steamed snack made from fermented rice and chickpea batter",
    cuisine: "Gujarati",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Undhiyu Special",
    description: "Traditional mixed vegetable curry cooked with aromatic spices and herbs",
    cuisine: "Gujarati",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Khandvi Rolls",
    description: "Delicate gram flour rolls seasoned with mustard seeds and curry leaves",
    cuisine: "Gujarati",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Thepla Combo",
    description: "Spiced flatbread perfect for travel, served with pickles and yogurt",
    cuisine: "Gujarati",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1586370434639-0fe43b2d32d6?w=300&h=200&fit=crop&crop=center"
  },
  
  // Marathi Dishes
  {
    id: 5,
    name: "Puran Poli",
    description: "Sweet stuffed flatbread filled with jaggery and lentil mixture",
    cuisine: "Marathi",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Misal Pav",
    description: "Spicy sprouted curry served with bread rolls and traditional toppings",
    cuisine: "Marathi",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Vada Pav",
    description: "Mumbai's favorite street food - potato fritter in a soft bun",
    cuisine: "Marathi",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Sabudana Khichdi",
    description: "Sago pearls cooked with peanuts, potatoes, and aromatic spices",
    cuisine: "Marathi",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center"
  },
  
  // South Indian Dishes
  {
    id: 9,
    name: "Masala Dosa",
    description: "Crispy rice pancake filled with spiced potato curry and served with chutney",
    cuisine: "South Indian",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Idli Sambar",
    description: "Steamed rice cakes served with lentil curry and coconut chutney",
    cuisine: "South Indian",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 11,
    name: "Uttapam Special",
    description: "Thick pancake topped with vegetables and served with traditional sides",
    cuisine: "South Indian",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 12,
    name: "Filter Coffee",
    description: "Authentic South Indian filter coffee served in traditional style",
    cuisine: "South Indian",
    price: 4.99,
    image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=300&h=200&fit=crop&crop=center"
  },
  
  // Punjabi Dishes
  {
    id: 13,
    name: "Butter Paneer",
    description: "Creamy tomato-based paneer curry with aromatic spices and herbs",
    cuisine: "Punjabi",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 14,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy deep-fried bread",
    cuisine: "Punjabi",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 15,
    name: "Paneer Tikka",
    description: "Grilled cottage cheese skewers marinated in yogurt and spices",
    cuisine: "Punjabi",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 16,
    name: "Sarson da Saag",
    description: "Traditional mustard greens curry served with makki di roti",
    cuisine: "Punjabi",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (meal) => {
  cartStore.addItem({
    ...meal,
    category: 'Traditional Meals'
  });
  cartNotification.showNotification(`${meal.name} added to cart! 🍛`);
};
</script>

<style scoped>
.meal-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.meal-section {
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

.meal-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.meal-hero-image:hover {
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
  color: #ff5722;
  font-family: 'Impact', sans-serif;
}

.meal-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.meal-card {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.meal-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 87, 34, 0.3);
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

.meal-card:hover .meal-name {
  color: #ff5722;
}

.meal-card:hover .meal-description {
  color: #333;
}

.meal-card:hover .meal-price {
  color: #fff;
  background: #ff5722;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}

.card-content {
  padding: 1.5rem;
}

.meal-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.meal-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.meal-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.meal-cuisine {
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
}

.meal-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff5722;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #ff5722, #ff7043);
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
  background: linear-gradient(45deg, #e64a19, #f4511e);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 87, 34, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1200px) {
  .meal-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 900px) {
  .meal-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .meal-section {
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
  
  .meal-hero-image {
    width: 15vmax;
    height: 15vmax;
  }
  
  .meal-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5vmin;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  
  .meal-card {
    padding: 0.5vmin;
    max-width: 100%;
  }
  
  .card-image {
    height: 15vmax;
  }
  
  .card-content {
    padding: 1.5vmin;
  }
  
  .meal-name {
    font-size: 3vmin;
    margin-bottom: 0.5rem;
  }
  
  .meal-description {
    font-size: 2.5vmin;
    line-height: 1.3;
    margin-bottom: 0.5rem;
  }
  
  .meal-details {
    margin-bottom: 1rem;
  }
  
  .meal-price {
    font-size: 3vmin;
  }
  
  .meal-cuisine {
    font-size: 2vmin;
  }
  
  .add-to-cart-btn {
    padding: 1vmin 2vmin;
    font-size: 2.5vmin;
  }
}

@media (max-width: 480px) {
  .meal-section {
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
  
  .meal-hero-image {
    width: 18vmax;
    height: 18vmax;
  }
  
  .meal-grid {
    gap: 0.25vmin;
    padding: 0;
  }
  
  .meal-card {
    padding: 0.5vmin;
  }
  
  .card-image {
    height: 18vmax;
  }
  
  .card-content {
    padding: 1vmin;
  }
  
  .meal-name {
    font-size: 3.5vmin;
  }
  
  .meal-description {
    font-size: 2.8vmin;
  }
  
  .meal-price {
    font-size: 3.5vmin;
  }
  
  .meal-cuisine {
    font-size: 2.5vmin;
  }
  
  .add-to-cart-btn {
    padding: 1vmin 1.5vmin;
    font-size: 3vmin;
  }
}
</style>
