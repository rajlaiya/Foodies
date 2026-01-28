<template>
  <div id="app" class="asphalt-bg">
    <!-- Global Cart Notification -->
    <transition name="notification">
      <div v-if="cartNotification.visible" class="global-notification">
        {{ cartNotification.message }}
      </div>
    </transition>
    
    <!-- Floating Cart Animation -->
    <FloatingCart ref="floatingCart" />
    
    <header v-if="!isMobile">
      <nav class="navbar">
        <div class="navbar-logo">Foodies</div>
        <ul class="navbar-links">
          <li>
            <router-link to="/about" class="nav-link">🏠 About</router-link>
          </li>
          <li class="dropdown">
            <a href="#" class="dropbtn">Menu ▾</a>
            <div class="dropdown-content">
              <router-link to="/pizza">Pizza</router-link>
              <router-link to="/burger">Burger</router-link>
              <router-link to="/breakfast">Breakfast Masti</router-link>
              <router-link to="/meal">Proper Meal</router-link>
            </div>
          </li>
          <li class="dropdown">
            <a href="#" class="dropbtn">More ▾</a>
            <div class="dropdown-content">
              <router-link to="/salad">Salad</router-link>
              <router-link to="/fruit">Fruit Dishes</router-link>
              <router-link to="/cold">Cold Drinks</router-link>
              <router-link to="/alcohol">Alkhol Point</router-link>
            </div>
          </li>
          <li>
            <router-link to="/cart" class="nav-link">
              🛒 Cart
              <span v-if="cartStore.getItemCount() > 0" class="cart-badge">{{ cartStore.getItemCount() }}</span>
            </router-link>
          </li>
          <li>
            <router-link to="/contact" class="nav-link">📞 Contact</router-link>
          </li>
        </ul>
      </nav>
    </header>
    <main class="main-content asphalt-bg">
      <router-view />
    </main>

    <MobileMenuOverlay :open="showMenuOverlay" @close="closeMainMenuOverlay" />

    <!-- Mobile bottom navigation -->
    <nav v-if="isMobile" class="mobile-tabbar">
      <router-link to="/about" class="tab-item">
        <span class="tab-icon">🏠</span>
        <span class="tab-label">About</span>
      </router-link>
      <router-link to="/favorites" class="tab-item">
        <span class="tab-icon">❤️</span>
        <span class="tab-label">Favorites</span>
      </router-link>
      <button type="button" class="tab-item center-btn" @click="openMainMenu">
        <span class="plus">＋</span>
      </button>
      <router-link to="/cart" class="tab-item">
        <span class="tab-icon">🛒</span>
        <span class="tab-label">Cart</span>
        <span v-if="cartStore.getItemCount() > 0" class="tab-badge">{{ cartStore.getItemCount() }}</span>
      </router-link>
      <router-link to="/contact" class="tab-item">
        <span class="tab-icon">📞</span>
        <span class="tab-label">Contact</span>
      </router-link>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';
import { RouterView, RouterLink } from 'vue-router';
import { cartNotification, cartStore } from './stores/cart.ts';
import FloatingCart from './components/FloatingCart.vue';
import MobileMenuOverlay from './components/MobileMenuOverlay.vue';

const isMobile = ref(false);
const sidebarOpen = ref(false);
const floatingCart = ref();
const showMenuOverlay = ref(false);

function checkMobile() {
  isMobile.value = window.innerWidth <= 700;
  if (!isMobile.value) sidebarOpen.value = false;
}

function openMainMenu() {
  showMenuOverlay.value = true;
}

function closeMainMenuOverlay() {
  showMenuOverlay.value = false;
}
onMounted(() => {
  checkMobile();
  window.addEventListener('resize', checkMobile);
});

onUnmounted(() => {
  window.removeEventListener('resize', checkMobile);
});
</script>

<style scoped>
header {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
}

.navbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 2rem;
  background: rgba(0,0,0,0.7);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(0,0,0,0.2);
  margin-bottom: 0;
}
.navbar-logo {
  font-size: 2rem;
  font-weight: bold;
  color: #fff;
  letter-spacing: 2px;
  text-shadow: 1px 1px 8px #000;
}
.navbar-links {
  list-style: none;
  display: flex;
  gap: 1.5rem;
  margin: 0;
  padding: 0;
}
.navbar-links li {
  position: relative;
}
.navbar-links a {
  color: #fff;
  text-decoration: none;
  font-size: 1.1rem;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  transition: background 0.2s;
}
.navbar-links a:hover, .navbar-links .dropbtn:hover {
  background: rgba(255,255,255,0.15);
}
.dropdown .dropbtn::after {
  content: '';
}
.dropdown-content {
  display: none;
  position: absolute;
  background: rgba(30,30,30,0.98);
  min-width: 180px;
  box-shadow: 0 8px 16px rgba(0,0,0,0.2);
  border-radius: 8px;
  z-index: 1;
  top: 110%;
  left: 0;
}
.dropdown-content a {
  color: #fff;
  padding: 0.75rem 1.2rem;
  display: block;
  border-radius: 0;
  font-size: 1rem;
}
.dropdown-content a:hover {
  background: rgba(255,255,255,0.10);
}
.dropdown:hover .dropdown-content {
  display: block;
}

/* Cart badge for desktop nav */
.nav-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 0.3rem;
}

.cart-badge {
  position: absolute;
  top: -5px;
  right: -5px;
  min-width: 18px;
  height: 18px;
  padding: 0 5px;
  border-radius: 9px;
  background: #ff8a3d;
  color: #fff;
  font-size: 0.7rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.main-content {
  padding: 2rem;
  border-radius: 16px;
  background: rgba(0,0,0,0.6);
  color: #fff;
  box-shadow: 0 4px 24px rgba(0,0,0,0.15);
  margin-top: 110px;
}
.asphalt-bg {
  background-image: url('https://media.istockphoto.com/id/903988278/photo/background-texture-of-rough-asphalt.webp?a=1&b=1&s=612x612&w=0&k=20&c=b6XsoQHOvSsF9N7FUE8TMHrlbuhFlMmjvPeExx5RciE=');
  background-size: cover;
  background-position: center;
}
.sidebar-toggle {
  display: none;
}
.sidebar-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0,0,0,0.25);
  z-index: 1999;
}

/* Mobile tab bar */
.mobile-tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  align-items: center;
  padding: 0.6rem 0.9rem 0.9rem;
  background: rgba(13, 10, 18, 0.9);
  backdrop-filter: blur(16px);
  box-shadow: 0 -8px 24px rgba(0,0,0,0.35);
  z-index: 1600;
  border-radius: 18px 18px 0 0;
}

.mobile-tabbar .tab-item {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.25rem;
  color: #f5f1ff;
  text-decoration: none;
  font-size: 0.8rem;
  padding: 0.35rem 0.25rem;
  background: none;
  border: none;
  cursor: pointer;
}

.mobile-tabbar .tab-icon {
  font-size: 1.2rem;
}

.mobile-tabbar .tab-label {
  font-size: 0.75rem;
  letter-spacing: 0.2px;
}

.mobile-tabbar .tab-item.router-link-active {
  color: #ffb347;
}

