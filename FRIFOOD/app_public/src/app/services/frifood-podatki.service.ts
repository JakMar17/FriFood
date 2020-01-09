import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../classes/User';
import {Restaurant} from "../classes/Restaurant";
import {Comment} from "../classes/Comment";

@Injectable({
  providedIn: 'root'
})
export class FrifoodPodatkiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';

  public dodajKomentar(podatkiObrazca: any): Promise<Comment> {
    const url: string = `${this.apiUrl}/comments`;
    return this.http
      .post(url, podatkiObrazca)
      .toPromise()
      .then(odgovor => odgovor as Comment)
      .catch(this.obdelajNapako);
  }

  getUporabniki(): Promise<User[]> {
    const url: string = `${this.apiUrl}/users`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as User[])
      .catch(this.obdelajNapako);
  }

  getRestaurantById(restaurantId: string): Promise<Restaurant> {
    const url: string = `${this.apiUrl}/restaurants/${restaurantId}`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Restaurant[])
      .catch(this.obdelajNapako);
  }

  getCommentsByRestaurantId(restaurantId: string): Promise<Comment[]> {
    const url: string = `${this.apiUrl}/commentsByRestaurantId/${restaurantId}`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Comment[])
      .catch(this.obdelajNapako);
  }


  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }


}
