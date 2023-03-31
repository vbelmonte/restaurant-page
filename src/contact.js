import { createHeadline, createAttributePara } from './constructors';

function createContactHeadline() {
  /* const contactHeadline = document.createElement('div');
  const contactHeaderDiv = document.createElement('div');
  const h1 = document.createElement('h1');

  contactHeadline.id = 'contact-headline';

  h1.innerHTML = 'Contact Us';
  contactHeaderDiv.appendChild(h1);

  contactHeadline.appendChild(contactHeaderDiv); */

  const attribute = 'Photo by <a href="https://unsplash.com/@animavisual?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Anima Visual</a> on <a href="https://unsplash.com/photos/RAw5_TwkaBI?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

  const contactHeadlineDiv = createHeadline('contact-headline', attribute, 'Contact Us');

  return contactHeadlineDiv;
}

function createContactSection() {
  const contactSection = document.createElement('div');
  const leftDiv = document.createElement('div');
  const rightDiv = document.createElement('div');
  const contentDiv = document.createElement('div');
  const addressDiv = document.createElement('div');
  const servicesDiv = document.createElement('div');
  const summaryDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const pAddress = document.createElement('p');
  const pServices = document.createElement('p');
  const pSummary = document.createElement('p');
  const bServices = document.createElement('b');

  const attribute = 'Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';
  const pAttribute = createAttributePara(attribute);

  contactSection.id = 'contact-section';
  leftDiv.classList.add('left');
  leftDiv.classList.add('attribute');

  leftDiv.appendChild(pAttribute);

  rightDiv.classList.add('right');
  contentDiv.classList.add('content');

  h2.classList.add('orange');
  h2.classList.add('bold');
  h2.innerHTML = 'Italia Farina';

  pAddress.innerHTML = '2775 Coleman Avenue<br>San Marcos, CA 92078<br>(760) 653-3230<br>info@italiafarina.com';

  addressDiv.appendChild(h2);
  addressDiv.appendChild(pAddress);

  bServices.classList.add('orange');
  bServices.innerHTML = 'Catering • Private Events • Reservations';
  pServices.appendChild(bServices);

  servicesDiv.appendChild(pServices);

  pSummary.innerHTML = 'Have a private event you\'d like to host at our restaurant? Need us to cater for your next party? Please email us for inquiries!';

  summaryDiv.appendChild(pSummary);

  contentDiv.appendChild(addressDiv);
  contentDiv.appendChild(servicesDiv);
  contentDiv.appendChild(summaryDiv);

  rightDiv.appendChild(contentDiv);

  contactSection.appendChild(leftDiv);
  contactSection.appendChild(rightDiv);

  return contactSection;
}

export { createContactHeadline, createContactSection };
