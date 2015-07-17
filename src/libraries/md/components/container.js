import Component from './component.js';

export class Container extends Component {
  get defaultSelector() {
    throw 'If you use a Container directly, you should specify a selector';
  }
}

export default Container;
