import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  private readonly baseUrl = `${environment.apiUrl}order/`;

  constructor(private http: HttpClient) { }

  getAllOrders(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'getAllOrders');
  }

  getOrderByCustomer(): Observable<any>  {
    return this.http.get<any>(this.baseUrl + 'web/getAll/')
  }
}
