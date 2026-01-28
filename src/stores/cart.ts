import { reactive } from 'vue'

interface CartItem {
  id: number
  name: string
  price: number
  category: string
  quantity: number
  selected: boolean
  description?: string
  image?: string
  size?: string
  type?: string
  cuisine?: string
}

// Global cart store
export const cartStore = reactive({
  items: [] as CartItem[],
  
  // Add item to cart
  addItem(item: any) {
    const existingItem = this.items.find(cartItem => cartItem.id === item.id && cartItem.category === item.category)
    
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.items.push({
        id: item.id!,
        name: item.name!,
        price: item.price!,
        category: item.category || 'food',
        quantity: 1,
        selected: true, // Default to selected for checkout
        description: item.description,
        image: item.image,
        size: item.size,
        type: item.type,
        cuisine: item.cuisine
      })
    }
  },
  
  // Remove item from cart
  removeItem(id: number, category: string) {
    const index = this.items.findIndex(item => item.id === id && item.category === category)
    if (index > -1) {
      this.items.splice(index, 1)
    }
  },
  
  // Update item quantity
  updateQuantity(id: number, category: string, quantity: number) {
    const item = this.items.find(item => item.id === id && item.category === category)
    if (item && quantity > 0) {
      item.quantity = quantity
    }
  },
  
  // Toggle item selection for checkout
  toggleSelection(id: number, category: string) {
    const item = this.items.find(item => item.id === id && item.category === category)
    if (item) {
      item.selected = !item.selected
    }
  },
  
  // Select/deselect all items
  toggleSelectAll(selectAll: boolean) {
    this.items.forEach(item => {
      item.selected = selectAll
    })
  },
  
  // Clear entire cart
  clearCart() {
    this.items = []
  },
  
  // Get total price of all items
  getTotal() {
    return this.items.reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  
  // Get total price of selected items only
  getSelectedTotal() {
    return this.items
      .filter(item => item.selected)
      .reduce((total, item) => total + (item.price * item.quantity), 0)
  },
  
  // Get total item count
  getItemCount() {
    return this.items.reduce((count, item) => count + item.quantity, 0)
  },
  
  // Get selected items for checkout
  getSelectedItems() {
    return this.items.filter(item => item.selected)
  }
})

// Global notification system
export const cartNotification = reactive({
  message: '',
  visible: false,
  
  showNotification(message: string) {
    this.message = message
    this.visible = true
    
    // Auto hide after 1.5 seconds (faster)
    setTimeout(() => {
      this.visible = false
    }, 1500)
  }
})
