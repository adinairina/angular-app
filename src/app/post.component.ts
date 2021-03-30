import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() postFromParent:[];
  @Output() userClickOnPost = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickOnPost(item: any){
    this.userClickOnPost.emit(item);
  }
}
