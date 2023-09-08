const app = Vue.createApp({
    data() {
        return {
            title: 'I love taking Pizza',
            assignmentName: 'assign',
            likePizza: true,
            showtitle: true,
            pizzaTypes: [
                'Americana',
                'Hawaiian',
                'Capricciosa',
                'Margherita',
                'Vegetarian',
                'Cheese and Garlic',
                'Roast special',
                'Avocado',
                'Pesto Fetta',
            ],
            displayPizza:false,
            favoritePizza:'',
        };
    },
    methods: {
    },
});

app.mount('#app');