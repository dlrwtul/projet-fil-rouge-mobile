import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'ild-plus-moins',
  templateUrl: './plus-moins.component.html',
  styleUrls: ['./plus-moins.component.css']
})
export class PlusMoinsComponent implements OnInit {
  
  @Input() quantiteVal : number = 0;

  constructor() { }

  ngOnInit(): void {

  }


}
