import { Injectable } from '@angular/core';
import {HttpClient, HttpEventType, HttpHeaders, HttpRequest, HttpResponse} from '@angular/common/http';

import { User } from '../classes/User';
import {Restaurant} from "../classes/Restaurant";
import {Comment} from "../classes/Comment";
import { environment } from '../../environments/environment';
import {Analytics} from "../classes/Analytics";
import {Observable, Subject} from "rxjs";

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

  public getCommentsByUser(userID: string): Promise<Comment[]> {
    const url: string = `${environment.apiUrl}/commentAuthor/${userID}`;

    return this.http
      .get(url)
      .toPromise()
      .then(data => data as Comment[])
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

  public getComments(): Promise<Comment[]> {
    const url: string = `${environment.apiUrl}/comments`;

    return this.http
      .get(url)
      .toPromise()
      .then(responde => responde as Comment[])
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

  dodajuporabnika(user: User): Promise<User> {
    const url: string = `${environment.apiUrl}/uporabniki`;
    console.log(url);
    return this.http
      .post(url, user)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako);
  }

  getUserById(userID: string): Promise<User> {
    const url: string = `${environment.apiUrl}/user/${userID}`;
    console.log(url);
    return  this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as User)
      .catch(this.obdelajNapako);
  }

  getuserByEmail(email: string): Promise<User> {
    const url: string = `${environment.apiUrl}/uporabniki/${email}`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(odgovor => odgovor as User)
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

  addNewRestaurant(restaurantForm: Restaurant): Promise<Restaurant> {
    const url: string = `${environment.apiUrl}/restaurantADD`;
    console.log(url);
    return this.http
      .post(url, restaurantForm)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.obdelajNapako);
  }

  getRestaurnats(): Promise<Restaurant[]> {
    const url: string = `${environment.apiUrl}/restaurants`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Restaurant[])
      .catch(this.obdelajNapako);
  }

  deleteRestaurant(id: string): Promise <Restaurant> {
    const url: string = `${environment.apiUrl}/deleteRestaurant/${id}`;
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Restaurant)
      .catch(this.obdelajNapako);
  }

  updateAnalyticsByName(analytics: any): Promise<Analytics> {
    const url: string = `${environment.apiUrl}/analytics`;
    console.log(url);
    return this.http
      .post(url, analytics)
      .toPromise()
      .then(response => response as Analytics)
      .catch(this.obdelajNapako);
  }

  returnAnalytics(): Promise<Analytics[]> {
    const url: string = `${environment.apiUrl}/analytics`;
    console.log(url);
    return this.http
      .get(url)
      .toPromise()
      .then(response => response as Analytics[])
      .catch(this.obdelajNapako);
  }


  private obdelajNapako(napaka: any): Promise<any> {
    console.error('Prišlo je do napake', napaka);
    return Promise.reject(napaka.message || napaka);
  }

  public upload(files: any){
      const url: string = `${environment.apiUrl}/upload`;
      this.http
        .post(url, files)
        .subscribe((response) => {
        console.log('response received is ', response);
      })

    /*

    // this will be the our resulting map
    const status: { [key: string]: { progress: Observable<number> } } = {};

    files.forEach(file => {
      // create a new multipart-form for every file
      const formData: FormData = new FormData();
      console.log(file.name);
      formData.append('file', file, file.name);

      // create a http-post request and pass the form
      // tell it to report the upload progress
      const req = new HttpRequest('POST', environment.apiUrl+"/upload", formData, {
        reportProgress: true
      });

      // create a new progress-subject for every file
      const progress = new Subject<number>();

      // send the http-request and subscribe for progress-updates
      this.http.request(req).subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {

          // calculate the progress percentage
          const percentDone = Math.round(100 * event.loaded / event.total);
          console.log(percentDone)
          // pass the percentage into the progress-stream
          progress.next(percentDone);
        } else if (event instanceof HttpResponse) {

          // Close the progress-stream if we get an answer form the API
          // The upload is complete
          progress.complete();
        }
      });

      // Save every progress-observable in a map of all observables
      status[file.name] = {
        progress: progress.asObservable()
      };
    });

    // return the map of progress.observables
    return status;
    */
  }


}
