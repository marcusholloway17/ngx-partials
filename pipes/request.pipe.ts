import { Pipe, PipeTransform } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';

@Pipe({
  name: 'request',
})
export class RequestPipe implements PipeTransform {
  constructor(private http: HttpClient) {}

  transform(
    value: string | number,
    url: string,
    params?: any,
    columns?: string[]
  ): Observable<any> {
    const apiUrl = `${url}${value}`;

    return this.http.get(apiUrl, { params: params }).pipe(
      catchError((err) => {
        // handle error logic


        return throwError(() => err);
      }),
      map((data: any) => {
        if (columns) {
          const values = columns.map((column) => data[column]).join(' ');
          return values;
        } else {
          return data;
        }
      })
    );
  }
}
