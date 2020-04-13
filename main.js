Vue.component('product', {
    props: {
        premium: {
            type: Boolean,
            require: true
        }
    },
    template: `
    <div class="product">

    <div class="product-image">
        <img :src="image">
    </div>

    <div class="product-info">

        <h1>{{ title }}</h1>

        <p>{{description}}</p>

        <p v-if="inStock">In Stock</p>

        <p v-else :class="{crossout: !inStock}"
        >Out of Stock</p>

        <p>Shipping: {{ shipping }}</p>


        <ul>
            <li v-for="detail in details">{{ detail }}</li>
        </ul>

        <div v-for="(variant, index) in variants"
            :key="variant.variantId"
            class="colour-box"
            :style="{backgroundColor: variant.variantColour}"
            @mouseover="updateProduct(index)">
        </div>

        <div>
            <p>Sizes:</p>
        </div>

        <ul>
            <li v-for="size in sizes">{{ size }}</li>
        </ul>

        <button @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
        >Add to cart</button>

        <button @click="removeFromCart">Remove</button>

        <div class="cart">
            <p>Cart({{ cart }})</p>
        </div>

    </div>
    `,
    data() {
        return {
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
        }
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
        },
        shipping() {
            if(this.premium) {
                return 'Free'
            }
            return 2.99
        }
    }
})

var app = new Vue({
    el: '#app',
    data: {
        premium: true
    }
})
