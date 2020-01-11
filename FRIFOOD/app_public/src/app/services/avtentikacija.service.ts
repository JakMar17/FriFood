import { Inject, Injectable } from '@angular/core';
import { SHRAMBA_BRSKALNIKA } from '../classes/token-storage';

@Injectable({
  providedIn: 'root'
})

export class AvtentikacijaService {

  constructor(@Inject(SHRAMBA_BRSKALNIKA) private shramba: Storage) { }

  public isLoggedIn(): boolean{
    if(this.vrniZeton()){
      return true;
    }else{
      return false;
    }
  }

  public logOut(): void{
    this.shramba.clear();
  }

  public vrniZeton(): string {
    return this.shramba.getItem('zeton');
  }

  public shraniZeton(zeton: string): void {
    this.shramba.setItem('zeton', zeton);
  }
}
