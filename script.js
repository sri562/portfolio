document.addEventListener('DOMContentLoaded', (event) => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');

    // Function to remove active classes
    function removeActiveClasses() {
        navLinks.forEach(link => {
            link.classList.remove('active');
        });
    }

    // Function to add the 'active' class to the current section link
    function addActiveClass(sectionId) {
        removeActiveClasses();
        document.querySelector(`.nav-link[href="#${sectionId}"]`).classList.add('active');
    }

    // Add an event listener to handle scrolling
    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= (sectionTop - sectionHeight / 3)) {
                current = section.getAttribute('id');
            }
        });

        addActiveClass(current);
    });
});
