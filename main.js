var app = new Vue({
    el: '#app',
    data: {
        product: "Socks",
        description: "Socks to show your mastery of Vue",
        image: './assets/vmSocks-green-onWhite.jpg',
        link: 'https://www.amazon.co.uk/s?k=socks&ref=nb_sb_noss',
        inventory: 0,
        details: ["80% cotton", "20% polyester", "Gender-neutral"],
        variants: [
            {
                variantId: 2234,
                variantColour: "green"
            },
            {
                variantId: 2235,
                variantColour: "blue"
            }
        ],
        sizes: ['Small', 'Medium', 'Large']
    }
})
