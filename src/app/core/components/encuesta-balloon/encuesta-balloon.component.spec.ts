import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestaBalloonComponent } from './encuesta-balloon.component';

describe('EncuestaBalloonComponent', () => {
  let component: EncuestaBalloonComponent;
  let fixture: ComponentFixture<EncuestaBalloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncuestaBalloonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncuestaBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
