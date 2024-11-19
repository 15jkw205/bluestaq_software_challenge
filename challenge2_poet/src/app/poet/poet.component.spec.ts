import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoetComponent } from './poet.component';

describe('PoetComponent', () => {
  let component: PoetComponent;
  let fixture: ComponentFixture<PoetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoetComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
