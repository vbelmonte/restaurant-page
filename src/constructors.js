function createAttribute(attributeInnerHTML) {
  const attributeDiv = document.createElement('div');
  const pAttribute = document.createElement('p');

  pAttribute.classList.add('attrLowlight');

  pAttribute.innerHTML = attributeInnerHTML;
  attributeDiv.appendChild(pAttribute);

  return attributeDiv;
}

function createAttributePara(attributeInnerHTML) {
  const pAttribute = document.createElement('p');

  pAttribute.classList.add('attrHighlight');

  pAttribute.innerHTML = attributeInnerHTML;

  return pAttribute;
}

function createHeader(headerName) {
  const headerDiv = document.createElement('div');
  const h1Header = document.createElement('h1');

  h1Header.innerHTML = headerName;
  headerDiv.appendChild(h1Header);

  return headerDiv;
}

function createHeadline(idName, attributeInnerHTML, headerName) {
  const headlineDiv = document.createElement('div');
  const attributeDiv = createAttribute(attributeInnerHTML);
  const headerDiv = createHeader(headerName);

  headlineDiv.id = idName;
  headlineDiv.classList.add('headline');

  headlineDiv.appendChild(headerDiv);
  headlineDiv.appendChild(attributeDiv);

  return headlineDiv;
}

function createButton(classArray, buttonContent) {
  const button = document.createElement('button');

  for (let i = 0; i < classArray.length; i += 1) {
    button.classList.add(classArray[i]);
  }

  button.innerHTML = buttonContent;

  return button;
}

export { createButton, createHeadline, createAttributePara };
