// blog-post.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Blog } from '../interfaces/blog'

@Injectable({
  providedIn: 'root'
})
export class BloggerService {
  private bloggerApiUrl = 'https://www.googleapis.com/blogger/v3/blogs/2002532628613728221/posts?key=AIzaSyD4t1gt3isuMTb6m5IGdT90JR6vORpp8Eo'; // Replace this with your Blogger API URL

  constructor(private http: HttpClient) {}

  getPosts(): Observable<BlogResponse> {
    return this.http.get<BlogResponse>(this.bloggerApiUrl);
  }

  getOnePost(id: string): Observable<Blog> {
    return this.http.get<Blog>(`https://www.googleapis.com/blogger/v3/blogs/2002532628613728221/posts/${id}?key=AIzaSyD4t1gt3isuMTb6m5IGdT90JR6vORpp8Eo`);
  }

}

interface BlogResponse {
  items: Array<Blog>
}