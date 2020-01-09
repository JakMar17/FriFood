import {HttpClient} from "@angular/common/http";
import {User} from "./src/app/classes/User";

export class FrifoodPodatkiService {

  constructor(private http: HttpClient) {}

  private apiUrl = "http://localhost:3000/api"

  public getUser(userId: number): Promise<User> {
    const mail: string = "janez.novak@fri.uni-lj.si";
    const url: string = '${this.apiUrl}/uporabniki/${mail}';

    return this.http
      .get(url)
      .toPromise()
      .then(responde => responde as User)
      .catch(this.resolveError);
  }

  private resolveError(error: any): Promise<any> {
    console.log("Prišlo je do napake", error);
    return Promise.reject((error.message || error));
  }

}
