<template>
  <section class="alkhol-point">
    <!-- Section 1: About, Advantages, Disadvantages -->
    <div class="alkhol-about">
      <h1>Alkhol Point</h1>
      <p>
        Welcome to our Alkhol Point! Here you can explore a wide variety of alcoholic beverages from around the world. Whether you enjoy a classic beer, a glass of wine, or a premium whiskey, we have something for every taste.
      </p>
      <div class="adv-disadv">
        <div class="adv">
          <h3>Advantages <span class="icon">🍸</span></h3>
          <ul>
            <li>Wide selection of drinks</li>
            <li>Premium quality and authentic taste</li>
            <li>Perfect for celebrations and socializing</li>
            <li>Expertly crafted cocktails</li>
          </ul>
        </div>
        <div class="disadv">
          <h3>Disadvantages <span class="icon">⚠️</span></h3>
          <ul>
            <li>Excessive consumption is harmful</li>
            <li>Not suitable for minors</li>
            <li>May impair judgment and health</li>
            <li>Legal restrictions apply</li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Section 2: Animated Cards for Drinks -->
    <div class="alkhol-cards-section">
      <h2>Our Bestsellers</h2>
      <div class="alkhol-cards">
        <div v-for="(drink, idx) in drinks" :key="drink.name" class="alkhol-card animated-card" :style="{ animationDelay: `${idx * 0.15}s` }">
          <img :src="drink.img" :alt="drink.name" class="drink-img" />
          <h3>{{ drink.name }}</h3>
          <p>{{ drink.desc }}</p>
          <div class="drink-details">
            <span class="price">Price: ₹{{ drink.price }}</span>
            <span class="discount" v-if="drink.discount">Discount: {{ drink.discount }}%</span>
            <span class="available" :class="{ 'not-available': !drink.available }">
              {{ drink.available ? 'Available' : 'Not Available' }}
            </span>
          </div>
          <button class="buy-btn" :disabled="!drink.available">
            <span class="icon">🛒</span> Buy Now
          </button>
        </div>
      </div>
    </div>

    <!-- Section 3: Warning and Random Note -->
    <div class="alkhol-warning">
      <div class="warning-note">
        <span class="icon">🚫</span>
        <strong>Warning (India):</strong> Consumption of alcohol is injurious to health. Not for sale to persons under the age of 21 years.
      </div>
      <div class="random-note">
        <span class="icon">💡</span>
        <strong>Did you know?</strong> Moderate consumption of red wine is sometimes linked to heart health, but always drink responsibly!
      </div>
    </div>
  </section>
</template>

<script setup>
const drinks = [
  { name: 'Classic Beer', img: '/src/assets/salad-bowl.png', desc: 'Refreshing lager with a crisp finish.', price: 299, available: true, discount: 10 },
  { name: 'Red Wine', img: '/src/assets/salad-bowl.png', desc: 'Smooth and fruity red wine.', price: 799, available: false, discount: 0 },
  { name: 'Whiskey', img: '/src/assets/salad-bowl.png', desc: 'Aged whiskey with rich flavor.', price: 999, available: true, discount: 15 },
  { name: 'Vodka', img: '/src/assets/salad-bowl.png', desc: 'Crystal clear and smooth.', price: 699, available: true, discount: 5 },
  { name: 'Rum', img: '/src/assets/salad-bowl.png', desc: 'Sweet and spicy Caribbean favorite.', price: 499, available: false, discount: 0 },
  { name: 'Gin', img: '/src/assets/salad-bowl.png', desc: 'Botanical and aromatic.', price: 599, available: true, discount: 8 },
  { name: 'Tequila', img: '/src/assets/salad-bowl.png', desc: 'Bold and festive Mexican spirit.', price: 899, available: true, discount: 12 },
  { name: 'Champagne', img: '/src/assets/salad-bowl.png', desc: 'Sparkling wine for celebrations.', price: 1299, available: false, discount: 0 },
  { name: 'Brandy', img: '/src/assets/salad-bowl.png', desc: 'Rich and smooth, perfect for sipping.', price: 899, available: true, discount: 7 },
  { name: 'Absinthe', img: '/src/assets/salad-bowl.png', desc: 'A strong, herbal spirit with a unique taste.', price: 1099, available: true, discount: 9 },
];
</script>

