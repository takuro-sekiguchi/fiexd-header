const nav = document.getElementById('nav');
const navUl = document.getElementById('nav-ul');


window.addEventListener('scroll', () => {
  if(window.pageYOffset >= navUl.offsetTop) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
});

