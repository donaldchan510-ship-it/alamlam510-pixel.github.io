// Load shared navigation into all pages
document.addEventListener('DOMContentLoaded', function() {
  fetch('nav.html')
    .then(response => response.text())
    .then(html => {
      // Insert nav at the start of body
      const bodyContent = document.body.innerHTML;
      document.body.innerHTML = html + bodyContent;
      
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
