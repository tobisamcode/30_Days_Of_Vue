const app = Vue.createApp({
    data() {
        return {
            counter: 0,
            name: '',
            // confirmedName: ''
            fullname: ''
        };
    },
    watch: {
        counter(value) {
            if (value > 50) {
                this.counter = 0
            }
        }
        // name(value) {
        //     if (value === '') {
        //         this.fullname = ''
        //     } else {
        //         this.fullname = value + ' ' + 'Adesokan';
        //     }
        // }
    },
    computed: {
        fullName() {
            console.log("runnimg");
            if (this.name === '') {
                return '';
            }
            return this.name + ' ' + 'Adesokan';
        }
    },
    methods: {
        // outputFullName() {
        //     console.log("runnimg");
        //     if (this.name === '') {
        //         return '';
        //     }
        //     return this.name + ' ' + 'Adesokan';
        // },
        // confirmInput() {
        //     this.confirmedName = this.name;
        // },
        submitForm() {
            alert('submitted!')
        },
        setName(event) {
            this.name = event.target.value
        },
        add(num) {
            this.counter = this.counter + num;
        },
        reduce(num) {
            this.counter = this.counter - num;
            // this.counter--;
        },
        resetInput() {
            this.name = '';
        }
    }
});

app.mount('#events');