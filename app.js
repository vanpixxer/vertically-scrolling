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

// hide the 'scroll-to-top'  button until we scroll down past 500px
if (scrollHeight > 500) {
    toplink.classList.add("show-link");
} else {
    toplink.classList.remove("show-link");
}

// *****************************Smooth Scroll ****************************
const scrollLinks = document.querySelectorAll(".scroll-link");

scrollLinks.forEach(function(link) {
    link.addEventListener("click", function(e) {
        // prevent default scrolling
        e.preventDefault();
        // navigate to specific spot - currentTarget is the link we clicked on
        // slice is used to remove the hash tag from section id
        const id = e.currentTarget.getAttribute('href').slice(1);
        const element = document.getElementById(id);
        // calculate heights
        const navHeight = navbar.getBoundingClientRect().height;
        const containerHeight = linksContainer.getBoundingClientRect().height;
        const fixedNav = navbar.classList.contains("fixed-nav");
        // get position of element in pixels
        let position = element.offsetTop - navHeight;

        if ( !fixedNav) {
            position = position - navHeight;
        }

        if (navHeight > 82) {
            position = position + containerHeight;
        }

        window.scrollTo( {
            left:0,
            top: position,
        });
         linksContainer.style.height = 0;
    });
});