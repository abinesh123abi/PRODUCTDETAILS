import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [CommonModule],
  templateUrl: './card.html',
  styleUrl: './card.css',
})
export class Card {
      user=[{ name:"tv", cost:"20000"},{ name:"mobile", cost:"15000"}


      ]
}
