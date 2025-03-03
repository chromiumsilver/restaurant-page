import './styles.css';
import loadHomePage from './home';
import loadMenu from './menu';
import loadContact from './contact';

// DOM elements cache
const DOM = {
  content: () => document.querySelector('#content'),
  navButtons: () => document.querySelectorAll('#home, #menu, #contact'),
  footerLinks: () => document.querySelectorAll('#footer-home, #footer-menu, #footer-contact'),
  yearSpan: () => document.querySelector('#current-year')
};

// Page loading functions
const pages = {
  home: loadHomePage,
  menu: loadMenu,
  contact: loadContact
};

// Load the homepage when the page first loads
document.addEventListener('DOMContentLoaded', () => {
  // Update copyright year
  updateCopyrightYear();

  // Set initial page
  loadPage('home');

  // Set up navigation
  setupEventListeners();
});

/**
 * Set up all event listeners for the application
 */
function setupEventListeners() {
  // Navigation buttons
  DOM.navButtons().forEach(button => {
    button.addEventListener('click', handleNavigation);
  });

  // Footer links
  DOM.footerLinks().forEach(link => {
    link.addEventListener('click', handleNavigation);
  });

  // Form submission (using event delegation)
  document.addEventListener('submit', handleFormSubmission);
}

/**
 * Handle navigation button/link clicks
 * @param {Event} event - The click event
 */
function handleNavigation(event) {
  event.preventDefault();

  // Get the page to load from the element's ID
  const pageId = event.currentTarget.id.replace('footer-', '');

  // Update active state in navigation
  updateActiveNavState(pageId);

  // Load the requested page
  loadPage(pageId);
}

/**
 * Handle form submissions
 * @param {Event} event - The submit event
 */
function handleFormSubmission(event) {
  // Only handle contact form submissions
  if (event.target.classList.contains('contact-form')) {
    event.preventDefault();

    // Get form data
    const formData = new FormData(event.target);
    const formValues = Object.fromEntries(formData.entries());

    // Log form data (would be sent to server in a real app)
    console.log('Form submitted:', formValues);

    // Show success message
    alert('Thank you for your message! We will get back to you soon.');

    // Reset form
    event.target.reset();
  }
}

/**
 * Load a specific page
 * @param {string} pageId - The ID of the page to load
 */
function loadPage(pageId) {
  // Clear existing content
  clearContent();

  // Load the requested page
  if (pages[pageId]) {
    pages[pageId]();
  } else {
    console.error(`Page "${pageId}" not found`);
    pages.home();
  }
}

/**
 * Update the active state in the navigation
 * @param {string} activePageId - The ID of the active page
 */
function updateActiveNavState(activePageId) {
  // Remove current active state
  DOM.navButtons().forEach(button => {
    button.removeAttribute('aria-current');
  });

  // Set new active state
  const activeButton = document.getElementById(activePageId);
  if (activeButton) {
    activeButton.setAttribute('aria-current', 'page');
  }
}

/**
 * Clear the content area
 */
function clearContent() {
  const content = DOM.content();
  content.innerHTML = '';
}

/**
 * Update the copyright year in the footer
 */
function updateCopyrightYear() {
  const yearSpan = DOM.yearSpan();
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
}