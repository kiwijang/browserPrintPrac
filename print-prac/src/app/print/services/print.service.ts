import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintService {

  constructor(private http: HttpClient) { }

  getPosts() {
    return this.http.get<Post[]>('https://jsonplaceholder.typicode.com/posts');
  }
}


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
