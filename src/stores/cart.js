import { reactive } from 'vue'

// Global cart store
export const cartStore = reactive({
  items: [],
  
  // Add item to cart
  addItem(item) {
    const existingItem = this.items.find(cartItem => cartItem.id === item.id && cartItem.category === item.category)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.items.push({
        ...item,
        quantity: 1,
        category: item.category || 'food',
        selected: true // Default to selected for checkout
      })
    }
  },
  
  // Remove item from cart
  removeItem(id, category) {
    const index = this.items.findIndex(item => item.id === id && item.category === category)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  },
  
  // Update item quantity
  updateQuantity(id, category, quantity) {
    const item = this.items.find(item => item.id === id && item.category === category)
    if (item && quantity > 0) {
      item.quantity = quantity
    }
  },
  
  // Toggle item selection for checkout
  toggleSelection(id, category) {
    const item = this.items.find(item => item.id === id && item.category === category)
    if (item) {
      item.selected = !item.selected
    }
  },
  
  // Select/deselect all items
  toggleSelectAll(selectAll) {
    this.items.forEach(item => {
      item.selected = selectAll
    })
  },
  
  // Clear cart
  clearCart() {
    this.items = []
  },
  
  // Get cart totals
  get total() {
    return this.items.reduce((sum, item) => {
      return item.selected ? sum + (item.price * item.quantity) : sum
    }, 0)
  },
  
  get itemCount() {
    return this.items.reduce((sum, item) => sum + item.quantity, 0)
  },
  
  get selectedItemCount() {
    return this.items.filter(item => item.selected).length
  },
  
  get selectedTotal() {
    return this.items.reduce((sum, item) => {
      return item.selected ? sum + (item.price * item.quantity) : sum
    }, 0)
  }
})

// Cart notification system
export const cartNotification = reactive({
  show: false,
  message: '',
  floatingCartRef: null,
  
  showNotification(message) {
    this.message = message
    this.show = true
    // Trigger floating cart animation
    if (this.floatingCartRef) {
      this.floatingCartRef.triggerAnimation()
    }
    setTimeout(() => {
      this.show = false
    }, 3000)
  },
  
  setFloatingCartRef(ref) {
    this.floatingCartRef = ref
  }
})
