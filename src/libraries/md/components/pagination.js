import Container from './container.js';

export class Pagination extends Container {
  get currentPageSelector() {
    return 'md-data-table-pagination > span:last-child';
  }

  get defaultSelector() {
    return 'md-data-table-pagination';
  }

  get previousButtonSelector() {
    return 'md-button[aria-label="Previous"]';
  }

  get nextButtonSelector() {
    return 'md-button[aria-label="Next"]';
  }
}

export default Pagination;
