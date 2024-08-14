let menu=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menu.onclick= () => {
    menu.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

window.onscroll = () =>{
    menu.classList.remove('bx-x');
    navbar.classList.remove('active');
}
const sr = ScrollReveal ({
    distance: '60px',
    duration:250,
    delay:100,
    reeset: true
})

sr.reveal('.text', {delay: 200, origin: 'top'})
sr.reveal('.form-container form', {delay: 800, origin: 'left'})
sr.reveal('.heading', {delay: 800, origin: 'top'})
sr.reveal('.service-container box', {delay: 600, origin: 'top'})
sr.reveal('.availableOnRent-container box', {delay: 600, origin: 'top'})
sr.reveal('.about-container box', {delay: 600, origin: 'top'})
sr.reveal('.reviews-container', {delay: 600, origin: 'top'}) 
sr.reveal('.newsletter box', {delay: 400, origin: 'bottom'})
