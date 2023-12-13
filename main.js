let search =document.querySelector('.search-box');
var slideIndex = 0;
tampilkanSlide();

function tampilkanSlide() {
  var i;
  var slides = document.getElementsByClassName("slide");
  
  for (i = 0; i < slides.length; i++) {
    slides[i].classList.remove("show");
  }
  
  slideIndex++;
  
  if (slideIndex > slides.length) {slideIndex = 1}
  
  slides[slideIndex-1].classList.add('show');
  
  setTimeout(tampilkanSlide, 3000); // Ganti slide setiap 3 detik
}

document.querySelector('#search-icon').onclick = () => {
    search.classList.toggle('active');
    navbar.classList.remove('active');
}

let navbar =document.querySelector('.navbar');

document.querySelector('#menu-icon').onclick = () => {
    navbar.classList.toggle('active');
    search.classList.remove ('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
    search.classList.remove ('active');
}



let header = document.querySelector('header');

window.addEventListener('scroll', () => {
    header.classList.toggle('shadow', window.scrollY > 0);
});