// Load shared navigation into all pages
document.addEventListener('DOMContentLoaded', function() {
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      const navContainer = document.createElement('div');
      navContainer.innerHTML = html;
      const navElement = navContainer.querySelector('nav');
      
      const placeholder = document.getElementById('nav-placeholder');
      if (placeholder) {
        placeholder.replaceWith(navElement);
      }
      
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => console.error('Error loading navigation:', error));
});
