import Container from './container.js';

export var monthMap = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December'
};

export default class Datepicker extends Container {
  get enabledYears() {
    if (this.impl.enabledYears === undefined) {
      throw 'The library you use should define a getter for enabledYears on its Datepicker';
    }
    return this.impl.enabledYears;
  }

  get enabledMonths() {
    if (this.impl.enabledMonths === undefined) {
      throw 'The library you use should define a getter for enabledMonths on its Datepicker';
    }
    return this.impl.enabledMonths;
  }

  get enabledDays() {
    if (this.impl.enabledDays === undefined) {
      throw 'The library you use should define a getter for enabledDays on its Datepicker';
    }
    return this.impl.enabledDays;
  }

  setDate(value) {
    var date = new Date(value);

    var year = date.getFullYear();
    var month = date.getMonth();
    var day = date.getDate();

    this.setYear(year);
    this.setMonth(month);
    this.setDay(day);
  }

  setYear(year) {
    this.clickItemByValue(this.enabledYears, year);
    return this;
  }

  setMonth(month) {
    this.clickItemByValue(this.enabledMonths, monthMap[month]);
    return this;
  }

  setDay(day) {
    this.clickItemByValue(this.enabledDays, day);
    return this;
  }

  clickItemByValue(items, value) {
    return items.filter((item) => {
      return item.getText().then((text) => {
        return text.toLowerCase().trim() === `${value}`.toLowerCase().trim();
      });
    })
    .then((filteredItems) => {
      if (filteredItems.length === 1) {
        filteredItems[0].click();
      }
      else if (!filteredItems.length) {
        throw `${value} is not within valid range. Test fails.`;
      }
      else {
        throw `${value} is not unique. Test fails.`;
      }
    });
  }
}
