import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Item } from './item';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseUrl = 'https://ec2-52-14-200-201.us-east-2.compute.amazonaws.com/api/items/';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    })
  };

  getItems(): Observable<any> {
    return this.http.get<Item[]>(this.baseUrl);
  }

  getAvailableItems(): Observable<any> {
    return this.http.get(this.baseUrl + 'available/false');
  }

  getRequestedItems(): Observable<any> {
    return this.http.get(this.baseUrl + 'available/true');
  }

  getItemByBarcode(barcode: string): Observable<any> {
    return this.http.get<Item>(this.baseUrl + barcode);
  }

  getItemsByCategory(category: string): Observable<any> {
    return this.http.get(this.baseUrl + 'category/' + category);
  }

  getItemsByAge(age: string): Observable<any> {
    return this.http.get(this.baseUrl + 'age/' + age);
  }

  getItemsBySize(size: string): Observable<any> {
    return this.http.get(this.baseUrl + 'size/' + size);
  }

  createItem(item: Item): Observable<any> {
    return this.http.post(this.baseUrl, item, this.httpOptions);
  }

  requestItem(item: Item): Observable<any> {
    return this.http.put(this.baseUrl + 'request/' + item.barcode, this.httpOptions);
  }

  unrequestItem(item: Item): Observable<any> {
    return this.http.put(this.baseUrl + 'unrequest/' + item.barcode, this.httpOptions);
  }

  updateUser(item: Item): Observable<any> {
    return this.http.put(this.baseUrl + item.barcode, item, this.httpOptions);
  }

  deleteUser(barcode: string): Observable<any> { // DESTROY
    return this.http.delete(this.baseUrl + barcode, this.httpOptions);
  }
}
