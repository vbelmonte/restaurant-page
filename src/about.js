import { createHeadline } from './constructors';

function createAboutHeadline() {
  /* const aboutHeadline = document.createElement('div');
  const aboutHeaderDiv = document.createElement('div');
  const h1 = document.createElement('h1');

  aboutHeadline.id = 'about-headline';

  h1.innerHTML = 'About Us';
  aboutHeaderDiv.appendChild(h1);

  aboutHeadline.appendChild(aboutHeaderDiv); */

  const attribute = 'Photo by <a href="https://unsplash.com/@ninjason?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Jason Leung</a> on <a href="https://unsplash.com/photos/poI7DelFiVA?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>';

  const aboutHeadlineDiv = createHeadline('about-headline', attribute, 'About Us');

  return aboutHeadlineDiv;
}

function createAboutSection() {
  const aboutSection = document.createElement('div');
  const aboutSectionDiv = document.createElement('div');
  const h2 = document.createElement('h2');
  const br1 = document.createElement('br');
  const br2 = document.createElement('br');
  const p1 = document.createElement('p');
  const p2 = document.createElement('p');

  aboutSection.id = 'about-section';
  h2.classList.add('bold');

  h2.innerHTML = 'Sharing our love for Neopolitan food';

  p1.innerHTML = 'This website is a project of The Odin Project and is part of the Full Stack Javascript curriculum. The purpose of this website is to demonstrate knowledge and skills of Classes, ES6 Modules, and Webpack.';

  p2.innerHTML = 'The restaurant described in this website is fictional and inspired by real restaurants that serve authentic Italian dishes. The names of the dishes mentioned in this site are not intended to be an accurate representation of Itailan food, namely Neopolitan dishes.';

  aboutSectionDiv.appendChild(h2);
  aboutSectionDiv.appendChild(br1);
  aboutSectionDiv.appendChild(p1);
  aboutSectionDiv.appendChild(br2);
  aboutSectionDiv.appendChild(p2);

  aboutSection.appendChild(aboutSectionDiv);

  return aboutSection;
}

export { createAboutHeadline, createAboutSection };
