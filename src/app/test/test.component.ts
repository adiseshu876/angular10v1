import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `
    <p>
      welcome to interpolation
    </p>
  `,
//   styleUrls: ['p{
//     text-align:center;
//     font-size: 30px;
//     color:blue']
 })
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
