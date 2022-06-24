import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'disabilityType'
})
export class DisabilityTypePipe implements PipeTransform {
  disabilityType!:string;

  transform(value: number): string {
    switch(value){
      case 1:
        this.disabilityType = "auditory"
        break;
      case 2:
        this.disabilityType = "cognitive"
        break;
      case 3:
        this.disabilityType = "physical"
        break;
      case 4:
        this.disabilityType = "speech"
        break;
      case 5:
        this.disabilityType = "visual"
        break;
      default:
        this.disabilityType = "auditory"
        break;
    }
    return this.disabilityType;
  }

}
