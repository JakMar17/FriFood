import { HttpClient, HttpHeaders } from '@angular/common/http';
import {User} from "./src/app/classes/User";
import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})

export class FrifoodPodatkiService {

  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:3000/api"

  //tukaj se doda parameter userId, ko bo seja zrihtana
  public getUser(): Promise<User> {
    let mail: string = "janez.novak@fri.uni-lj.si";
    let url: string = this.apiUrl + '/uporabniki/' + mail;
    // url = this.apiUrl + "/users";

    let nekineki: any =  this.http
      .get(url)
      .toPromise()
      .then(respond => respond as User)
      .catch(this.resolveError);

    console.log(nekineki);
    return nekineki;
  }

  private resolveError(error: any): Promise<any> {
    console.log("Prišlo je do napake", error);
    return Promise.reject((error.message || error));
  }

}
