// toggle class active
const navbarNav = document.querySelector('.navbar-nav');
// click humberger
document.querySelector('#humberger-menu').onclick = () => {
    navbarNav.classList.toggle('active');
}
// klik luar sidebar
const humberger = document.querySelector('#humberger-menu');
document.addEventListener('click', function(e){
    if(!humberger.contains(e.target) && !navbarNav.contains(e.target)) {
        navbarNav.classList.remove('active');
    }
})
































