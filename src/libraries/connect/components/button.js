import Component from './component.js';

export class Button extends Component {
  get defaultSelector() {
    return 'material-button';
  }

  getButtonIcon(buttonEl) {
    return buttonEl.getAttribute('material-icon');
  }
}

export default Button;
