import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  private dataSource = new BehaviorSubject(null);
  public subject=this.dataSource.asObservable();


  constructor(private http: HttpClient) { }

  changeMessage(fname: string) {
    this.http.get(`assets/${fname}`).subscribe((data)=>{
      console.log('data',data)
      this.dataSource.next(data);
    });
  }
}
