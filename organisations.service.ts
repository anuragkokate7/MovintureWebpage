import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class OrganisationsService {
  
  constructor(private http:HttpClient) { }
  getData(){
    let url="https://us-central1-tqi-mobile-web.cloudfunctions.net/getOrganisations";
    return this.http.get(url);
  }
}
