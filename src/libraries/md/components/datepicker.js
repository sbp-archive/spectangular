import Container from './container.js';

export class Datepicker extends Container {
  get enabledYears() {
    throw 'Angular Material has no Datepicker and thus does not support the datefield';
  }

  get enabledMonths() {
    throw 'Angular Material has no Datepicker and thus does not support the datefield';
  }

  get enabledDays() {
    throw 'Angular Material has no Datepicker and thus does not support the datefield';
  }
}
