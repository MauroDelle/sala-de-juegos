import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosBalloonComponent } from './resultados-balloon.component';

describe('ResultadosBalloonComponent', () => {
  let component: ResultadosBalloonComponent;
  let fixture: ComponentFixture<ResultadosBalloonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResultadosBalloonComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResultadosBalloonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
