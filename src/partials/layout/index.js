import './index.scss';

import skate, { define, symbols, vdom  } from 'skatejs';
import Navbar from '../../components/navbar';

export default define('the-layout', {
  created (){
    console.info('the-layout.created()');
  },
  render () {
    vdom.element('div', { class: 'container' }, () => {
      vdom.element(Navbar);
      vdom.element('slot', { name: 'test' });
    });
  }
});
