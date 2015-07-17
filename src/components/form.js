import Container from './container.js';
import Spectangular from '../spectangular.js';

export default class Form extends Container {
  static validate(data) {
    for (var index in data) {
      if (data.hasOwnProperty(index)) {
        var row = data[index];
        if (!row.hasOwnProperty('model')) {
          throw 'Test specification does not have a model';
        }
        if (!row.hasOwnProperty('value')) {
          throw 'Test specification does not have value';
        }
        if (!row.hasOwnProperty('type')) {
          throw 'Test specification does not have a type';
        }
      }
    }

    return true;
  }

  constructor(impl, config = {}) {
    super(impl, config);

    if (config.data) {
      this.createFields(config.data);
      this.setValues(config.data);
    } else if (config.fields) {
      this.createFields(config.fields);
    } else {
      throw 'A form needs to have either data (containing fields) or fields specified on the configuration';
    }
  }

  setValues(data) {
    if (!Form.validate(data)) {
      throw 'The data that you are trying to set to this form is not valid';
    }

    data.forEach((item) => {
      let field = this.fields[item.model];
      if (field) {
        field.setValue(item.value);
      }
    });

    return this;
  }

  getValues() {
    var values = {};
    this.fields.forEach((field) => {
      values[field.model] = field.getValue();
    });
    return values;
  }

  createFields(data) {
    this.fields = {};

    data.forEach((item) => {
      if (!Spectangular[item.type]) {
        throw `Field type ${item.type} is not valid.`;
      }

      this.fields[item.model] = Spectangular[item.type]({
        rootEl: this.componentEl,
        selector: `[ng-model='${item.model}']`
      });
    });

    return this;
  }
}
