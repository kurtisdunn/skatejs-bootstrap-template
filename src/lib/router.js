import page from 'page';
import assign from 'object-assign';

import Config from '../../lib/config';
import map from '../../lib/map';

import About from '../pages/about';
import Dashboard from '../pages/dashboard';
import Notfound from '../../pages/notfound';
import Home from '../../pages/home';


function pageTitle(slug) {
  const pageTitle = document.title;
  document.title = document.title + ' - ' + slug;
}

const Router = {
  _pageList:[
    {
      name: 'Home',
      slug: '/',
      template: Home
    },
    {
      name: 'Dashboard',
      slug: '/dashboard',
      template: Dashboard
    },
    {
      name: 'About',
      slug: '/about',
      template: About
    }
  ],
  init: function(elem) {
    assign(Config, {
      pageList: this._pageList
    });
    // Theres 3 things to notice here.
    // We need to define a root page, an array of pages & a page for error handling.
    // Any future page addtions should be added to the _pageList array.

    const locationHash = window.location.hash.slice(2);
    const currentPage = this._pageList.filter(i => i.slug === locationHash);
    const homePage = this._pageList.filter(i => i.slug === '/');

    // load page if is site root
    if(locationHash === '' || locationHash === '/'){
      pageTitle(homePage[0].name);
      page(homePage[0].slug, this.render(elem, homePage[0].template));
    }

    // load any other page in the above pageList array
    else if(currentPage.length){
      pageTitle(currentPage[0].name);
      page(currentPage[0].slug, this.render(elem, currentPage[0].template));
    }

    // catch with 404 for page not found.
    else {
      pageTitle('404 not found');
      page(window.location.hash.slice(2), this.render(elem, Notfound));
    }

    //init page router
    page({ hashbang: true });

  },
  render: (elem, page, requiresAuth = true) => {
    function doRender (ctx) {
      elem.args = ctx.params;
      elem.page = page;
    }
    return function (ctx) {
      doRender(ctx);
    };
  }
};

export default Router;
