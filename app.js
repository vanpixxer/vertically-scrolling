// Element.getBoundingClientRect() method returns the size of an element and its position relative to the viewport

// pageYOffset is a read-only window property that returns the number of pixels that the document has been scrolled vertically

// the slice() method extracts a section of a string without modifying the original string

// offsetTop is a number that represents the top position of an element in pixels

// ********************** Set Year ******************************
const date = document.getElementById("date");
date.innerHTML = new Date().getFullYear()

// *********************** Close Links **************************
const navToggle = document.querySelector('.nav-toggle');
const linksContainer = document.querySelector('.links-container');
const links = document.querySelector('.links');

// by default .links-container is hidden
navToggle.addEventListener('click', function() {
    //this works when height of links is hard coded
    //linksContainer.classList.toggle("show-links");
    // getBoundingClientRect() method allows us to dynamically change links height
    const containerHeight = linksContainer.getBoundingClientRect().height;
    const linksHeight = links.getBoundingClientRect().height;
    // dynamically add linksHeight height
    if(containerHeight === 0) {
        linksContainer.style.height = `${linksHeight}px`;
        // close the linksContainer
    } else {
        linksContainer.style.height = 0;
    }
});


const navbar = document.getElementById('nav');
const toplink = document.querySelector('.top-link');
// ***************************Fixed Navbar *************************
window.addEventListener('scroll', function() {
    const scrollHeight = window.pageYOffset;
    const navHeight = navbar.getBoundingClientRect().height;
    if (scrollHeight > navHeight) {
        navbar.classList.add('fixed-nav');
    } else {
        navbar.classList.remove('fixed-nav');
    }
});

// *****************************Smooth Scroll ****************************