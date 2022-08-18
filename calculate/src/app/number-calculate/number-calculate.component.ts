import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-number-calculate',
  templateUrl: './number-calculate.component.html',
  styleUrls: ['./number-calculate.component.scss']
})
export class NumberCalculateComponent implements OnInit {
  @Input() calculatedNumber: number | undefined;
  @Output() incrementNumber = new EventEmitter<number>();
  @Output() decrementNumber = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  public increment(): void {
    this.incrementNumber.emit();
  }
  public decrement() {
    this.decrementNumber.emit();
  }

}
