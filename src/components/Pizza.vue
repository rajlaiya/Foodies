<template>
  <div class="pizza-page">
    <!-- Shopping Cards Section -->
    <section class="shopping-section">
      <div class="container">
        <h2 class="section-title">Our Pizza Menu</h2>
        <div class="pizza-grid">
          <div v-for="pizza in pizzaMenu" :key="pizza.id" class="pizza-card">
            <div class="card-image">
              <img :src="pizza.image" :alt="pizza.name" />
            </div>
            <div class="card-content">
              <h3 class="pizza-name">{{ pizza.name }}</h3>
              <p class="pizza-description">{{ pizza.description }}</p>
              <div class="pizza-details">
                <span class="pizza-size">{{ pizza.size }}</span>
                <span class="pizza-price">${{ pizza.price }}</span>
              </div>
              <button class="add-to-cart-btn" @click="addToCart(pizza)">
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

const pizzaMenu = [
  {
    id: 1,
    name: "Margherita Classic",
    description: "Fresh mozzarella, tomato sauce, basil leaves, and olive oil on thin crust",
    size: "12 inch",
    price: 14.99,
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 2,
    name: "Spicy Jalapeño",
    description: "Jalapeños, bell peppers, onions, mozzarella, and spicy tomato sauce",
    size: "12 inch",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 3,
    name: "Veggie Delight",
    description: "Bell peppers, mushrooms, onions, olives, and fresh tomatoes",
    size: "12 inch",
    price: 15.99,
    image: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 4,
    name: "Pesto Basil",
    description: "Fresh basil pesto, cherry tomatoes, mozzarella, and pine nuts",
    size: "12 inch",
    price: 18.99,
    image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 5,
    name: "Pineapple Paradise",
    description: "Sweet pineapple, red onions, mozzarella cheese, and tomato sauce",
    size: "12 inch",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ca4b?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 6,
    name: "Veggie Supreme",
    description: "Mushrooms, bell peppers, onions, olives, and roasted eggplant",
    size: "12 inch",
    price: 21.99,
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 7,
    name: "Four Cheese",
    description: "Mozzarella, cheddar, parmesan, and gorgonzola cheese blend",
    size: "12 inch",
    price: 16.99,
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 8,
    name: "Mediterranean",
    description: "Feta cheese, olives, sun-dried tomatoes, and spinach",
    size: "12 inch",
    price: 17.99,
    image: "https://images.unsplash.com/photo-1566843972142-a306d2fe1813?w=300&h=200&fit=crop&crop=center"
  },  {
    id: 9,
    name: "Spicy Paneer",
    description: "Marinated paneer, bell peppers, onions, and spicy tomato sauce",
    size: "12 inch",
    price: 19.99,
    image: "https://images.unsplash.com/photo-1593246049226-ded77bf90326?w=300&h=200&fit=crop&crop=center"
  },
  {
    id: 10,
    name: "Truffle Mushroom",
    description: "Wild mushrooms, truffle oil, arugula, and parmesan",
    size: "12 inch",
    price: 22.99,
    image: "https://images.unsplash.com/photo-1601924582970-9238bcb495d9?w=300&h=200&fit=crop&crop=center"
  }
];

const addToCart = (pizza) => {
  cartStore.addItem({
    ...pizza,
    category: 'Pizza'
  });
  cartNotification.showNotification(`${pizza.name} added to cart! 🍕`);
};
</script>

<style scoped>
.pizza-page {
  margin: 0;
  padding: 0;
}

/* Shopping Section */
.shopping-section {
  backdrop-filter: blur(15px);
  padding: 3rem 0;
  min-height: 100vh;
}

.container {
  max-width: 1600px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 3rem;
  color: aquamarine;
  font-family: 'Impact', sans-serif;
}

.pizza-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  padding: 0;
}

.pizza-card {
  backdrop-filter: blur(10px);
  border-radius: 22px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 1px solid rgb(255, 255, 255);
  overflow: hidden;
  transition: all 0.4s ease;
  display: flex;
  flex-direction: row;
}

