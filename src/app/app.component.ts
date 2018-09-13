import { Component } from '@angular/core';
import { TestService } from "./test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  message:string;
  constructor(private data: TestService) { }

  ngOnInit() {
    this.data.subject.subscribe(message => this.message = message)
    this.data.changeMessage("dfaa");
  }

}
