const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', () => {
      navLinks.classList.toggle('show');

      // Toggle icon between hamburger and close (X)
      if (navLinks.classList.contains('show')) {
        menuIcon.innerHTML = '&#10006;'; // ✖
      } else {
        menuIcon.innerHTML = '&#9776;'; // ☰
      }
    });