import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root',
})
export class WebsiteService {
  public menubarContactUsUrl =
    'https://s6vufbx2rj.execute-api.us-west-2.amazonaws.com/Production/api/website/sayamenubarcontactus';
  constructor(private http: HttpClient) {}
  UpdateMenuBarContactUsData(menuBarContactUsData: any): Observable<any> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    const body = JSON.stringify(menuBarContactUsData);
    return this.http.post(this.menubarContactUsUrl, body, {
      headers: headers,
      responseType: 'text',
    });
  }
}
