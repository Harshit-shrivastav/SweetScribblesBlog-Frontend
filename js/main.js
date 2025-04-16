// This can be used for any shared JavaScript functionality
document.addEventListener('DOMContentLoaded', function() {
    console.log('Sweet Scribbles blog is ready!');
    
    // You can add any shared JavaScript functionality here
    // For example, form validation, interactive elements, etc.
    
    // Make sure all links with .nav-link class don't actually navigate
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            if (this.getAttribute('href') === '#') {
                e.preventDefault();
            }
        });
    });
});
