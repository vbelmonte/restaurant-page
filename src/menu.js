function createMenuItem(itemName, itemDescription, itemPrice) {
  const menuItem = document.createElement('div');
  const nameDescDiv = document.createElement('div');
  const priceDiv = document.createElement('div');
  const nameDescP = document.createElement('p');
  const priceP = document.createElement('p');
  const nameStrong = document.createElement('strong');
  const priceStrong = document.createElement('strong');
  const descTextNode = document.createTextNode(itemDescription);
  const br = document.createElement('br');

  menuItem.classList.add('menu-item');

  nameStrong.innerHTML = itemName;

  nameDescP.appendChild(nameStrong);
  nameDescP.appendChild(br);
  nameDescP.appendChild(descTextNode);
  nameDescDiv.appendChild(nameDescP);

  priceStrong.innerHTML = itemPrice;
  priceP.appendChild(priceStrong);
  priceDiv.appendChild(priceP);

  menuItem.appendChild(nameDescDiv);
  menuItem.appendChild(priceDiv);

  return menuItem;
}

function createMenuHeadline() {
  const headlineDiv = document.createElement('div');
  const menuHeaderDiv = document.createElement('div');
  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  headlineDiv.id = 'menu-headline';

  h1.innerHTML = 'Menu';
  p.innerHTML = 'Our menu is simple and serves the same dishes for lunch and dinner. This ensures we can provide quality dishes.';

  menuHeaderDiv.appendChild(h1);
  menuHeaderDiv.appendChild(p);

  headlineDiv.appendChild(menuHeaderDiv);

  return headlineDiv;
}

function createMenuSection() {
  const menuSection = document.createElement('div');
  const gridContainer = document.createElement('div');

  menuSection.id = 'menu-section';
  gridContainer.id = 'grid-container';
}

export { createMenuHeadline, createMenuSection };
