import './index.scss';
import { define, symbols, vdom  } from 'skatejs';

import Layout from '../../partials/layout';

export default define('the-about', {
  created (){
    console.info('the-about.created()');

  },
  render (elem) {
    vdom.element(Layout, () => {
        vdom.element('h1', {}, 'ABOUT');
    });
  }
});
