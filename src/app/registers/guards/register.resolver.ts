import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

import { Register } from '../model/register';
import { RegistersService } from '../services/registers.service';

@Injectable({
  providedIn: 'root'
})
export class RegisterResolver implements Resolve<Register> {

  constructor(private service: RegistersService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Register> {
    if (route.params && route.params['id']) {
      return this.service.loadById(route.params['id']);
    }
    return of({ _id: '', name: '', age: '', city: '', state: '', heartRate: '' });
  }
}
