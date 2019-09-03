import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService
 {
  get httpOptions(){
    return {headers: new HttpHeaders({ 'Authorization': this.cookieService.get('token') })}
};
  constructor(private http:HttpClient,private cookieService:CookieService) { }

  get(path){
    return Observable.create(o=>{
      this.http.get(`${environment.SERVER_URL}${environment.API_PATH}${path}`,this.httpOptions)
      .subscribe(d=>{
        o.next(d);
      },e=>{
        o.next(e)
      })
    })
  }

  post(path,data){
    return Observable.create(o=>{
      this.http.post(`${environment.SERVER_URL}${environment.API_PATH}${path}`,data,this.httpOptions)
      .subscribe(d=>{
        o.next(d);
      },e=>{
        o.next(e)
      })
    })
  }
}
