const { createApp } = Vue

createApp({
    data() {
        return {
            isDarked: false,
        }
    },
    methods: {
        changeTheme() {
            if (!this.isDarked){
                document.querySelector('html').classList.add('dark');
                document.querySelector('html').classList.remove('light');
                this.isDarked = true;
            } else {
                document.querySelector('html').classList.add('light');
                document.querySelector('html').classList.remove('dark');
                this.isDarked = false;
            }
        }
    }
}).mount('#app')