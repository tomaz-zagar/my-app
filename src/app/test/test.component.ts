import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  message:string;
  constructor(private service:TestService) { }

  ngOnInit() {
    this.service.subject.subscribe(message => this.message = message)
    this.service.changeMessage("dfaa 132342");
  }

}
