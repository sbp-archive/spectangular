import Textfield from './textfield.js';
export class Textarea extends Textfield {
  get defaultSelector() {
    return 'textarea';
  }
}
export default Textarea;
