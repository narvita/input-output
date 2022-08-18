import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public value: number = 0;
  constructor() {
  }
  ngOnInit() {

  }


  public incrementnumber(e: any) {
    this.value += 1;
  }
  public decrementnumber(e:any) {
    this.value -= 1;

  }
}