<style scoped>
.alkhol-point {
  background: url('@/assets/bg-texture.jpg') no-repeat center center/cover;
  color: white;
  min-height: 100vh;
  padding: 2rem 0 0 0;
  overflow-x: hidden;
}
.alkhol-about {
  max-width: 900px;
  margin: 0 auto 2.5rem auto;
  background: rgba(0,0,0,0.7);
  border-radius: 18px;
  padding: 2rem 2rem 1.5rem 2rem;
  box-shadow: 0 4px 24px rgba(0,0,0,0.18);
}
.alkhol-about h1 {
  font-size: 2.5rem;
  color: #ffe082;
  margin-bottom: 1rem;
  text-align: center;
}
.alkhol-about p {
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
.adv-disadv {
  display: flex;
  gap: 2rem;
  justify-content: center;
}
.adv, .disadv {
  flex: 1;
  background: rgba(255,255,255,0.08);
  border-radius: 12px;
  padding: 1rem 1.2rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  transition: transform 0.3s, box-shadow 0.3s;
}
.adv:hover, .disadv:hover {
  transform: translateY(-8px) scale(1.04) rotate(-1deg);
  box-shadow: 0 8px 32px rgba(0,0,0,0.18);
}
.adv h3, .disadv h3 {
  color: #ffe082;
  margin-bottom: 0.7rem;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.adv ul, .disadv ul {
  margin: 0;
  padding-left: 1.2rem;
}
.adv li, .disadv li {
  margin-bottom: 0.4rem;
  font-size: 1.05rem;
}
.icon {
  display: inline-block;
  animation: icon-bounce 1.2s infinite alternate;
}
@keyframes icon-bounce {
  0% { transform: translateY(0); }
  100% { transform: translateY(-7px) scale(1.15); }
}
.alkhol-cards-section {
  max-width: 1100px;
  margin: 0 auto 2.5rem auto;
  text-align: center;
}
.alkhol-cards-section h2 {
  color: #ffe082;
  margin-bottom: 1.5rem;
  font-size: 2rem;
}
.alkhol-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  max-width: 1100px;
}
.alkhol-card {
  background: rgba(0,0,0,0.7);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  flex: 1 1 18%;
  max-width: 200px;
  min-width: 180px;
  padding: 1.5rem 1rem;
  text-align: center;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
  z-index: 2;
  animation: fadeInUp 0.7s both;
}
.alkhol-card:hover {
  transform: translateY(-10px) scale(1.07) rotate(-2deg);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
}
.drink-img {
  width: 70px;
  height: 70px;
  object-fit: contain;
  margin-bottom: 1rem;
  animation: floatDrink 2.5s ease-in-out infinite alternate;
}
@keyframes floatDrink {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-15px) scale(1.08); }
}
.buy-btn {
  background: #ffe082;
  color: #222;
  border: none;
  border-radius: 8px;
  padding: 8px 18px;
  font-weight: bold;
  margin-top: 1rem;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s, color 0.2s, transform 0.2s;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.10);
}
.buy-btn:hover {
  background: #ffd54f;
  color: #b8860b;
  transform: scale(1.08) rotate(-2deg);
}
.buy-btn:disabled {
  background: #ccc;
  color: #888;
  cursor: not-allowed;
  transform: none;
}
.alkhol-warning {
  max-width: 900px;
  margin: 0 auto 2rem auto;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}
.warning-note, .random-note {
  background: rgba(255,255,255,0.12);
  border-radius: 10px;
  padding: 1rem 1.5rem;
  color: #ffe082;
  font-size: 1.1rem;
  display: flex;
  align-items: center;
  gap: 0.7rem;
  box-shadow: 0 2px 12px rgba(0,0,0,0.08);
  animation: fadeInUp 0.7s both;
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
.drink-details {
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin: 0.5rem 0 0.7rem 0;
  font-size: 1.05rem;
  align-items: center;
}
.price {
  color: #ffe082;
  font-weight: bold;
}
.discount {
  color: #4caf50;
  font-weight: bold;
}
.available {
  color: #4caf50;
  font-weight: bold;
}
.not-available {
  color: #ff5252;
  text-decoration: line-through;
}
@media (max-width: 1200px) {
  .alkhol-card {
    flex-basis: 22%;
  }
}
@media (max-width: 900px) {
  .alkhol-card {
    flex-basis: 30%;
  }
}
@media (max-width: 700px) {
  .alkhol-card {
    flex-basis: 45%;
  }
}
@media (max-width: 500px) {
  .alkhol-card {
    flex-basis: 90%;
  }
}
</style>