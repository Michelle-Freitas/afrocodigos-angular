import { Component } from '@angular/core';

@Component({
  selector: 'app-user',
  // standalone: true,
  // imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
    // Binding
    actionName = 'Testar Botão';
    name = 'Michelle';
    sobrenome = 'Freitas';

    testar() {
      console.log('Testando click no botão')
    }

}
