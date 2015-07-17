export class Component {
  constructor(component) {
    this.component = component;
  }
  
  get defaultSelector() {
    throw 'If you use a Component directly, you should specify a selector';
  }
}

export default Component;
