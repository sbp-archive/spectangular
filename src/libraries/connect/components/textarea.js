import Textfield from './textfield.js';
export class Textarea extends Textfield {
  getInputEl(componentEl) {
    return componentEl.element(by.tagName('textarea'));
  }
}
export default Textarea;
