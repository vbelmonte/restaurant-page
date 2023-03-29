import './style.css';
import { createHeadline, createMessageFromUs, createViewMenu } from './home';
import { createMenuHeadline, createMenuSection } from './menu';

(function runPage() {
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

  document.getElementById('home').addEventListener('click', loadHomePage);
  document.getElementById('menu').addEventListener('click', loadMenuPage);

  /* clearContents();
  loadHomePage(); */
}());
