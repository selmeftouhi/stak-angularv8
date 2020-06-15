import { Pipe, PipeTransform } from '@angular/core';
import { findKeyInLang } from '@app/core';

@Pipe({name: 'translateIn'})
export class TranslateIn implements PipeTransform {

  transform(value: string, lang: string): string {
    return findKeyInLang(value, lang);
  }
  
}