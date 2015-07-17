import Container from './container.js';

export class Datepicker extends Container {
  get defaultSelector() {
    return '.material-datepicker-menu.material-opened > material-datepicker';
  }

  get modePickerEl() {
    return this.component.componentEl.element(by.css('.material-datepicker-date'));
  }

  setMode(mode) {
    var selector;

    switch(mode) {
      case 'year':
        selector = 'h3';
      break;

      case 'month':
        selector = 'h2';
      break;

      case 'day':
        selector = 'h1';
      break;
    }

    this.modePickerEl.element(by.tagName(selector)).click();
    return this;
  }

  get enabledYears() {
    this.setMode('year');
    return this.component.componentEl.all(
      by.css('.material-datepicker-yearview .material-button:not([disabled="disabled"])')
    );
  }

  get enabledMonths() {
    this.setMode('month');
    return this.component.componentEl.all(
      by.css('.material-datepicker-monthview .material-button:not([disabled="disabled"])')
    );
  }

  get enabledDays() {
    this.setMode('day');
    return this.component.componentEl.all(
      by.css('.material-datepicker-dayview .material-button:not([disabled="disabled"])')
    );
  }
}
