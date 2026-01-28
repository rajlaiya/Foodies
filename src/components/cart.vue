<template>
    <!-- Payment Options Dialog -->
    <Teleport to="body">
        <transition name="modal">
            <div v-if="showPaymentDialog" class="dialog-overlay" @click.self="closePaymentDialog">
                <div class="dialog-box payment-dialog">
                    <div class="dialog-header">
                        <h3>💳 Select Payment Method</h3>
                        <button class="close-btn" @click="closePaymentDialog">✕</button>
                    </div>
                    <div class="dialog-body">
                        <div class="payment-options">
                            <button 
                                class="payment-option" 
                                @click="selectPayment('UPI')"
                            >
                                <span class="payment-icon">📱</span>
                                <span class="payment-name">UPI</span>
                                <span class="payment-desc">Google Pay, PhonePe, Paytm</span>
                            </button>
                            <button 
                                class="payment-option" 
                                @click="selectPayment('CARD')"
                            >
                                <span class="payment-icon">💳</span>
                                <span class="payment-name">Credit/Debit Card</span>
                                <span class="payment-desc">Visa, Mastercard, RuPay</span>
                            </button>
                            <button 
                                class="payment-option" 
                                @click="selectPayment('COD')"
                            >
                                <span class="payment-icon">💵</span>
                                <span class="payment-name">Cash on Delivery</span>
                                <span class="payment-desc">Pay when you receive</span>
                            </button>
                            <button 
                                class="payment-option" 
                                @click="selectPayment('PAYPAL')"
                            >
                                <span class="payment-icon">🅿️</span>
                                <span class="payment-name">PayPal</span>
                                <span class="payment-desc">Secure online payment</span>
                            </button>
                        </div>
                    </div>
                    <div class="dialog-footer">
                        <p class="total-amount">Total: ${{ (cartStore.getSelectedTotal() + 2.99).toFixed(2) }}</p>
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>

    <!-- Order Confirmation Dialog -->
    <Teleport to="body">
        <transition name="modal">
            <div v-if="showOrderDialog" class="dialog-overlay">
                <div class="dialog-box order-dialog">
                    <div class="dialog-header success-header">
                        <span class="success-icon">✅</span>
                        <h3>Order Placed Successfully!</h3>
                    </div>
                    <div class="dialog-body">
                        <div class="order-details">
                            <div class="order-number-section">
                                <p class="label">YOUR ORDER NUMBER IS</p>
                                <p class="order-number">{{ orderNumber }}</p>
                            </div>
                            <div class="order-message">
                                <p>🚀 YOUR ORDER IS READY SOON</p>
                                <p>AFTER DISPATCH YOU WILL RECEIVE DELIVERY BOY NUMBER AND BILL ON WHATSAPP</p>
                            </div>
                            <div class="payment-method-info">
                                <p>Payment Method: <strong>{{ selectedPaymentMethod }}</strong></p>
                            </div>
                        </div>
                    </div>
                    <div class="dialog-footer">
                        <button class="btn confirm-btn" @click="closeOrderDialog">
                            👍 Got it!
                        </button>
                    </div>
                </div>
            </div>
        </transition>
    </Teleport>

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
            isBuying: false,
            showPaymentDialog: false,
            showOrderDialog: false,
            selectedPaymentMethod: '',
            orderNumber: ''
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
        
        buyNow() {
            if (this.cartStore.getSelectedItems().length === 0) {
                this.cartNotification.showNotification('Please select items to purchase')
                return
            }
            // Show payment dialog
            this.showPaymentDialog = true
        },
        
        closePaymentDialog() {
            this.showPaymentDialog = false
        },
        
        generateOrderNumber() {
            const letter = String.fromCharCode(65 + Math.floor(Math.random() * 26)) // A-Z
            const number = Math.floor(1000 + Math.random() * 9000) // 4 digit number
            return `${letter}${number}`
        },
        
        async selectPayment(method) {
            this.selectedPaymentMethod = method
            this.showPaymentDialog = false
            this.isBuying = true
            
            // Simulate payment processing
            try {
                await new Promise(resolve => setTimeout(resolve, 1500))
                
                // Generate order number
                this.orderNumber = this.generateOrderNumber()
                
                // Remove selected items from cart
                const selectedItems = this.cartStore.getSelectedItems()
                selectedItems.forEach(item => {
                    this.cartStore.removeItem(item.id, item.category)
                })
                
                this.isBuying = false
                // Show order confirmation dialog
                this.showOrderDialog = true
                
            } catch (error) {
                this.isBuying = false
                this.cartNotification.showNotification('❌ Payment failed. Please try again.')
            }
        },
        
        closeOrderDialog() {
            this.showOrderDialog = false
            this.$router.push('/about')
        }
    }
};
</script>

