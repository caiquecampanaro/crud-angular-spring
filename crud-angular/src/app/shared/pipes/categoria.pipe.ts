import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoria'
})
export class CategoriaPipe implements PipeTransform {

  transform(value: string): string {
    switch (value) {
      case 'Ilícitos': return 'warning_off';
      case 'Bomba': return 'bedroom_baby';
    }
    return 'warning_off';
  }

}
