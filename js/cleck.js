// typing script js
var typed = new Typed(".atuo-typed", {
    strings: [ "web Designer"," web developer"],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
});

var typed = new Typed(".atou_typed-2", {
    strings: [ "web Designer"," web developer"],
    typeSpeed: 80,
    backSpeed: 80,

});
// hide faqs ansewer
const faqs = document.querySelectorAll('.faq');
faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');
            // cheng icon
            const icon = faq.querySelector('.faq_icon i');
            if(icon.className === 'fa-solid fa-plus'){
                icon.className = 'fa-solid fa-minus';
            }
            else{
                icon.className = 'fa-solid fa-plus';
            }
        })

});
// ----------------------nav menu hide and show----

const menu = document.querySelector('.nav_menu');
const menuBtn = document.querySelector('#open_menu_bnt');
const closeBtn = document.querySelector('#close_menu_bnt');


menuBtn.addEventListener('click', () => {
    menu.style.display = "flex";
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = "none"
    
 })

 const closeNav = () => {
    menu.style.displayn = "none"
    closeBtn.style.display = "inline-block"
 }
 closeBtn.addEventListener('click', closeNav);


