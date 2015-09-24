import Container from './container.js';
import Spectangular from '../spectangular.js';

export default class Table extends Container {
  get rowSelector() {
    if (this.impl.rowSelector === undefined) {
      throw 'The library you use should define rowSelector on its Table implementation';
    }
    return this.impl.rowSelector;
  }

  get cellSelector() {
    if (this.impl.cellSelector === undefined) {
      throw 'The library you use should define cellSelector on its Table implementation';
    }
    return this.impl.cellSelector;
  }

  get headerSelector() {
    if (this.impl.headerSelector === undefined) {
      throw 'The library you use should define headerSelector on its Table implementation';
    }
    return this.impl.headerSelector;
  }

  get rows() {
    return this.componentEl.all(by.css(this.rowSelector));
  }

  get headers() {
    return this.componentEl.all(by.css(this.headerSelector));
  }

  get pagination() {
    return Spectangular.pagination({
      rootEl: this.componentEl
    });
  }

  get rowCount() {
    return this.rows.count();
  }

  clickHeader(config) {
    if (config.text) {
      return this.clickHeaderByText(config.text);
    } else if (config.index) {
      return this.clickHeaderByIndex(config.index);
    } else {
      throw 'Table.clickHeader() expects a config with either text or index';
    }
  }

  clickHeaderByIndex(index) {
    this.headers.get(index).click();
    return this;
  }

  clickHeaderByText(text) {
    this.headers.filter((header) => {
      return header.getText().then((headerText) => {
        return headerText.toLowerCase().trim() === text.toLowerCase().trim();
      });
    }).then((filteredItems) => {
      if (filteredItems.length === 1) {
        filteredItems[0].click();
      } else if (!filteredItems.length) {
        throw `Could not find a header with the text ${text}`;
      } else {
        throw `There are multiple headers with the text ${text}`;
      }
    });
    return this;
  }

  getRowByIndex(index) {
    return this.rows.get(index);
  }

  getRowIndexByCellValue(columnIndex, text) {
    let foundRowIndex = -1;

    return this.rows.each((row, index) => {
      return row
        .all(by.css(this.cellSelector))
        .get(columnIndex)
        .getText()
        .then((cellText) => {
          if (cellText.toLowerCase().trim() === text.toLowerCase().trim()) {
            foundRowIndex = index;
          }
        });
    }).then(() => {
      return foundRowIndex;
    });
  }

  getCellValue(rowIndex, columnIndex) {
    return this.rows.get(rowIndex)
      .all(by.css(this.cellSelector))
      .get(columnIndex)
      .getText();
  }

  getRowMenuButton(rowIndex) {
    return Spectangular.menuButton({
      rootEl: this.rows.get(rowIndex)
    });
  }
}