.mobile-tabbar .tab-badge {
  position: absolute;
  top: 2px;
  right: 16px;
  min-width: 16px;
  height: 16px;
  padding: 0 4px;
  border-radius: 8px;
  background: #ff8a3d;
  color: #0c0a12;
  font-size: 0.65rem;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.mobile-tabbar .center-btn {
  justify-content: center;
}

.mobile-tabbar .center-btn .plus {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: linear-gradient(140deg, #ffb347, #ff8a3d);
  color: #0c0a12;
  font-size: 1.8rem;
  font-weight: 800;
  box-shadow: 0 10px 26px rgba(255, 138, 61, 0.35);
  transform: translateY(-18%);
}

/* Global Cart Notification */
.global-notification {
  position: fixed;
  top: 80px;
  right: 20px;
  background: linear-gradient(135deg, #2ecc71, #27ae60);
  color: white;
  padding: 0.8rem 1.2rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.95rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  z-index: 9999;
  max-width: 280px;
}

@media (max-width: 768px) {
  .global-notification {
    top: auto;
    bottom: 100px;
    left: 50%;
    right: auto;
    transform: translateX(-50%);
    max-width: 85vw;
    font-size: 0.9rem;
    padding: 0.7rem 1rem;
    border-radius: 8px;
    text-align: center;
  }
}

.notification-enter-active, .notification-leave-active {
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.notification-enter-from {
  opacity: 0;
  transform: translateY(-10px);
}

.notification-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

/* Cart Badge */
.cart-link {
  position: relative;
}

.cart-badge {
  position: absolute;
  top: -8px;
  right: -8px;
  background: #ff6b35;
  color: white;
  border-radius: 50%;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 0.8rem;
  font-weight: bold;
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

@media (max-width: 700px) {
  .sidebar-toggle {
    display: block;
    position: fixed;
    top: 18px;
    left: 18px;
    z-index: 2100;
    border: none;
    border-radius: 50%;
    width: 48px;
    height: 48px;
    /* font-size: 2rem; */
    font-family: 'Caveat', cursive, 'Comic Sans MS', 'Arial', sans-serif;
    font-weight: bold;
    box-shadow: 0 2px 8px rgba(0,0,0,0.10);
    cursor: pointer;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, color 0.2s;
  }
  .navbar {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    position: fixed;
    left: 0;
    top: 0;
    height: 100vh;
    width: 0;
    min-width: 0;
    max-width: 0;
    overflow: hidden;
    background: rgba(0,0,0,0.95);
    border-radius: 0 16px 16px 0;
    box-shadow: 2px 0 24px rgba(0,0,0,0.2);
    z-index: 2000;
    padding: 0;
    transition: width 0.3s, min-width 0.3s, max-width 0.3s, padding 0.3s;
  }
  .navbar.sidebar-open {
    width: 240px;
    min-width: 240px;
    max-width: 240px;
    overflow: visible;
    padding: 2rem 1rem 2rem 1rem;
    justify-content: flex-start;
  }
  .navbar-logo {
    margin-bottom: 2rem;
    font-size: 2rem;
    width: 100%;
    text-align: left;
  }
  .navbar-links {
    flex-direction: column;
    gap: 0.7rem;
    width: 100%;
    margin: 0;
    padding: 0;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .navbar-links li, .navbar-links a, .dropbtn {
    width: 100%;
    text-align: left;
    font-size: 0.95rem;
    padding: 0.6rem 0.7rem;
    box-sizing: border-box;
    color: #fff;
    border-radius: 6px;
    display: block;
    white-space: normal;
    word-break: break-word;
    line-height: 1.3;
  }
  .dropdown-content {
    position: static;
    background: none;
    box-shadow: none;
    border-radius: 0;
    min-width: 0;
    padding-left: 1rem;
  }
  .dropdown-content a {
    padding: 0.4rem 0.7rem;
    font-size: 0.85rem;
    color: #fff;
    background: none;
    line-height: 1.2;
  }
  .dropdown-content a:hover {
    background: rgba(255,255,255,0.10);
  }
  .main-content {
    margin-top: 0 !important;
    padding-bottom: 6.5rem;
  }
  .navbar,
  .navbar.sidebar-open {
    height: 100dvh !important;
    min-height: 100dvh !important;
    max-height: 100dvh !important;
  }
  .sidebar-backdrop {
    height: 100dvh !important;
    min-height: 100dvh !important;
    max-height: 100dvh !important;
  }
}
</style>
