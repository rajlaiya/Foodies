<template>
  <transition name="fade-scale">
    <div v-if="open" class="menu-overlay">
      <div class="overlay-backdrop" @click="$emit('close')"></div>
      <div class="menu-sheet">
        <header class="sheet-header">
          <h2>Select a category</h2>
          <button class="close-btn" @click="$emit('close')">✕</button>
        </header>
        <div class="menu-list">
          <router-link
            v-for="item in menuItems"
            :key="item.title"
            :to="item.to"
            class="menu-row"
            :style="{ background: item.bg }"
            @click="$emit('close')"
          >
            <div class="label">{{ item.title }}</div>
            <div class="image-holder">
              <img :src="item.image" :alt="item.title" />
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </transition>
</template>

<script setup lang="ts">
defineProps<{ open: boolean }>();

const menuItems = [
  {
    title: 'Breakfast',
    to: '/breakfast',
    bg: '#f0ba7a',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Burgers',
    to: '/burger',
    bg: '#f7e8d5',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Pizza',
    to: '/pizza',
    bg: '#f2a64a',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Meals',
    to: '/meal',
    bg: '#f1f0f5',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Salad',
    to: '/salad',
    bg: '#77d1a5',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Cold Drinks',
    to: '/cold',
    bg: '#9ec4f2',
    image: 'https://images.unsplash.com/photo-1527169402691-feff5539e52c?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Fruit Dishes',
    to: '/fruit',
    bg: '#ff9bc0',
    image: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?w=400&h=300&fit=crop&crop=center'
  },
  {
    title: 'Alkhol Point',
    to: '/alcohol',
    bg: '#4c5568',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=400&h=300&fit=crop&crop=center'
  }
];
</script>

<style scoped>
.menu-overlay {
  position: fixed;
  inset: 0;
  z-index: 2500;
}
.overlay-backdrop {
  position: absolute;
  inset: 0;
  background: rgba(0,0,0,0.55);
  backdrop-filter: blur(6px);
}
.menu-sheet {
  position: absolute;
  inset: 0;
  padding: 1rem 1rem 6rem;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  pointer-events: none;
}
.sheet-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  padding: 0.25rem 0.25rem 0.5rem;
}
.sheet-header h2 {
  margin: 0;
  font-size: 1.4rem;
  letter-spacing: 0.5px;
}
.close-btn {
  border: none;
  background: rgba(255,255,255,0.1);
  color: #fff;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  font-size: 1rem;
  cursor: pointer;
}
.menu-list {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  pointer-events: auto;
  padding-bottom: 2rem;
}
.menu-row {
  position: relative;
  display: flex;
  align-items: center;
  min-height: 110px;
  border-radius: 20px;
  overflow: hidden;
  text-decoration: none;
  color: #1a1524;
  box-shadow: 0 10px 24px rgba(0,0,0,0.25);
  padding: 0 1rem;
  pointer-events: auto;
}
.menu-row .label {
  width: 100%;
  text-align: center;
  font-weight: 800;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-size: 1rem;
  color: #2e2a34;
}
.image-holder {
  position: absolute;
  right: -6%;
  top: 0;
  bottom: 0;
  width: 38%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.image-holder img {
  width: 140%;
  height: 140%;
  object-fit: cover;
  transform: translateX(10%);
}

.fade-scale-enter-active,
.fade-scale-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}
.fade-scale-enter-from,
.fade-scale-leave-to {
  opacity: 0;
  transform: scale(0.97);
}
</style>
