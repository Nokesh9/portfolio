 // Mobile menu toggle
 const menuToggle = document.querySelector('.menu-toggle');
 const navMenu = document.querySelector('.nav-menu');
 
 menuToggle.addEventListener('click', () => {
     navMenu.classList.toggle('active');
 });

 // Close menu when clicking a link
 document.querySelectorAll('.nav-link').forEach(link => {
     link.addEventListener('click', () => {
         navMenu.classList.remove('active');
     });
 });