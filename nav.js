// Load shared navigation into all pages
document.addEventListener('DOMContentLoaded', function() {
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      // Create nav element from fetched HTML
      const navContainer = document.createElement('div');
      navContainer.innerHTML = html;
      const navElement = navContainer.querySelector('nav');
      
      // Insert nav at the start of body
      document.body.insertBefore(navElement, document.body.firstChild);
      
      // Set active link based on current page
      const currentPage = window.location.pathname.split('/').pop() || 'index.html';
      document.querySelectorAll('.nav-links a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
          link.classList.add('active');
        }
      });
    })
    .catch(error => console.error('Error loading navigation:', error));
});
