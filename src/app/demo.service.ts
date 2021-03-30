import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

interface Post {
  id: number;
  title: string;
  body: string;
}
@Injectable({
  providedIn: 'root'
})
export class DemoService {
  constructor(private http:HttpClient) { }

  getPosts():Observable<any> {
      return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }
  
  getPost(id:number):Observable<any> {
      return this.http.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
  }
}