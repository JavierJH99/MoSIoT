import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accessModeType'
})
export class AccessModeTypePipe implements PipeTransform {
  accessMode!:string;

  transform(value: number): string {
    switch(value){
      case 1:
        this.accessMode = "auditory"
        break;
      case 2:
        this.accessMode = "colour"
        break;
      case 3:
        this.accessMode = "itemSize"
        break;
      case 4:
        this.accessMode = "olfactory"
        break;
      case 5:
        this.accessMode = "orientation"
        break;
      case 6:
        this.accessMode = "position"
        break;
      case 7:
        this.accessMode = "tactile"
        break;
      case 8:
        this.accessMode = "textOnImage"
        break;
      case 9:
        this.accessMode = "textual"
        break;
      case 10:
        this.accessMode = "visual"
        break;
      default:
        this.accessMode = "auditory"
        break;
    }

    return this.accessMode;
  }
}
