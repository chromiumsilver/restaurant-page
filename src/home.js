import foodImage from '../img/homepage.jpg';

/**
 * Load the home page content
 */
function loadHomePage() {
  const content = document.querySelector('#content');

  // Create document fragment for better performance
  const fragment = document.createDocumentFragment();

  // Add hero section
  fragment.appendChild(createHeroSection());

  // Add intro section
  fragment.appendChild(createIntroSection());

  // Add all content to the page
  content.appendChild(fragment);
}

/**
 * Create the hero section
 * @returns {HTMLElement} The hero section element
 */
function createHeroSection() {
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');

  const heading = document.createElement('h1');
  heading.textContent = "Welcome to Jade's Restaurant";

  const heroImage = document.createElement('img');
  heroImage.src = foodImage;
  heroImage.alt = 'Delicious food served at Jade\'s Restaurant';
  heroImage.classList.add('hero-image');
  heroImage.loading = 'eager'; // Important image, load immediately

  heroDiv.appendChild(heading);
  heroDiv.appendChild(heroImage);

  return heroDiv;
}

/**
 * Create the intro section
 * @returns {HTMLElement} The intro section element
 */
function createIntroSection() {
  const introSection = document.createElement('section');
  introSection.classList.add('intro');

  const introHeading = document.createElement('h2');
  introHeading.textContent = 'Experience Culinary Excellence';

  const introPara1 = document.createElement('p');
  introPara1.textContent = "At Jade's Restaurant, we pride ourselves on creating unforgettable dining experiences. Our chefs combine traditional techniques with innovative approaches to deliver dishes that delight the senses.";

  const introPara2 = document.createElement('p');
  introPara2.textContent = 'Join us for lunch or dinner in our elegant yet comfortable atmosphere, where every meal becomes a celebration.';

  introSection.appendChild(introHeading);
  introSection.appendChild(introPara1);
  introSection.appendChild(introPara2);

  return introSection;
}

export default loadHomePage; 