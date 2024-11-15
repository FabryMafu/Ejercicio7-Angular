import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JsonService } from './services/json.service';
import { Post } from './post';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  posts: Post[] = [];

  constructor(private postService: JsonService) { }

  ngOnInit() {
    this.postService.getPosts().subscribe(data => {
      this.posts = data;
    });
  }
}
