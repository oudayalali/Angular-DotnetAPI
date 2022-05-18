import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class SharedService {
readonly APIURL="https://googlesheetapi-app.herokuapp.com/api"


  constructor(private http:HttpClient) { }

getUserList():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/values');
}

addUser(val:any){
  return this.http.post(this.APIURL+'/values',val)
}
updateUser(val:any){
  return this.http.put(this.APIURL+'/values',val)
}
deleteUser(val:any){
  return this.http.delete(this.APIURL+'/values'+val)
}

getSalaries():Observable<any[]>{
  return this.http.get<any>(this.APIURL+'/salary');
}

}
