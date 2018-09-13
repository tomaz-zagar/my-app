import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-materiali',
  templateUrl: './materiali.component.html',
  styleUrls: ['./materiali.component.css']
})
export class MaterialiComponent implements OnInit {

  images = []

  constructor(private service:TestService) { }

  ngOnInit() {
    this.service.subject.subscribe(data => {this.images=data;console.log('sprememba',data)})
  }

  ngAfterViewInit() {
    console.log('materiali after view init')
    this.service.changeMessage('config2.json');
  }
}