.pizza-card:hover {
  transform: translateY(-10px) scale(1.02);
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.2);
  border: 1px solid rgba(255, 107, 53, 0.3);
}

.card-image {
  width: 240px;
  min-width: 240px;
  min-height: 200px;
  overflow: hidden;
  border-radius: 22px 0 0 22px;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.pizza-card:hover .pizza-name {
  color: #ff6b35;
}

.pizza-card:hover .pizza-description {
  color: #333;
}

.pizza-card:hover .pizza-price {
  color: #fff;
  background: #ff6b35;
  padding: 0.2rem 0.5rem;
  border-radius: 6px;
}

.card-content {
  padding: 1.5rem;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.pizza-name {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.pizza-description {
  color: #ffffff;
  font-size: 0.9rem;
  line-height: 1.4;
  margin-bottom: 1rem;
}

.pizza-details {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.pizza-size {
  background: #e9ecef;
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  color: #666;
}

.pizza-price {
  font-size: 1.2rem;
  font-weight: bold;
  color: #ff6b35;
}

.add-to-cart-btn {
  width: 100%;
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
  background: linear-gradient(45deg, #e55a2b, #e8841a);
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(255, 107, 53, 0.3);
}

.add-to-cart-btn:active {
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 900px) {
  .pizza-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}

@media (max-width: 600px) {
  .container {
    padding: 0;
    max-width: 100%;
  }
  
  .section-title {
    font-size: 4.5vmax;
    margin-bottom: 1rem;
    line-height: 1.2;
  }
  
  .pizza-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.5rem;
    max-width: 100%;
    margin: 0 auto;
    padding: 0;
  }
  
  .pizza-card {
    flex-direction: column;
    padding: 0;
    max-width: 100%;
    border-radius: 2vmin;
  }
  
  .card-image {
    width: 100%;
    min-width: 100%;
    height: 25vmin;
    min-height: 120px;
    max-height: 180px;
    border-radius: 22px 22px 0 0;
  }
  
  .card-content {
    padding: 2vmin;
  }
  
  .pizza-name {
    font-size: 3vmin;
    margin-bottom: 1vmin;
    line-height: 1.2;
  }
  
  .pizza-description {
    font-size: 2.2vmin;
    line-height: 1.3;
    margin-bottom: 2vmin;
  }
  
  .pizza-details {
    margin-bottom: 2vmin;
    flex-direction: column;
    gap: 1vmin;
    align-items: center;
  }
  
  .pizza-size {
    font-size: 2vmin;
    padding: 1vmin 2vmin;
  }
  
  .pizza-price {
    font-size: 3.5vmin;
    margin: 0;
  }
  
  .add-to-cart-btn {
    padding: 2.5vmin 3vmin;
    font-size: 2.5vmin;
    border-radius: 1.5vmin;
    margin: 0 auto;
    display: block;
    width: 90%;
  }
}

@media (max-width: 480px) {
  .section-title {
    font-size: 5.5vmax;
    line-height: 1.1;
  }
  
  .pizza-grid {
    gap: 0.25rem;
    padding: 0;
  }
  
  .card-image {
    height: 22vmin;
    min-height: 100px;
    max-height: 160px;
  }
  
  .card-content {
    padding: 1.8vmin;
  }
  
  .pizza-name {
    font-size: 3.2vmin;
    margin-bottom: 0.8vmin;
  }
  
  .pizza-description {
    font-size: 2.4vmin;
    margin-bottom: 1.8vmin;
  }
  
  .pizza-size {
    font-size: 2.2vmin;
    padding: 0.8vmin 1.8vmin;
  }
  
  .pizza-price {
    font-size: 3.8vmin;
  }
  
  .add-to-cart-btn {
    padding: 2.2vmin 2.8vmin;
    font-size: 2.8vmin;
    border-radius: 1.3vmin;
    width: 95%;
  }
}
</style>