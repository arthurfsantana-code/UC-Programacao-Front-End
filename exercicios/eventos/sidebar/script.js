const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');

toggle.addEventListener('click', function() {
  sidebar.classList.toggle('open');
});
