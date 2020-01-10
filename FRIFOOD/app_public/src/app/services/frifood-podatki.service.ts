import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../classes/User';
import {Restaurant} from "../classes/Restaurant";
import {Comment} from "../classes/Comment";
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FrifoodPodatkiService {

  constructor(private http: HttpClient) { }

  private apiUrl = 'http://localhost:3000/api';


  public updateComment(podatkiObrazca: any): Promise<Comment> {
    const url: string = `${environment.apiUrl}/comments/update`;
    return this.http
      .post(url, podatkiObrazca)
      .toPromise()
      .then(odgovor => odgovor as Comment)
      .catch(this.obdelajNapako);
  }



  public deleteComment(podatkiObrazca: any): Promise<Comment> {
    const url: string = `${environment.apiUrl}/comments/delete`;
    return this.http
      .post(url, podatkiObrazca)
      .toPromise()
      .then(odgovor => odgovor as Comment)
      .catch(this.obdelajNapako);
  }

  public dodajKomentar(podatkiObrazca: any): Promise<Comment> {
    const url: string = `${environment.apiUrl}/comments`;
    return this.http
      .post(url, podatkiObrazca)
      .toPromise()
      .then(odgovor => odgovor as Comment)
      .catch(this.obdelajNapako);
  }

  getUporabniki(): Promise<User[]> {
    const url: string = `${environment.apiUrl}/users`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as User[])
      .catch(this.obdelajNapako);
  }

  getRestaurantById(restaurantId: string): Promise<Restaurant> {
    const url: string = `${environment.apiUrl}/restaurants/${restaurantId}`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as Restaurant[])
      .catch(this.obdelajNapako);
  }

  getCommentsByRestaurantId(restaurantIdANDPage: any): Promise<unknown> {
    const url: string = `${environment.apiUrl}/commentsByRestaurantIdPerPage/${restaurantIdANDPage.restaurantId}/${restaurantIdANDPage.pageNumber}`;
    console.log(url);
    return this.http
      .get(url, restaurantIdANDPage)
      .toPromise()
      .then(odgovor => odgovor as unknown)
      .catch(this.obdelajNapako);
  }

  addNewRestaurant(restaurantForm: any): Promise<Restaurant> {
    const url: string = `${environment.apiUrl}/restaurantADD`;
    console.log(url);
    return this.http
      .post(url, restaurantForm)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.obdelajNapako);
  }


  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }


}
