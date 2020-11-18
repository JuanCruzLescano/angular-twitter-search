import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TwitterService {

  constructor(private http: HttpClient) {
    console.log('Twitter service is working!')
  }

  private url: string = environment.backend

  getTweets(searchTerms: string) {
    const data: any = this.http.get(`${this.url}/twitter/${searchTerms}`).toPromise();
    return data
  }
}
