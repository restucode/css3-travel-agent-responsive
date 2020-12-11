$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        center: true,
        loop:true,
        margin:25,
        dots: false,
        autoWidth:true,
        responsive:{
            600:{
                items: 2
            }
        }
    });
});

const btn = $('.back-top');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});



const burger = document.querySelector('.burger')
const navLink = document.querySelector('.nav-link')

burger.addEventListener('click', function() {
    this.classList.toggle('active')
 navLink.classList.toggle('active')

})


window.addEventListener('scroll', () => {
    let nav = document.querySelector('#nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

