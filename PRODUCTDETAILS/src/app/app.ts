import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tableform } from './components/tableform/tableform';
import { Home } from './components/home/home';

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [RouterOutlet,Home ,Tableform],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('PRODUCTDETAILS');
}
