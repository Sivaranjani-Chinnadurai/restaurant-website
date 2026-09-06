// script.js

// --- Mobile Menu Toggle ---
const btn = document.getElementById('mobile-menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

// Close mobile menu when clicking a link
const mobileLinks = menu.querySelectorAll('a, button');
mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// --- Navbar Scroll Effect ---
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('shadow-lg', 'bg-royal-dark');
        navbar.classList.remove('bg-royal-dark/90');
    } else {
        navbar.classList.remove('shadow-lg', 'bg-royal-dark');
        navbar.classList.add('bg-royal-dark/90');
    }
});

// --- WhatsApp Ordering Logic ---
// Replace this with the actual phone number including country code, e.g., '919876543210' for India
const WHATSAPP_NUMBER = '910000000000'; 

function orderViaWhatsApp(message) {
    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(message);
    
    // Construct the WhatsApp URL
    // We use api.whatsapp.com which works well on both mobile and web
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${WHATSAPP_NUMBER}&text=${encodedMessage}`;
    
    // Open in a new tab
    window.open(whatsappUrl, '_blank');
}
