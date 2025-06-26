<template>
    <section class="cart-section">
        <div class="cart-header">
            <h2>🛒 Your Cart</h2>            <div class="cart-count" v-if="cartStore.getItemCount() > 0">
                {{ cartStore.getItemCount() }} items
            </div>
        </div>
        
        <!-- Cart Notification -->
        <transition name="notification">
            <div v-if="cartNotification.visible" class="cart-notification">
                {{ cartNotification.message }}
            </div>
        </transition>
        
        <div v-if="cartStore.items.length === 0" class="empty-cart">
            <div class="empty-cart-icon">🛒</div>
            <h3>Your cart is empty</h3>
            <p>Add some delicious items from our menu!</p>
            <router-link to="/about" class="btn browse-btn">
                <span>🍽️</span> Browse Menu
            </router-link>
        </div>
        
        <div v-else class="cart-content">
            <!-- Select All -->
            <div class="select-all-section">
                <label class="checkbox-container">
                    <input 
                        type="checkbox" 
                        :checked="allSelected"
                        @change="toggleSelectAll"
                    />
                    <span class="checkmark"></span>
                    Select All ({{ cartStore.items.length }} items)
                </label>
            </div>
            
            <!-- Cart Items -->
            <div class="cart-items">
                <transition-group name="cart-item" tag="div">
                    <div 
                        v-for="item in cartStore.items" 
                        :key="`${item.id}-${item.category}`"
                        class="cart-item"
                        :class="{ 'selected': item.selected }"
                    >
                        <label class="checkbox-container">
                            <input 
                                type="checkbox" 
                                v-model="item.selected"
                                @change="updateTotals"
                            />
                            <span class="checkmark"></span>
                        </label>
                        
                        <div class="item-image">
                            <img :src="item.image" :alt="item.name" />
                        </div>
                        
                        <div class="item-details">
                            <h4 class="item-name">{{ item.name }}</h4>
                            <p class="item-description">{{ item.description }}</p>
                            <div class="item-category">{{ item.category || 'Food' }}</div>
                        </div>
                        
                        <div class="quantity-controls">
                            <button 
                                @click="decreaseQuantity(item)" 
                                :disabled="item.quantity === 1"
                                class="qty-btn"
                            >
                                −
                            </button>
                            <span class="quantity">{{ item.quantity }}</span>
                            <button 
                                @click="increaseQuantity(item)" 
                                class="qty-btn"
                            >
                                +
                            </button>
                        </div>
                        
                        <div class="item-price">
                            <div class="unit-price">${{ item.price.toFixed(2) }}</div>
                            <div class="total-price">${{ (item.price * item.quantity).toFixed(2) }}</div>
                        </div>
                        
                        <button 
                            @click="removeItem(item)"
                            class="remove-btn"
                            title="Remove item"
                        >
                            🗑️
                        </button>
                    </div>
                </transition-group>
            </div>
            
            <!-- Cart Summary -->
            <div class="cart-summary">
                <div class="summary-row">                    <span>Subtotal ({{ cartStore.getSelectedItems().length }} items):</span>
                    <span class="price">${{ cartStore.getSelectedTotal().toFixed(2) }}</span>
                </div>
                <div class="summary-row">
                    <span>Delivery Fee:</span>
                    <span class="price">$2.99</span>
                </div>
                <div class="summary-row total-row">                    <span>Total:</span>
                    <span class="price">${{ (cartStore.getSelectedTotal() + 2.99).toFixed(2) }}</span>
                </div>
                
                <div class="action-buttons">
                    <button 
                        @click="clearCart" 
                        class="btn clear-btn"
                        v-if="cartStore.items.length > 0"
                    >
                        Clear Cart
                    </button>
                    <button 
                        @click="buyNow" 
                        class="btn buy-now-btn"
                        :disabled="cartStore.getSelectedItems().length === 0"
                        :class="{ 'buying': isBuying }"
                    >
                        <span v-if="!isBuying">💳 Buy Now</span>
                        <span v-else>
                            <span class="loading-spinner"></span>
                            Processing...
                        </span>
                    </button>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { cartStore, cartNotification } from '../stores/cart.ts'

