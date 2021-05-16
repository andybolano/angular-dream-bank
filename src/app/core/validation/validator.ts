import {AbstractControl} from '@angular/forms';

export class FormValidator {

  static validateText(c: AbstractControl) {
    if (c.value == null) {
      return null;
    }
    if (!/^[ñA-Za-z _]*[ñA-Za-z][ñA-Za-z _]*$/.test(c.value)) {
      return {onlyText: true}
    }

    return null;
  }

  static validateNumber(c: AbstractControl) {
    if (c.value == null) {
      return null;
    }

    if (!/^([0-9])*$/.test(c.value)) {
      return {onlyNumber: true}
    }
    return null;
  }

  static validateLengthPassword(c: AbstractControl) {
    if (c.value == null) {
      return null;
    }
    if (c.value.length < 6) {
      return {lengthPassword: true}
    }
    return null;
  }

  static validateSpace(c: AbstractControl) {
    if (c.value == null) {
      return null;
    }
    if (c.value.indexOf(' ') >= 0) {
      return {withoutSpace: true}
    }

    return null;
  }



}
