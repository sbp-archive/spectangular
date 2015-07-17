import Container from './container.js';

export class Table extends Container {
  get defaultSelector() {
    return 'material-gridlist';
  }

  get rowSelector() {
    return 'material-gridlist-content material-row';
  }

  get cellSelector() {
    return 'material-cell';
  }

  get headerSelector() {
    return 'material-gridlist-headers material-cell';
  }
}

export default Table;
