import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Cov19descComponent } from './cov19desc.component';

describe('Cov19descComponent', () => {
  let component: Cov19descComponent;
  let fixture: ComponentFixture<Cov19descComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Cov19descComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Cov19descComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
