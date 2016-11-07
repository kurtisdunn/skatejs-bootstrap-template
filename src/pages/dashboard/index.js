import './index.scss';
import { define, symbols, vdom  } from 'skatejs';

import Layout from '../../partials/layout';

export default define('the-dashboard', {
  created (){
    console.info('the-dashboard.created()');

  },
  render (elem) {
    vdom.element(Layout, () => {
        vdom.element('h1', {}, 'DASHBOARD');
    });
  }
});
