import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export function dateValidator(dateRange: {
  from?: string;
  to?: string;
}): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    if (
      dateRange.from &&
      new Date(control.value).getTime() < new Date(dateRange.from).getTime()
    ) {
      return { date: { value: control.value, from: dateRange.from } };
    }

    if (
      dateRange.to &&
      new Date(control.value).getTime() > new Date(dateRange.to).getTime()
    ) {
      return { date: { value: control.value, to: dateRange.from } };
    }

    return null;
  };
}
