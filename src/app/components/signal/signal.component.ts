import { Component, effect, signal, computed, OnInit } from "@angular/core";

@Component({
  selector: 'app-signal',
  standalone: true,
  template: `
    <p>{{ fullName() }}</p>
    <p>{{signalCounter}}</p>
    <button (click)="changeName()">Change Name</button>
  `,
})
export class SignalComponent implements OnInit {
  public firstName = signal('Wellison');
  public lastName = signal('');

  public signalCounter = 0;

  public fullName = computed(() => {
    this.signalCounter++;
    console.log('signal name change');
    return `${this.firstName()}: ${this.lastName()}`;
  });

  public ngOnInit(): void {
    this.checklastNameChanges();
  }


  public changeName(): void {
    this.firstName.set('Wellison');
    this.lastName.set('O Mago do Odin');
  }

  public checklastNameChanges(): void {
    effect(() => {
       console.log('LastName Changes:', this.lastName());
    });
 }


}
