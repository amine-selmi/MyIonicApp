import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Produit } from '../models/produit';
import { stringify } from '@angular/compiler/src/util';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  base_path = 'http://192.168.1.6:3000/produits';

  constructor(private http : HttpClient) { }

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  // Handle API errors
  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

  // Create produit
  createItem(item: Produit) : Observable<Produit> {
    return this.http.post<Produit>(this.base_path,JSON.stringify(item),this.httpOptions)
    
  }

  // Get list produit
  getListProduit(): Observable<Produit[]> {
    return this.http.get<Produit[]>(this.base_path)
  }

    // Get single student data by ID
  getItem(id): Observable<Produit> {
      return this.http.get<Produit>(this.base_path + '/' + id)
  }

  // Delete item by id
  deleteItem(id) {
    return this.http.delete<Produit>(this.base_path + '/' + id, this.httpOptions)
      
  }
  // Update produit
  editItem(id, item: Produit ): Observable<Produit> {
    return this.http.put<Produit>(this.base_path + '/' + id, item,this.httpOptions)
  }
  

}