export default {
    name: "Cart",
    data() {
        return {
            cartStore,
            cartNotification,
            isBuying: false
        };
    },
    computed: {
        allSelected() {
            return this.cartStore.items.length > 0 && 
                   this.cartStore.items.every(item => item.selected)
        }
    },
    methods: {
        toggleSelectAll() {
            const selectAll = !this.allSelected
            this.cartStore.toggleSelectAll(selectAll)
            this.updateTotals()
        },
        
        increaseQuantity(item) {
            this.cartStore.updateQuantity(item.id, item.category, item.quantity + 1)
            this.updateTotals()
        },
        
        decreaseQuantity(item) {
            if (item.quantity > 1) {
                this.cartStore.updateQuantity(item.id, item.category, item.quantity - 1)
                this.updateTotals()
            }
        },
        
        removeItem(item) {
            this.cartStore.removeItem(item.id, item.category)
            this.cartNotification.showNotification(`${item.name} removed from cart`)
            this.updateTotals()
        },
        
        clearCart() {
            if (confirm('Are you sure you want to clear your cart?')) {
                this.cartStore.clearCart()
                this.cartNotification.showNotification('Cart cleared')
            }
        },
        
        updateTotals() {
            // Force reactivity update
            this.$forceUpdate()
        },
          async buyNow() {
            if (this.cartStore.getSelectedItems().length === 0) {
                this.cartNotification.showNotification('Please select items to purchase')
                return
            }
            
            this.isBuying = true
            
            // Simulate purchase process
            try {
                await new Promise(resolve => setTimeout(resolve, 2000))
                
                const selectedItems = this.cartStore.getSelectedItems()
                const total = this.cartStore.getSelectedTotal() + 2.99
                
                // Remove selected items from cart
                selectedItems.forEach(item => {
                    this.cartStore.removeItem(item.id, item.category)
                })
                
                this.cartNotification.showNotification(
                    `🎉 Purchase successful! Total: $${total.toFixed(2)}`
                )
                
                // Redirect to success page or home
                setTimeout(() => {
                    this.$router.push('/about')
                }, 1500)
                
            } catch (error) {
                this.cartNotification.showNotification('❌ Purchase failed. Please try again.')
            } finally {
                this.isBuying = false
            }
        }
    }
};
</script>

<style scoped>
.cart-section {
    max-width: 1000px;
    margin: 2rem auto;
    padding: 2rem;
    /* background: rgba(255, 255, 255, 0.95); */
    backdrop-filter: blur(10px);
    border-radius: 20px;
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
    min-height: 60vh;
}

.cart-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 2rem;
    padding-bottom: 1rem;
    border-bottom: 2px solid #f0f0f0;
}

.cart-header h2 {
    color: #333;
    font-size: 2rem;
    margin: 0;
}

.cart-count {
    background: #ff6b35;
    color: white;
    padding: 0.5rem 1rem;
    border-radius: 20px;
    font-weight: bold;
    animation: pulse 2s infinite;
}

/* Cart Notification */
.cart-notification {
    background: #4caf50;
    color: white;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
    text-align: center;
    font-weight: bold;
}

.notification-enter-active, .notification-leave-active {
    transition: all 0.3s ease;
}

.notification-enter-from, .notification-leave-to {
    opacity: 0;
    transform: translateY(-20px);
}

/* Empty Cart */
.empty-cart {
    text-align: center;
    padding: 4rem 0;
    color: #666;
}

.empty-cart-icon {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0.5;
}

.empty-cart h3 {
    color: #333;
    margin-bottom: 0.5rem;
}

.browse-btn {
    background: linear-gradient(45deg, #ff6b35, #f7931e);
    color: white;
    padding: 1rem 2rem;
    border: none;
    border-radius: 15px;
    text-decoration: none;
    font-weight: bold;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 1rem;
    transition: all 0.3s ease;
}

.browse-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(255, 107, 53, 0.3);
}

