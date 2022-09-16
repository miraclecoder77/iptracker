import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  get() {
    return this.http.get("https://geo.ipify.org/api/v2/country?apiKey=at_ltrzGD5pv0r4Qd77RVGNH2mODwR0Y&ipAddress=8.8.8.8")
  }
}
