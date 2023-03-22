import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BehaviorSubject, combineLatest, tap, map, debounceTime } from 'rxjs';

@Component({
  selector: 'app-behavior-subject',
  standalone: true,
  imports: [CommonModule],
  template: `
    <p>Hello from {{ fullName$ | async }}!</p>
    <p>{{ fullNameCounter }}</p>
    <button (click)="changeName()">Change Name</button>
  `,
})
export class BehaviorSubjectComponent {
  public firstName = new BehaviorSubject<string>('Wellison');
  public lastName = new BehaviorSubject<string>('');

  public fullNameCounter = 0;

  public fullName$ = combineLatest([this.firstName, this.lastName]).pipe(
    debounceTime(0),
    tap(() => {
      this.fullNameCounter++;
    }),
    map(([firstName, lastName]) => `${firstName} ${lastName}`)
  );

  public changeName(): void {
    this.firstName.next('Wellison');
    this.lastName.next('O Mago do odin');
  }
}