/* Select All */
.select-all-section {
    margin-bottom: 1.5rem;
    padding: 1rem;
    background: #f8f9fa;
    border-radius: 10px;
}

/* Checkbox Styling */
.checkbox-container {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-weight: 500;
    gap: 0.5rem;
}

.checkbox-container input {
    display: none;
}

.checkmark {
    width: 20px;
    height: 20px;
    border: 2px solid #ddd;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.3s ease;
}

.checkbox-container input:checked + .checkmark {
    background: #ff6b35;
    border-color: #ff6b35;
}

.checkbox-container input:checked + .checkmark::after {
    content: '✓';
    color: white;
    font-weight: bold;
}

/* Cart Items */
.cart-items {
    margin-bottom: 2rem;
}

.cart-item {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding: 1.5rem;
    background: white;
    border-radius: 15px;
    margin-bottom: 1rem;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08);
    transition: all 0.3s ease;
    border: 2px solid transparent;
}

.cart-item.selected {
    border-color: #ff6b35;
    background: #fff8f5;
}

.cart-item:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.12);
}

.item-image {
    width: 80px;
    height: 80px;
    border-radius: 10px;
    overflow: hidden;
    flex-shrink: 0;
}

.item-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.item-details {
    flex: 1;
    min-width: 0;
}

.item-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin: 0 0 0.5rem 0;
}

.item-description {
    color: #666;
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

.item-category {
    background: #e9ecef;
    color: #495057;
    padding: 0.25rem 0.5rem;
    border-radius: 12px;
    font-size: 0.8rem;
    display: inline-block;
}

/* Quantity Controls */
.quantity-controls {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #f8f9fa;
    border-radius: 25px;
    padding: 0.5rem;
}

.qty-btn {
    width: 30px;
    height: 30px;
    border: none;
    border-radius: 50%;
    background: #ff6b35;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: bold;
    transition: all 0.2s ease;
}

.qty-btn:hover:not(:disabled) {
    background: #e55a2b;
    transform: scale(1.1);
}

.qty-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
}

.quantity {
    min-width: 30px;
    text-align: center;
    font-weight: bold;
}

/* Item Price */
.item-price {
    text-align: center;
    min-width: 80px;
}

.unit-price {
    color: #666;
    font-size: 0.9rem;
}

.total-price {
    font-weight: bold;
    font-size: 1.1rem;
    color: #ff6b35;
}

/* Remove Button */
.remove-btn {
    background: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    padding: 0.5rem;
    border-radius: 50%;
    transition: all 0.2s ease;
}

.remove-btn:hover {
    background: #ffe6e6;
    transform: scale(1.1);
}

/* Cart Summary */
.cart-summary {
    background: #f8f9fa;
    padding: 2rem;
    border-radius: 15px;
    border: 2px solid #ff6b35;
}

.summary-row {
    display: flex;
    justify-content: space-between;
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.total-row {
    border-top: 2px solid #ddd;
    padding-top: 1rem;
    font-weight: bold;
    font-size: 1.3rem;
    color: #ff6b35;
}

.price {
    font-weight: bold;
}

/* Action Buttons */
.action-buttons {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
    justify-content: flex-end;
}

.btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 15px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
}

.clear-btn {
    background: #6c757d;
    color: white;
}

.clear-btn:hover {
    background: #5a6268;
    transform: translateY(-2px);
}

.buy-now-btn {
    background: linear-gradient(45deg, #28a745, #20c997);
    color: white;
    font-size: 1.1rem;
    position: relative;
    overflow: hidden;
}

.buy-now-btn:hover:not(:disabled) {
    background: linear-gradient(45deg, #218838, #1abc9c);
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
}

.buy-now-btn:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
}

.buy-now-btn.buying {
    background: linear-gradient(45deg, #17a2b8, #6f42c1);
}

/* Loading Spinner */
.loading-spinner {
    width: 20px;
    height: 20px;
    border: 2px solid transparent;
    border-top: 2px solid white;
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin-right: 0.5rem;
}

/* Animations */
@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.05); }
}

