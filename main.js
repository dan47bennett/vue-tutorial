var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "Socks to show your mastery of Vue",
        link: 'https://www.amazon.co.uk/s?k=socks&ref=nb_sb_noss',
        image: './assets/vmSocks-green-onWhite.jpg',
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColour: "green",
                variantImage: './assets/vmSocks-green-onWhite.jpg'
            },
            {
                variantId: 2235,
                variantColour: "blue",
                variantImage: './assets/vmSocks-blue-onWhite.jpg'
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
        updateProduct(variantImage) {
            this.image = variantImage
        }
    }
})
