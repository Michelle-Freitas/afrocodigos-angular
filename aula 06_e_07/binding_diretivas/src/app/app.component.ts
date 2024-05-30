import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // standalone: true,
  // imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Aula 06 (27/05) e Aula 07 (29/05)';

  // Directives
  isSpecial = true;
  showText = true;
  receptStyle = true;

  products = ['Notebook', 'Teclado', 'Mouse'];
  listItems = [
    {id: 1, name: 'item 1'},
    {id: 2, name: 'item 2'},
    {id: 3, name: 'item 3'}
  ];
  statusProduct = 'esgotado';
  case = 'caso 2'
}
