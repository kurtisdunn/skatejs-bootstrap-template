//import './index.scss';
// import { string, boolean, number } from 'kickflip/src/properties';
// import create, { a, br, div, option, h2, small } from 'kickflip/src/vdom';

import skate, { define, symbols, vdom  } from 'skatejs';

export default define('the-404', { 
  created (){
    console.info('the-404.created()');
    
  },
  render () {
    vdom.element('h1', {}, '404 Dumbass');
  }
});