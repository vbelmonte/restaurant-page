import defaultExport, { antipastoArray, insalataArray, dolceArray } from './menu-list';

class TableInfo {
  constructor(name, menuItemsArray) {
    this.tableName = name;
    this.items = menuItemsArray;
  }

  get tableName() {
    return this.tableName;
  }

  get items() {
    return this.items;
  }
}

function createMenuItemDiv(itemName, itemDescription, itemPrice) {
  const menuItemDiv = document.createElement('div');
  const nameDescDiv = document.createElement('div');
  const priceDiv = document.createElement('div');
  const nameDescP = document.createElement('p');
  const priceP = document.createElement('p');
  const nameStrong = document.createElement('strong');
  const priceStrong = document.createElement('strong');
  const descTextNode = document.createTextNode(itemDescription);
  const br = document.createElement('br');

  menuItemDiv.classList.add('menu-item');

  nameStrong.innerHTML = itemName;

  nameDescP.appendChild(nameStrong);
  nameDescP.appendChild(br);
  nameDescP.appendChild(descTextNode);
  nameDescDiv.appendChild(nameDescP);

  priceStrong.innerHTML = itemPrice;
  priceP.appendChild(priceStrong);
  priceDiv.appendChild(priceP);

  menuItemDiv.appendChild(nameDescDiv);
  menuItemDiv.appendChild(priceDiv);

  return menuItemDiv;
}

function createMenuHeaderDiv(headerName) {
  const headerDiv = document.createElement('div');
  const h2 = document.createElement('h2');

  h2.innerHTML = headerName;
  headerDiv.appendChild(h2);
  headerDiv.classList.add('menu-header');

  return headerDiv;
}

function populateMenuTable(table, menuItemArray) {
  for (let i = 0; i < menuItemArray.length; i += 1) {
    table.appendChild(menuItemArray[i]);
  }

  return table;
}

function createMenuTableDiv(idName, classArray, menuType, headerDiv, tableInfo) {
  const table = document.createElement('div');

  table.id = idName;

  for (let i = 0; i < classArray.length; i += 1) {
    table.classList.add(classArray[i]);
  }

  table.appendChild(headerDiv);

  if (menuType === 'menu-table-grid') {
    const menuContainerGrid = document.createElement('div');

    menuContainerGrid.classList.add('menu-container-grid');
  } else {
    table.appendChild();
  }

  return table;
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

  const testMenuItem = createMenuItemDiv(antipastoArray[0].name, antipastoArray[0].description, antipastoArray[0].price);

  gridContainer.appendChild(testMenuItem);

  return gridContainer;
}

export { createMenuHeadline, createMenuSection };
