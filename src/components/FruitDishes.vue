<template>
  <section class="section-content">
    <div class="overlay"></div>
    <div class="content-wrapper">
      <div class="left-section">
        <h1 class="title">Fruit Dishes</h1>
      </div>
      <div class="right-section">
        <p class="text-block">
          Sweet and refreshing fruit dishes for a healthy treat. Enjoy a variety of seasonal and exotic fruits, beautifully presented.
        </p>
        <ul class="feature-list">
          <li>Fresh fruit platters and bowls</li>
          <li>Exotic and local fruit options</li>
          <li>Perfect for dessert or a light snack</li>
        </ul>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Add logic or props as needed
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
.overlay {
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  inset: 0;
  z-index: 1;
  border-radius: 16px;
}
.content-wrapper {
  display: flex;
  justify-content: space-between;
  position: relative;
  z-index: 2;
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
