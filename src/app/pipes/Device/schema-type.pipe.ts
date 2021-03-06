import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'schemaType'
})
export class SchemaTypePipe implements PipeTransform {
  schemaType!:string;

  transform(value: number): string {
    switch(value){
      case 1:
        this.schemaType = "Autogenerated"
        break;
      case 2:
        this.schemaType = "Enum"
        break;
      case 3:
        this.schemaType = "Integer"
        break;
      case 4:
        this.schemaType = "String"
        break;
      case 5:
        this.schemaType = "Double"
        break;
      case 6:
        this.schemaType = "Boolean"
        break;
      case 7:
        this.schemaType = "Text"
        break;
      case 8:
        this.schemaType = "Long"
        break;
      case 9:
        this.schemaType = "Time"
        break;
      case 10:
        this.schemaType = "Date"
        break;
      case 11:
        this.schemaType = "Object"
        break;
      case 12:
        this.schemaType = "OID"
        break;
      default:
        this.schemaType = "Autogenerated"
        break;
    }

    return this.schemaType;
  }

}
