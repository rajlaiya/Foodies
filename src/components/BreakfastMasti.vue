<template>
  <div class="breakfast-page">
    <!-- Hero Section -->
    <section class="breakfast-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=400&h=300&fit=crop&crop=center" alt="Breakfast" class="breakfast-hero-image" />
        </div>
        <div class="right-section">
          <p class="text-block">
            Start your day with our delicious breakfast options! From traditional Indian parathas to continental delights, every morning meal is crafted to energize and satisfy your taste buds.
          </p>
          <p class="text-block">
            Our breakfast menu features fresh ingredients, authentic flavors, and healthy options. Whether you prefer a hearty meal or a light start, we have something special for every morning craving.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Breakfast Menu</h2>
        <div class="breakfast-grid">
          <div v-for="item in breakfastMenu" :key="item.id" class="breakfast-card">
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
import { cartStore, cartNotification } from '../stores/cart.js'

const breakfastMenu = [
  {
    id: 1,
    name: "Aloo Paratha",
    description: "Stuffed wheat flatbread with spiced potatoes, served with yogurt and pickle",
    type: "Indian",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 2,
    name: "Masala Dosa",
    description: "Crispy crepe filled with spiced potato curry, served with coconut chutney",
    type: "South Indian",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "French Toast",
    description: "Golden brioche soaked in vanilla custard, topped with fresh berries",
    type: "Continental",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1484723091739-30a097e8f929?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 4,
    name: "Poha",
    description: "Flattened rice cooked with turmeric, onions, and fresh herbs",
    type: "Indian",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Pancakes Stack",
    description: "Fluffy pancakes with maple syrup, butter, and seasonal fruits",
    type: "Continental",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 6,
    name: "Upma",
    description: "Savory semolina porridge with vegetables and South Indian spices",
    type: "South Indian",
    price: 5.99,
    image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 7,
    name: "Vegetarian Breakfast",
    description: "Scrambled eggs, hash browns, baked beans, toast, and grilled tomatoes",
    type: "Continental",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Idli Sambar",
    description: "Steamed rice cakes served with lentil curry and coconut chutney",
    type: "South Indian",
    price: 6.99,
    image: "https://images.unsplash.com/photo-1589301760014-d929f3979dbc?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 9,
    name: "Avocado Toast",
    description: "Multigrain bread topped with mashed avocado, cherry tomatoes, and feta",
    type: "Healthy",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1541519227354-08fa5d50c44d?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Chole Bhature",
    description: "Spicy chickpea curry served with fluffy deep-fried bread",
    type: "North Indian",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (item) => {
  cartStore.addItem({
    ...item,
    category: 'Breakfast'
  });
  cartNotification.showNotification(`${item.name} added to cart! 🍳`);
};
</script>

<style scoped>
.breakfast-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.breakfast-section {
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

.breakfast-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.breakfast-hero-image:hover {
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
  color: #ff9800;
  font-family: 'Impact', sans-serif;
}

.breakfast-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.breakfast-card {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.breakfast-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 152, 0, 0.3);
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

.breakfast-card:hover .item-name {
  color: #ff9800;
}

.breakfast-card:hover .item-description {
  color: #333;
}

.breakfast-card:hover .item-price {
  color: #fff;
  background: #ff9800;
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
  color: #ff9800;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #ff9800, #ffc107);
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
  background: linear-gradient(45deg, #f57c00, #ff8f00);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 152, 0, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .breakfast-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .breakfast-grid {
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
  
  .breakfast-hero-image {
    width: 200px;
    height: 200px;
  }
  
  .text-block {
    font-size: 16px;
  }
  
  .breakfast-section {
    height: 70vh;
    padding-top: 1rem;
  }
}
</style>
}
.left-section {
  flex: 1;
  text-align: center;

