import { createButton, createAttributePara } from './constructors';

function createHeadline() {
  const headlineDiv = document.createElement('div');
  const pAttribute = document.createElement('p');

  headlineDiv.id = 'headline';
  headlineDiv.classList.add('attribute');

  pAttribute.classList.add('attrLowlight');

  pAttribute.innerHTML = 'Photo by <a href="https://unsplash.com/@allthestories?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Storiès</a> on <a href="https://unsplash.com/photos/v1rUvnVMMkM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';

  headlineDiv.appendChild(pAttribute);

  return headlineDiv;
}

function createMessageFromUs() {
  const messageFromUsDiv = document.createElement('div');

  messageFromUsDiv.id = 'message-from-us';

  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');

  const attribute = 'Photo by <a href="https://unsplash.com/@clark_douglas?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Clark Douglas</a> on <a href="https://unsplash.com/photos/17ZU9BPy_Q4?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';
  const pAttribute = createAttributePara(attribute);

  leftDiv.classList.add('left');
  leftDiv.classList.add('attribute');
  leftDiv.appendChild(pAttribute);

  rightDiv.classList.add('right');
  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = 'Buon Appetito!';
  p.innerText = 'At Italia Farina, we bring the flavors of Napoli to you. We give you a wide variety of dishes to experience the unique culinary history of Napoli, Italy.';

  const buttonClasses = ['btn-lg', 'btn-outline', 'btn-cream-outline'];
  const learnMoreButton = createButton(buttonClasses, 'Learn More');

  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
  contentDiv.appendChild(learnMoreButton);

  rightDiv.appendChild(contentDiv);

  messageFromUsDiv.appendChild(leftDiv);
  messageFromUsDiv.appendChild(rightDiv);

  return messageFromUsDiv;
}

function createViewMenu() {
  const viewMenuDiv = document.createElement('div');
  viewMenuDiv.id = 'view-menu';

  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');

  const attribute = 'Photo by <a href="https://unsplash.com/@hojastudio?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Hoja Studio</a> on <a href="https://unsplash.com/photos/Thw3nleO3cM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText" target="_blank">Unsplash</a>';
  const pAttribute = createAttributePara(attribute);

  leftDiv.classList.add('left');

  rightDiv.classList.add('right');
  rightDiv.classList.add('attribute');
  rightDiv.appendChild(pAttribute);

  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = 'Tastes Like Home';
  p.innerText = 'Discover our carefully crafted Napolitano dishes.';

  const buttonClasses = ['btn-lg', 'btn-outline', 'btn-cream-outline'];
  const exploreMenuButton = createButton(buttonClasses, 'Explore Our Menu');

  contentDiv.appendChild(h1);
  contentDiv.appendChild(p);
  contentDiv.appendChild(exploreMenuButton);

  leftDiv.appendChild(contentDiv);

  viewMenuDiv.appendChild(leftDiv);
  viewMenuDiv.appendChild(rightDiv);

  return viewMenuDiv;
}

export { createHeadline, createMessageFromUs, createViewMenu };
