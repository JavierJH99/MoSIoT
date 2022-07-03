import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'isAssigned'
})
export class IsAssignedPipe implements PipeTransform {
  transform(value: any): any {
    if(value == null || value == ""){
      return "Has not been assigned yet";
    }
    else{
      return value;
    }
  }

}
