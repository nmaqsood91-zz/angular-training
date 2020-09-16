import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reversename',
  templateUrl: './reversename.component.html',
  styleUrls: ['./reversename.component.css']
})
export class ReversenameComponent implements OnInit {
  reversedName: string;
  name: string;
  show: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }

  reverseName(event) {
    this.reversedName = event.target.value.split( '' ).reverse( ).join( '' );
  }

  showReverseName() {
    this.show = true;
  }

}
