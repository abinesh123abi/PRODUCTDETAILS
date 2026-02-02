import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tableform } from './components/tableform/tableform';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Tableform ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PRODUCTDETAILS');
}
