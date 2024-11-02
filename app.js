const sections = document.querySelectorAll('.section');
const sectionButtons = document.querySelectorAll('.controls');
const sectionButton = document.querySelectorAll('.control');
const allSections = document.querySelector('.main-content');

function PageTransition() {
    // Button click activate class
    for (let i = 0; i < sectionButton.length; i++) {
        sectionButton[i].addEventListener('click', function() {
            let currentButton = document.querySelectorAll('.active-button');
            currentButton[0]?.classList.remove('active-button');
            this.classList.add('active-button');
        });
    }

    // Section click activate class
    allSections.addEventListener('click', (e) => {
        const id = e.target.dataset.id;
        if (id) {
            // Remove selected from other buttons
            sectionButtons.forEach((button) => {
                button.classList.remove('active');
            });
            e.target.classList.add('active');

            // Hide other sections
            sections.forEach((section) => {
                section.classList.remove('active');
            });

            const element = document.getElementById(id);
            element.classList.add('active');
        }
    });
}

PageTransition();