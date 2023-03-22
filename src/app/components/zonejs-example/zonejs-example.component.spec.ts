import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZonejsExampleComponent } from './zonejs-example.component';

describe('ZonejsExampleComponent', () => {
  let component: ZonejsExampleComponent;
  let fixture: ComponentFixture<ZonejsExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ZonejsExampleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZonejsExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
