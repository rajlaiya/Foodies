# 🍽️ Foodies - Vegetarian Food Shop

A modern, responsive Vue.js web application for a vegetarian food delivery service featuring authentic Indian cuisine, pizzas, burgers, and more delicious plant-based options.

## 🌟 Features

### 🍕 Menu Categories

- **Pizza** - Artisan vegetarian pizzas with fresh ingredients
- **Burgers** - Gourmet plant-based burgers and paneer specialties
- **Traditional Meals** - Authentic Indian regional cuisines (Gujarati, Marathi, South Indian, Punjabi)
- **Breakfast** - Healthy morning options and Indian breakfast classics
- **Salads** - Fresh, nutritious salad bowls
- **Cold Drinks** - Refreshing beverages and smoothies
- **Fruit Dishes** - Seasonal fruit-based desserts and dishes
- **Alcohol** - Age-verified section for beverages (21+ only)

### 🛒 Shopping Experience

- **Global Cart System** - Persistent shopping cart across all pages
- **Item Management** - Add, remove, update quantities
- **Selective Checkout** - Choose specific items for purchase
- **Real-time Notifications** - Instant feedback for user actions
- **Price Calculation** - Automatic subtotal and total calculation

### 🎨 Design & UX

- **Unified Design System** - Consistent hero sections and card layouts
- **Glassmorphism Effects** - Modern glass-like UI elements
- **Responsive Design** - Mobile-first approach, works on all devices
- **Smooth Animations** - Hover effects and transitions
- **Age Verification** - Modal for alcohol section with session storage

### 🔧 Technical Features

- **Vue.js 3** - Modern JavaScript framework
- **TypeScript** - Type-safe development
- **Vue Router** - Single-page application routing
- **Reactive Store** - Global state management
- **Composition API** - Modern Vue development patterns
- **Vite** - Fast build tool and development server

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd Foodies
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   http://localhost:5173
   ```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📁 Project Structure

```
Foodies/
├── public/
│   ├── vite.svg
│   └── salad-bowl.png
├── src/
│   ├── assets/
│   │   ├── salad-bowl.png
│   │   └── vue.svg
│   ├── components/
│   │   ├── About.vue
│   │   ├── AlkholPoint.vue      # Age-restricted beverages
│   │   ├── BreakfastMasti.vue   # Breakfast menu
│   │   ├── Burger.vue           # Burger menu
│   │   ├── cart.vue             # Shopping cart
│   │   ├── ColdDrinks.vue       # Beverages
│   │   ├── Contact.vue
│   │   ├── FruitDishes.vue      # Fruit-based dishes
│   │   ├── Meal.vue             # Traditional meals
│   │   ├── Pizza.vue            # Pizza menu
│   │   ├── Salad.vue            # Salad menu
│   │   └── propermeal.vue
│   ├── pages/
│   │   ├── mobile.vue
│   │   └── mobile.css
│   ├── stores/
│   │   └── cart.ts              # Global cart management
│   ├── App.vue                  # Main application component
│   ├── main.ts                  # Application entry point
│   ├── router.ts                # Route configuration
│   ├── style.css                # Global styles
│   └── vite-env.d.ts
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── README.md
```

## 🎯 Key Components

### Cart Management (`src/stores/cart.ts`)

- Reactive store for global cart state
- Add/remove items functionality
- Quantity management
- Selection for checkout
- Price calculations

### Menu Components

Each menu component follows a unified structure:

- Hero section with circular image and description
- Grid layout of food items
- Glassmorphism card design
- Add to cart functionality
- Responsive design

### Age Verification (`AlkholPoint.vue`)

- Session-based age verification
- Redirect for underage users
- Warning notifications

## 🍱 Menu Highlights

### Traditional Meals

- **Gujarati**: Dhokla, Undhiyu, Khandvi, Thepla
- **Marathi**: Puran Poli, Misal Pav, Vada Pav
- **South Indian**: Masala Dosa, Idli Sambar, Uttapam
- **Punjabi**: Butter Paneer, Chole Bhature, Paneer Tikka

### Vegetarian Specialties

- Plant-based burger patties
- Artisan vegetarian pizzas
- Healthy breakfast options
- Fresh salad combinations

## 🛠️ Technologies Used

- **Frontend**: Vue 3, TypeScript, HTML5, CSS3
- **Build Tool**: Vite
- **Routing**: Vue Router
- **State Management**: Reactive stores
- **Styling**: CSS3 with Glassmorphism effects
- **Icons**: Unicode emojis and symbols
- **Images**: Unsplash API for food photography

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop**: Full grid layout (4 columns)
- **Tablet**: Reduced grid (2-3 columns)
- **Mobile**: Single column layout
- **Navigation**: Hamburger menu for mobile

## 🔄 State Management

The application uses a reactive store pattern:

- **Cart Store**: Manages shopping cart items
- **Notification System**: Handles user feedback
- **Session Storage**: Age verification persistence

## 🎨 Design System

### Color Palette

- **Primary**: Orange gradients (#FF5722, #FF7043)
- **Secondary**: Brown tones (#8B4513, #A0522D)
- **Accent**: Various themed colors per section
- **Background**: Glassmorphism with blur effects

### Typography

- **Headers**: Impact, sans-serif
- **Body**: Georgia, serif
- **UI Elements**: System fonts

## 🚦 Deployment

### Netlify Deployment

The project includes `netlify.toml` configuration for easy deployment:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### Manual Deployment

1. Build the project: `npm run build`
2. Deploy the `dist` folder to your hosting service
3. Configure redirects for SPA routing

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/new-feature`
3. Commit changes: `git commit -m 'Add new feature'`
4. Push to branch: `git push origin feature/new-feature`
5. Submit a pull request

## 📞 Contact

For questions or support, please contact the development team.

---

**Made with ❤️ for vegetarian food lovers**

_Enjoy delicious, healthy, and sustainable plant-based meals!_ 🌱
