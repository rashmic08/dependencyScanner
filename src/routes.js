import Profile from './components/Profile.vue';
import Scanner from './components/Scanner.vue';

const routes = [
    { path: '/', component: Scanner },
    { path: '/profile', component: Profile }  
];

export default routes;