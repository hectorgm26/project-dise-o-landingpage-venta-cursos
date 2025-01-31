const menu = document.querySelector('.nav__menu');
const menuList = document.querySelector('.nav__list');
const links = document.querySelectorAll('.nav__link');

menu.addEventListener('click', function(){

  menuList.classList.toggle('nav__list--show'); // Agrega o quita la clase nav__list--show para mostrar u ocultar el menú

});

links.forEach(function(link){

  link.addEventListener('click', function(){

    menuList.classList.remove('nav__list--show'); // Oculta el menú al hacer click en un enlace

  })

});