import { createApp } from 'vue'
import './styles/style.scss'
import App from './App.vue'
import '@fontsource-variable/lora';
import '@fontsource-variable/montserrat';

import { router } from './router';
import 'bootstrap';

createApp(App).mount('#app')



/*Nav Scroll*/


let domNavbar = document.querySelector('.navbar');
let jumbotron = document.getElementById('jumbotron');

document.addEventListener('scroll', function(){
    let y = window.scrollY;

    if (y > 230){
        domNavbar.classList.add("fixed-top");
        domNavbar.classList.add("navbar-float-animation");
        jumbotron.classList.add("navbar-top-fix");
    } else {
        domNavbar.classList.remove("fixed-top");
        domNavbar.classList.remove("navbar-float-animation");
        jumbotron.classList.remove("navbar-top-fix");
    }
});