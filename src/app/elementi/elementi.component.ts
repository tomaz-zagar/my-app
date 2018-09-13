import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';


@Component({
  selector: 'app-elementi',
  templateUrl: './elementi.component.html',
  styleUrls: ['./elementi.component.css']
})
export class ElementiComponent implements OnInit {

  images=[]

  constructor(private service:TestService) { }

  ngOnInit() {
    this.service.subject.subscribe(data => {this.images=data;console.log('sprememba',data)})
  }

  ngAfterViewInit() {
    console.log('elementi after view init')
    this.service.changeMessage('config.json');
  }


}
