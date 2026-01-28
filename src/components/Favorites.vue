<template>
  <section class="favorites">
    <div class="favorites-header">
      <h1>Favorites</h1>
      <p>Save your top picks to revisit them quickly.</p>
    </div>
    <div class="favorites-grid">
      <div class="favorite-card" v-for="n in 3" :key="n">
        <div class="card-image placeholder"></div>
        <div class="card-content">
          <h3>Coming soon</h3>
          <p>Add items to favorites in a future update.</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// Placeholder favorites view
</script>

<style scoped>
.favorites {
  padding: 1.5rem;
  color: #f6f1ff;
}

.favorites-header h1 {
  margin: 0 0 0.25rem 0;
  font-size: 1.6rem;
}

.favorites-header p {
  margin: 0 0 1.25rem 0;
  color: rgba(255, 255, 255, 0.75);
}

.favorites-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
}

.favorite-card {
  background: linear-gradient(160deg, #1a1623 0%, #121019 50%, #1d1626 100%);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 16px;
  box-shadow: 0 12px 28px rgba(0,0,0,0.45);
  overflow: hidden;
}

.card-image.placeholder {
  height: 140px;
  background: radial-gradient(circle at 20% 20%, rgba(255, 138, 61, 0.18), transparent 45%),
              radial-gradient(circle at 80% 0%, rgba(255, 179, 71, 0.14), transparent 40%),
              #0f0b16;
}

.card-content {
  padding: 1rem 1.1rem 1.2rem;
}

.card-content h3 {
  margin: 0 0 0.35rem 0;
  color: #fff;
  font-size: 1.05rem;
}

.card-content p {
  margin: 0;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.4;
  font-size: 0.95rem;
}
</style>
