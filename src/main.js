const { createApp } = Vue

createApp({
    data() {
        return {
            isDarked: false,
            isShown: true,
            isFilled: false,
            notes: [],
            headingValue: '',
            noteValue: '',
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
        },
        headingChangeHandler(event) {
            this.headingValue = event.target.value;
        },
        noteChangeHandler(event) {
            this.noteValue = event.target.value;
        },
        addNote() {
            if (this.headingValue !== '' && this.noteValue !== '') {
                this.notes.push([this.headingValue, this.noteValue]);
                this.headingValue = '';
                this.noteValue = '';
                this.isFilled = false;
                console.log(`isFilled: ${this.isFilled}`);
            } else {
                this.isFilled = true;
                console.log(`isFilled: ${this.isFilled}`);
            }
        },
        showDeleteBtn(index) {
            if (document.getElementById(`${index}`).classList.contains('hidden')){
                document.getElementById(`${index}`).classList.remove('hidden');
            } else {
                document.getElementById(`${index}`).classList.add('hidden')
            }
        },
        deleteNote(index) {
            this.notes.splice(index,1);
        }
    }
}).mount('#app')