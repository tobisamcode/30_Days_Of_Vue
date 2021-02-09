const app = Vue.createApp({
    data() {
        return {
            counter: 0,
        }
    },
    methods: {
        add(num) {
            this.counter = this.counter + num;
        },
        subtract(num) {
            this.counter = this.counter - num;
        }
    }
});

app.mount('#events')