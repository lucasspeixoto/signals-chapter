import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [CommonModule],
  template: `
    <h1>Hello</h1>
  `,
})
export class ChildComponent implements OnChanges {
  @Input()
  public changed = false;

  private parent = inject(ChangeDetectionProblemsComponent);

  public ngOnChanges() {
    if (this.changed) {
      this.parent.text = 'from child';
    }
  }
}

@Component({
  selector: 'app-change-detection-problems',
  standalone: true,
  imports: [ChildComponent],
  template: `
  {{text}}
    <app-child [changed]='true'/>
  `,
})
export class ChangeDetectionProblemsComponent {
  text = 'from parent';
}
