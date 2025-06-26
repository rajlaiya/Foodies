<template>
    <section class="cart-section">
        <h2>Your Cart</h2>
        <div v-if="cartItems.length === 0" class="empty-cart">
            <p>Your cart is empty.</p>
            <router-link to="/menu" class="btn">Browse Menu</router-link>
        </div>
        <div v-else>
            <table class="cart-table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Qty</th>
                        <th>Price</th>
                        <th>Total</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="item in cartItems" :key="item.id">
                        <td>{{ item.name }}</td>
                        <td>
                            <button @click="updateQty(item, item.quantity - 1)" :disabled="item.quantity === 1">-</button>
                            {{ item.quantity }}
                            <button @click="updateQty(item, item.quantity + 1)">+</button>
                        </td>
                        <td>{{ formatPrice(item.price) }}</td>
                        <td>{{ formatPrice(item.price * item.quantity) }}</td>
                        <td>
                            <button @click="removeItem(item.id)" class="remove-btn">Remove</button>
                        </td>
                    </tr>
                </tbody>
            </table>
            <div class="cart-summary">
                <p><strong>Subtotal:</strong> {{ formatPrice(cartTotal) }}</p>
                <router-link to="/checkout" class="btn checkout-btn">Proceed to Checkout</router-link>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: "Cart",
    data() {
        return {
            cartItems: [
                // Example data, replace with actual cart state or Vuex store
                // { id: 1, name: "Margherita Pizza", price: 12.99, quantity: 2 },
                // { id: 2, name: "Veggie Burger", price: 9.5, quantity: 1 },
            ],
        };
    },
    computed: {
        cartTotal() {
            return this.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
        },
    },
    methods: {
        formatPrice(value) {
            return `$${value.toFixed(2)}`;
        },
        updateQty(item, newQty) {
            if (newQty < 1) return;
            item.quantity = newQty;
            // Update cart in store or backend as needed
        },
        removeItem(id) {
            this.cartItems = this.cartItems.filter(item => item.id !== id);
            // Update cart in store or backend as needed
        },
    },
    // In real app, fetch cart items from store or API in created/mounted hook
};
</script>

<style scoped>
.cart-section {
    max-width: 800px;
    margin: 2rem auto;
    padding: 2rem;
    background: #fff;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}
.cart-section h2 {
    margin-bottom: 1.5rem;
}
.empty-cart {
    text-align: center;
    padding: 2rem 0;
}
.cart-table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 1.5rem;
}
.cart-table th, .cart-table td {
    padding: 0.75rem;
    text-align: center;
    border-bottom: 1px solid #eee;
}
.cart-table button {
    padding: 0.2rem 0.7rem;
    margin: 0 0.2rem;
    background: #f5f5f5;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}
.cart-table .remove-btn {
    color: #e74c3c;
    background: none;
    border: none;
    cursor: pointer;
}
.cart-summary {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.btn {
    background: #ff7f50;
    color: #fff;
    padding: 0.7rem 1.5rem;
    border: none;
    border-radius: 6px;
    text-decoration: none;
    font-weight: bold;
    cursor: pointer;
    transition: background 0.2s;
}
.btn:hover {
    background: #ff6333;
}
.checkout-btn {
    margin-left: 1rem;
}
</style>