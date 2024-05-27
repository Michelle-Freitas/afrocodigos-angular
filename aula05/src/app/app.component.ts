import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Exercício aula 05 (23/05)';
  imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Angular_gradient.png';

  actionName = 'Testar Botão';
  name = 'Michelle';
  sobrenome = 'Freitas';

  testar() {
    console.log('Testando click no botão')
  }
}
