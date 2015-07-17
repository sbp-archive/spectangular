import Component from './component.js';
export class Textfield extends Component {
  get defaultSelector() {
    return 'material-input-group';
  }

  getInputEl(componentEl) {
    return componentEl.element(by.tagName('input'));
  }
}
export default Textfield;
