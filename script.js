
// // DOM Elements
// const body = document.body;
// const themeToggle = document.getElementById('theme-toggle');
// const menuToggle = document.querySelector('.menu-toggle');
// const navLinks = document.querySelector('.nav-links');
// const progressBars = document.querySelectorAll('.progress');
// const skillItems = document.querySelectorAll('.skill-item');
// const contactForm = document.querySelector('.contact-form');
// const sections = document.querySelectorAll('section');

// // Theme Toggle
// themeToggle.addEventListener('click', () => {
//     body.classList.toggle('dark-mode');
//     const icon = themeToggle.querySelector('i');
//     icon.classList.toggle('fa-moon');
//     icon.classList.toggle('fa-sun');
    
//     // Save theme preference
//     const isDarkMode = body.classList.contains('dark-mode');
//     localStorage.setItem('darkMode', isDarkMode);
// });

// // Load saved theme preference
// document.addEventListener('DOMContentLoaded', () => {
//     const isDarkMode = localStorage.getItem('darkMode') === 'true';
//     if (isDarkMode) {
//         body.classList.add('dark-mode');
//         themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
//     }
// });

// // Mobile Menu Toggle
// menuToggle.addEventListener('click', () => {
//     navLinks.classList.toggle('active');
//     const icon = menuToggle.querySelector('i');
//     icon.classList.toggle('fa-bars');
//     icon.classList.toggle('fa-times');
// });

// // Smooth Scrolling
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//     anchor.addEventListener('click', function (e) {
//         e.preventDefault();
//         const target = document.querySelector(this.getAttribute('href'));
//         const headerOffset = 80;
//         const elementPosition = target.getBoundingClientRect().top;
//         const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

//         window.scrollTo({
//             top: offsetPosition,
//             behavior: 'smooth'
//         });

//         // Close mobile menu if open
//         if (navLinks.classList.contains('active')) {
//             navLinks.classList.remove('active');
//             menuToggle.querySelector('i').classList.replace('fa-times', 'fa-bars');
//         }
//     });
// });

// // Animate progress bars when in view
// const animateProgress = () => {
//     progressBars.forEach(progress => {
//         const width = progress.getAttribute('data-width');
//         progress.style.width = width + '%';
//     });
// };

// // Intersection Observer for fade-in elements
// const fadeInObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             entry.target.classList.add('visible');
//             if (entry.target.classList.contains('skill-item')) {
//                 animateProgress();
//             }
//         }
//     });
// }, {
//     threshold: 0.1
// });

// // Observe all fade-in elements
// document.querySelectorAll('.fade-in').forEach(element => {
//     fadeInObserver.observe(element);
// });

// // Active section highlight in navigation
// const navObserver = new IntersectionObserver((entries) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const id = entry.target.getAttribute('id');
//             document.querySelectorAll('.nav-links a').forEach(link => {
//                 link.classList.remove('active');
//                 if (link.getAttribute('href') === `#${id}`) {
//                     link.classList.add('active');
//                 }
//             });
//         }
//     });
// }, {
//     threshold: 0.5
// });

// // Observe all sections
// sections.forEach(section => {
//     navObserver.observe(section);
// });

// // Typing animation for hero section
// class TypeWriter {
//     constructor(txtElement, words, wait = 3000) {
//         this.txtElement = txtElement;
//         this.words = words;
//         this.txt = '';
//         this.wordIndex = 0;
//         this.wait = parseInt(wait, 10);
//         this.type();
//         this.isDeleting = false;
//     }

//     type() {
//         const current = this.wordIndex % this.words.length;
//         const fullTxt = this.words[current];

//         if (this.isDeleting) {
//             this.txt = fullTxt.substring(0, this.txt.length - 1);
//         } else {
//             this.txt = fullTxt.substring(0, this.txt.length + 1);
//         }

//         this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

//         let typeSpeed = 200;

//         if (this.isDeleting) {
//             typeSpeed /= 2;
//         }

