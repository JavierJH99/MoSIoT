import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'severity'
})
export class SeverityPipe implements PipeTransform {
  severity!:string;

  transform(value: number): string {
    switch(value){
      case 0:
        this.severity = "Warning"
        break;
      case 1:
        this.severity = "Error"
        break;
      case 2:
        this.severity = "Info"
        break;
    }
    return this.severity;
  }

}
