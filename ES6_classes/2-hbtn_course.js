export default class HolbertonCourse {
  constructor(name, length, students) {
    if (!this.validateString(name)) { throw new TypeError('Name must be a string'); }
    if (!this.validateNumber(length)) { throw new TypeError('Length must be a number'); }
    if (!this.validateStudents(students)) { throw new TypeError('Students must be an array of strings'); }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  set name(newValue) {
    if (!this.validateString(newValue)) { throw new TypeError('Name must be a string'); }
    this._name = newValue;
  }

  get length() {
    return this._length;
  }

  set length(newValue) {
    if (!this.validateNumber(newValue)) { throw new TypeError('Length must be a number'); }
    this._length = newValue;
  }

  get students() {
    return this._students;
  }

  set students(newValue) {
    if (!this.validateStudents(newValue)) { throw new TypeError('Students must be an array of strings'); }
    this._students = newValue;
  }

  validateString(value) {
    return typeof value === 'string';
  }

  validateNumber(value) {
    return typeof value === 'number';
  }

  validateStudents(value) {
    return Array.isArray(value) && value.every((item) => typeof item === 'string');
  }
}
