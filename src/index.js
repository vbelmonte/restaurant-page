import './style.css';
import './media-queries.css';
import { createHeadline, createMessageFromUs, createViewMenu } from './home';
import { createMenuHeadline, createMenuSection } from './menu';
import { createAboutHeadline, createAboutSection } from './about';
import { createContactHeadline, createContactSection } from './contact';

(function runPage() {
  /** MINIMIZE NAVBAR ON SCROLL * */

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementsByClassName('header-logo')[0].style.height = '4rem';
      document.getElementsByTagName('header')[0].style.padding = '0rem 5rem';
    } else {
      document.getElementsByClassName('header-logo')[0].style.height = '8rem';
      document.getElementsByTagName('header')[0].style.padding = '1rem 5rem';
    }
  }

  window.onscroll = function () {
    scrollFunction();
  };

  function clearContents() {
    document.getElementById('content').innerHTML = '';
  }

  function loadHomePage() {
    clearContents();

    document.getElementById('content').appendChild(createHeadline());
    document.getElementById('content').appendChild(createMessageFromUs());
    document.getElementById('content').appendChild(createViewMenu());
  }

  function loadMenuPage() {
    clearContents();

    document.getElementById('content').appendChild(createMenuHeadline());
    document.getElementById('content').appendChild(createMenuSection());
  }

  function loadAboutPage() {
    clearContents();

    document.getElementById('content').appendChild(createAboutHeadline());
    document.getElementById('content').appendChild(createAboutSection());
  }

  function loadContactPage() {
    clearContents();

    document.getElementById('content').appendChild(createContactHeadline());
    document.getElementById('content').appendChild(createContactSection());
  }

  document.getElementById('home').addEventListener('click', loadHomePage);
  document.getElementById('menu').addEventListener('click', loadMenuPage);
  document.getElementById('about').addEventListener('click', loadAboutPage);
  document.getElementById('contact').addEventListener('click', loadContactPage);

  clearContents();
  loadHomePage();
}());
