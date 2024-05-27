import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'primeira_aula_angular';
	link = 'https://www.google.com/';

  num1 = 2;
  num2 = 5;

  produto = this.num1 * this.num2

	logar(){
		console.log('Afrocódigos');
    console.log(this.produto);
	}
}
