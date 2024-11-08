Vue.createApp({
    data() {
      return {
        newContact: {
          name: '',
          phone: '',
          category: ''
        },
        contacts: []
      };
    },
    computed: {
      totalMessages() {
        return this.contacts.reduce((total, contact) => total + contact.messages, 0);
      },
      totalCalls() {
        return this.contacts.reduce((total, contact) => total + contact.calls, 0);
      }
    },
    methods: {
      addContact() {
        if (this.newContact.name && this.newContact.phone && this.newContact.category) {
          this.contacts.push({
            ...this.newContact,
            messages: 0,
            calls: 0
          });
          this.newContact = { name: '', phone: '', category: '' };
        } else {
          alert("Por favor, completa todos los campos");
        }
      },
      removeContact(index) {
        this.contacts.splice(index, 1);
      },
      increaseMessages(index) {
        if (this.contacts[index].messages < 25) {
          this.contacts[index].messages++;
        }
      },
      decreaseMessages(index) {
        if (this.contacts[index].messages > 0) {
          this.contacts[index].messages--;
        }
      },
      increaseCalls(index) {
        if (this.contacts[index].calls < 15) {
          this.contacts[index].calls++;
        }
      },
      decreaseCalls(index) {
        if (this.contacts[index].calls > 0) {
          this.contacts[index].calls--;
        }
      }
    }
  }).mount('#app');
  