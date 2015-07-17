import Textfield from './textfield.js';
import Spectangular from '../spectangular.js';

export default class Searchfield extends Textfield {
  setValue(value) {
    super.setValue(value);

    Spectangular.select().clickItem({index: 0});

    return this;
  }
}
