function loadMenu() {
  const content = document.querySelector('#content');

  // Create menu container
  const menuContainer = document.createElement('div');
  menuContainer.classList.add('menu-container');

  // Create menu heading
  const menuHeading = document.createElement('h2');
  menuHeading.textContent = 'Our Menu';
  menuHeading.classList.add('menu-heading');
  menuContainer.appendChild(menuHeading);

  // Create menu sections
  const menuSections = [
    {
      title: 'Appetizers',
      items: [
        { name: 'Bruschetta', description: 'Toasted bread topped with tomatoes, garlic, and fresh basil', price: '$8' },
        { name: 'Calamari', description: 'Crispy fried squid served with marinara sauce', price: '$12' },
        { name: 'Spring Rolls', description: 'Fresh vegetables wrapped in rice paper', price: '$9' }
      ]
    },
    {
      title: 'Main Courses',
      items: [
        { name: 'Grilled Salmon', description: 'Fresh salmon with lemon butter sauce and seasonal vegetables', price: '$26' },
        { name: 'Beef Tenderloin', description: '8oz tenderloin with roasted potatoes and asparagus', price: '$34' },
        { name: 'Mushroom Risotto', description: 'Creamy arborio rice with wild mushrooms and parmesan', price: '$22' }
      ]
    },
    {
      title: 'Desserts',
      items: [
        { name: 'Tiramisu', description: 'Classic Italian dessert with coffee-soaked ladyfingers', price: '$9' },
        { name: 'Chocolate Lava Cake', description: 'Warm chocolate cake with vanilla ice cream', price: '$10' },
        { name: 'Crème Brûlée', description: 'Rich custard topped with caramelized sugar', price: '$8' }
      ]
    }
  ];

  // Create each menu section
  menuSections.forEach(section => {
    const sectionDiv = document.createElement('div');
    sectionDiv.classList.add('menu-section');

    const sectionTitle = document.createElement('h3');
    sectionTitle.textContent = section.title;
    sectionDiv.appendChild(sectionTitle);

    // Create menu items
    section.items.forEach(item => {
      const itemDiv = document.createElement('div');
      itemDiv.classList.add('menu-item');

      const itemHeader = document.createElement('div');
      itemHeader.classList.add('item-header');

      const itemName = document.createElement('h4');
      itemName.textContent = item.name;

      const itemPrice = document.createElement('span');
      itemPrice.textContent = item.price;
      itemPrice.classList.add('price');

      itemHeader.appendChild(itemName);
      itemHeader.appendChild(itemPrice);

      const itemDescription = document.createElement('p');
      itemDescription.textContent = item.description;

      itemDiv.appendChild(itemHeader);
      itemDiv.appendChild(itemDescription);
      sectionDiv.appendChild(itemDiv);
    });

    menuContainer.appendChild(sectionDiv);
  });

  content.appendChild(menuContainer);
}

export default loadMenu;