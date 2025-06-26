<template>
  <section class="section-content">
    <div class="pizza-background-images">
      <img v-for="(img, idx) in pizzaImages" :key="idx" :src="img" class="pizza-bg-img" :style="{ top: `${30 + idx * 100}px`, left: `${60 + idx * 180}px`, animationDelay: `${idx * 0.5}s` }" alt="Pizza" />
    </div>
      <div class="left-section">
        <h1 class="title">Pizza</h1>
      </div>
      <div class="right-section">
        <p class="text-block">
          Enjoy our delicious range of pizzas, made with fresh dough, premium cheese, and a variety of toppings to suit every taste.
        </p>
        <ul class="feature-list">
          <li>Classic Margherita, Pepperoni, and Veggie options</li>
          <li>Customizable toppings and crusts</li>
          <li>Hot and fresh, straight from the oven</li>
        </ul>
      </div>
  </section>
</template>

<script setup>
const pizzaImages = [
  '/src/assets/pizza1.png',
  '/src/assets/pizza2.png',
  '/src/assets/pizza3.png',
  '/src/assets/pizza4.png',
];
</script>

<style scoped>
.section-content {
  position: relative;
  background: url('@/assets/bg-texture.jpg') no-repeat center center/cover;
  color: white;
  min-height: 60vh;
  overflow: hidden;
  border-radius: 16px;
  margin: 2rem 0;
}
.pizza-background-images {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 1;
  pointer-events: none;
}
.pizza-bg-img {
  position: absolute;
  width: 120px;
  opacity: 0.18;
  filter: drop-shadow(0 4px 12px rgba(0,0,0,0.15));
  animation: floatPizza 3s ease-in-out infinite alternate;
}
@keyframes floatPizza {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-30px) scale(1.08); }
}
.content-wrapper {
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  width: 100%;
  gap: 2rem;
  padding: 2rem;
}
.left-section {
  flex: 1;
  text-align: center;
}
.title {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
}
.right-section {
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;
}
.text-block {
  font-size: 1.2rem;
  line-height: 1.7;
}
.feature-list {
  margin: 0;
  padding-left: 1.2rem;
}
.feature-list li {
  margin-bottom: 0.5rem;
  font-size: 1.05rem;
}
</style>