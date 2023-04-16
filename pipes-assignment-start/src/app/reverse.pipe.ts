import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "reverse",
})
export class ReversePipe implements PipeTransform {
  transform(value: any) {
    let result = "";
    for (let i = value.length - 1; i >= 0; i--) {
      result += value[i];
    }
    return result;
    // return value.split("").reverse().join("");
  }
}
