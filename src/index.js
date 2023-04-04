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
    } else {
      document.getElementsByClassName('header-logo')[0].style.height = '6rem';
    }
  }

  function forcePaddingHeaderSmall() {
    document.getElementsByTagName('header')[0].style.padding = '0rem 1rem';
  }

  function forceHeaderLogoSmall() {
    document.getElementsByClassName('header-logo')[0].style.height = '4rem';
  }

  function forceShowNav() {
    document.getElementById('nav').style.display = 'flex';
  }

  function forceHideNav() {
    document.getElementById('nav').style.display = 'none';
  }

  function setNavDisplayNone() {
    const x = document.getElementById('nav');

    x.style.display = 'none';
  }

  function addCloseMenu() {
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].addEventListener('click', setNavDisplayNone);
    }
  }

  function removeCloseMenu() {
    console.log('running removeCloseMenu');
    const navLinks = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navLinks.length; i += 1) {
      navLinks[i].removeEventListener('click', setNavDisplayNone);
    }
  }

  function forceOnScroll() {
    if (window.innerWidth > 1024) {
      scrollFunction();
    }
  }

  function forceOnResize() {
    if (window.innerWidth <= 1024) {
      forcePaddingHeaderSmall();
      forceHeaderLogoSmall();
      forceHideNav();
      addCloseMenu();
    } else {
      removeCloseMenu();
      forceShowNav();
      scrollFunction();
    }
  }

  window.onscroll = function () {
    if (window.innerWidth > 1024) {
      scrollFunction();
    }
  };

  window.onresize = function () {
    if (window.innerWidth <= 1024) {
      forcePaddingHeaderSmall();
      forceHeaderLogoSmall();
      forceHideNav();
      addCloseMenu();
    } else {
      removeCloseMenu();
      forceShowNav();
      scrollFunction();
    }
  };

  function openMenu() {
    const x = document.getElementById('nav');
    if (x.style.display === 'block') {
      x.style.display = 'none';
    } else {
      x.style.display = 'block';
    }
  }

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
  document.getElementById('mobile-nav-icon').addEventListener('click', openMenu);

  forceOnScroll();
  forceOnResize();

  clearContents();
  loadHomePage();
}());
