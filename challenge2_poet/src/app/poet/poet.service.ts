import { Injectable } from '@angular/core'; 
import { HttpClient, HttpErrorResponse } from '@angular/common/http'; 
import { Observable, throwError } from 'rxjs'; 
import { catchError } from 'rxjs/operators'; 

@Injectable({ 
  providedIn: 'root'
})
export class PoetService { 
  private apiUrl = 'https://poetrydb.org'; 

  constructor(private http: HttpClient) {}

  // Fetch poems based on author and title 
  getPoems(author: string, title: string): Observable<any> { 
    const url = `${this.apiUrl}/title,author/${title};${author}`; 
    return this.http.get(url).pipe(catchError(this.handleError)); 
  }

  // Error handling 
  private handleError(error: HttpErrorResponse) { 
    console.error('API Error:', error.message); 
    return throwError('An error occurred while fetching data. Please try again later.'); 
  }
}