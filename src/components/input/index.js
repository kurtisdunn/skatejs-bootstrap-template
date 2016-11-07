import './index.scss';
import { array, boolean, string } from 'kickflip/src/properties';
import create, { div, input, label, slot, span, text } from 'kickflip/src/vdom';
import guid from '../../lib/guid';
import icon from '../icon';
import kf from 'kickflip';
import validate from '../../lib/validator/field';

export default kf('bt-input', {
  events: {
    blur (e) {
      this.value = e.target.value;
      validate(this, function (field, errors) {
        field.errors = errors;
      });
    },
    change (e) {
      this.value = e.target.value;
      validate(this, function (field, errors) {
        field.errors = errors;
      });
    }
  },
  properties: {
    checked: boolean(),
    class: string(),
    disabled: boolean(),
    errors: array(),
    icon: string(),
    id: string(),
    label: string(),
    name: string(),
    placeholder: string(),
    style:string(),
    type: string(),
    validators: string(),
    value: string({ default: '' })
  },
  render (elem) {
    const hasErrors = elem.errors && elem.errors.length;
    const id = elem.id || guid();
    const isCheckbox = elem.type === 'checkbox' || elem.type === 'radio';
    
    function renderLabel () {
      label({ for: `bt-form-control-${id}` }, function () {
        if (isCheckbox) {
          text('\u00A0\u00A0');
        }
        
        text(elem.label);
        
        if (!isCheckbox) {
          text('\u00A0\u00A0');
        }
        
        if (elem.icon) {
          create(icon, { name: elem.icon });
        }
      });
    }

    div({ class: `form-group ${hasErrors ? 'has-error has-feedback' : ''}` }, function () {
      if (!isCheckbox && elem.label) {
        renderLabel();
      }
      
      input({
        'aria-describedby': `${id}-status`,
        checked: isCheckbox && elem.checked,
        class: (isCheckbox ? '' : 'form-control') + ` ${elem.className}`,
        disabled: elem.disabled,
        id: `bt-form-control-${id}`,
        name: elem.name,
        placeholder: `${elem.placeholder}` || '',
        style:elem.style || '',
        type: elem.type,
        value: elem.value || ''
      });

      if (hasErrors) {
        div(function () {
          span({ 'aria-hidden': 'true', class: 'glyphicon glyphicon-remove form-control-feedback' });
          span({ class: 'sr-only', id: `${id}-status` }, '(error)');
        });
      }

      if (isCheckbox && elem.label) {
        renderLabel();
      }

      slot({ key: 'light-dom' });

      if (hasErrors) {
        span({ class: 'help-block' }, elem.errors[0]);
      }
    });
  }
});
