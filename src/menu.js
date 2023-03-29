import defaultExport, { antipastoArray, insalataArray, dolceArray } from './menu-list';

class TableInfo {
  constructor(name, menuItemsArray) {
    this._tableName = name;
    this._items = menuItemsArray;
  }

  get tableName() {
    return this._tableName;
  }

  get items() {
    return this._items;
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

function createMenuTableDiv(idName, classArray, menuType, headerName, menuItemArray) {
  const table = document.createElement('div');

  table.id = idName;
  const menuItems = [];

  for (let i = 0; i < classArray.length; i += 1) {
    table.classList.add(classArray[i]);
  }

  table.appendChild(createMenuHeaderDiv(headerName));

  for (let i = 0; i < menuItemArray.length; i += 1) {
    const menuName = menuItemArray[i].name;
    const menuDescription = menuItemArray[i].description;
    const menuPrice = menuItemArray[i].price;
    const menuItemDiv = createMenuItemDiv(menuName, menuDescription, menuPrice);

    menuItems.push(menuItemDiv);
  }

  if (menuType === 'menu-table-grid') {
    const menuContainerGrid = document.createElement('div');

    menuContainerGrid.classList.add('menu-container-grid');

    for (let i = 0; i < menuItems.length; i += 1) {
      menuContainerGrid.appendChild(menuItems[i]);
    }

    table.appendChild(menuContainerGrid);
  } else {
    for (let i = 0; i < menuItems.length; i += 1) {
      table.appendChild(menuItems[i]);
    }
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
  const classArrayColumn = ['menu-container', 'menu-container-column', 'menu-container-reg'];
  const innerGridContainerLeft = document.createElement('div');
  const innerGridContainerRight = document.createElement('div');

  innerGridContainerLeft.classList.add('inner-grid-container');
  innerGridContainerRight.classList.add('inner-grid-container');
  menuSection.id = 'menu-section';
  gridContainer.id = 'grid-container';

  const antipastoTable = new TableInfo('Antipasto', antipastoArray);
  const insalataTable = new TableInfo('Insalata', insalataArray);
  const dolceTable = new TableInfo('Dolce', dolceArray);

  const antipastoDiv = createMenuTableDiv('antipasto', classArrayColumn, 'regular', antipastoTable.tableName, antipastoTable.items);
  const insalataDiv = createMenuTableDiv('insalata', classArrayColumn, 'regular', insalataTable.tableName, insalataTable.items);
  const dolceDiv = createMenuTableDiv('dolce', classArrayColumn, 'regular', dolceTable.tableName, dolceTable.items);

  innerGridContainerLeft.appendChild(antipastoDiv);
  innerGridContainerLeft.appendChild(insalataDiv);
  innerGridContainerLeft.appendChild(dolceDiv);

  gridContainer.appendChild(innerGridContainerLeft);
  menuSection.appendChild(gridContainer);

  return menuSection;
}

export { createMenuHeadline, createMenuSection };
