import { Component, Input, OnInit, Output } from '@angular/core';
import { IPost } from '../interfaces';
import { PostService } from '../post.service';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  @Input() pot: IPost;


  constructor(private postService : PostService) { }

  posts: IPost[];

  ngOnInit(): void {
    this.postService.loadPost().subscribe((post) => {
      this.posts = post;

      
    });
  }

}
