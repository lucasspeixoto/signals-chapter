import { Component } from '@angular/core';

@Component({
  selector: 'app-zonejs-example',
  styleUrls: ['./zonejs-example.component.scss'],
  template: `
  <div class="container">
    <h1>Sorteado: {{ chosenNumber !== null ? chosenNumber : '?' }}</h1>
    <button (click)="raffle()">Random Number</button>
  </div>
  `,
  standalone: true,
})
export class ZonejsExampleComponent {
  public chosenNumber: number | null = null;

  public numbers = Array.from({ length: 1000 }, (_value, index) => index);

  public raffle(): void {
    this.chosenNumber = Math.floor(Math.random() * this.numbers.length);
  }
}