@keyframes spin {
    to { transform: rotate(360deg); }
}

/* Cart Item Transitions */
.cart-item-enter-active, .cart-item-leave-active {
    transition: all 0.5s ease;
}

.cart-item-enter-from {
    opacity: 0;
    transform: translateX(-50px);
}

.cart-item-leave-to {
    opacity: 0;
    transform: translateX(50px);
}

.cart-item-move {
    transition: transform 0.5s ease;
}

/* Responsive Design */
@media (max-width: 768px) {
    .cart-section {
        margin: 0.75rem;
        padding: 1rem 0.75rem;
        min-height: calc(100vh - 1.5rem);
        display: flex;
        flex-direction: column;
    }
    
    .cart-header {
        margin-bottom: 1rem;
        text-align: center;
    }
    
    .cart-title {
        font-size: 2rem;
        margin-bottom: 0.5rem;
    }
    
    .cart-item {
        flex-direction: column;
        gap: 0.75rem;
        text-align: center;
        padding: 1rem;
        margin-bottom: 0.75rem;
    }
    
    .item-checkbox {
        order: 0;
        align-self: center;
        margin-bottom: 0.5rem;
    }
    
    .item-details {
        order: 1;
        text-align: center;
    }
    
    .item-name {
        font-size: 1.1rem;
        margin-bottom: 0.25rem;
    }
    
    .item-description {
        font-size: 0.85rem;
        margin-bottom: 0.25rem;
    }
    
    .item-category {
        font-size: 0.8rem;
    }
    
    .item-image {
        order: 2;
        width: 80px;
        height: 80px;
        margin: 0 auto;
    }
    
    .quantity-controls {
        order: 3;
        justify-content: center;
        gap: 0.75rem;
    }
    
    .qty-btn {
        width: 35px;
        height: 35px;
        font-size: 1rem;
    }
    
    .qty-display {
        font-size: 1rem;
        padding: 0.4rem 0.8rem;
    }
    
    .item-price {
        order: 4;
        font-size: 1.1rem;
        font-weight: 600;
    }
    
    .cart-actions {
        margin: 1rem 0;
        flex-direction: column;
        gap: 0.75rem;
        align-items: center;
    }
    
    .select-all-section {
        flex-direction: column;
        gap: 0.5rem;
        text-align: center;
    }
    
    .action-buttons {
        flex-direction: column;
        gap: 0.5rem;
        width: 100%;
        max-width: 280px;
    }
    
    .action-btn {
        padding: 0.7rem 1rem;
        font-size: 0.9rem;
    }
    
    .cart-summary {
        margin-top: auto;
        padding: 1rem;
    }
    
    .summary-row {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    .summary-total {
        font-size: 1.2rem;
        border-top: 2px solid rgba(255, 255, 255, 0.3);
        padding-top: 0.75rem;
        margin-top: 0.75rem;
    }
    
    .checkout-btn {
        padding: 0.8rem 1.5rem;
        font-size: 1rem;
        margin-top: 1rem;
    }
}

@media (max-width: 480px) {
    .cart-section {
        margin: 0.5rem;
        padding: 0.75rem 0.5rem;
    }
    
    .cart-title {
        font-size: 1.6rem;
    }
    
    .cart-item {
        padding: 0.75rem;
    }
    
    .item-name {
        font-size: 1rem;
    }
    
    .item-image {
        width: 70px;
        height: 70px;
    }
    
    .qty-btn {
        width: 32px;
        height: 32px;
        font-size: 0.9rem;
    }
    
    .action-btn {
        padding: 0.6rem 0.8rem;
        font-size: 0.85rem;
    }
    
    .checkout-btn {
        padding: 0.7rem 1.2rem;
        font-size: 0.95rem;
    }
}
</style>