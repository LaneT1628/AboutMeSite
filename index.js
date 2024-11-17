let currentlyClickedLink = null;

function showSection(sectionId, clickedLink) {
    // Show only clicked section
    const sections = document.querySelectorAll('section');
    const selectionSection = document.getElementById(sectionId);
    sections.forEach(section => {
        if (section === selectionSection) {
            section.style.display = 'flex';
        }
        else {
            section.style.display = 'none';
        }
    });

    // Remove the underline from the previous section
    if (currentlyClickedLink != null) {
        currentlyClickedLink.style.textDecoration = 'none';
    }

    // Add the underline to the clicked link
    clickedLink.style.textDecoration = 'underline';

    // Set the global current link to the clicked
    currentlyClickedLink  = clickedLink;
}

// This runs it once in order to set the currently clicked one to home
document.addEventListener('DOMContentLoaded', () => {
    const homeLink = document.getElementById('homebutton');
    currentlyClickedLink = homeLink;
    homeLink.style.textDecoration = 'underline';
});

// Add event listeners permanently for hover effect
const links = document.querySelectorAll('#headers a');
links.forEach(link => {
    // Add hover effect for links (except for the already clicked one)
    link.addEventListener('mouseenter', function() {
        // Only underline the link if it is not the clicked link
        if (link != currentlyClickedLink) {
            link.style.textDecoration = 'underline';
        }
    });

    link.addEventListener('mouseleave', function() {
        // Only remove underline if it is not the clicked link
        if (link != currentlyClickedLink) {
            link.style.textDecoration = 'none';
        }
    });
});

/* Creating a dynamic slide show for introduction */
/* Slide show taken from https://www.w3schools.com/howto/howto_js_slideshow.asp */
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.querySelectorAll("#slideshow img");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1
    }
    slides[slideIndex-1].style.display = "flex";
    setTimeout(showSlides, 5000);
}