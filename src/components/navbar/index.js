import './index.scss';
import skate, { define, symbols, vdom  } from 'skatejs';
import page from 'page';

import Config from '../../lib/config';

export default define('the-navbar', {
  created (){
    console.info('the-navbar.created()', Config);
  },
  render () {
    vdom.element('div', { class: '' }, () => {
      vdom.element('nav', { class: 'navbar navbar-light bg-inverse' }, () => {
        vdom.element('a', { class: 'navbar-brand', href: '' }, 'THE WEBSITE');
        vdom.element('ul', { class: 'nav navbar-nav' }, () => {
          if(Config.pageList){
            Config.pageList.map(p => {
              vdom.element('li', { class: 'nav-item active' }, () => {
                vdom.element('a', { class: 'nav-link', href: p.slug, onclick: function(e){
                  page.redirect(p.slug);
                  e.preventDefault();
                } }, p.name);
              });
            });
          }
        });
      });
    });
  }
});
