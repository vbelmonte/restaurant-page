import { createButton } from './create-button';

function createHeadline() {
  const headlineDiv = document.createElement('div');
  headlineDiv.id = 'headline';

  return headlineDiv;
}

function createMessageFromUs() {
  const messageFromUsDiv = document.createElement('div');
  messageFromUsDiv.id = 'message-from-us';

  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');

  leftDiv.classList.add('left');
  rightDiv.classList.add('right');
  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = 'Buon Appetito!';
  p.innerText = 'At Italia Farina, we bring the flavors of Napoli to you. We give you a wide variety of dishes to experience the unique culinary history of Napoli, Italy.';

  const buttonClasses = ['btn-sm', 'btn-outline', 'btn-cream-outline'];
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

  leftDiv.classList.add('left');
  rightDiv.classList.add('right');
  contentDiv.classList.add('content');

  const h1 = document.createElement('h1');
  const p = document.createElement('p');

  h1.innerText = 'Tastes Like Home';
  p.innerText = 'Discover our carefully crafted Napolitano dishes.';

  const buttonClasses = ['btn-sm', 'btn-outline', 'btn-cream-outline'];
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
