// Get the current URL path
const path = window.location.pathname;

// Select all navigation links
const navLinks = document.querySelectorAll('.nav-item a');

// Loop through each navigation link
navLinks.forEach(link => {
    // Get the href attribute of each link
    const href = link.getAttribute('href');

    // Check if the current path matches the link's href
    if (path === href) {
        // Add the 'active' class to the parent <li> element
        link.parentElement.classList.add('active');
    }

    // Check if the current path ends with the link's href (for subdirectories)
    if (path.endsWith(href)) {
    link.parentElement.classList.add('active');
    }
});