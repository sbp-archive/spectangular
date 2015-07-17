import Container from './container.js';

export class Form extends Container {
  get defaultSelector() {
    throw 'When using the Connect Material library you should specify a selector in your form config.';
  }
}

export default Form;
