/* JavaScript */
function openSidebar() {
    document.getElementById('sidebar').classList.add('open');
    document.getElementById('overlay').classList.add('show');
    document.body.classList.add('no-scroll');
  }
  
  function closeSidebar() {
    document.getElementById('sidebar').classList.remove('open');
    document.getElementById('overlay').classList.remove('show');
    document.body.classList.remove('no-scroll');
  }
  
  // Close the sidebar when clicking on the overlay
  document.getElementById('overlay').addEventListener('click', closeSidebar);
  