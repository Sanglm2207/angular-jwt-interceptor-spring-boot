import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { News } from './news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private readonly baseUrl = `${environment.apiUrl}news/`;
  
  constructor(private http: HttpClient) { }

  getAllNews(): Observable<any> {
    return this.http.get<any>(this.baseUrl + 'getAllNews');
  }
  
  createNews(news: News): Observable<News[]>  {
    return this.http.post<News[]>(this.baseUrl + 'createNews', news);
  }

  editNews(news: News, id: number): Observable<News[]> {
    return this.http.put<News[]>(this.baseUrl + 'editNews/' + id, news);
  }

}
