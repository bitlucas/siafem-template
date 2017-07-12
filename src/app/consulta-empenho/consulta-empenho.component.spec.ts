import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaEmpenhoComponent } from './consulta-empenho.component';

describe('ConsultaEmpenhoComponent', () => {
  let component: ConsultaEmpenhoComponent;
  let fixture: ComponentFixture<ConsultaEmpenhoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsultaEmpenhoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaEmpenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
