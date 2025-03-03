/**
 * Load the contact page content
 */
function loadContact() {
  const content = document.querySelector('#content');

  // Create contact container
  const contactContainer = document.createElement('div');
  contactContainer.classList.add('contact-container');

  // Create and add contact heading
  const contactHeading = createHeading('Contact Us', 'contact-heading');
  contactContainer.appendChild(contactHeading);

  // Create and add contact info section
  contactContainer.appendChild(createContactInfoSection());

  // Create and add contact form section
  contactContainer.appendChild(createContactFormSection());

  // Add contact container to content
  content.appendChild(contactContainer);
}

/**
 * Create a heading element
 * @param {string} text - The heading text
 * @param {string} className - The CSS class to apply
 * @returns {HTMLElement} The heading element
 */
function createHeading(text, className) {
  const heading = document.createElement('h2');
  heading.textContent = text;
  heading.classList.add(className);
  return heading;
}

/**
 * Create the contact info section
 * @returns {HTMLElement} The contact info section
 */
function createContactInfoSection() {
  const infoSection = document.createElement('section');
  infoSection.classList.add('contact-info');

  // Contact information data
  const contactItems = [
    {
      icon: '📍',
      iconClass: 'location-icon',
      title: 'Our Location',
      content: '123 Culinary Avenue, Foodville, FC 98765'
    },
    {
      icon: '🕒',
      iconClass: 'hours-icon',
      title: 'Opening Hours',
      content: 'Monday - Friday: 11am - 10pm<br>Saturday - Sunday: 10am - 11pm',
      isHTML: true
    },
    {
      icon: '📞',
      iconClass: 'phone-icon',
      title: 'Phone',
      content: '(555) 123-4567'
    },
    {
      icon: '✉️',
      iconClass: 'email-icon',
      title: 'Email',
      content: 'info@jadesrestaurant.com'
    }
  ];

  // Create each contact info item
  contactItems.forEach(item => {
    infoSection.appendChild(createContactItem(item));
  });

  return infoSection;
}

/**
 * Create a contact information item
 * @param {Object} item - The contact item data
 * @returns {HTMLElement} The contact item element
 */
function createContactItem(item) {
  const itemDiv = document.createElement('div');
  itemDiv.classList.add('contact-item');

  // Create icon
  const iconDiv = document.createElement('div');
  iconDiv.classList.add('contact-icon');
  iconDiv.innerHTML = `<i class="${item.iconClass}" aria-hidden="true">${item.icon}</i>`;

  // Create content
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('contact-content');

  const title = document.createElement('h3');
  title.textContent = item.title;

  const text = document.createElement('p');
  if (item.isHTML) {
    text.innerHTML = item.content;
  } else {
    text.textContent = item.content;
  }

  contentDiv.appendChild(title);
  contentDiv.appendChild(text);

  // Assemble the item
  itemDiv.appendChild(iconDiv);
  itemDiv.appendChild(contentDiv);

  return itemDiv;
}

/**
 * Create the contact form section
 * @returns {HTMLElement} The contact form section
 */
function createContactFormSection() {
  const formSection = document.createElement('section');
  formSection.classList.add('contact-form-section');

  // Create form heading
  const formHeading = document.createElement('h3');
  formHeading.textContent = 'Send Us a Message';
  formSection.appendChild(formHeading);

  // Create and add form
  formSection.appendChild(createContactForm());

  return formSection;
}

/**
 * Create the contact form
 * @returns {HTMLElement} The contact form element
 */
function createContactForm() {
  const form = document.createElement('form');
  form.classList.add('contact-form');
  form.setAttribute('action', '#');
  form.setAttribute('method', 'post');

  // Form fields configuration
  const formFields = [
    {
      type: 'text',
      id: 'name',
      label: 'Name:',
      required: true
    },
    {
      type: 'email',
      id: 'email',
      label: 'Email:',
      required: true
    },
    {
      type: 'textarea',
      id: 'message',
      label: 'Message:',
      rows: 5,
      required: true
    }
  ];

  // Create form fields
  formFields.forEach(field => {
    form.appendChild(createFormField(field));
  });

  // Add submit button
  const submitButton = document.createElement('button');
  submitButton.setAttribute('type', 'submit');
  submitButton.classList.add('submit-btn');
  submitButton.textContent = 'Send Message';

  form.appendChild(submitButton);

  return form;
}

/**
 * Create a form field group
 * @param {Object} field - The field configuration
 * @returns {HTMLElement} The form field group element
 */
function createFormField(field) {
  const group = document.createElement('div');
  group.classList.add('form-group');

  // Create label
  const label = document.createElement('label');
  label.setAttribute('for', field.id);
  label.textContent = field.label;

  // Create input or textarea
  let input;
  if (field.type === 'textarea') {
    input = document.createElement('textarea');
    input.setAttribute('rows', field.rows);
  } else {
    input = document.createElement('input');
    input.setAttribute('type', field.type);
  }

  // Set common attributes
  input.setAttribute('id', field.id);
  input.setAttribute('name', field.id);

  if (field.required) {
    input.setAttribute('required', '');
    label.innerHTML += ' <span class="required">*</span>';
  }

  // Assemble the field group
  group.appendChild(label);
  group.appendChild(input);

  return group;
}

export default loadContact;