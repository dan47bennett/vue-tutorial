

var app = new Vue({
    el: '#app',
    data: {
        brand: 'Vue Mastery',
        product: "Socks",
        description: "Socks to show your mastery of Vue",
        selectedVariant: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColour: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg',
                variantQuantity: 10,
            },
            {
                variantId: 2235,
                variantColour: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg',
                variantQuantity: 0,
            }
        ],
        sizes: ['Small', 'Medium', 'Large'],
        cart: 0
    },
    methods: {
        addToCart() {
            this.cart += 1
        },
        removeFromCart(){
            if(this.cart > 0) {
                this.cart -= 1
            }
        },
        updateProduct(index) {
            this.selectedVariant = index
        }
    },
    computed: {
        title() {
            return this.brand + ' ' + this.product
        },
        image() {
            return this.variants[this.selectedVariant].variantImage
        },
        inStock() {
            return this.variants[this.selectedVariant].variantQuantity
        }
    }
})
