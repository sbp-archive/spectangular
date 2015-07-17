import Container from './container.js';

export class Table extends Container {
  get defaultSelector() {
    return 'table.md-data-table';
  }

  get rowSelector() {
    return 'tbody > tr';
  }

  get cellSelector() {
    return 'tbody > tr > td';
  }

  get headerSelector() {
    return 'thead > tr > th';
  }
}

export default Table;
