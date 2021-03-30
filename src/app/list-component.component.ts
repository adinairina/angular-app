import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from './demo.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrls: ['./list-component.component.css']
})
export class ListComponentComponent implements OnInit {

  @Input() list: [];
  
  listFromService: [];

  constructor(private service: DemoService) { }

  ngOnInit(): void {

    this.service.getPosts().subscribe(response => {
      this.listFromService = response;
    })
  }

  userClicked(item){
    alert('Click from the user on: ' + item);
  }

  handleClickFromChild(id) {
      alert("User clicked on post with id: " + id)
  }
}
