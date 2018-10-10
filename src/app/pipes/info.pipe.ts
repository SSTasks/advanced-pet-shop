import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'info'
})
export class InfoPipe implements PipeTransform {

    transform(value: any, args?: any): any {
        let name = value.name ? value.name : 'Just hamster',
            price = `$${value.price}`;

        return `${name} - ${price}`;
    }

}
