document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const navToggle = document.querySelector('.nav-toggle');
  
  // 1. Scroll Handler for Header transparency
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('opaque');
    } else {
      header.classList.remove('opaque');
    }
  };
  
  window.addEventListener('scroll', handleScroll);
  // Initial check on load in case page is refreshed while scrolled down
  handleScroll();

  // 2. Mobile Nav Hamburger Toggle
  if (navToggle) {
    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      header.classList.toggle('nav-open');
    });
    
    // Close mobile menu if clicked outside
    document.addEventListener('click', (e) => {
      if (header.classList.contains('nav-open') && !header.contains(e.target)) {
        header.classList.remove('nav-open');
      }
    });

    // Close menu when links are clicked (useful for single page anchor links or load trans)
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        header.classList.remove('nav-open');
      });
    });
  }
});
