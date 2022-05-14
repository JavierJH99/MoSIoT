import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'language'
})
export class LanguagePipe implements PipeTransform {
  language!:string;

  transform(value: number): string {
    switch(value){
      case 1:
        this.language = "es"
        break;
      case 2:
        this.language = "en"
        break;
      case 3:
        this.language = "fr"
        break;
      case 4:
        this.language = "it"
        break;
      case 5:
        this.language = "pr"
        break;
      case 6:
        this.language = "de"
        break;
      case 7:
        this.language = "ja"
        break;
      case 8:
        this.language = "ko"
        break;
      case 9:
        this.language = "zh"
        break;
      default:
        this.language = "es"
        break;
    }
    return this.language;
  }

}