//         if (!this.isDeleting && this.txt === fullTxt) {
//             typeSpeed = this.wait;
//             this.isDeleting = true;
//         } else if (this.isDeleting && this.txt === '') {
//             this.isDeleting = false;
//             this.wordIndex++;
//             typeSpeed = 500;
//         }

//         setTimeout(() => this.type(), typeSpeed);
//     }
// }

// // Initialize TypeWriter
// document.addEventListener('DOMContentLoaded', () => {
//     const txtElement = document.querySelector('.hero-subtitle');
//     const words = ['ICT Student', 'UX/UI Designer', 'Tech Enthusiast'];
//     new TypeWriter(txtElement, words);
// });

// // Form validation and submission
// contactForm.addEventListener('submit', (e) => {
//     e.preventDefault();
//     const formData = new FormData(contactForm);
//     const data = Object.fromEntries(formData);

//     // Basic validation
//     if (!data.name || !data.email || !data.message) {
//         showNotification('Please fill in all fields', 'error');
//         return;
//     }

//     if (!isValidEmail(data.email)) {
//         showNotification('Please enter a valid email address', 'error');
//         return;
//     }

//     // Simulate form submission
//     showNotification('Message sent successfully!', 'success');
//     contactForm.reset();
// });

// // Email validation helper
// function isValidEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }

// // Notification system
// function showNotification(message, type) {
//     const notification = document.createElement('div');
//     notification.className = `notification ${type}`;
//     notification.textContent = message;
//     document.body.appendChild(notification);

//     // Animate notification
//     setTimeout(() => {
//         notification.classList.add('show');
//     }, 10);

//     // Remove notification
//     setTimeout(() => {
//         notification.classList.remove('show');
//         setTimeout(() => {
//             notification.remove();
//         }, 300);
//     }, 3000);
// }

// // Parallax effect for hero section
// window.addEventListener('scroll', () => {
//     const scrolled = window.pageYOffset;
//     const heroContent = document.querySelector('.hero-content');
//     heroContent.style.transform = `translateY(${scrolled * 0.5}px)`;
// });

// // Skills animation on hover
// skillItems.forEach(item => {
//     item.addEventListener('mouseenter', () => {
//         item.style.transform = 'scale(1.05)';
//     });

//     item.addEventListener('mouseleave', () => {
//         item.style.transform = 'scale(1)';
//     });
// });

// // Lazy loading for images
// const lazyImages = document.querySelectorAll('img[data-src]');
// const imageObserver = new IntersectionObserver((entries, observer) => {
//     entries.forEach(entry => {
//         if (entry.isIntersecting) {
//             const img = entry.target;
//             img.src = img.dataset.src;
//             img.removeAttribute('data-src');
//             observer.unobserve(img);
//         }
//     });
// });

// lazyImages.forEach(img => imageObserver.observe(img));

// // Add loading animation
// window.addEventListener('load', () => {
//     document.body.classList.add('loaded');
// });

// // Cursor effect
// const cursor = document.createElement('div');
// cursor.className = 'cursor';
// document.body.appendChild(cursor);

// document.addEventListener('mousemove', (e) => {
//     cursor.style.left = e.clientX + 'px';
//     cursor.style.top = e.clientY + 'px';
// });

// // Add hover effect to all interactive elements
// const interactiveElements = document.querySelectorAll('a, button, .skill-item, .card');
// interactiveElements.forEach(el => {
//     el.addEventListener('mouseenter', () => {
//         cursor.classList.add('cursor-hover');
//     });
    
//     el.addEventListener('mouseleave', () => {
//         cursor.classList.remove('cursor-hover');
//     });
// });

// Theme Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;
const icon = themeToggle.querySelector('i');

themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    icon.classList.toggle('fa-moon');
    icon.classList.toggle('fa-sun');
});

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
        navLinks.classList.remove('active');
    });
});

// Intersection Observer for fade-in animations
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeIn');
        }
    });
}, {
    threshold: 0.1
});

document.querySelectorAll('.card').forEach(card => {
    observer.observe(card);
});

// Form Submission
const form = document.querySelector('.contact-form');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    form.reset();
});

