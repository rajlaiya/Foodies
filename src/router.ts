import { createRouter, createWebHistory } from 'vue-router';

import About from './components/About.vue';
import BreakfastMasti from './components/BreakfastMasti.vue';
import Meal from './components/Meal.vue';
import Salad from './components/Salad.vue';
import FruitDishes from './components/FruitDishes.vue';
import ColdDrinks from './components/ColdDrinks.vue';
import AlkholPoint from './components/AlkholPoint.vue';
import Cart from './components/cart.vue';
import Contact from './components/Contact.vue';
import Pizza from './components/Pizza.vue';
import Burger from './components/Burger.vue';
import Favorites from './components/Favorites.vue';

const routes = [
  { path: '/', redirect: '/about' },
  { path: '/about', component: About },
  { path: '/breakfast', component: BreakfastMasti },
  { path: '/meal', component: Meal },
  { path: '/salad', component: Salad },
  { path: '/fruit', component: FruitDishes },
  { path: '/cold', component: ColdDrinks },
  { path: '/alcohol', component: AlkholPoint },
  { path: '/cart', component: Cart },
  { path: '/contact', component: Contact },
  { path: '/pizza', component: Pizza },
  { path: '/burger', component: Burger },
  { path: '/favorites', component: Favorites },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
