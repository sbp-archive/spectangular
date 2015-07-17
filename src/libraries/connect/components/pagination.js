import Container from './container.js';

export class Pagination extends Container {
  get defaultSelector() {
    return 'material-gridlist-pagination';
  }

  get previousButtonSelector() {
    return 'material-button:first-child';
  }

  get nextButtonSelector() {
    return 'material-button:last-child';
  }

  get currentPageSelector() {
    return 'material-title';
  }
}

export default Pagination;
