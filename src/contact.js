function loadContact() {
  const content = document.querySelector('#content');

  // Create contact container
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  // Create contact heading
  const contactHeading = document.createElement('h2');
  contactHeading.textContent = 'Contact Us';
  contactHeading.classList.add('contact-heading');
  contactContainer.appendChild(contactHeading);

  // Create contact info section
  const infoSection = document.createElement('section');
  infoSection.classList.add('contact-info');

  // Create address info
  const addressDiv = document.createElement('div');
  addressDiv.classList.add('contact-item');

  const addressIcon = document.createElement('div');
  addressIcon.classList.add('contact-icon');
  addressIcon.innerHTML = '<i class="location-icon">📍</i>';

  const addressContent = document.createElement('div');
  addressContent.classList.add('contact-content');

  const addressTitle = document.createElement('h3');
  addressTitle.textContent = 'Our Location';

  const addressText = document.createElement('p');
  addressText.textContent = '123 Culinary Avenue, Foodville, FC 98765';

  addressContent.appendChild(addressTitle);
  addressContent.appendChild(addressText);
  addressDiv.appendChild(addressIcon);
  addressDiv.appendChild(addressContent);

  // Create hours info
  const hoursDiv = document.createElement('div');
  hoursDiv.classList.add('contact-item');

  const hoursIcon = document.createElement('div');
  hoursIcon.classList.add('contact-icon');
  hoursIcon.innerHTML = '<i class="hours-icon">🕒</i>';

  const hoursContent = document.createElement('div');
  hoursContent.classList.add('contact-content');

  const hoursTitle = document.createElement('h3');
  hoursTitle.textContent = 'Opening Hours';

  const hoursText = document.createElement('p');
  hoursText.innerHTML = 'Monday - Friday: 11am - 10pm<br>Saturday - Sunday: 10am - 11pm';

  hoursContent.appendChild(hoursTitle);
  hoursContent.appendChild(hoursText);
  hoursDiv.appendChild(hoursIcon);
  hoursDiv.appendChild(hoursContent);

  // Create phone info
  const phoneDiv = document.createElement('div');
  phoneDiv.classList.add('contact-item');

  const phoneIcon = document.createElement('div');
  phoneIcon.classList.add('contact-icon');
  phoneIcon.innerHTML = '<i class="phone-icon">📞</i>';

  const phoneContent = document.createElement('div');
  phoneContent.classList.add('contact-content');

  const phoneTitle = document.createElement('h3');
  phoneTitle.textContent = 'Phone';

  const phoneText = document.createElement('p');
  phoneText.textContent = '(555) 123-4567';

  phoneContent.appendChild(phoneTitle);
  phoneContent.appendChild(phoneText);
  phoneDiv.appendChild(phoneIcon);
  phoneDiv.appendChild(phoneContent);

  // Create email info
  const emailDiv = document.createElement('div');
  emailDiv.classList.add('contact-item');

  const emailIcon = document.createElement('div');
  emailIcon.classList.add('contact-icon');
  emailIcon.innerHTML = '<i class="email-icon">✉️</i>';

  const emailContent = document.createElement('div');
  emailContent.classList.add('contact-content');

  const emailTitle = document.createElement('h3');
  emailTitle.textContent = 'Email';

  const emailText = document.createElement('p');
  emailText.textContent = 'info@jadesrestaurant.com';

  emailContent.appendChild(emailTitle);
  emailContent.appendChild(emailText);
  emailDiv.appendChild(emailIcon);
  emailDiv.appendChild(emailContent);

  // Add all contact items to info section
  infoSection.appendChild(addressDiv);
  infoSection.appendChild(hoursDiv);
  infoSection.appendChild(phoneDiv);
  infoSection.appendChild(emailDiv);

  // Create contact form section
  const formSection = document.createElement('section');
  formSection.classList.add('contact-form-section');

  const formHeading = document.createElement('h3');
  formHeading.textContent = 'Send Us a Message';
  formSection.appendChild(formHeading);

  const form = document.createElement('form');
  form.classList.add('contact-form');
  form.setAttribute('action', '#');
  form.setAttribute('method', 'post');

  // Name input
  const nameGroup = document.createElement('div');
  nameGroup.classList.add('form-group');

  const nameLabel = document.createElement('label');
  nameLabel.setAttribute('for', 'name');
  nameLabel.textContent = 'Name:';

  const nameInput = document.createElement('input');
  nameInput.setAttribute('type', 'text');
  nameInput.setAttribute('id', 'name');
  nameInput.setAttribute('name', 'name');
  nameInput.setAttribute('required', '');

  nameGroup.appendChild(nameLabel);
  nameGroup.appendChild(nameInput);

  // Email input
  const emailGroup = document.createElement('div');
  emailGroup.classList.add('form-group');

  const emailLabel = document.createElement('label');
  emailLabel.setAttribute('for', 'email');
  emailLabel.textContent = 'Email:';

  const emailInput = document.createElement('input');
  emailInput.setAttribute('type', 'email');
  emailInput.setAttribute('id', 'email');
  emailInput.setAttribute('name', 'email');
  emailInput.setAttribute('required', '');

  emailGroup.appendChild(emailLabel);
  emailGroup.appendChild(emailInput);

  // Message textarea
  const messageGroup = document.createElement('div');
  messageGroup.classList.add('form-group');

  const messageLabel = document.createElement('label');
  messageLabel.setAttribute('for', 'message');
  messageLabel.textContent = 'Message:';

  const messageTextarea = document.createElement('textarea');
  messageTextarea.setAttribute('id', 'message');
  messageTextarea.setAttribute('name', 'message');
  messageTextarea.setAttribute('rows', '5');
  messageTextarea.setAttribute('required', '');

  messageGroup.appendChild(messageLabel);
  messageGroup.appendChild(messageTextarea);

  // Submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('submit-btn');
  submitButton.textContent = 'Send Message';

  // Add form elements to form
  form.appendChild(nameGroup);
  form.appendChild(emailGroup);
  form.appendChild(messageGroup);
  form.appendChild(submitButton);

  // Add form to form section
  formSection.appendChild(form);

  // Add sections to contact container
  contactContainer.appendChild(infoSection);
  contactContainer.appendChild(formSection);

  // Add contact container to content
  content.appendChild(contactContainer);
}

export default loadContact;