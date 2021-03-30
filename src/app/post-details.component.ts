import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Routes } from '@angular/router';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-post-details',
  templateUrl: './post-details.component.html',
  styleUrls: ['./post-details.component.css']
})
export class PostDetailsComponent implements OnInit {

  id: number;
  post: any;

  constructor(private route: ActivatedRoute, private service:DemoService) { }

  ngOnInit(): void {
    this.route.params.subscribe( param => {
      this.id = +param['id'];
      this.service.getPost(this.id).subscribe( response =>{
        this.post = response;
      })
    })
  }
}
