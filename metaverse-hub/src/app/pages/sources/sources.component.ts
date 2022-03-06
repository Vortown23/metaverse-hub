import { Component, OnInit } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Card } from 'src/app/models/card';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  public sources: Card[] = [];

  constructor() { }

  ngOnInit(): void {
    var title = "This is for all my resources and if they've been read or not";
    //this is where we would go get hit a server call to get sources
    //would originally be in sources and I will use this to break into cards
    this.setupData();
  }

  setupData() {
    //currently test data
    this.sources.push(new Card(Guid.create().toString(), 'image', [], 'article', 'www.test.com', 'Test', true));
    this.sources.push(new Card(Guid.create().toString(),'image1', [], 'podcast', 'www.test1.com', 'Test1', false));
    this.sources.push(new Card(Guid.create().toString(),'image2', [], 'book', 'www.test2.com', 'Test2', false));
  }
}
