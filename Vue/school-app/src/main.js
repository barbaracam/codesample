import { createApp } from 'vue';

import App from './App.vue';

//Moving this to app(import as no needed as global)
// import ActivePerson from './components/ActivePerson.vue';
// import CardBase from './components/CardBase.vue';

//Moving this to cardBase(import as no needed as global)
// import CardElement from './components/CardElement.vue';


const app = createApp(App);

//Moving this to app(import as no needed as global)
// app.component('active-person', ActivePerson);
// app.component('card-base', CardBase);
// app.component('card-element', CardElement);


app.mount('#app');
