import Vue from 'vue';
import App from './App';
import router from './router';
import VueAwesomeSwiper from 'vue-awesome-swiper';
import 'swiper/dist/css/swiper.css';

Vue.use(VueAwesomeSwiper);

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    // store,
    render: h => h(App)
})

