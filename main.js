const app = Vue.createApp({
    data() {
        return {
            cart: [],
            premium: true
        }
    },
    methods: {
        updateCart(id) {
            this.cart.push(id)
        },
        reduceCart(id) {
            const itemIndex = this.cart.indexOf(id)
            if (itemIndex >= 0) {
                this.cart.splice(itemIndex, 1)
            }
        }
    }
})
