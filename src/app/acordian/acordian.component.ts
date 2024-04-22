import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acordian',
  templateUrl: './acordian.component.html',
  styleUrls: ['./acordian.component.css'], // Include the correct style URL
 
})
export class AcordianComponent implements OnInit {
  isExpanded = false; // Controls expansion state of the panel
  marginRightValue = 10; // Default value for margin adjustment
  isFirstPanelExpanded: boolean = false;
  isSecondPanelExpanded: boolean = false;
  tiles = [
    { centerWord: 'Tile 1 Heading ', inputValue: 'Example Input', leftWord: 'Left 1', rightWord: 'Right 1' },
    { centerWord: 'Tile 2 Heading', inputValue: 'Input Value', leftWord: 'Left 2', rightWord: 'Right 2', extraWord: 'Middle 2' },
    { centerWord: 'Tile 3 Heading', inputValue: 'Another Input', leftWord: 'Left 3', rightWord: 'Right 3' },
    { inputValue: 'Input 3', leftWord: 'Left 4', extraWord: 'Middle 4', rightWord: 'Right 4' },
    { inputValue: 'Input 4', leftWord: 'Left 5', extraWord: 'Middle 5', rightWord: 'Right 5' },
    { inputValue: 'Input 5', leftWord: 'Left 6', rightWord: 'Right 6' },
    { centerWord: 'Profit & Loss' },
  ];

  

  toggleFirstPanel() {
    this.isFirstPanelExpanded = !this.isFirstPanelExpanded;
  }
  
  toggleSecondPanel() {
    this.isSecondPanelExpanded = !this.isSecondPanelExpanded;
  }
  constructor() { }

  ngOnInit(): void { }
}
