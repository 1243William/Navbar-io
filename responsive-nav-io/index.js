//Page-resize on mobile devices
const nav = document.querySelector('.nav__links');
const openNavBtn = document.querySelector('#nav__toggle-open');
const closNaveBtn = document.querySelector('#nav__toggle-close');

//open nav menu 
const openNav = () => {
    nav.style.display = 'flex';
    openNavBtn.style.display = 'none';
    closNaveBtn.style.display = 'inline-block';
}

openNavBtn.addEventListener('click', openNav)

//close nav menu 
const closeNav = () => {
    nav.style.display = 'none';
    openNavBtn.style.display = 'inline-block';
    closNaveBtn.style.display = 'none';
}

closNaveBtn.addEventListener('click', closeNav)