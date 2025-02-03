import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {

  private baseUrl = 'https://www.themealdb.com/api/json/v1/1/';

  constructor(private http: HttpClient) {}


  getAllMeals(): Observable<any> {
    return this.http.get(`${this.baseUrl}search.php?s=`);
  }


  getCategories(): Observable<any> {
    return this.http.get(`${this.baseUrl}categories.php`);
  }

  
  getMealsByCategory(category: string): Observable<any> {
    return this.http.get(`${this.baseUrl}filter.php?c=${category}`);
  }

  getCatLinks():Observable<any>{
    return this.http.get(`${this.baseUrl}list.php?c=list`)
  }
  
}
