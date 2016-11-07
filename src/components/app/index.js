import skate, { define, vdom } from 'skatejs';

import page from 'page';
import cookie from 'js-cookie';
import config from '../../lib/config';
import Router from '../../lib/router';

export default define('the-app', {
  properties: {
    args: { attribute: false },
    page: { attribute: false }
  },
  created (elem) {
    console.info('the-app.created()');
  },
  render (elem) {
    Router.init(elem);

    if (elem.page) {
      vdom.elementOpen(elem.page, elem.args);
    }
  }
});
