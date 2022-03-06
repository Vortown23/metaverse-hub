import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sources',
  templateUrl: './sources.component.html',
  styleUrls: ['./sources.component.css']
})
export class SourcesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var title = "This is for all my resources and if they've been read or not";
  }

}