<style>
/* Dialog Styles - Global (for Teleport) */
.dialog-overlay {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    right: 0 !important;
    bottom: 0 !important;
    width: 100vw !important;
    height: 100vh !important;
    background: rgba(0, 0, 0, 0.7) !important;
    display: flex !important;
    align-items: center !important;
    justify-content: center !important;
    z-index: 999999 !important;
    backdrop-filter: blur(5px);
    padding: 1rem;
    box-sizing: border-box;
    overflow: hidden;
    margin: 0 !important;
}

.dialog-box {
    background: white !important;
    border-radius: 12px;
    max-width: 480px;
    width: 95%;
    max-height: 85vh;
    overflow-y: auto;
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    animation: dialogSlideIn 0.3s ease;
}

/* Payment Dialog - Rectangular Wide */
.payment-dialog {
    max-width: 420px;
}

/* Order Dialog - Rectangular Wide */
.order-dialog {
    max-width: 450px;
}

@keyframes dialogSlideIn {
    from {
        opacity: 0;
        transform: scale(0.95) translateY(15px);
    }
    to {
        opacity: 1;
        transform: scale(1) translateY(0);
    }
}

.dialog-header {
    padding: 1.25rem 1.5rem;
    border-bottom: 1px solid #eee;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.dialog-header h3 {
    margin: 0;
    color: #333;
    font-size: 1.2rem;
}

.close-btn {
    background: none;
    border: none;
    font-size: 1.4rem;
    cursor: pointer;
    color: #999;
    padding: 0.25rem;
    border-radius: 50%;
    transition: all 0.2s;
}

.close-btn:hover {
    background: #f0f0f0;
    color: #333;
}

.dialog-body {
    padding: 1.25rem 1.5rem;
}

.dialog-footer {
    padding: 1rem 1.5rem;
    border-top: 1px solid #eee;
    text-align: center;
}

/* Payment Options */
.payment-options {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 0.75rem;
}

.payment-option {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    padding: 1rem 0.75rem;
    background: #f8f9fa;
    border: 2px solid #e9ecef;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.2s ease;
    text-align: center;
}

.payment-option:hover {
    background: #fff;
    border-color: #ff6b35;
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 107, 53, 0.15);
}

.payment-icon {
    font-size: 2rem;
    text-align: center;
}

.payment-name {
    font-weight: 600;
    color: #333;
    font-size: 0.95rem;
    display: block;
}

.payment-desc {
    font-size: 0.7rem;
    color: #666;
    display: block;
}

.total-amount {
    font-size: 1.1rem;
    font-weight: bold;
    color: #ff6b35;
    margin: 0;
}

/* Order Confirmation Dialog */
.success-header {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    flex-direction: column;
    text-align: center;
    gap: 0.5rem;
    border-radius: 12px 12px 0 0;
    padding: 1.5rem;
}

.success-header h3 {
    color: white;
    font-size: 1.2rem;
}

.success-icon {
    font-size: 2.5rem;
}

.order-details {
    text-align: center;
}

