<template>
  <div class="floating-cart" v-if="showFloating" @animationend="onAnimationEnd">
    <div class="cart-icon">🛒</div>
    <div class="item-added">+1</div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const showFloating = ref(false)

const triggerAnimation = () => {
  showFloating.value = true
}

const onAnimationEnd = () => {
  showFloating.value = false
}

defineExpose({
  triggerAnimation
})
</script>

<style scoped>
.floating-cart {
  position: fixed;
  top: 50%;
  right: 50px;
  z-index: 10000;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(255, 107, 53, 0.9);
  color: white;
  padding: 1rem;
  border-radius: 50px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  animation: floatUp 1.5s ease-out forwards;
  backdrop-filter: blur(10px);
}

.cart-icon {
  font-size: 1.5rem;
}

.item-added {
  font-weight: bold;
  font-size: 1.2rem;
}

@keyframes floatUp {
  0% {
    opacity: 0;
    transform: translateY(50px) scale(0.5);
  }
  20% {
    opacity: 1;
    transform: translateY(0) scale(1.2);
  }
  40% {
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: translateY(-100px) scale(0.8);
  }
}
</style>
