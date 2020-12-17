class StringBuilder {
  constructor(_value) {
    this._value = _value;
  }
  get value() {
    return this._value;
  }
  set value(str) {
    this._value = str;
  }

  append(str) {
    this.value = this._value + str;
    return this.value;
  }

  prepend(str) {
    this.value = str + this._value;
    return this.value;
  }
  pad(str) {
    this.value = str + this._value + str;
    return this.value;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
