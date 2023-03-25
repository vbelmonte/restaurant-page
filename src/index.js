import './style.css';
import { createHeadline, createMessageFromUs, createViewMenu } from './home';

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

  document.getElementById('home').addEventListener('click', loadHomePage);

  clearContents();
  loadHomePage();
}());
