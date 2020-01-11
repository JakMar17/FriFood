import { Inject, Injectable } from '@angular/core';
import { SHRAMBA_BRSKALNIKA } from '../classes/token-storage';

@Injectable({
  providedIn: 'root'
})

export class AvtentikacijaService {

  constructor(@Inject(SHRAMBA_BRSKALNIKA) private shramba: Storage) { }

  public vrniZeton(): string {
    return this.shramba.getItem('zeton');
  }

  public shraniZeton(zeton: string): void {
    this.shramba.setItem('zeton', zeton);
  }
}
