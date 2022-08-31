import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IGumQueueInfo } from '../common/interfaces';


@Injectable()
export class ExternalServices {

  constructor(private http: HttpClient) { }

  public getGUMIntegrationErrors(): Observable<IGumQueueInfo[]> {
    //var apiUrl = 'https://localhost:5001';
    return this.http.get<IGumQueueInfo[]>(`api/OnBoardingHealthCheck/getGUMIntegrationErrors`);
  }

}
