import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public onClickColumn(columnIndex: number): void {
    if (!true) {
        console.log('add disk'+ columnIndex);
    } else {
        console.log('error disk'+ columnIndex);
    }
  }

  public onClickRow(rowIndex: number): void {
    if (!true) {
        console.log('add disk'+ rowIndex);
    } else {
        console.log('error disk'+ rowIndex);
    }
  }

}
