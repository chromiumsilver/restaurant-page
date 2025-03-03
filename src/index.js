import './styles.css';
import loadHomePage from './home';
import loadMenu from './menu';
import loadContact from './contact';

// Load the homepage when the page first loads
document.addEventListener('DOMContentLoaded', () => {
  loadHomePage();
});

// Load menu page when clicking Menu button
const menuBtn = document.querySelector('#menu');
menuBtn.addEventListener('click', () => {
  clearContent();
  loadMenu();
});

// Load contact page when clicking Contact button
const contactBtn = document.querySelector('#contact');
contactBtn.addEventListener('click', () => {
  clearContent();
  loadContact();
});

// Load homepage  when clicking Home button
const homeBtn = document.querySelector('#home');
homeBtn.addEventListener('click', () => {
  clearContent();
  loadHomePage();
});

// Clear content
function clearContent() {
  const content = document.querySelector('#content');
  content.innerHTML = '';
}