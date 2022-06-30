import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'price',
})
export class PricePipe implements PipeTransform {
  transform(price: string, ...args: string[]): string {
    return price + ' ' + args.join(' ');
  }
}
