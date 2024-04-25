export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
    }
    if (typeof length !== 'number') {
    throw new TypeError('Length must be a number');
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }
  get name() {
    return this._name;
  }
  set name(newName) {
    if (typeof newName !== 'string') {
    throw new TypeError('Name must be a string');
    }
    this._name = newName;
  }
  get length() {
    return this._length;
  }
  get students() {
    return this._students;
  }
}
  