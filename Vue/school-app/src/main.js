import { createApp } from 'vue';

import App from './App.vue';
import ActivePerson from './components/ActivePerson.vue';
import CardBase from './components/CardBase.vue';
import CardElement from './components/CardElement.vue';


const app = createApp(App);

app.component('active-person', ActivePerson);
app.component('card-base', CardBase);
app.component('card-element', CardElement);


app.mount('#app');
