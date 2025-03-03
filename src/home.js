import foodImage from '../img/homepage.jpg';

function loadHomePage() {
  const content = document.querySelector('#content');

  // Create hero section
  const heroDiv = document.createElement('div');
  heroDiv.classList.add('hero');

  const heading = document.createElement('h1');
  heading.textContent = "Welcome to Jade's Restaurant";

  const heroImage = document.createElement('img');
  heroImage.src = foodImage;
  heroImage.alt = 'An image of delicious food';
  heroImage.classList.add('hero-image');

  heroDiv.appendChild(heading);
  heroDiv.appendChild(heroImage);

  // Create intro section
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

  // Append all sections to content
  content.appendChild(heroDiv);
  content.appendChild(introSection);
}

export default loadHomePage; 