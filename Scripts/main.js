// Navbar toggle
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
}

// Scroll active link
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    let top = window.scrollY;

    sections.forEach(sec => {
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector(`header nav a[href*=${id}]`).classList.add('active');
            });
        }
    });

    // Sticky navbar
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);

    // Toggle icon navbar remove
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

// scroll reveal

ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, heading', {origin: 'top'});
ScrollReveal().reveal('.home-img, .skills-container, .portfolio-box, .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home-contact h1, .about-img', {origin: 'left'});
ScrollReveal().reveal('.home-contact p, .about-content', {origin: 'right'});

//typed js

const typed = new Typed('.typedjs-text', {
    strings: ['Software Engineer', 'Student', 'Researcher'],
    typeSpeed: 69,
    backSpeed: 69,
    backDelay: 1000,
    loop: true,
})

//contact functionality

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    if (name && email && subject && message) {
        emailjs.send("310EmailServices", "template_rzr62og", {
            from_name: name,
            from_email: email,
            subject: subject,
            message: message,
            to_email: "buraksahin20@ku.edu.tr" // Your email address
        }).then(function(response) {
            console.log('Success:', response);
            alert("Your message has been sent successfully!");
            document.getElementById('contact-form').reset(); // Optional: Clear the form fields
        }).catch(function(error) {
            console.log('Error:', error);
            alert("Failed to send the message. Please try again later.");
        });
    } else {
        alert("Please fill in all the required fields.");
    }
});



