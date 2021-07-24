import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyfeatureComponent } from './keyfeature.component';

describe('KeyfeatureComponent', () => {
  let component: KeyfeatureComponent;
  let fixture: ComponentFixture<KeyfeatureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KeyfeatureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyfeatureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