.order-number-section {
    background: linear-gradient(135deg, #667eea, #764ba2);
    padding: 1.25rem;
    border-radius: 12px;
    margin-bottom: 1.25rem;
}

.order-number-section .label {
    color: rgba(255, 255, 255, 0.9);
    font-size: 0.8rem;
    margin: 0 0 0.4rem 0;
    letter-spacing: 1px;
}

.order-number {
    font-size: 2.2rem;
    font-weight: bold;
    color: white;
    margin: 0;
    letter-spacing: 4px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
}

.order-message {
    background: #f8f9fa;
    padding: 1rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

.order-message p {
    margin: 0.4rem 0;
    color: #333;
    font-size: 0.85rem;
    line-height: 1.5;
}

.order-message p:first-child {
    font-weight: 600;
    color: #28a745;
    font-size: 0.95rem;
}

.payment-method-info {
    color: #666;
    font-size: 0.9rem;
}

.payment-method-info strong {
    color: #ff6b35;
}

.confirm-btn {
    background: linear-gradient(135deg, #28a745, #20c997);
    color: white;
    padding: 0.9rem 2.5rem;
    font-size: 1.05rem;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    transition: all 0.3s ease;
    width: 100%;
}

.confirm-btn:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(40, 167, 69, 0.3);
}

/* Modal Transition */
.modal-enter-active, .modal-leave-active {
    transition: opacity 0.3s ease;
}

.modal-enter-from, .modal-leave-to {
    opacity: 0;
}

/* Mobile Responsive for Dialogs */
@media (max-width: 768px) {
    .dialog-overlay {
        padding: 0.5rem !important;
    }
    
    .dialog-box {
        max-width: 320px;
        max-height: 75vh;
        border-radius: 12px;
        width: 95%;
    }
    
    .payment-dialog,
    .order-dialog {
        max-width: 320px;
    }
    
    .dialog-header {
        padding: 0.85rem 1rem;
    }
    
    .dialog-header h3 {
        font-size: 1rem;
    }
    
    .close-btn {
        font-size: 1.2rem;
    }
    
    .dialog-body {
        padding: 0.85rem 1rem;
    }
    
    .dialog-footer {
        padding: 0.65rem 1rem;
    }
    
    /* Payment options stacked on mobile */
    .payment-options {
        grid-template-columns: 1fr;
        gap: 0.5rem;
    }
    
    .payment-option {
        flex-direction: row;
        padding: 0.65rem 0.85rem;
        text-align: left;
        gap: 0.65rem;
    }
    
    .payment-icon {
        font-size: 1.4rem;
    }
    
    .payment-name {
        font-size: 0.85rem;
    }
    
    .payment-desc {
        font-size: 0.65rem;
    }
    
    .total-amount {
        font-size: 0.95rem;
    }
    
    .success-header {
        padding: 1rem;
        border-radius: 12px 12px 0 0;
    }
    
    .success-header h3 {
        font-size: 0.95rem;
    }
    
    .success-icon {
        font-size: 1.8rem;
    }
    
    .order-number-section {
        padding: 0.85rem;
        border-radius: 10px;
        margin-bottom: 0.85rem;
    }
    
    .order-number-section .label {
        font-size: 0.65rem;
    }
    
    .order-number {
        font-size: 1.6rem;
        letter-spacing: 3px;
    }
    
    .order-message {
        padding: 0.75rem;
        border-radius: 8px;
        margin-bottom: 0.65rem;
    }
    
    .order-message p {
        font-size: 0.72rem;
        margin: 0.25rem 0;
    }
    
    .order-message p:first-child {
        font-size: 0.8rem;
    }
    
    .payment-method-info {
        font-size: 0.78rem;
    }
    
    .confirm-btn {
        padding: 0.7rem 1.5rem;
        font-size: 0.9rem;
        border-radius: 8px;
    }
}

/* Extra small devices */
@media (max-width: 480px) {
    .payment-options {
        gap: 0.35rem;
    }
    
    .payment-option {
        padding: 0.5rem 0.75rem;
        gap: 0.5rem;
        border-radius: 8px;
    }
    
    .payment-icon {
        font-size: 1.2rem;
        width: 28px;
    }
    
    .payment-name {
        font-size: 0.8rem;
    }
    
    .payment-desc {
        font-size: 0.6rem;
    }
    
    .total-amount {
        font-size: 0.85rem;
    }
    
    .success-header {
        padding: 0.65rem;
        border-radius: 12px 12px 0 0;
    }
    
    .success-header h3 {
        font-size: 0.85rem;
    }
    
    .success-icon {
        font-size: 1.5rem;
    }
    
    .order-number-section {
        padding: 0.65rem;
        border-radius: 10px;
        margin-bottom: 0.65rem;
    }
    
    .order-number-section .label {
        font-size: 0.6rem;
    }
    
    .order-number {
        font-size: 1.4rem;
        letter-spacing: 2px;
    }
    
    .order-message {
        padding: 0.5rem;
        border-radius: 8px;
        margin-bottom: 0.5rem;
    }
    
    .order-message p {
        font-size: 0.65rem;
        margin: 0.15rem 0;
    }
    
    .order-message p:first-child {
        font-size: 0.7rem;
    }
    
    .payment-method-info {
        font-size: 0.7rem;
    }
    
    .confirm-btn {
        padding: 0.6rem 1rem;
        font-size: 0.85rem;
        border-radius: 8px;
    }
}
</style>

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
    overflow: hidden;
    box-sizing: border-box;
    width: 100%;
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
    overflow: hidden;
}

.item-name {
    font-size: 1.2rem;
    font-weight: bold;
    color: #333;
    margin: 0 0 0.5rem 0;
    word-wrap: break-word;
    overflow-wrap: break-word;
}

.item-description {
    color: #666;
    font-size: 0.9rem;
    margin: 0 0 0.5rem 0;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    word-wrap: break-word;
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
    justify-content: center;
    flex-wrap: wrap;
}

.btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 12px;
    font-weight: bold;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    min-width: 140px;
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
        margin: 0.5rem;
        padding: 1rem;
        padding-bottom: 120px;
        min-height: calc(100vh - 120px);
        display: flex;
        flex-direction: column;
    }
    
    .cart-header {
        margin-bottom: 1rem;
        text-align: center;
        flex-wrap: wrap;
    }
    
    .cart-header h2 {
        font-size: 1.5rem;
    }
    
    .cart-title {
        font-size: 1.5rem;
        margin-bottom: 0.5rem;
    }
    
    .cart-items {
        margin-bottom: 1rem;
    }
    
    .cart-item {
        flex-direction: column;
        gap: 0.75rem;
        text-align: center;
        padding: 1rem;
        margin-bottom: 0.75rem;
        width: 100%;
        box-sizing: border-box;
    }
    
    .checkbox-container {
        align-self: flex-start;
    }
    
    .item-details {
        order: 1;
        text-align: center;
        width: 100%;
        padding: 0 0.5rem;
    }
    
    .item-name {
        font-size: 1rem;
        margin-bottom: 0.25rem;
        word-wrap: break-word;
    }
    
    .item-description {
        font-size: 0.85rem;
        margin-bottom: 0.25rem;
        -webkit-line-clamp: 2;
        text-align: center;
    }
    
    .item-category {
        font-size: 0.75rem;
    }
    
    .item-image {
        order: 0;
        width: 70px;
        height: 70px;
        margin: 0 auto;
    }
    
    .quantity-controls {
        order: 3;
        justify-content: center;
        gap: 0.5rem;
        padding: 0.4rem;
    }
    
    .qty-btn {
        width: 32px;
        height: 32px;
        font-size: 1rem;
    }
    
    .quantity {
        min-width: 25px;
        font-size: 0.95rem;
    }
    
    .item-price {
        order: 4;
        font-size: 1rem;
        font-weight: 600;
        min-width: auto;
    }
    
    .unit-price {
        font-size: 0.8rem;
    }
    
    .total-price {
        font-size: 1rem;
    }
    
    .remove-btn {
        order: 5;
        font-size: 1rem;
        padding: 0.4rem;
    }
    
    .select-all-section {
        padding: 0.75rem;
        margin-bottom: 1rem;
    }
    
    .cart-summary {
        margin-top: auto;
        padding: 1rem;
        margin-bottom: 0;
    }
    
    .summary-row {
        font-size: 0.9rem;
        margin-bottom: 0.5rem;
    }
    
    .total-row {
        font-size: 1.1rem;
    }
    
    .action-buttons {
        flex-direction: column;
        gap: 0.75rem;
        width: 100%;
        padding: 0;
        margin-top: 1rem;
    }
    
    .btn {
        width: 100%;
        padding: 0.9rem 1.2rem;
        font-size: 0.95rem;
        justify-content: center;
        box-sizing: border-box;
    }
    
    .clear-btn {
        order: 1;
    }
    
    .buy-now-btn {
        order: 0;
        font-size: 1rem;
        padding: 1rem 1.2rem;
    }
}

@media (max-width: 480px) {
    .cart-section {
        margin: 0.25rem;
        padding: 0.75rem;
        padding-bottom: 130px;
    }
    
    .cart-header h2 {
        font-size: 1.3rem;
    }
    
    .cart-count {
        font-size: 0.8rem;
        padding: 0.3rem 0.6rem;
    }
    
    .cart-item {
        padding: 0.75rem;
    }
    
    .item-name {
        font-size: 0.95rem;
    }
    
    .item-description {
        font-size: 0.8rem;
    }
    
    .item-image {
        width: 60px;
        height: 60px;
    }
    
    .qty-btn {
        width: 28px;
        height: 28px;
        font-size: 0.9rem;
    }
    
    .cart-summary {
        padding: 0.75rem;
    }
    
    .summary-row {
        font-size: 0.85rem;
    }
    
    .total-row {
        font-size: 1rem;
    }
    
    .btn {
        padding: 0.8rem 1rem;
        font-size: 0.9rem;
    }
    
    .buy-now-btn {
        padding: 0.9rem 1rem;
        font-size: 0.95rem;
    }
}
</style>