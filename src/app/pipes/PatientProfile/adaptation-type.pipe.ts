import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adaptationType'
})
export class AdaptationTypePipe implements PipeTransform {
  adaptationType!:string;

  transform(value: number): string {
    switch(value){
      case 1:
        this.adaptationType = "alternativeText"
        break;
      case 2:
        this.adaptationType = "audioDescription"
        break;
      case 3:
        this.adaptationType = "captions"
        break;
      case 4:
        this.adaptationType = "e_book"
        break;
      case 5:
        this.adaptationType = "haptic"
        break;
      case 6:
        this.adaptationType = "highContrast"
        break;
      case 7:
        this.adaptationType = "longDescription"
        break;
      case 8:
        this.adaptationType = "signLanguage"
        break;
      case 9:
        this.adaptationType = "transcript"
        break;
      default:
        this.adaptationType = "alternativeText"
        break;
    }
    return this.adaptationType;
  }

}
