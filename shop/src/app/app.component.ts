
import { PostService } from './services/post.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  posts:any;
  title = 'shop';

  constructor(private service:PostService) {}

  
  ngOnInit() {
      this.service.getPosts()
        .subscribe(response => {
          this.posts = response;
        });
        
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class. 
  }
}
