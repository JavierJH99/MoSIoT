import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'adaptationDetail'
})
export class AdaptationDetailPipe implements PipeTransform {
  adaptationDetail!:string;

  transform(value: number): string {
    switch(value){
      case 1:
        this.adaptationDetail = "enhanced"
        break;
      case 2:
        this.adaptationDetail = "realTime"
        break;
      case 3:
        this.adaptationDetail = "record"
        break;
      case 4:
        this.adaptationDetail = "symbolic"
        break;
      case 5:
        this.adaptationDetail = "synthesized"
        break;
      case 6:
        this.adaptationDetail = "verbatim"
        break;
      default:
        this.adaptationDetail = "enhanced"
        break;
    }
    return this.adaptationDetail;
  }
}
