<template>
  <div class="burger-page">
    <!-- Hero Section -->
    <section class="burger-section">
      <div class="content-wrapper">
        <div class="left-section">
          <img src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center" alt="Burger" class="burger-hero-image" />
        </div>
        <div class="right-section">          <p class="text-block">
            The burger is a culinary icon that has conquered the world. Our gourmet burgers are crafted with premium plant-based patties, fresh ingredients, and artisanal buns baked daily.
          </p>
          <p class="text-block">
            From classic veggie burgers to specialty creations, each burger is grilled to perfection and served with our signature sides. Experience the ultimate comfort food with a healthy twist.
          </p>
        </div>
      </div>
    </section>

    <!-- Spacer between sections -->
    <div class="section-spacer"></div>

    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Burger Menu</h2>
        <div class="burger-grid">
          <div v-for="burger in burgerMenu" :key="burger.id" class="burger-card">
            <div class="card-image">
              <img :src="burger.image" :alt="burger.name" />
            </div>
            <div class="card-content">
              <h3 class="burger-name">{{ burger.name }}</h3>
              <p class="burger-description">{{ burger.description }}</p>
              <div class="burger-details">
                <span class="burger-size">{{ burger.size }}</span>
                <span class="burger-price">${{ burger.price }}</span>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(burger)">
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
import { cartStore, cartNotification } from '../stores/cart'

const burgerMenu = [  {
    id: 1,
    name: "Classic Veggie Burger",
    description: "Plant-based patty, vegan cheese, lettuce, tomato, pickles, and our special sauce",
    size: "6 oz",
    price: 12.99,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 2,
    name: "BBQ Veggie Burger",
    description: "Plant-based patty, crispy onion rings, BBQ sauce, and vegan cheddar cheese",
    size: "6 oz",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1553979459-d2229ba7433a?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 3,
    name: "Mushroom Swiss Veggie",
    description: "Plant-based patty, sautéed mushrooms, vegan Swiss cheese, and garlic aioli",
    size: "6 oz",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 4,
    name: "Spicy Jalapeño Veggie",
    description: "Plant-based patty, jalapeños, vegan pepper jack cheese, chipotle mayo, and avocado",
    size: "6 oz",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 5,
    name: "Veggie Delight",
    description: "Plant-based patty, lettuce, tomato, avocado, and herb mayo",
    size: "5 oz",
    price: 13.99,
    image: "https://images.unsplash.com/photo-1525059696034-4967a729002e?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 6,
    name: "Double Veggie Delight",
    description: "Two plant-based patties, double vegan cheese, lettuce, and special sauce",
    size: "12 oz",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1551615593-ef5fe247e8f7?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 7,
    name: "Crispy Paneer Burger",
    description: "Crispy paneer patty, coleslaw, pickles, and mint chutney",
    size: "5 oz",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1606755962773-d324e608d3d3?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 8,
    name: "Falafel Delight",
    description: "Crispy falafel patty, hummus, lettuce, tomato, and tahini sauce",
    size: "5 oz",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1615937691194-97dab94a8aaf?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 9,
    name: "Mediterranean Veggie",
    description: "Grilled vegetables, hummus, avocado, lettuce, tomato, and herb mayo",
    size: "5 oz",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 10,
    name: "Gourmet Truffle Veggie",
    description: "Premium plant-based patty, truffle mayo, arugula, caramelized onions, and vegan brie",
    size: "6 oz",
    price: 24.99,
    image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (burger) => {
  cartStore.addItem({
    ...burger,
    category: 'Burger'
  });
  cartNotification.showNotification(`${burger.name} added to cart! 🍔`);
};
</script>

<style scoped>
.burger-page {
  margin: 0;
  padding: 0;
}

/* Hero Section */
.burger-section {
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

.burger-hero-image {
  width: 300px;
  height: 300px;
  border-radius: 50%;
  object-fit: cover;
  border: 8px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.burger-hero-image:hover {
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
  color: #8B4513;
  font-family: 'Impact', sans-serif;
}

.burger-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2.5rem;
  padding: 0;
}

.burger-card {
  backdrop-filter: blur(10px);
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  overflow: hidden;
  transition: all 0.4s ease;
  height: fit-content;
}

.burger-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(139, 69, 19, 0.3);
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

.burger-card:hover .card-image img {
  transform: scale(1.05);
}

.burger-card:hover .burger-name {
  color: #FF6347;
}

.burger-card:hover .burger-description {
  color: #333;
}

.burger-card:hover .burger-price {
  color: #fff;
  background: #8B4513;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}

.card-content {
  padding: 1.5rem;
}

.burger-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #8B4513;
  margin-bottom: 0.5rem;
}

.burger-description {
  color: #666;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.burger-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.burger-size {
  background: #d3e9ff;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #000000;
}

.burger-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #8B4513;
}

.add-to-cart-btn {
  width: 100%;
  background: linear-gradient(45deg, #8B4513, #A0522D);
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
  background: linear-gradient(45deg, #654321, #8B4513);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(139, 69, 19, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 1024px) {
  .burger-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem;
  }
}

@media (max-width: 768px) {
  .burger-grid {
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
  
  .burger-hero-image {
    width: 200px;
    height: 200px;
  }
  
  .text-block {
    font-size: 16px;
  }
  
  .burger-section {
    height: 70vh;
    padding-top: 1rem;
  }
}
</style>