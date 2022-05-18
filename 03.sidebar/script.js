// Get all items

const toggleBtn = document.querySelector('.sidebar-toggle');
const closeBtn = document.querySelector('.close-btn');
const sidebar = document.querySelector('.sidebar');

// Add events

toggleBtn.addEventListener('click', function() {
    sidebar.classList.toggle('show-sidebar');
    toggleBtn.classList.toggle('active-toggle');
});

closeBtn.addEventListener('click', function() {
    sidebar.classList.remove('show-sidebar');
    toggleBtn.classList.remove('active-toggle');
});

