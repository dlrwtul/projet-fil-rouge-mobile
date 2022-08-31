import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-compteur',
  templateUrl: './compteur.component.html',
  styleUrls: ['./compteur.component.scss'],
})
export class CompteurComponent implements OnInit {
  @Input() quantiteVal : number
  @Output() quantite : EventEmitter<number> = new EventEmitter()
  constructor() { }
  ngOnInit() {}

  increment() {
    this.quantiteVal++;
    this.quantite.emit(this.quantiteVal)
  }

  decrement() {
    if (this.quantiteVal > 1) {
      this.quantiteVal--;
      this.quantite.emit(this.quantiteVal)
    }
  }

  compteurVal(input:HTMLInputElement) {  
    if (isNaN(parseInt(input.value)) && input.value != "") {
      input.value = ""
      return
    }
    if (parseInt(input.value) < 1) {
      input.value = ""
      return
    } else {
      if (!isNaN(parseInt(input.value))) {
        this.quantiteVal = parseInt(input.value)
        this.quantite.emit(this.quantiteVal)
      }
    }
  }
}
