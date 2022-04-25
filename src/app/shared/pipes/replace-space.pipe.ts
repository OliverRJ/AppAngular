import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'replaceSpace' //Nombre de pipe
})
export class ReplaceSpacePipe implements PipeTransform {

  // NIckname: (Hola soy pepe) ==> hola-soy-pepe
  transform(value: string, args: string): string {
    value = value.split(' ').join(args).toLocaleLowerCase()
    return value;
  }

}
