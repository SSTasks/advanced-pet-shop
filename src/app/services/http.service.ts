import {Injectable} from '@angular/core';

import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, map} from 'rxjs/operators';
import {Pet, Dog, Cat, Hamster} from './pets';

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private url = '/assets/data/pets.json';

    constructor(private http: HttpClient) {}

    // http get any pet
    public getPets(): Observable<Pet[]> {
        return this.http.get<Pet[]>(this.url)
            .pipe(
                map(pets => this.parsing(pets)),
                catchError(this.handleError('getPets', []))
            );
    }

    // JSON's objects to array of pets
    private parsing(data) {
        let pets = [];

        for (let i = 0; i < data[0].length; i++) {
            let name = data[0][i].name,
                price = data[0][i].price,
                color = data[0][i].color;

            pets.push(new Dog(name, price, color));
        }

        for (let i = 0; i < data[1].length; i++) {
            let name = data[1][i].name,
                price = data[1][i].price,
                color = data[1][i].color,
                fluffy = data[1][i].fluffy;

            pets.push(new Cat(name, price, color, fluffy));
        }

        for (let i = 0; i < data[2].length; i++) {
            let price = data[2][i].price,
                color = data[2][i].color,
                fluffy = data[2][i].fluffy;

            pets.push(new Hamster(price, color, fluffy));
        }

        return pets;
    }


    private handleError<T> (operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {
            console.log(`${operation} failed: ${error.message}`); // log to console instead
            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}
