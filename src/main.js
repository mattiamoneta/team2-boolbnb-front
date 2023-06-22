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
let btnScroll = document.getElementById('btnScrollTop');

document.addEventListener('scroll', function(){
    let y = window.scrollY;
    let scrollHeight = document.body.scrollHeight;
    let windowHeight = window.innerHeight;

    if (y > 230){
        domNavbar.classList.add("fixed-top");
        domNavbar.classList.add("navbar-float-animation");
        jumbotron.classList.add("navbar-top-fix");

    } else {
        domNavbar.classList.remove("fixed-top");
        domNavbar.classList.remove("navbar-float-animation");
        jumbotron.classList.remove("navbar-top-fix");

    }

    if(y >= (scrollHeight - windowHeight)){
        btnScroll.classList.add("show");
    }else{
        btnScroll.classList.remove("show");
    }

});


btnScroll.addEventListener('click', function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});