const menu = document.querySelector(".menu");
const close = document.querySelector(".close");
const overlay = document.querySelector(".overlay");

menu.addEventListener('click', ()=>{
    overlay.classList.add('overlay--active');
});
close.addEventListener('click', ()=>{
    overlay.classList.remove('overlay--active');
})