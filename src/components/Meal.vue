<template>
  <section class="section-content meal-page">
    <div class="meal-section" v-for="section in mealSections" :key="section.name">
      <h2 class="section-title">{{ section.name }}</h2>
      <div class="card-row">
        <div v-for="(dish, idx) in section.dishes" :key="dish.title" class="dish-card animated-card" :style="{ animationDelay: `${idx * 0.2}s` }">
          <img :src="dish.img" :alt="dish.title" class="dish-img" />
          <h3>{{ dish.title }}</h3>
          <p>{{ dish.desc }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const mealSections = [
  {
    name: 'Gujarati Dishes',
    dishes: [
      { title: 'Dhokla', img: '/src/assets/gujarati1.png', desc: 'Soft, spongy steamed snack.' },
      { title: 'Undhiyu', img: '/src/assets/gujarati2.png', desc: 'Mixed vegetable curry.' },
      { title: 'Khandvi', img: '/src/assets/gujarati3.png', desc: 'Gram flour rolls with spices.' },
      { title: 'Thepla', img: '/src/assets/gujarati4.png', desc: 'Spiced flatbread, perfect for travel.' },
    ],
  },
  {
    name: 'Marathi Dishes',
    dishes: [
      { title: 'Puran Poli', img: '/src/assets/marathi1.png', desc: 'Sweet stuffed flatbread.' },
      { title: 'Misal Pav', img: '/src/assets/marathi2.png', desc: 'Spicy sprouted curry with bread.' },
      { title: 'Vada Pav', img: '/src/assets/marathi3.png', desc: 'Potato fritter in a bun.' },
      { title: 'Sabudana Khichdi', img: '/src/assets/marathi4.png', desc: 'Sago pearls with peanuts and spices.' },
    ],
  },
  {
    name: 'Southindian Dishes',
    dishes: [
      { title: 'Dosa', img: '/src/assets/south1.png', desc: 'Crispy rice pancake.' },
      { title: 'Idli', img: '/src/assets/south2.png', desc: 'Steamed rice cakes.' },
      { title: 'Sambar', img: '/src/assets/south3.png', desc: 'Lentil-based vegetable stew.' },
      { title: 'Uttapam', img: '/src/assets/south4.png', desc: 'Thick pancake with toppings.' },
    ],
  },
  {
    name: 'Panjabi Dishes',
    dishes: [
      { title: 'Butter Chicken', img: '/src/assets/panjabi1.png', desc: 'Creamy tomato chicken curry.' },
      { title: 'Chole Bhature', img: '/src/assets/panjabi2.png', desc: 'Spicy chickpeas with fried bread.' },
      { title: 'Paneer Tikka', img: '/src/assets/panjabi3.png', desc: 'Grilled cottage cheese skewers.' },
      { title: 'Sarson da Saag', img: '/src/assets/panjabi4.png', desc: 'Mustard greens curry.' },
    ],
  },
];
</script>

<style scoped>
.section-content.meal-page {
  background: url('@/assets/bg-texture.jpg') no-repeat center center/cover;
  color: white;
  min-height: 100vh;
  padding: 2rem 0;
}
.meal-section {
  margin-bottom: 3rem;
}
.section-title {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
  color: #ffe082;
  text-shadow: 1px 1px 8px #000;
}
.card-row {
  display: flex;
  justify-content: center;
  gap: 2rem;
  flex-wrap: wrap;
}
.dish-card {
  background: rgba(0,0,0,0.7);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  width: 220px;
  padding: 1.5rem 1rem;
  text-align: center;
  color: #fff;
  transition: transform 0.3s, box-shadow 0.3s;
  cursor: pointer;
  position: relative;
  z-index: 2;
}
.dish-card:hover {
  transform: translateY(-10px) scale(1.05) rotate(-2deg);
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
}
.dish-img {
  width: 80px;
  height: 80px;
  object-fit: contain;
  margin-bottom: 1rem;
  animation: floatDish 2.5s ease-in-out infinite alternate;
}
@keyframes floatDish {
  0% { transform: translateY(0) scale(1); }
  100% { transform: translateY(-18px) scale(1.08); }
}
.animated-card {
  animation: fadeInUp 0.7s both;
}
@keyframes fadeInUp {
  0% { opacity: 0; transform: translateY(40px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
