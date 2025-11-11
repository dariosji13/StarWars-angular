import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin, of } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SwapiService {
  private baseUrl = 'https://swapi.dev/api/';

  constructor(private http: HttpClient) {}

  getCharacterByName(name: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}people/?search=${name}`).pipe(
      switchMap(response => {
        const character = response.results[0];
        if (!character) return of(null);

        if (character.vehicles.length > 0) {
          return forkJoin(character.vehicles.map((url: string) => this.http.get(url))).pipe(
            map(vehicles => ({
              ...character,
              vehicles
            }))
          );
        } else {
          return of(character);
        }
      })
    );
  }
}
