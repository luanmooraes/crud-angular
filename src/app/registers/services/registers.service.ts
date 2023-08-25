import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Register } from '../model/register';
import { first, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegistersService {

  private readonly API = 'api/persons'

  constructor(private HttpClient: HttpClient) { }

  list() {
    return this.HttpClient.get<Register[]>(this.API)
    .pipe(
      first(),
      tap(persons => console.log(persons)));
  }

  loadById(id: string) {
    return this.HttpClient.get<Register>(`${this.API}/${id}`);
  }

  save(record: Partial<Register>) {
    if (record._id) {
      return this.update(record);
    }
    return this.create(record);
  }

  private create(record: Partial<Register>) {
    return this.HttpClient.post<Register>(this.API, record).pipe(first());
  }

  private update(record: Partial<Register>) {
    return this.HttpClient.put<Register>(`${this.API}/${record._id}`, record).pipe(first());
  }

  remove(id: string) {
    return this.HttpClient.delete<Register>(`${this.API}/${id}`).pipe(first());
  }
}
