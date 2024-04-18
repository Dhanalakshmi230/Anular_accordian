import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordian',
  templateUrl: './acordian.component.html',
  styleUrls: ['./acordian.component.css']
})
export class AcordianComponent implements OnInit {
  inputValue: string = '';
  tiles = [
    { centerWord: 'Tile 1 Heading', inputValue: '', leftWord: 'Left 1', rightWord: 'Right 1' },
    { centerWord: '', inputValue: 'Input 1', leftWord: 'Left 2', rightWord: 'Right 2' },
    { centerWord: '', inputValue: 'Input 2', leftWord: 'Left 3', rightWord: 'Right 3' },
    { inputValue: 'Input 3', leftWord: 'Left 4', extraWord: 'Middle 4', rightWord: 'Right 4' },
    { inputValue: 'Input 4', leftWord: 'Left 5', extraWord: 'Middle 5', rightWord: 'Right 5' },
    { inputValue: 'Input 5', leftWord: 'Left 6', rightWord: 'Right 6' },
    { centerWord: 'Profit & Loss' },


  ];




  // Declare marginRightValue property
  marginRightValue: number = 10; // Set the desired margin-right value

  constructor() { }

  ngOnInit(): void {
  }

}
